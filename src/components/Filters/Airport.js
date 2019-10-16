import React from 'react';
import Departures from './Departures';

function Airport(props) {

  return(
    <section className="selector">
      <p>Select departure <span>airport</span></p>
      <Departures currentAirport={props.currentAirport} selectedAirport={props.changeAirport} airports={props.airportList} />
    </section>
  );

}

export default Airport;