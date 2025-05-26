import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import SainteRosa from './pages/SainteRosa';
import Cameroun from './pages/Cameroun';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Composant wrapper pour AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<AboutUs />} />
        <Route path="/sainte-rosa-venerini" element={<SainteRosa />} />
        <Route path="/cameroun" element={<Cameroun />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* The following routes will redirect to Home for now */}
        <Route path="/spiritualite" element={<Home />} />
        <Route path="/pastoral" element={<Home />} />
        <Route path="/communautes" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
