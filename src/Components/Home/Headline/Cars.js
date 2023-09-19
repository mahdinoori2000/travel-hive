import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { IoPersonOutline } from 'react-icons/io5';
import FlightBooking from './FlightBooking';
import classes from './BookingList.module.css';

export default function Cars() {
  return (
    <form className={classes.bookingForm}>
      <FlightBooking icon={<CiLocationOn />} forLabel="" label="Location" type="text" placeholder="Pick up Location" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Pick-up date" type="date" placeholder="Pick up date" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Drop-off date" type="date" placeholder="Add date" id="" />
      <FlightBooking icon={<IoPersonOutline />} forLabel="" label="Passenger" type="number" placeholder="Number of cars" className={classes.typeNumber} />
      <button type="submit" aria-label="Search"><CiSearch /></button>
    </form>
  );
}
