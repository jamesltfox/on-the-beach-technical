import React from 'react';
import Alphabetical from './Filters/Alphabetical';
import Price from './Filters/Price';
import Stars from './Filters/Stars';

function Filters(props) {

  const setFilter = (e, v) => {
    props.onFilterChange(e, v);
  }

  const setClasses = () => {
    let classes = "filters ";
    classes += props.activeFilter;
    return classes;
  }

  return (
    <aside className={setClasses()}>
      <Alphabetical alphabetOrder={props.activeCharOrder} changeFilter={setFilter} />
      <Price priceOrder={props.activePriceOrder} changeFilter={setFilter} />
      <Stars starOrder={props.activeStarOrder} changeFilter={setFilter} />
    </aside>
  );

}

export default Filters;