import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { IoPersonOutline } from 'react-icons/io5';
import FlightBooking from './FlightBooking';
import classes from './BookingList.module.css';

export default function Stays() {
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
