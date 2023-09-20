import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { IoPersonOutline } from 'react-icons/io5';
import FlightBooking from './FlightBooking';
import classes from './BookingList.module.css';

export default function Cruise() {
  return (
    <form className={classes.bookingForm}>
      <FlightBooking icon={<CiLocationOn />} forLabel="" label="Destination" type="text" placeholder="Where you want to go?" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="Start date" type="date" placeholder="Pick up date" id="" />
      <FlightBooking icon={<RxCalendar />} forLabel="" label="End date" type="date" placeholder="Add date" id="" />
      <FlightBooking icon={<IoPersonOutline />} forLabel="" label="Duration (night)" type="number" placeholder="Duration" className={classes.typeNumber} />
      <button type="submit" aria-label="Search"><CiSearch /></button>
    </form>
  );
}
