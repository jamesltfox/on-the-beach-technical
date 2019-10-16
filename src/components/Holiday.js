import React, { useState, useEffect, useRef } from 'react';
import Image from './HolidayElements/Image';
import Title from './HolidayElements/Title';
import Info from './HolidayElements/Info';
import Overview from './HolidayElements/Overview';
import Stars from './HolidayElements/Stars';
import Button from './Button';
import { CSSTransition } from 'react-transition-group';

function Holiday(props) {
  const singleHol = useRef(null);
  const [activeOver, setActiveOver] = useState('hidden');
  const [opened, setOpened] = useState(false);

  useEffect(() => {

    switch(activeOver) {

      case 'hidden':
          singleHol.current.classList.remove("expanded");  
      break;

      case 'expanded':
          singleHol.current.classList.add("expanded");          
      break;

    }

  }, [activeOver]);

  const expanding = (cls, v) => {
    setActiveOver(cls);
    setOpened(v);
  }

  // Image Component
  const imageUrl = props.details.resort_image;

  // Title Component
  const name = props.details.name;
  const region = props.details.region;
  const country = props.details.country;

  // Stars Component
  const stars = props.details.rating;

  // Info Component
  const info = {
    "persons": props.details.persons,
    "departDate": props.details.departure_date,
    "departLoc": props.details.departure_location,
    "noDays": props.details.no_of_days
  }

  // Button Component
  const url = props.details.url;
  const price = props.details.price;

  // Overview Component
  const overview = props.details.overview;
  let showOverview;

  if (overview) {
    showOverview = <CSSTransition in={opened} timeout={200} className="holiday-container"><Overview details={overview} /></CSSTransition>
  }


  return (
      <div className="holiday" ref={singleHol}>
        <div className="holiday__inner">
            <Image position={activeOver} onExpand={expanding} url={imageUrl} />
            <div className="holiday__name">
              <Title name={name} region={region} country={country} />
              <Stars rating={stars} />
              <Info details={info} />
              <Button url={url} price={price} />
            </div>
        </div>
        { showOverview }
      </div>
  )

}

export default Holiday;