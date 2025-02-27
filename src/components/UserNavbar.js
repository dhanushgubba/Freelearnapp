import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
  FaHome,
  FaTasks,
  FaAward,
  FaComments,
  FaCog,
  FaQuestionCircle,
} from 'react-icons/fa';
import './UserNavbar.css';

const UserNavbar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Free Learn</h2>
      <ul className="menu">
        <li>
          <Link to="/dashboard">
            <FaHome className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="icon" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <FaBook className="icon" /> My Courses
          </Link>
        </li>
        <li>
          <Link to="/assignments">
            <FaTasks className="icon" /> Assignments
          </Link>
        </li>
        <li>
          <Link to="/certifications">
            <FaAward className="icon" /> Certifications
          </Link>
        </li>
        <li>
          <Link to="/progress">
            <FaChartLine className="icon" /> Progress
          </Link>
        </li>
        <li>
          <Link to="/discussions">
            <FaComments className="icon" /> Discussions
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog className="icon" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/support">
            <FaQuestionCircle className="icon" /> Support
          </Link>
        </li>
        <li>
          <Link to="/login" className="logout">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default UserNavbar;
