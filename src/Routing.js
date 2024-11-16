import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './layouts/Navbar';
import Copyrights from './Copyrights/copyrights';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Copyrights/>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
