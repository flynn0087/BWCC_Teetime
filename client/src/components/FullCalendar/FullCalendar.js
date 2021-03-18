import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Navbar from "../Navbar/Navbar";
import "./style.css";
import axios from "axios";

function Demo() {
  const [state, setState] = useState({});

  const handleTimeSelect = (selectParams) => {
    let title = prompt("Please indicate which customer is scheduled for a carwash");
    let calendarApi = selectParams.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title: title,
        start: selectParams.startStr,
        end: selectParams.endStr,
        allDay: selectParams.allDay,
      });
      console.log("We're about to try to post it to DB!!");
      axios({
        method: "POST",
        url: "/api/events",
        data: {
          title: title,
          start: selectParams.startStr,
          end: selectParams.endStr,
          allDay: selectParams.allDay,
        },
      })
        .then((response) => {
          console.log("You've posted!");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("We're through the post axios.");
    }
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  const handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to remove this reservation`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setState(events);
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto container bg-green-500">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          slotDuration="00:15:00"
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          selectable="true"
          select={handleTimeSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </div>
  );
}

export default Demo;
