// import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.css'
import about_img from '../../assets/about-us.png'

const About = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/team');
  }

  return (
    <div className="about container">
        <div className='about-box'>
          <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
          </div>

          <div className="about-right">
            <h3>About Kratoos Corporation</h3>
            <h2>Dreamers, Doers, Disruptors - That's Us! </h2>
            <p>Behind Kratoos Corp is a team that dares, dreams, and delivers. From creators and coders to strategists and number-crunchers — we’re the engine behind the edge. Each mind here brings a unique spark, united by the vision to disrupt and elevate. We’re not just building brands — we’re shaping the infinite.</p>
            <div className="about-button">
              <button className='btn' onClick={handleButtonClick}>Meet The Team</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
