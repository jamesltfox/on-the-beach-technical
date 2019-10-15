import React from 'react';

function Alphabetical(props) {

  function changeSort() {
  
    if (props.alphabetOrder == 'DESC') {
      props.changeFilter('alphabetically', 'ASC');
    } else if (props.alphabetOrder == 'ASC') {
      props.changeFilter('alphabetically', 'DESC');
    }
  }

  return (
    <a onClick={changeSort} className="filter__link">sort <span>alphabetically</span></a>
  );

}

export default Alphabetical;