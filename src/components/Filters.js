import React from 'react';
import Alphabetical from './Filters/Alphabetical';
import Price from './Filters/Price';
import Stars from './Filters/Stars';

function Filters(props) {

  const setFilter = (e, v) => {
    props.onFilterChange(e, v);
  }

  return (
    <div className="filters">
      <Alphabetical alphabetOrder={props.activeCharOrder} changeFilter={setFilter} />
      <Price priceOrder={props.activePriceOrder} changeFilter={setFilter} />
      <Stars starOrder={props.activeStarOrder} changeFilter={setFilter} />
    </div>
  );

}

export default Filters;