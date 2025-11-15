import React from "react";
import Calendar from "./Components/Calendar";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Calendar</h1>
      <div>
      <Calendar date="2020-03-23" />
      </div>

      <div>
      <Calendar date="2022-10-03" /> 
      </div>
     
    </div>
  );
}
