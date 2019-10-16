import React, { useRef } from 'react';
import ArrowDown from '../../images/angle-arrow-down.svg';

function Image(props) {
  const textChange = useRef(null)
  const background = {backgroundImage: 'url(' + props.url + ')'};

  function changeExpand() {
   
    if (props.position == 'hidden') {
      props.onExpand('expanded', true);
      textChange.current.innerHTML = 'less';
    } else {
      props.onExpand('hidden', false);
      textChange.current.innerHTML = 'more';
    }
  }

  return (
    <div className="holiday__image" style={background}>
      <a className="holiday__more" onClick={changeExpand}><span>Read <span ref={textChange}>more</span></span> about this hotel <span className="holiday__arrow"><ArrowDown  /></span></a>
    </div>
  );

}

export default Image;