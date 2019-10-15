import React from 'react';

function Stars(props) {

  function changeSort() {
    if (props.starOrder == 'DESC') {
      props.changeFilter('stars', 'ASC');
    } else if (props.starOrder == 'ASC') {
      props.changeFilter('stars', 'DESC');
    }
  }

  return (
    <a onClick={changeSort} className="filter__link">sort by <span>star rating</span></a>
  );

}

export default Stars;