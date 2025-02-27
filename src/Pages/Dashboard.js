import React from 'react';
import { FaBook, FaChartLine, FaUser } from 'react-icons/fa'; // Import icons
import './Dashboard.css'; // Import CSS file (if needed)

const Dashboard = () => {
  return (
    <main className="dashboard-content">
      {/* Header Section */}
      <header>
        <h1>Welcome Back, Learner! 🚀</h1>
        <p>Continue your learning journey with Free Learn.</p>
      </header>

      {/* Cards Section */}
      <section className="cards">
        <div className="card">
          <FaBook className="card-icon" />
          <h3>Courses Enrolled</h3>
          <p>0 Active Courses</p>
        </div>
        <div className="card">
          <FaChartLine className="card-icon" />
          <h3>Learning Progress</h3>
          <p>0% Completed</p>
        </div>
        <div className="card">
          <FaUser className="card-icon" />
          <h3>Profile</h3>
          <p>Update your info</p>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
