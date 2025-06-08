import { useState, useEffect } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/vijay.jpg'
import user2 from '../../assets/angela.jpg'
import user3 from '../../assets/sagar.png'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Vijay Kadam",
      position: "Operations Manager",
      company: "Tradedge Consistent Services, Thane",
      image: user1,
      text: "We at Tradedge Consistent Services are extremely grateful for the outstanding support and expertise that the team from Kratoos Corp has brought to our team. His deep knowledge and skill in the quantitative finance industry have made a significant impact on our projects."
    },
    {
      id: 2,
      name: "Angela Chouinard",
      position: "",
      company: "TechPrecision Ltd, USA",
      image: user2,
      text: "Working with Kratoos has been a fantastic experience! As a business based in the USA, I needed content that resonates with a diverse audience, and Kratoos truly understood my requirements. They took the time to recognize the cultural nuances and preferences specific to my target market, delivering content that feels authentic and impactful."
    },
    {
      id: 3,
      name: "Sagar Gupta",
      position: "",
      company: "Mumbai",
      image: user3,
      text: "Working with Priyanka was a game-changer. Their strategy, creativity, and consistency helped me grow my online presence and connect with the right audience. Truly grateful for their support!"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Check if on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set isLoaded to true when component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Helper function to determine slide position
  const getSlidePosition = (index) => {
    if (index === activeIndex) return 'active';
    if (index === (activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)) return 'prev';
    if (index === (activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)) return 'next';
    return '';
  };

  // Handle image loading errors
  const handleImageError = (e) => {
    console.error("Failed to load image");
    e.target.src = 'https://via.placeholder.com/60'; // Fallback image
  };

  return (
    <div className={`testimonials container ${isMobile ? 'mobile-view' : ''}`}>
      <div className="testimonials-heading">
        <h2>What Our Clients Say</h2>
        <div className="heading-underline"></div>
      </div>
      
      <div className={`testimonials-box ${isLoaded ? 'loaded' : ''}`}>
        <div className="carousel">
          <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
            <img src={next_icon} alt="Next" />
          </button>
          <button className="carousel-btn back-btn" onClick={prevSlide} aria-label="Previous testimonial">
            <img src={back_icon} alt="Previous" />
          </button>
          
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`carousel-item ${getSlidePosition(index)}`}
              >
                <div className="testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="user-info">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="user-image"
                      onError={handleImageError}
                    />
                    <div className="user-details">
                      <h3 className="user-name">
                        {testimonial.name}
                        {testimonial.position && <span className="user-position">, {testimonial.position}</span>}
                      </h3>
                      <span className="user-company">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === activeIndex ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
