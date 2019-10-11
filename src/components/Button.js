import React from 'react';

function Button(props) {

  const formatNumber = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  let setPrice = formatNumber(props.price);

  return (
    <a className="btn btn--book" href={props.url}>
      <span className="btn__message">Book now</span>
      <span className="btn__price">£{ setPrice }</span>
    </a>
  );

}

export default Button;