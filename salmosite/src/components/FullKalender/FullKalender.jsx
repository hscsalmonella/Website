import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import nlLocale from '@fullcalendar/core/locales/nl';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Popup from '../Popup/Popup';

export default function FullCallendar() {
  const [visibilityPopup, setVisibilityPopup] = useState(false);
  const [title, setTitle] = useState();
  const [start, setStart] = useState();
  const [location, setLocation] = useState();
  const [initialView, setInitialView] = useState(getInitialView());

  useEffect(() => {
    function handleResize() {
      setInitialView(getInitialView());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getInitialView() {
    return window.innerWidth < 1000 ? 'listMonth' : 'dayGridMonth';
  }

  function handleEventClick({ event, jsEvent, view }) {
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    jsEvent.preventDefault();
    setTitle(event.title);
    setStart(event.start.toLocaleString('nl', options));
    setLocation(event.extendedProps.location);
    setVisibilityPopup(true);
  }

  return (
    <>
      <FullCalendar
        locale={nlLocale}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyCScpi-SKL7JHxMn3I4Sma8C22ijHXNGlI"
        eventSources={[
          {
            googleCalendarId: '86f3iqrt1q4vmua5pb0fb4q358@group.calendar.google.com',
            className: 'gcal-event',
          },
          {
            googleCalendarId: 'gmdbd1cf3l8t7149c9q2bvl738@group.calendar.google.com',
            className: 'gcal-event',
          },
        ]}
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'next',
        }}
        initialView={initialView}
        editable={false}
        selectable={false}
        displayEventTime={true}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        }}
        nextDayThreshold="23:59:00"
        eventColor="#971849"
        eventTextColor="#ddd"
        firstDay={1}
      />
      <Popup trigger={visibilityPopup} setTrigger={setVisibilityPopup}>
        <h3>{title}</h3>
        <p>
          <i className="fas fa-clock"></i>
          {start}
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i>
          {location}
        </p>
      </Popup>
    </>
  );
}
