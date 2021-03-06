import React, {useState} from 'react';

function Departures(props) {

let airports;

 if (props.airports.length > 0) {
   airports = props.airports.map((v, a) => {
    return <option key={a} value={v}>{v}</option>
  });
 }

 function changeAirport(event) {
  props.selectedAirport(event.target.value)
 }

  return (
    <form>
      <select onChange={changeAirport} value={props.currentAirport}>
        <option value="all">All Airports</option>
          {airports}    
      </select>
    </form>
  );

}

export default Departures;