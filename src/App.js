import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './routes'
// import Navbar from './client/Navba/Navbar';
// import Footer from './Footer/Footer';

import AuthPage from './pages/AuthPage'

function App() {

  return (

    <Router>
      <AuthPage />
      {/* <AwardsCard/>
      <Navbar />
      <Routes />
      <Footer /> */}
    </Router>
  );
};



export default App;
