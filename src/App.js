
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes'
import Navbar from './client/Navba/Navbar';
import Footer from './Footer/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App
