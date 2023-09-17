import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { IoPersonOutline } from 'react-icons/io5';
import classes from './BookingList.module.css';

export default function BookinsgList() {
  const [book, setBook] = useState(<Stays />);
  const [activeClass, setActiveClass] = useState('stays');
  function hundleBooking(component, className) {
    setBook(component);
    setActiveClass(className);
  }
  return (
    <div className={classes.booking}>
      <ul className={classes.bookingList}>
        <li><button type="button" className={activeClass === 'stays' ? classes.active : ''} onClick={() => hundleBooking(<Stays />, 'stays')}>Stays</button></li>
        <li><button type="button" className={activeClass === 'flights' ? classes.active : ''} onClick={() => hundleBooking(<Flights />, 'flights')}>Flights</button></li>
        <li><button type="button" className={activeClass === 'cars' ? classes.active : ''} onClick={() => hundleBooking(<Cars />, 'cars')}>Cars</button></li>
        <li><button type="button" className={activeClass === 'cruise' ? classes.active : ''} onClick={() => hundleBooking(<Cruise />, 'cruise')}>Cruise</button></li>
      </ul>
      {book}
    </div>
  );
}
function Stays() {
  return (
    <form className={classes.bookingForm}>
      <FlightBooking icon={<CiLocationOn />} forLabel="" label="Location" type="text" placeholder="Where are you going?" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Check In" type="date" placeholder="Add date" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Check Out" type="date" placeholder="Add date" id="" />
      <FlightBooking icon={<IoPersonOutline />} forLabel="" label="Guest" type="number" placeholder="Add Guest" id="" />
      <button type="submit" aria-label="Search"><CiSearch /></button>
    </form>

  );
}
function FlightBooking({
  icon, label, forLabel, type, placeholder, id,
}) {
  return (
    <div className={classes.bookingFormContainer}>
      {icon}
      <div className={classes.bookingFormDetails}>
        <label htmlFor={forLabel}>{label}</label>
        <input type={type} placeholder={placeholder} id={id} />
      </div>
    </div>
  );
}
FlightBooking.propTypes = {
  icon: PropTypes.element.isRequired,
  forLabel: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

function Flights() {
  return <p>Flights Under Construction</p>;
}
function Cars() {
  return <p>Cars Under Construction</p>;
}
function Cruise() {
  return <p>Cruise Under Construction</p>;
}
