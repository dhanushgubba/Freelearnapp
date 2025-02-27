import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Resources from './Pages/Resources';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resources" element={<Resources />} />
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
