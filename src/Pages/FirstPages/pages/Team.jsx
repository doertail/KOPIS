import React from 'react';
import TeamMember from '../components/TeamMembers';
import '../assets/css/Team.css';
import LinkedInIcon from '../assets/images/linkedin.png';
import HomePageIcon from '../assets/images/homepage.png';


const Team = ({ id }) => {
  const teamMembers = [
    {
      image: 'path_to_image_placeholder', // Replace with actual image path
      name: 'Seoungwon Park',
      title: 'Cofounder',
      socialLinks: [
        { name: 'Homepage', url: '', icon: HomePageIcon },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
      ],
    },
    {
      image: 'path_to_image_placeholder',
      name: 'Jihoon Oh',
      title: 'Cofounder',
      socialLinks: [
        { name: 'Homepage', url: '', icon: HomePageIcon },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon},
      ],
    },
    {
      image: 'path_to_image_placeholder',
      name: 'Dasol Lee',
      title: 'Cofounder',
      socialLinks: [
        { name: 'Homepage', url: '', icon: HomePageIcon },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
      ],
    },
    {
      image: 'path_to_image_placeholder',
      name: 'Seungheon Lee',
      title: 'Cofounder',
      socialLinks: [
        { name: 'Homepage', url: '', icon: HomePageIcon },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedInIcon },
      ],
    },
  ];

  return (
    <div className="team" id={ id }>
      <h2>TEAM README.MD</h2>
      <p>Cofounders of OM:D</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
