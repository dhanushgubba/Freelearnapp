import React from 'react';
import './About.css';
// Import team member images
import AboutImage from '../assets/aboutimage.jpg';
import DhanushImage from '../assets/myprofile.jpg';
import KesavImage from '../assets/kesav.jpg';
import DineshImage from '../assets/dinesh.jpg';
const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              FreeLearn is a revolutionary e-learning platform committed to
              democratizing education. We provide top-tier resources to learners
              globally, breaking barriers and fostering growth for students,
              professionals, and curious minds alike.
            </p>
          </div>
          <div className="about-image">
            <img src={AboutImage} alt="About FreeLearn" />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="what-we-do">
        <h2>What We Offer</h2>
        <div className="offer-cards">
          <div className="offer-card">
            <h3>Free Courses</h3>
            <p>
              Access a wide range of courses across multiple subjects, all at no
              cost.
            </p>
          </div>
          <div className="offer-card">
            <h3>Expert Tutorials</h3>
            <p>Learn from industry leaders with step-by-step guidance.</p>
          </div>
          <div className="offer-card">
            <h3>Study Materials</h3>
            <p>
              Download high-quality resources to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We’re on a mission to make education a universal right, not a
          privilege. By delivering exceptional learning experiences, we empower
          individuals to achieve their dreams and shape a better tomorrow.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          A dedicated group of visionaries, educators, and innovators driving
          FreeLearn forward.
        </p>
        <div className="team-members">
          <div className="team-card">
            <img src={DhanushImage} alt="John Doe" className="team-avatar" />
            <h3>G V NAGA DHANUSH</h3>
            <p>Team Leader(Developer)</p>
          </div>
          <div className="team-card">
            <img src={KesavImage} alt="Jane Smith" className="team-avatar" />
            <h3>N KESAVA TARUN KUMAR</h3>
            <p>Designer</p>
          </div>
          <div className="team-card">
            <img src={DineshImage} alt="Mark Taylor" className="team-avatar" />
            <h3>P Dinesh</h3>
            <p>Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Unlock Limitless Learning</h2>
        <p>
          Join a thriving global community where knowledge is free, accessible,
          and empowering. Start your journey today!
        </p>
        <a href="/signup" className="cta-button">
          Start Learning for Free
        </a>
      </section>
    </div>
  );
};

export default About;
