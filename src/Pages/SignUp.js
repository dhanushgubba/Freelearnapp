import React, { useState } from 'react';
import './SignUp.css';
import signupImage from '../assets/signup.jpg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setStatusMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setStatusMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const response = await fetch('http://localhost:5000/register/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Signup successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(
          errorData.message || 'Signup failed. Please try again.'
        );
      }
    } catch (error) {
      setStatusMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <p>Join us and start your journey today!</p>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
          <p className="login-link">
            Already have an account? <a href="/login">Login Here</a>
          </p>
        </form>
      </div>
      <div className="signup-image">
        <img src={signupImage} alt="Signup Illustration" />
      </div>
    </div>
  );
};

export default SignUp;
