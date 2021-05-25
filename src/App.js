
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AwardsCard from './client/awards/components/AwardsCard';

import Routes from './routes'
import Navbar from './client/Navba/Navbar';
import Footer from './Footer/Footer';


function App() {
  return (
    <Router>
      <AwardsCard/>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
};


export default App
