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
    <div className="container" style={backgroundImage}>
      <div className="sub-container">
        <div className="detials">
          <img src={logo} alt="Logo" className="logo" />
          <h2 className="header">Welcome</h2>
          <p className="details-desc">Log in or Create Account to countries</p>
          <form className="sign-in-form">
            <label htmlFor="email" className="label">Email</label>
            <input type="text" name="email" className="input-form" placeholder="Enter your Email" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" className="input-form" placeholder="Enter your Password" />
            <button type="submit" className="submit-btn">Log In</button>
          </form>
          <p className="or">or</p>
          <ul className="social-media">
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
          <a href="#home" className="forgot-password">Forget password</a>
          <p className="sign-up">
            Didn&apos;t have Account?
            {' '}
            <a href="sign-up">Sign Up here</a>
          </p>
        </div>
        <img src={logoPicture} className="sign-in-image" alt="Travel place" />
      </div>
    </div>
  );
}
