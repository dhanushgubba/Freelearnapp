import React from 'react';
import { useNavigate } from 'react-router-dom';
import LearningImage from '../assets/learning.jpg';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="hero-section">
        <div className="text-content">
          <h1 className="hero-title">
            Unlock Your Potential with <span>Free Learn</span> 📚
          </h1>
          <p className="hero-subtitle">
            Dive into a world of smart, self-paced education. Discover free
            e-books, immersive video tutorials, and AI-powered learning
            tools—all at your fingertips.
          </p>
          <button className="get-started-btn" onClick={() => navigate('/home')}>
            Start Learning Now
          </button>
        </div>
        <div className="image-content">
          <img
            src={LearningImage}
            alt="Learning Illustration"
            className="learning-img"
          />
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Free Resources</h3>
          <p>Access a vast library of e-books and videos at no cost.</p>
        </div>
        <div className="feature">
          <h3>AI Assistance</h3>
          <p>Get personalized help from cutting-edge AI tools.</p>
        </div>
        <div className="feature">
          <h3>Learn Anywhere</h3>
          <p>Study at your own pace, anytime, anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
