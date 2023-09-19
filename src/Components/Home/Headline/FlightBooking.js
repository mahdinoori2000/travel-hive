import PropTypes from 'prop-types';
import classes from './FlightBooking.module.css';

export default function FlightBooking({
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
