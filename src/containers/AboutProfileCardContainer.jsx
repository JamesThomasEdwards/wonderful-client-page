// React;
import React from 'react';
// Files;
import About from '../components/about-section/About.jsx';
import ProfileCard from '../components/profile-card/ProfileCard.jsx';

const AboutProfileCardContainer = () => {
    return (
        <div className="about-profile-card-container">
            <About />
            <ProfileCard />
        </div>
    );
};

export default AboutProfileCardContainer;