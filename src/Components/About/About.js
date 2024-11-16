import React from 'react'
import "./about.css"
import about_img from "../../style/about.png"
const About = () => {
  return (
  <div className='about-container'>
    <div className='about-image'>
      <img src={about_img} alt='about'></img>
    </div>
    <div className='about-content'>
    <h1>About Us</h1>
      <p>
      Welcome to <strong>Buttowski</strong>, where innovation meets excellence. Established with a passion for technology and a commitment to quality, we strive to empower businesses by delivering robust, scalable, and cutting-edge solutions. From custom software development to strategic IT consulting, our expertise spans a diverse range of services, all designed to drive success in an ever-evolving digital landscape.
      <br></br><br></br>
      Our team is built from a group of dedicated developers, designers, and strategists who are passionate about turning ideas into impactful digital experiences. We leverage the latest technologies and best practices to create solutions that not only meet industry standards but also set new ones. Our mission is to simplify complexity, making technology accessible and transformative for every client we work with a customer-first approach, we work closely with each client to understand their unique goals and challenges, ensuring that our solutions deliver real, measurable results. At <strong>Buttowski</strong>, your success is our mission, and we are committed to providing you with the tools and support you need to grow, adapt, and thrive.
      <br></br>
      </p>
      <h3> Let's build the future together</h3>
    </div>
  </div>
  )
}

export default About ;
