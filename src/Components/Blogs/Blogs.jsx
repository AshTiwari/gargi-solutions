import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import './Blogs.css';
import makhanaArticle from '../../assets/article1.jpg';
import npa from '../../assets/article2.png';
import zerodha from '../../assets/article3.png';
import netflix from '../../assets/article4.jpg';

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const articles = [
    { id: 1, title: "The Transformation of Makhana through Branding", description: "Makhana's rebranding highlighted its health benefits, transforming it from a regional snack to a nationally recognized, nutritious option.", image: makhanaArticle, href: "https://www.linkedin.com/pulse/transformation-makhana-through-branding-priyanka-tiwari-vdnmf/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "May 25, 2024" },
    { id: 2, title: "NPA: Banking Industry ka Villan", description: "Indian banks face varying NPA levels, with ESAF highest at 2.19% and Bank of Baroda lowest at 0.7%.", image: npa, href: "https://www.linkedin.com/pulse/npabanking-industry-ka-villan-priyanka-tiwari-dn8ic/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "April 16, 2024" },
    { id: 3, title: "Zerodha: The Heroic Disruptor Takes Center Stage in the Climax of India's Financial Blockbuster", description: "Zerodha revolutionized Indian stock trading with low fees, advanced tech, investor education, seamless onboarding, and transparent pricing.", image: zerodha, href: "https://www.linkedin.com/pulse/zerodha-heroic-disruptor-takes-center-stage-climax-indias-tiwari-q4g4f/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "January 11, 2024" },
    { id: 4, title: "India's Taxation of Netflix Inc: Implications for Streaming Services, Employees and Infrastructure", description: "India taxes Netflix's income under permanent establishment reflecting evolving digital tax laws and ensuring fair revenue allocation.", image: netflix, href: "https://www.linkedin.com/pulse/indias-taxation-netflix-inc-implications-streaming-services-tiwari/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "June 7, 2023" }
  ];

  const getVisibleCount = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  };

  const getVisibleArticles = () => {
    const count = getVisibleCount();
    let visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % articles.length;
      visible.push(articles[index]);
    }
    return visible;
  };

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, articles.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, articles.length]);

  const goToIndex = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentIndex]);

  const pauseAutoPlay = () => {
    setIsPaused(true);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isPaused, isTransitioning, goToNext]);

  useEffect(() => {
    const handleResize = () => setCurrentIndex((prev) => prev);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="blogs">
      <div className="blogs-header">
        <h2>Latest Insights</h2>
        <p>Thoughts and perspectives from the Kratoos team</p>
      </div>

      <div
        className="blogs-carousel-container"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <button
          className="blogs-carousel-button prev"
          onClick={goToPrev}
          disabled={isTransitioning}
        >
          <span>&#10094;</span>
        </button>

        <div className={`blogs-carousel-viewport ${isTransitioning ? 'transitioning' : ''}`}>
          {getVisibleArticles().map((article, index) => (
            <div key={`blog-${article.id}-${index}`}>
              <a
                href={article.href}
                className="blog-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="blog-image-container">
                  <img src={article.image} alt={article.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{article.date}</span>
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-description">{article.description}</p>
                  <div className="blog-read-more">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <button
          className="blogs-carousel-button next"
          onClick={goToNext}
          disabled={isTransitioning}
        >
          <span>&#10095;</span>
        </button>

        <div className="blogs-carousel-dots">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`blogs-carousel-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
