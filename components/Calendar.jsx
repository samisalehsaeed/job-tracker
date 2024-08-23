import React, { useState } from "react";
import dayjs from "dayjs";
import "../cssFiles/Calendar.css";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");

  const generateDaysInMonth = () => {
    const daysInMonth = [];
    const startDay = currentMonth.startOf("week");
    const endDay = currentMonth.endOf("month").endOf("week");

    let day = startDay;

    while (day.isBefore(endDay, "day")) {
      daysInMonth.push(day);
      day = day.add(1, "day");
    }

    return daysInMonth;
  };

  const daysInMonth = generateDaysInMonth();

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.trim() === "" || !selectedDate) return;

    const dateKey = selectedDate.format("YYYY-MM-DD");
    setEvents((prevEvents) => ({
      ...prevEvents,
      [dateKey]: [...(prevEvents[dateKey] || []), newEvent],
    }));

    setNewEvent("");
    setSelectedDate(null);
  };

  const renderEventsForDay = (day) => {
    const dateKey = day.format("YYYY-MM-DD");
    return events[dateKey]?.map((event, index) => (
      <div key={index} className="calendar-event">
        {event}
      </div>
    ));
  };

  return (
    <div className="row calendar-section" id="calendar">
      <h2 className="title">Welcome!</h2>
      <p className="title">
        <em>
          Quote of the day: “The only thing that overcomes hard luck is hard
          work.”
        </em>
      </p>
      <br />

      <div className="calendar-nav">
        <button className="pixel-btn" onClick={handlePreviousMonth}>
          &larr;
        </button>
        <span>{currentMonth.format("MMMM YYYY")}</span>
        <button className="pixel-btn" onClick={handleNextMonth}>
          &rarr;
        </button>
      </div>
      <div className="calendar-grid">
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day.format("DD-MM-YYYY")}
            className={`calendar-day ${
              day.isSame(currentMonth, "month")
                ? "current-month"
                : "other-month"
            }`}
            onClick={() => setSelectedDate(day)}
          >
            <span>{day.date()}</span>
            {/* Render events */}
            <div className="events-container">{renderEventsForDay(day)}</div>
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="add-event-form">
          <h3>Add Event on {selectedDate.format("DD MMM YYYY")}</h3>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Enter event"
            />
            <button type="submit">Add Event</button>
          </form>
        </div>
      )}
    </div>
  );
}
