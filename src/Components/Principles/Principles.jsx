import { Shield, Star, Zap, Lightbulb, Rocket } from 'lucide-react';
import './Principles.css';
import { useEffect, useRef, useState } from 'react';

const Principles = () => {
  const principlesRef = useRef(null);
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

    if (principlesEl) observer.observe(principlesEl);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (principlesEl) observer.unobserve(principlesEl);
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
    </div>
  );
};

export default Principles;
