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
          Kratoos Corp <p className="animated-text" style={{marginBottom:0}}>
            <TypeAnimation
              sequence={[
                'Create Bold',
                1000,
                'Grow Infinite',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </h1>
        <p>We’re not just a service provider—we’re your creative force and tech backbone. From powerful content that speaks volumes to sleek web solutions that scale, Our fintech finesse and razor-sharp resume reviews shape future-ready brands. We merge elegance with edge, strategy with soul, detail with disruption. Every word, every code, every solution—crafted to amplify your impact. For those who dare to go beyond limits, we’re already there. Kratoos isn’t a company. It’s a movement. Join the infinite.</p>
        <button className='btn' onClick={handleScroll}>Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
