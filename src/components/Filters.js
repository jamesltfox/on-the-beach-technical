import React from 'react';
import Alphabetical from './Filters/Alphabetical';
import Price from './Filters/Price';
import Stars from './Filters/Stars';
import Airport from './Filters/Airport';
import Flights from './Filters/Flights';

function Filters(props) {

  const setFilter = (e, v) => {
    props.onFilterChange(e, v);
  }

  const setClasses = () => {
    let classes = "filters ";
    classes += props.activeFilter;
    return classes;
  }

  const setAirport = (v) => {
    props.onAirportChange(v);
  }

  return (
    <aside className={setClasses()}>
      <Alphabetical alphabetOrder={props.activeCharOrder} changeFilter={setFilter} />
      <Price priceOrder={props.activePriceOrder} changeFilter={setFilter} />
      <Stars starOrder={props.activeStarOrder} changeFilter={setFilter} />
      <Flights startDate={props.startDate} endDate={props.endDate} onStartChange={props.onStartChange} onEndChange={props.onEndChange} />
      <Airport currentAirport={props.currentAirport} changeAirport={setAirport} airportList={props.airports} />
    </aside>
  );

}

export default Filters;