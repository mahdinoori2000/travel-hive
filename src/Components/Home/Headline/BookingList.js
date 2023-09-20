import { useState } from 'react';
import classes from './BookingList.module.css';
import Stays from './Stays';
import Flights from './Flights';
import Cars from './Cars';
import Cruise from './Cruise';

export default function BookingList() {
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
