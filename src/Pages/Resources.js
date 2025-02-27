import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';
import resourcesData from './resources.json';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setResources(resourcesData);
  }, []);

  // Filter resources dynamically
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="resources-container">
      <h2>Study Resources</h2>
      <p>
        Explore our curated list of free and high-quality learning resources.
      </p>

      {/* Improved Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Search for learning resources..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="resources-grid">
        {filteredResources.map((resource, index) => (
          <div
            key={index}
            className="resource-card"
            onClick={() => navigate('/login')} // Navigate on click
          >
            <img
              src={resource.image}
              alt={resource.title}
              className="resource-image"
            />
            <div className="resource-content">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="visit-button">Access Resource</button>
            </div>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      <button className="view-more-button" onClick={() => navigate('/login')}>
        View More Resources
      </button>
    </div>
  );
};

export default Resources;
