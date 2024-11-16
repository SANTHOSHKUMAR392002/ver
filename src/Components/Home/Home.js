import React from 'react';
import './Home.css';
import image1 from "../../style/background.png"
const Home = () => {
  return (
    <div className='home-container d-flex flex-row'>
      <div className='home-heading'>
        <h1>BUTTOWSKI</h1>
        <h4>-Private Ltd</h4>
        <p>"Your success is Our mission"</p>
      </div>
      <div className='home-image'>
        <img src={image1} alt="image1"></img>
      </div>
    </div>
  );
};

export default Home;
