import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="home-header">
        <div className="hero-content">
          <h1 className="hero-title">
            Empower Your Future with <span>Free Learn</span> 📚
          </h1>
          <p className="hero-subtitle">
            Your all-in-one platform for smart, self-paced education—anytime,
            anywhere.
          </p>
          <a href="/login" className="explore-btn">
            Login Now
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="explore" className="features">
        <h2 className="section-title">Why Choose Free Learn?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <span className="feature-icon">📖</span>
            <h3>Free E-Books</h3>
            <p>Unlock a vast library of educational books at no cost.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🎥</span>
            <h3>Video Tutorials</h3>
            <p>Learn from top educators with curated video content.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🤖</span>
            <h3>AI Chatbot</h3>
            <p>Get instant answers with our AI-powered assistant.</p>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🎯</span>
            <h3>Personalized Learning</h3>
            <p>Tailored recommendations to match your goals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-box">
            <p className="testimonial-text">
              “Free Learn has transformed my study routine. Everything I need is
              right here!”
            </p>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <span className="testimonial-author">
              — Rahul, Engineering Student
            </span>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              “The AI chatbot is a game-changer. It’s like having a tutor 24/7.”
            </p>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <span className="testimonial-author">
              — Priya, Lifelong Learner
            </span>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              “I love the personalized learning feature. It keeps me on track
              with my goals.”
            </p>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <span className="testimonial-author">
              — Karthik, Data Science Enthusiast
            </span>
          </div>

          <div className="testimonial-box">
            <p className="testimonial-text">
              “The free e-books are an absolute blessing. So much knowledge at
              my fingertips!”
            </p>
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <span className="testimonial-author">— Sneha, College Student</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
        <p className="cta-subtitle">
          Join thousands of learners and unlock unlimited resources for free.
        </p>
        <a href="/signup" className="cta-btn">
          Join Now
        </a>
      </section>
    </div>
  );
};

export default Home;
