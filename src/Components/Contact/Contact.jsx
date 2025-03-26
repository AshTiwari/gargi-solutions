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
          <p>Get in touch with Lab Instrumentss today to discuss how we can meet your instrument needs. We&apos;re here to provide expert guidance and support every step of the way.</p>
        <ul>
          <li> <img src={mail_icon} alt=''/>
              labinstrumentss@gmail.com
          </li>
          <li> <img src={phone_icon} alt=''/>
              +91-9324753331
          </li>
          <li> <img src={location_icon} alt=''/>
              Lab Instruments, C/17, Puneet Darshan, Nandivali Road, Shivaji Udyog Nagar, Dombivli East, Thane 421264
          </li>
        </ul>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Contact
