import React from 'react';

function Price(props) {

  function changeSort() {
    if (props.priceOrder == 'DESC') {
      props.changeFilter('price', 'ASC');
    } else if (props.priceOrder == 'ASC') {
      props.changeFilter('price', 'DESC');
    }
  }

  return (
    <a onClick={changeSort} className="filter__link">sort by <span>price</span></a>
  );

}

export default Price;