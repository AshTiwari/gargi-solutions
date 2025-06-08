import { useState, useEffect, useRef, useCallback } from 'react';
import contentCreation from '../../assets/contentCreation.jpeg';
import websolution from '../../assets/web.jpeg'
import fintech from '../../assets/fintech.jpeg'
import resumeReview from '../../assets/resume.jpeg'
import consumables1 from '../../assets/consumables1.png';
import consumables2 from '../../assets/consumables2.png';
import ProductModal from './ProductModal.jsx';
import './Products.css';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayIntervalRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Content Creation",
      image: contentCreation,
      description: "Elevate your brand with compelling content that engages and converts.",
      modalContent: {
        title: "Elevate Your Brand with Compelling Content",
        description:
        "Kratoos has made a remarkable impact on job seekers by refining and enhancing professional resumes. Our meticulous attention to detail and expert craftsmanship ensure a standout resume that accelerates career success.",   
        services: [
          "Content Strategy Development",
          "Copywriting & Blogging",
          "Social Media Content",
          "Visual & Multimedia Content",
          "SEO-Optimized Content",
          "Brand Voice Consistency"
        ],
        image: contentCreation
      }
    },
    {
      id: 2,
      name: "Resume Review",
      image: resumeReview,
      description: "Transform your resume into a career-winning document.",
      modalContent: {
        title: "Transform Your Resume Into A Career-Winning Document",
        description:
          "Kratoos has made a remarkable impact on job seekers by refining and enhancing professional resumes. Our meticulous attention to detail and expert craftsmanship ensure a standout resume that accelerates career success.",
        services: [
          "Professional resume analysis and detailed feedback",
          "ATS (Applicant Tracking System) optimization",
          "Industry-specific keyword optimization",
          "Format and layout enhancement",
          "Achievement highlighting and quantification",
          "Career narrative development"
        ],
        image: consumables1
      }
    },
    {
      id: 3,
      name: "Web Solutions",
      image: websolution,
      description: "Create stunning, responsive websites that drive results.",
      modalContent: {
        title: "Innovative Web Solutions for a Digital World",
        description:
          "Kratoos empowers brands with visually captivating, user-friendly, and technically robust web solutions, ensuring a strong and impactful online presence.",
        services: [
          "Custom Website Design",
          "Responsive Development",
          "SEO & Performance Optimization",
          "E-commerce Solutions",
          "Content Management Integration",
          "Ongoing Maintenance & Support"
        ],
        image: websolution
      }
    },
    {
      id: 4,
      name: "Fin Tech Solutions",
      image: fintech,
      description: "Innovative financial technology solutions for modern businesses.",
      modalContent: {
        title: "Empowering Finance with Fin Tech Solutions",
        description:
          "Kratoos simplifies the fintech landscape for businesses with cutting-edge software solutions and strategic content. From seamless financial integrations to compelling industry-focused content, we empower brands to navigate fintech complexities with confidence and efficiency.",
        services: [
          "Digital Payment Solutions",
          "Blockchain Integration",
          "Financial Analytics",
          "Security & Compliance",
          "Mobile Banking Solutions",
          "Automated Investment Tools"
        ],
        image: fintech
      }
    },
    {
      id: 5,
      name: "Accounting Services",
      image: consumables2,
      description: "Comprehensive accounting solutions for business success.",
      modalContent: {
        title: "Professional Accounting Services",
        description:
          "Kratoos provides comprehensive accounting solutions to help businesses maintain financial health and compliance. Our expert team ensures accurate bookkeeping, tax preparation, and financial planning services.",
        services: [
          "Bookkeeping & Financial Records",
          "Tax Planning & Preparation",
          "Financial Statement Preparation",
          "Payroll Services",
          "Business Advisory Services",
          "Audit & Assurance"
        ],
        image: consumables2
      }
    },
  ];

  const openModal = (product) => {
    pauseAutoPlay();
    setActiveProduct(product);
  };

  const closeModal = () => {
    setActiveProduct(null);
    resumeAutoPlay();
  };

  // Get visible products based on screen size and current index
  const getVisibleProductCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  const getVisibleProducts = () => {
    const count = getVisibleProductCount();
    let visibleProducts = [];
    
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % products.length;
      visibleProducts.push(products[index]);
    }
    console.log(visibleProducts);
    return visibleProducts;
  };

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, products.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, products.length]);

  const goToIndex = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning, currentIndex]);

  const pauseAutoPlay = () => {
    setIsPaused(true);
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    setIsPaused(false);
    setAutoPlayEnabled(true);
  };

  // Set up auto-play functionality
  useEffect(() => {
    if (autoPlayEnabled && !isPaused && !isTransitioning && !activeProduct) {
      autoPlayIntervalRef.current = setInterval(() => {
        goToNext();
      }, 3000);
    }
    
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [autoPlayEnabled, isPaused, isTransitioning, activeProduct, goToNext]);

  // Handle window resize - adjust visible products count
  useEffect(() => {
    const handleResize = () => {
      // Force re-render to adjust visible products
      setCurrentIndex(prevIndex => prevIndex);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='products'>
      <div className="products-heading">
        <h2>Our Products & Services</h2>
        <div className="autoplay-indicator">
          {/* <span className={`indicator ${autoPlayEnabled && !isPaused ? 'active' : ''}`}></span> */}
          {/* <span>Auto-play {autoPlayEnabled && !isPaused ? 'on' : 'off'}</span> */}
          {/* <button 
            className="autoplay-toggle" 
            onClick={() => autoPlayEnabled ? pauseAutoPlay() : resumeAutoPlay()}
          >
            {autoPlayEnabled && !isPaused ? 'Pause' : 'Play'}
          </button> */}
        </div>
      </div>
      
      <div 
        className="carousel-container"
        onMouseEnter={() => pauseAutoPlay()}
        onMouseLeave={() => !activeProduct && resumeAutoPlay()}
      >
        <button 
          className="carousel-button prev" 
          onClick={goToPrev}
          disabled={isTransitioning}
        >
          <span>❮</span>
        </button>
        
        <div className={`carousel-viewport ${isTransitioning ? 'transitioning' : ''}`}>
          {getVisibleProducts().map((product, index) => (
            <div 
              key={`visible-${product.id}-${index}`}
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button className="learn-more-btn" onClick={() => openModal(product)}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={goToNext}
          disabled={isTransitioning}
        >
          <span>❯</span>
        </button>
        
        <div className="carousel-dots">
          {products.map((_, index) => (
            <button 
              key={index} 
              className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>

      {activeProduct && (
        <ProductModal
          showModal={() => {}}
          isModalOpen={true}
          handleCancel={closeModal}
          handleOk={closeModal}
          triggerLabel={activeProduct.name}
          modalContent={activeProduct.modalContent}
        />
      )}
    </div>
  );
};

export default Products;
