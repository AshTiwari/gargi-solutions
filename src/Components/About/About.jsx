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
            <div className="caption">
              <button className='btn' onClick={handleButtonClick}>Meet The Team</button>
            </div>
          </div>

          <div className="about-right">
            <h3>About Kratoos Corporation</h3>
            <h2>Your Digital Growth Partner </h2>
            <p>In today’s digital-first world, content is more than just information—it’s the lifeblood of engagement, shaping how audiences connect, learn, and trust. From articles and blogs to videos and social media posts, content is the primary medium through which audiences, make decisions. Through strategic storytelling, audience-centric messaging, and high-quality content tailored to your unique voice, we ensure your brand stands out amidst the noise.
            But we don’t stop at just creating impactful content. In the ever-evolving world of technology, Kratoos offers innovative tech solutions designed to amplify your reach and streamline your operation.</p>
          </div>
        </div>
    </div>

  )
}

export default About
