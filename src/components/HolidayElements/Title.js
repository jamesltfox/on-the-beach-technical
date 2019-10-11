import React from 'react';

function Title(props) {

  return (
    <>
      <h2 className="holiday__placename">{ props.name }</h2>
      <p className="holiday__location">{ props.region }, { props.country }</p>
    </>
  );

}

export default Title;