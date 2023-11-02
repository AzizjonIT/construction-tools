import React from 'react'
import "./Contact.css"

import Contactus from "../Image/contact.png"

const Contact = () => {
  return (
    <>
      <div className="contact_us">
        <img className="contact_img" src={Contactus} alt="" />
        <div className="contact_title">
          <div className="contact_h2">
            <h5>Service-Hotline:</h5>
            <h5>0111 525 5982</h5>
          </div>
          <div className="contact_h2">
            <h5>E-Mail:</h5>
            <h5>test@info.com</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
