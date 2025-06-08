import { ArrowRight, Shield, Star, Zap, Lightbulb, Rocket } from 'lucide-react';
import './Principles.css';
import makhanaArticle from '../../assets/article1.jpg'
import npa from '../../assets/article2.png'
import zerodha from '../../assets/article3.png'
import netflix from '../../assets/article4.jpg'
import { useEffect, useRef, useState } from 'react';

const Principles = () => {
  const principlesRef = useRef(null);
  const articlesRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: isMobile ? 0.05 : 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const principlesEl = principlesRef.current;
    const articlesEl = articlesRef.current;

    if (principlesEl) observer.observe(principlesEl);
    if (articlesEl) observer.observe(articlesEl);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (principlesEl) observer.unobserve(principlesEl);
      if (articlesEl) observer.unobserve(articlesEl);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const principles = {
    title: "Our Guiding Principles",
    description: "At Kratoos, we believe in building technology that makes a difference. Our principles guide every decision we make and every product we build.",
    mainPrinciples: [
      { 
        id: 1, 
        title: "Integrity", 
        description: "At Kratoos, integrity is not just a value; it's the foundation upon which we build every client relationship and project. We are committed to honesty, transparency, and ethical business practices in all our interactions.",
        icon: <Shield className="principle-icon" size={28} />
      },
      { 
        id: 2, 
        title: "Believe in Best", 
        description: "At Kratoos, we have unwavering faith in our ability to deliver the best outcomes for our clients. Through our dedication, expertise, and relentless pursuit of excellence, we are confident that success is not just a possibility but an inevitability.",
        icon: <Star className="principle-icon" size={28} />
      },
      { 
        id: 3, 
        title: "Bold is Beautiful", 
        description: "Kratoos celebrates boldness and encourages our team and clients to think outside the box. We embrace creativity, risk-taking, and unconventional ideas, recognizing that boldness often leads to breakthroughs and innovation.",
        icon: <Zap className="principle-icon" size={28} />
      },
      { 
        id: 4, 
        title: "Don't Look for Opportunity, Create Them", 
        description: "Opportunities aren't found — they're made. At Kratoos, we don't wait for the right moment; we create it. Through strategic thinking, relentless innovation, and a proactive mindset, we help clients discover untapped potential and carve their own paths to success in a constantly evolving world.",
        icon: <Lightbulb className="principle-icon" size={28} />
      },
      { 
        id: 5, 
        title: "Make Innovation an Important Part of Life", 
        description: "Innovation drives everything we do at Kratoos. We embrace cutting-edge technologies, explore creative solutions, and constantly push boundaries. For us, innovation isn't occasional — it's a mindset. We make it part of our culture, helping clients stay ahead of the curve and shaping a future of endless possibilities.",
        icon: <Rocket className="principle-icon" size={28} />
      }
    ]
  };

  const articles = [
    { id: 1, title: "The Transformation of Makhana through Branding", description: "Makhana's rebranding highlighted its health benefits, transforming it from a regional snack to a nationally recognized, nutritious option.", image: makhanaArticle, href: "https://www.linkedin.com/pulse/transformation-makhana-through-branding-priyanka-tiwari-vdnmf/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "May 25, 2024" },
    { id: 2, title: "NPA:Banking Industry ka Villan", description: "Indian banks face varying NPA levels, with ESAF highest at 2.19% and Bank of Baroda lowest at 0.7%.", image: npa, href: "https://www.linkedin.com/pulse/npabanking-industry-ka-villan-priyanka-tiwari-dn8ic/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "April 16, 2024" },
    { id: 3, title: "Zerodha: The Heroic Disruptor Takes Center Stage in the Climax of India's Financial Blockbuster!!!", description: "Zerodha revolutionized Indian stock trading with low fees, advanced tech, investor education, seamless onboarding, and transparent pricing.", image: zerodha, href: "https://www.linkedin.com/pulse/zerodha-heroic-disruptor-takes-center-stage-climax-indias-tiwari-q4g4f/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "January 11, 2024" },
    { id: 4, title: "India's Taxation of Netflix Inc: Implications for Streaming Services, Employees and Infrastructure.", description: "India taxes Netflix's income under permanent establishment reflecting evolving digital tax laws and ensuring fair revenue allocation.", image: netflix, href: "https://www.linkedin.com/pulse/indias-taxation-netflix-inc-implications-streaming-services-tiwari/?trackingId=Xnhj0C6SQ1qHedOTHuCaDQ%3D%3D", date: "June 7, 2023" }
  ];

  return (
    <div className="principles-page">
      {/* Principles Section */}
      <section className="principles-section" ref={principlesRef}>
        <div className="container">
          <div className="section-header">
            <h1 className="principles-title">{principles.title}</h1>
            <div className="title-underline"></div>
            <p className="principles-description">{principles.description}</p>
          </div>

          <div className="principles-grid">
            {principles.mainPrinciples.map((principle, index) => (
              <div 
                key={principle.id} 
                className="principle-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="principle-icon-container">
                  {principle.icon}
                </div>
                <h5 className="principle-title">{principle.title}</h5>
                <p className="principle-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section" ref={articlesRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="articles-title">Latest Insights</h2>
            <div className="title-underline"></div>
          </div>

          <div className="articles-grid">
            {articles.map((article, index) => (
              <a 
                key={article.id} 
                href={article.href} 
                className="article-card" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="article-image-container">
                  <img src={article.image} alt={article.title} className="article-image" />
                  <div className="article-overlay"></div>
                </div>
                <div className="article-content">
                  <p className="article-date">{article.date}</p>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <div className="read-more">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principles;
