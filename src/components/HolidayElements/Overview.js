import React from 'react';

function Overview(props) {

  return (
    <div className="holiday__overview">
        <h3>Overview</h3>
        <p>{ props.details }</p>
    </div>
  );

}

export default Overview;