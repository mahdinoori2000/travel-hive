import BookinsgList from './BookingList';
import background from '../images/snow-landscape.jpg';
import classes from './Headline.module.css';

export default function Headline() {
  return (
    <div className={classes.container} style={{ backgroundImage: `url(${background})` }}>
      <h1>
        Discover A Beatiful
        {' '}
        <br />
        Place With Us
      </h1>
      <p>
        Explore nature paradise in the world, let&apos;s find the best
        {' '}
        <br />
        destination in the world with us

      </p>
      <button type="button" className={classes.ctaBtn}>Explore Now</button>
      <BookinsgList />
    </div>
  );
}
