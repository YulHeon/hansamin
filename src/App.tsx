import React from "react";
import eventImage from "./images/event_20210501.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        src={eventImage}
        className=""
        alt="event"
        style={{ width: "100%", maxWidth: "1000px" }}
      />
    </div>
  );
}

export default App;
