import React from 'react';
import Holiday from './Holiday';

function HolidaysList(props) {

  const allHolidays = props.holidays;
  let holidayListings;

  if (allHolidays) {
    holidayListings = allHolidays.map((holiday) => {
      return <Holiday key={holiday.id} details={holiday} />
    });
  }

  return (
    <div className="holiday-list">
        { holidayListings }
    </div>
  )

}

export default HolidaysList;