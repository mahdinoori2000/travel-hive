import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { IoPersonOutline } from 'react-icons/io5';
import FlightBooking from './FlightBooking';
import classes from './BookingList.module.css';

export default function Flights() {
  return (
    <form className={classes.bookingForm}>
      <FlightBooking icon={<CiLocationOn />} forLabel="" label="Location" type="text" placeholder="Leaving From?" id="" />
      <FlightBooking icon={<CiLocationOn />} forLabel="" label="Location" type="text" placeholder="Going to" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Date" type="date" placeholder="Add date" id="" />
      <FlightBooking icon={<IoPersonOutline />} forLabel="" label="Passenger" type="number" placeholder="Passenger Number" id="" />
      <button type="submit" aria-label="Search"><CiSearch /></button>
    </form>
  );
}
