import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./style.css";
import axios from "axios";
import API from "../../utils/API";

function Demo() {
  const [state, setState] = useState({});
  console.log(state, "this is the state");

  const [initialEvents, setInitialEvents] = useState([]);
  console.log(initialEvents.data, "this is events.data");
  console.log(initialEvents, "this is events");

  // useEffect(() => {
  //   loadEvents();
  // }, []);

  const loadEvents = (info, successCallback, failureCallback) => {
    API.getEvents()
      .then((res) => {
        // setInitialEvents(res);
        // console.log(setEvents(res), "setEvents(res)");
        successCallback(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleTimeSelect = (selectParams) => {
    let title = prompt("Please indicate which customer is scheduled for a tee time");
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
    console.log(clickInfo, "this is clickInfo");
    let eventTitle = clickInfo.event.title;
    console.log(eventTitle, "this is eventTitle declaration");
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to remove this reservation`)) {
      console.log(clickInfo.event.remove(), "this is clickInfo.event.remove");
      axios({
        method: "DELETE",
        url: "/api/events/" + eventTitle,
      })
        .then((response) => {
          console.log("You've posted!");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("We're through the post axios.");
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setState(events);
  };

  return (
    <div className="mx-auto container">
      <div className="bg-white">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          events={loadEvents}
          slotDuration="00:10:00"
          slotMinTime="06:00:00"
          slotMaxTime="18:00:00"
          selectable="true"
          select={handleTimeSelect}
          // initalEvents={initialEvents}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          // eventsSet={handleEvents}
        />
      </div>
    </div>
  );
}

export default Demo;
