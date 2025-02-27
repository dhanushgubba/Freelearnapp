import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
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
