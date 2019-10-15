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
    <section className="holiday-list">
        { holidayListings }
    </section>
  )

}

export default HolidaysList;