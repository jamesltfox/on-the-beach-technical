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
    <a onClick={changeSort} className="btn btn__filter">sort <span>alphabetically</span></a>
  );

}

export default Alphabetical;