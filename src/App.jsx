// App.jsx
import { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Principals from './Components/Principals/Principals';
// import Customers from './Components/Customers/Customers';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
import Principles from './Components/Principles/Principles';
import ScrollToTop from './Components/ScrollToTop';

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const principalsRef = useRef(null);
  // const customersRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null); // Add footer ref

  const sections = [
    { ref: heroRef, id: 'hero' },
    { ref: aboutRef, id: 'about' },
    { ref: productsRef, id: 'products' },
    { ref: principalsRef, id: 'principals' },
    // { ref: customersRef, id: 'customers' },
    { ref: testimonialsRef, id: 'testimonials' },
    { ref: contactRef, id: 'contact' },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex(
            (section) => section.ref.current === entry.target
          );
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  const handleScroll = (event) => {
    if (event.ctrlKey || isScrollingRef.current) {
      return;
    }

    event.preventDefault();

    let nextIndex = currentSection;

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      nextIndex = currentSection + 1;
    } else if (event.deltaY < 0 && currentSection > 0) {
      nextIndex = currentSection - 1;
    }

    if (nextIndex !== currentSection) {
      isScrollingRef.current = true;
      setCurrentSection(nextIndex);
      sections[nextIndex].ref.current.scrollIntoView({ behavior: 'smooth' });

      // Reset the scrolling lock after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // Adjust this value to match your desired scroll frequency
    }
  };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleScroll, { passive: false });
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [currentSection]);

  return (
    <div>
      <div id="hero" ref={heroRef} className="section">
        <Hero />
      </div>
      <div id="about" ref={aboutRef} className="section">
        <About />
      </div>
      <div id="products" ref={productsRef} className="section">
        <Products />
      </div>
      <div id="principles" ref={principalsRef} className="section">
        <Principals />
      </div>
      {/* <div id="customers" ref={customersRef} className="section">
        <Customers />
      </div> */}
      <div id="testimonials" ref={testimonialsRef} className="section">
        <Testimonials />
      </div>
      <div id="contact" ref={contactRef} className="section">
        <Contact />
      </div>
      <div id="footer" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ourprinciples" element={<Principles />} />
      </Routes>
    </Router>
  );
};

export default App;




// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// import About from './Components/About/About';
// import Principals from './Components/Principals/Principals';
// import Customers from './Components/Customers/Customers';
// import Testimonials from './Components/Testimonials/Testimonials';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import Team from './Components/Team/Team';

// const Home = () => {
//   const heroRef = useRef(null);
//   const aboutRef = useRef(null);
//   const principalsRef = useRef(null);
//   const customersRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const contactRef = useRef(null);

//   const sections = [heroRef, aboutRef, principalsRef, customersRef, testimonialsRef, contactRef];

//   const handleScroll = (event) => {
//     event.preventDefault();
//     const currentIndex = sections.findIndex((ref) =>
//       ref.current && ref.current.getBoundingClientRect().top >= 0
//     );
//     if (event.deltaY > 0 && currentIndex < sections.length - 1) {
//       // Scroll down
//       sections[currentIndex + 1].current.scrollIntoView({ behavior: 'smooth' });
//     } else if (event.deltaY < 0 && currentIndex > 0) {
//       // Scroll up
//       sections[currentIndex - 1].current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div onWheel={handleScroll}>
//       <div id="hero" ref={heroRef}>
//         <Hero />
//       </div>

//       <div id="about" ref={aboutRef}>
//         <About />
//       </div>

//       <div id="principals" ref={principalsRef}>
//         <Principals />
//       </div>

//       <div id="customers" ref={customersRef}>
//         <Customers />
//       </div>

//       <div id="testimonials" ref={testimonialsRef}>
//         <Testimonials />
//       </div>

//       <div id="contact" ref={contactRef}>
//         <Contact />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Hero from './Components/Hero/Hero';
// // import Products from './Components/Products/Products';
// // import Title from './Components/Title/Title';
// import Principals from './Components/Principals/Principals';
// import Customers from './Components/Customers/Customers';
// import Testimonials from './Components/Testimonials/Testimonials';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import Team from './Components/Team/Team';
// import ScrollToSection from './Components/ScrollToSection/ScrollToSection'; // Import the new ScrollToSection component

// const Home = () => (
//   <div>
//     <div id="hero">
//     <Hero />
//     </div>

//     <div id='about'>
//         <About />
//     </div>

//     {/* <div id="products-page">
//       <Products />
//     </div> */}

//     <div id="principals">
//       <Principals />
//     </div>

//     <div id="customers">
//       <Customers />
//     </div>

//     <div id="testimonials">
//       <Testimonials />
//     </div>

//     <div id="contact">
//       <Contact />
//     </div>

//     <Footer />
 
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <ScrollToSection /> {/* Handles scrolling with different offsets */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

