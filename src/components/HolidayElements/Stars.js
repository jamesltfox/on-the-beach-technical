import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function Stars(props) {

  return (
    <div className="holiday__stars">
      <Rater total={5} rating={props.rating} interactive={false} />
    </div>
  );

}

export default Stars;