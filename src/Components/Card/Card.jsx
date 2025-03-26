import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Card.css';

const CardComponent = ({ name, description, imageUrl, about, links }) => {
  return (
    <div className="profile-card">
      {/* Profile Image */}
      <div className="profile-image">
        <img 
          src={imageUrl} 
          alt={name} 
        />
      </div>
      
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        
        <p className="profile-description">{description}</p>
        
        <div className="profile-social-links">
          {links?.github && (
            <a href={links.github} className="icon github">
              <Github />
            </a>
          )}
          {links?.twitter && (
            <a href={links.twitter} className="icon twitter">
              <Twitter />
            </a>
          )}
          {links?.linkedin && (
            <a href={links.linkedin} className="icon linkedin">
              <Linkedin />
            </a>
          )}
          {links?.email && (
            <a href={`mailto:${links.email}`} className="icon mail">
              <Mail />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
