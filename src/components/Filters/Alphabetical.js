import React from 'react';

function Alphabetical(props) {

  function changeSort() {
    props.changeFilter('alphabetical');
  }

  return (
    <a onClick={changeSort} className="filter__link">sort <span>alphabetically</span></a>
  );

}

export default Alphabetical;