import React from 'react'
import "./contact.css"
import ContactForm from './contact_form';
import ContactInfo from './contact_info';
const Contact = () => {
  return (
    <div className='contact-container'>
      <ContactInfo/>
      <ContactForm/>
    </div>
  )
}

export default Contact ;
