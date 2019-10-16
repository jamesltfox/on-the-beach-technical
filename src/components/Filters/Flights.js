import React, { useRef } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Flights(props) {

  const handleStart = (date) => {
    props.onStartChange(date)
  };

  const handleEnd = (date) => {
    props.onEndChange(date)
  }

  return (
    <section className="selector">
      <p>Select <span>departure date</span></p>
      <div className="selector__dates">
      <label>From:</label>
      <DatePicker
        dateFormat="dd MMMM yyyy"
        selected={props.startDate}
        selectsStart
        startDate={props.startDate}
        onChange={handleStart}
        
      />
      </div>
      <div className="selector__dates">
      <label>To:</label>
      <DatePicker
        dateFormat="dd MMMM yyyy"
        selected={props.endDate}
        selectsEnd
        endDate={props.endDate}
        minDate={props.startDate}
        onChange={handleEnd}
      />
      </div>

    </section>
  );

}

export default Flights;