import React from 'react';
import Moment from 'react-moment'

function Info(props) {

  const adults = props.details.persons.adults;
  const children = props.details.persons.children;
  const infants = props.details.persons.infants;

  const departureDate = new Date(props.details.departDate * 1000);

  let noAdults, noChildren, noInfants, noOfDays;

  if (adults < 2 && adults > 0) {
    noAdults = <span><span className="holiday__num">{adults}</span> Adult, </span>
  } else if (adults >=2) {
    noAdults = <span><span className="holiday__num">{adults}</span> Adults, </span>
  }

  if (children < 2 && children > 0) {
    noChildren = <span><span className="holiday__num">{children}</span> child</span>
  } else if (children >= 2) {
    noChildren = <span><span className="holiday__num">{children}</span> children</span>
  }
  
  if (infants < 2 && infants > 0) {
    noInfants = <span>, <span className="holiday__num">{infants}</span> infant</span>
  } else if (infants >=2) {
    noInfants = <span>, <span className="holiday__num">{infants}</span> infants</span>
  }

  if (props.details.noDays == 1) {
    noOfDays = <span>{props.details.noDays} day</span>
  } else if (props.details.noDays > 1) {
    noOfDays = <span>{props.details.noDays} days</span>
  }

  return (
    <div className="holiday__family">
      <p className="holiday__family-party">{noAdults}{noChildren}{noInfants}</p>
      <p className="holiday__time"><Moment format="Do MMMM YYYY">{departureDate}</Moment> for {noOfDays}</p>
      <p className="holiday__depart">departing from <span>{props.details.departLoc}</span></p>
    </div>
  );
}

export default Info;