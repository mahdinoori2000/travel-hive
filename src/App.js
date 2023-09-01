import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Page from './Components/Page';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/Login/SignUp';

function App() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    setShowNavbar(!['/sign-in', '/sign-up'].includes(location.pathname));
  }, [location.pathname]);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
