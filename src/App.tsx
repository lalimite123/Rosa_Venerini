import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import SainteRosa from './pages/SainteRosa';
import Cameroun from './pages/Cameroun';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<AboutUs />} />
        <Route path="/sainte-rosa-venerini" element={<SainteRosa />} />
        <Route path="/cameroun" element={<Cameroun />} />
        <Route path="/services" element={<Services />} />
        {/* The following routes will redirect to Home for now */}
        <Route path="/spiritualite" element={<Home />} />
        <Route path="/pastoral" element={<Home />} />
        <Route path="/communautes" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
