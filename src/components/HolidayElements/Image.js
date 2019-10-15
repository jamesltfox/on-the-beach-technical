import React, { useRef } from 'react';

function Image(props) {
  const textChange = useRef(null)
  const background = {backgroundImage: 'url(' + props.url + ')'};

  function changeExpand() {
   
    if (props.position == 'hidden') {
      props.onExpand('expanded');
      textChange.current.innerHTML = 'less';
    } else {
      props.onExpand('hidden');
      textChange.current.innerHTML = 'more';
    }
  }

  return (
    <div className="holiday__image" style={background}>
      <a className="holiday__more" onClick={changeExpand}><span>Read <span ref={textChange}>more</span></span> about this hotel</a>
    </div>
  );

}

export default Image;