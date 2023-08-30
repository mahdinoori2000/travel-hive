import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Page from './Components/Page';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
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
