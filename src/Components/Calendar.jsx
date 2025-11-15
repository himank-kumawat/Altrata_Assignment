import React from "react";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  format
} from "date-fns";

export default function Calendar({ date }) {
  const selectedDate = new Date(date);

  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);

 
  const firstDay = startOfWeek(monthStart, { weekStartsOn: 0 });
  const lastDay = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const rows = [];
  let day = firstDay;

  while (day <= lastDay) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const currentDay = day;

      const isCurrentMonth =
        currentDay.getMonth() === selectedDate.getMonth();

      const highlight = isSameDay(currentDay, selectedDate);

      week.push(
        <div
          key={currentDay}
          style={{
            padding: "6px",
            textAlign: "center",
            border: "1px solid #ddd",
            background: highlight ? "#b5c9ff" : "transparent",
            color: isCurrentMonth ? "black" : "#999"
          }}
        >
          {format(currentDay, "d")}
        </div>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <div
        key={day}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)"
        }}
      >
        {week}
      </div>
    );
  }

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <div
      style={{
        width: "260px",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      
      <div style={{ textAlign: "center", fontSize: "20px", marginBottom: "8px" }}>
        {format(selectedDate, "MMMM yyyy")}
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "4px"
        }}
      >
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {rows}
    </div>
  );
}
