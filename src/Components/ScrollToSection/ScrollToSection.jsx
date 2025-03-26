import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const offsets = {
  about: -180,
  products: -160,
  principals: -180,
  customers: -180,
  testimonials: -200,
  contact: -160,
  // Add more sections with their respective offsets here
};

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const offset = offsets[id] || 0; // Default to 0 if no offset is specified
        const yOffset = offset;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
