import React from 'react';
import '../assets/css/TeamMembers.css';

const TeamMember = ({ image, name, title, socialLinks }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{title}</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
