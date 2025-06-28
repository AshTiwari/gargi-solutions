// import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'



const Contact = () => {
  return (
    <div className="contact container">
      <div className='contact-box'>
        {/* <div className="contact-col"> */}
          <h3>Send Us a Message! <img src={msg_icon} alt="" /> </h3>
          <p>Get in touch with Kratoos corporations today to discuss how we can meet your needs. We&apos;re here to provide expert guidance and support every step of the way.</p>
        <ul>
          <li> <img src={mail_icon} alt=''/>
              contact@kratoos.com
          </li>
          <li> <img src={phone_icon} alt=''/>
              +91-8928412489 | +91-8691852076
          </li>
          <li> <img src={location_icon} alt=''/>
              Kratoos corporation, Office 16, Samrat Estates, J.N. Road, Mulund West, Mumbai 400080
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact
