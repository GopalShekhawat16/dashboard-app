import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const [events, setEvents] = useState([]);

  
  useEffect(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents).map(e => ({
        ...e,
        start: new Date(e.start),
        end: new Date(e.end),
      })));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleSelectEvent = (event) => {
    const action = window.prompt(
      `Edit title or type 'delete' to remove:\nCurrent: ${event.title}`
    );

    if (!action) return;

    if (action.toLowerCase() === 'delete') {
      setEvents(events.filter(e => e !== event));
    } else {
      const updatedEvents = events.map(e =>
        e === event ? { ...e, title: action } : e
      );
      setEvents(updatedEvents);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <h2 style={{ textAlign: 'center' }}> Calendar</h2>
      <div style={{ height: 'calc(100vh - 100px)', maxWidth: '100%', overflowX: 'auto' }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          style={{ height: '100%' }}
          popup
          views={['month', 'week', 'day']}
        />
      </div>
    </div>
  );
};

export default Calendar;
