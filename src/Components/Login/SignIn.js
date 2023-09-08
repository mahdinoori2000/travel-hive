/* eslint-disable jsx-a11y/label-has-associated-control */
import logo from '../images/travel-hive-logo.PNG';
import logoPicture from '../images/sign-in-pic.jpg';
import './SignIn.css';
import background from '../images/sign-in-background.jpg';
import facebookLogo from '../images/facebook-logo.png';
import twitterLogo from '../images/twitter-logo.png';
import googleLogo from '../images/google-logo.png';

const backgroundImage = {
  background: `url(${background})`,
  backgroundSize: 'cover',
  BackgroundRepeat: 'no-repeat',
};
export default function SignIn() {
  return (
    <div className="sign-in-container" style={backgroundImage}>
      <div className="sign-in-sub-container">
        <div className="sign-in-detials">
          <img src={logo} alt="Logo" className="sign-in-logo" />
          <h2 className="sign-in-header">Welcome</h2>
          <p className="sign-in-details-desc">Log in or Create Account to countries</p>
          <form className="sign-in-sign-in-form">
            <label htmlFor="email" className="sign-in-label">Email</label>
            <input type="text" name="email" className="sign-in-input-form" placeholder="Enter your Email" />
            <label htmlFor="password" className="sign-in-label">Password</label>
            <input type="password" name="password" className="sign-in-input-form" placeholder="Enter your Password" />
            <button type="submit" className="sign-in-submit-btn">Log In</button>
          </form>
          <p className="sign-in-or">or</p>
          <ul className="sign-in-social-media">
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
          <a href="#home" className="sign-in-forgot-password">Forget password</a>
          <p className="sign-in-sign-up">
            Didn&apos;t have Account?
            {' '}
            <a href="sign-up">Sign Up here</a>
          </p>
        </div>
        <img src={logoPicture} className="sign-in-sign-in-image" alt="Travel place" />
      </div>
    </div>
  );
}
