import React from 'react';

function Stars(props) {

  function changeSort() {
    props.changeFilter('stars');
  }

  return (
    <a onClick={changeSort} className="filter__link">sort by <span>star rating</span></a>
  );

}

export default Stars;