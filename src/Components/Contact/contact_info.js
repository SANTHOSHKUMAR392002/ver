import React from 'react';
import "./contact.css"
// icons
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h1>Contact Info</h1>
            <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, we're here to help.</p>
            <div className="info-item">   
                <div className='icon-container'>
                    <h3>Follow As Here</h3>
                    <a className='icons' href='https://wa.me/919092548867 '><IoLogoWhatsapp/> What's App</a>
                    <a  className='icons' href='https://www.instagram.com/buttowski2k24/'><FaInstagram /> Instagram</a>
                </div>
            </div>
            <div className="info-item">
                <div className='info-content'>
                    <h4>Phone Number</h4>
                    <p><MdOutlinePhone/> 9092548867</p>
                </div>
            </div>
            <div className="info-item">
                <div className='info-content'>
                    <h4>Email Address </h4>
                    <p> < CgMail/> buttowski2k24@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
