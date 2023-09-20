/* eslint-disable jsx-a11y/label-has-associated-control */
import logo from '../images/travel-hive-logo.PNG';
import logoPicture from '../images/sign-up-pic.jpg';
import './SignUp.css';
import background from '../images/sign-in-background.jpg';
import facebookLogo from '../images/facebook-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import googleLogo from '../images/google-logo.png';

const backgroundImage = {
  background: `url(${background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};
export default function SignUp() {
  return (
    <div className="sign-up-container" style={backgroundImage}>
      <div className="sign-up-sub-container">
        <div className="sign-up-detials">
          <img src={logo} alt="Logo" className="sign-up-logo" />
          <h2 className="sign-up-header">Sign Up</h2>
          <p className="sign-up-details-desc">Your details are required here</p>
          <form className="sign-up-sign-in-form">
            <input type="text" name="full-name" className="sign-up-input-form" placeholder="Full Name" />
            <input type="text" name="email" className="sign-up-input-form" placeholder="Email" />
            <input type="password" name="password" className="sign-up-input-form" placeholder="Password" />
            <input type="password" name="password" className="sign-up-input-form" placeholder="Confirm Password" />
            <button type="submit" className="sign-up-submit-btn">Sign up</button>
          </form>
          <a href="sign-in" className="sign-up-forgot-password">Already Have An Account</a>
          <p className="or">or</p>
          <ul className="sign-up-social-media">
            <li>
              <img src={facebookLogo} alt="facebook" />
              facebook
            </li>
            <li>
              <img src={googleLogo} alt="Google" />

              Google
            </li>
            <li>
              <img src={twitterLogo} alt="Twitter" />
              Twitter
            </li>
          </ul>
        </div>
        <img src={logoPicture} className="sign-up-sign-in-image" alt="Travel place" />
      </div>
    </div>
  );
}
