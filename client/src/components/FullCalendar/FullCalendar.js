import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Navbar from "../Navbar/Navbar";

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="mx-auto container bg-green-500">
                <FullCalendar
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    timeZone= "CDT"
                    initialView="timeGridWeek"
                    slotDuration= "00:15:00"
                    slotMinTime= "06:00:00"
                    slotMaxTime= "22:00:00"
                    selectable= "true"
                    select={[
                        function(info) {
                            alert("selected " + info.startStr)
                            console.log(info)
                        }
                    ]}
                />
        </div> 
      </div>         
    );
  };
}
