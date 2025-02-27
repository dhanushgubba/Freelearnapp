import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';
import UserNavbar from './components/UserNavbar';
import UserProfile from './Pages/UserProfile';
import Dashboard from './Pages/Dashboard';

const App = () => {
  const Layout = () => {
    const location = useLocation();
    const showNavbar = [
      '/',
      '/home',
      '/login',
      '/register',
      '/about',
      '/signup',
      '/resources',
      '/contact',
    ].includes(location.pathname);
    const showUserNavbar = ['/dashboard', '/profile'].includes(
      location.pathname
    );

    return (
      <>
        {showNavbar && <Navbar />}
        {showUserNavbar && <UserNavbar />}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
