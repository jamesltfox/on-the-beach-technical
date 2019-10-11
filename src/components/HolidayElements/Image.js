import React from 'react';

function Image(props) {

  const background = {backgroundImage: 'url(' + props.url + ')'};

  return (
    <div className="holiday__image" style={background}>
      <a className="holiday__more"><span>Read more</span> about this hotel</a>
    </div>
  );

}

export default Image;