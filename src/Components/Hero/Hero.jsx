// import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const handleScroll = () => {
    const productsSection = document.querySelector('.products');
    if (productsSection) {
      const offset = 0; // Set the offset here
      const elementPosition = productsSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1 className="heading">
          Your Growth Partner For <p className="animated-text" style={{marginBottom:0}}>
            <TypeAnimation
              sequence={[
                'Content Creation',
                1000,
                'Professional Growth',
                1000,
                'Online Presence',
                1000,
                'Financial Growth',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </h1>
        <p>Empowering your success through comprehensive digital solutions. We specialize in crafting engaging LinkedIn profiles, developing stunning websites, reviewing professional resumes, and providing expert web development services. Our fintech solutions revolutionize your financial operations, while our seasoned auditors and accountants ensure your business compliance and growth. </p>
        <button className='btn' onClick={handleScroll}>Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
