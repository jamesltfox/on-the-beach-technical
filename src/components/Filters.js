import React from 'react';
import Alphabetical from './Filters/Alphabetical';
import Price from './Filters/Price';
import Stars from './Filters/Stars';

function Filters(props) {

  const setFilter = (e) => {
    props.onFilterChange(e);
  }

  return (
    <div className="filters">
      <Alphabetical changeFilter={setFilter} />
      <Price changeFilter={setFilter} />
      <Stars changeFilter={setFilter} />
    </div>
  );

}

export default Filters;