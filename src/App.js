import React, {useState, useEffect} from 'react';
import Filters from './components/Filters';
import holidays from './holidays.json';
import HolidaysList from './components/HolidaysList';

function App() {
  const [activeFilter, setActiveFilter] = useState('alphabetically');
  const [allHolidays, setAllHolidays] = useState(holidays);

  const changeFilter = (e) => {
    setActiveFilter(e);
  }

  return (
    <div className="holiday-search">
        <Filters onFilterChange={changeFilter} activeFilter={activeFilter} />
        <HolidaysList holidays={allHolidays} />
    </div>
  );
}

export default App;