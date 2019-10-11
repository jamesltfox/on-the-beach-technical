import React from 'react';

function Price(props) {

  function changeSort() {
    props.changeFilter('price');
  }

  return (
    <a onClick={changeSort} className="filter__link">sort by <span>price</span></a>
  );

}

export default Price;