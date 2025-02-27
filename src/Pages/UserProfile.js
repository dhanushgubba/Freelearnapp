import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { FaUser, FaEnvelope, FaIdCard } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser);
        setLoading(false);
      } catch (err) {
        setError('Failed to parse user data');
        setLoading(false);
      }
    } else {
      setError('No logged-in user found');
      setLoading(false);
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">User Profile</div>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && user && (
        <div className="profile-details">
          <div className="profile-item">
            <FaUser className="profile-icon" />
            <strong>First Name:</strong> {user.firstname}
          </div>
          <div className="profile-item">
            <FaIdCard className="profile-icon" />
            <strong>Last Name:</strong> {user.name}
          </div>
          <div className="profile-item">
            <FaEnvelope className="profile-icon" />
            <strong>Email:</strong> {user.email}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
