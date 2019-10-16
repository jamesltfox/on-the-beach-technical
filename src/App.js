import React, {useState, useEffect, useRef} from 'react';
import Filters from './components/Filters';
import holidays from './holidays.json';
import HolidaysList from './components/HolidaysList';

function skipFirstEffect(fn, arr) {
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    fn();
  }, arr)
}

function App() {
  // Initial active filter and holidays
  const [activeFilter, setActiveFilter] = useState('price');
  const [allHolidays, setAllHolidays] = useState(holidays);
  const [resetHolidays, setResetHolidays] = useState(holidays);
  
  //Ordering
  const [charOrder, setCharOrder] = useState('DESC');
  const [priceOrder, setPriceOrder] = useState('DESC');
  const [starOrder, setStarOrder] = useState('DESC');
  
  const [airports, setAirport] = useState('');
  const [selectAir, setSelectAir] = useState('all');

  // Alphabetic, Price, Stars effects
  useEffect(() => {

    extractAirports();

    switch(activeFilter) {
      case 'alphabetically':
        alphabeticalChange();
        break;

      case 'price':
        priceChange();
        break;

      case 'stars':
        starsChange();
      break;
    }
  }, [activeFilter, charOrder, priceOrder, starOrder]);

  // Departure airport effects
  skipFirstEffect(() => {
    setAllHolidays(resetHolidays);
    showAirport();
  }, [selectAir]);


  const showAirport = () => {
     let holidays = [].concat(resetHolidays);

     if (selectAir == 'all') {
        setAllHolidays(resetHolidays);
     } else {
       let result = holidays.filter(obj => {
        return obj.departure_location === selectAir;
       });
  
       setAllHolidays(result);
     }

  };

  // Perform alphabetical sort 
  const alphabeticalChange = () => {
    
    let alphaOrder = [].concat(resetHolidays);   
    
      alphaOrder.sort((a, b) => {
        if (charOrder == 'DESC') {
          if(b.name.toLowerCase() < a.name.toLowerCase()) return -1;
          if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
          
        } else if (charOrder == 'ASC') {
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;

        }
        return 0;
      });

    setAllHolidays(alphaOrder);
    
  }

  // Perform Price sort
  const priceChange = () => {
    let price = [].concat(resetHolidays);

      price.sort((a, b) => {
        if (priceOrder == 'ASC') {
          return a.price - b.price;
        } else if (priceOrder == 'DESC') {
          return b.price - a.price;
        }
      }); 

    setAllHolidays(price);
  }

    // Perform Star sort
  const starsChange = () => {
    let stars = [].concat(resetHolidays);

      stars.sort((a, b) => {
        if (starOrder == 'ASC') {
          return a.rating - b.rating;
        } else if (starOrder == 'DESC') {
          return b.rating - a.rating;
        }
      });

    setAllHolidays(stars);
  }

  const extractAirports = () => {
    let airportsNew = [];
    let airports = [].concat(allHolidays);
    
    for (const airport of airports) {
      airportsNew.push(airport.departure_location);
    }

    // ensure all records are unique
    let airportsUnique = airportsNew.filter((v, i, a) => a.indexOf(v) === i);
    setAirport(airportsUnique);
  }

  const changeFilter = (e, v) => {  
    
    switch(e) {
      case 'alphabetically':
        setCharOrder(v);
      break;

      case 'price':
        setPriceOrder(v);
      break;

      case 'stars':
        setStarOrder(v);
      break;
    }
    
    setActiveFilter(e);
  }

  const changeAirport = (val) => {
    setSelectAir(val);

  }

  return (
    <div className="holiday-search">
        <Filters currentAirport={selectAir} airports={airports} onAirportChange={changeAirport} onFilterChange={changeFilter} activeFilter={activeFilter} activeCharOrder={charOrder} activePriceOrder={priceOrder} activeStarOrder={starOrder} />
        <HolidaysList filter={activeFilter} holidays={allHolidays} />
    </div>
  );
}

export default App;