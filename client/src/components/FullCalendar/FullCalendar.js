import React, { useState, useEffect, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./style.css";
import axios from "axios";
import API from "../../utils/API";
import LoginContext from "../../utils/LoginContext";

function Demo() {
  const { id } =  useContext(LoginContext);
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({});

  // eslint-disable-next-line no-unused-vars
  const [initialEvents, setInitialEvents] = useState([]);
  

  const loadEvents = (_info, successCallback, _failureCallback) => {
    API.getEvents()
      .then((res) => {
    
        successCallback(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleTimeSelect = (selectParams) => {
    let title = prompt("Please indicate which customer is scheduled for a tee-time");
    let calendarApi = selectParams.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title: title,
        start: selectParams.startStr,
        end: selectParams.endStr,
        allDay: selectParams.allDay,
      });

      axios({
        method: "POST",
        url: "/api/events",
        data: {
          title: title,
          start: selectParams.startStr,
          end: selectParams.endStr,
          allDay: selectParams.allDay,
          googleId: id,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

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
    let eventTitle = clickInfo.event.title;
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to remove this reservation`)) {

      axios({
        method: "DELETE",
        url: "/api/events/" + eventTitle,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      clickInfo.event.remove();
    }
  };

  // eslint-disable-next-line no-unused-vars
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
          eventContent={renderEventContent}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
}

export default Demo;
