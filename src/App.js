import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "./Footer/components/Footer/Footer";
import Loader from "./shared/components/Loader";

import Routes from './routes'
import Navbar from './client/Navba/Navbar';
import Footer from './Footer/Footer';

import AuthPage from './pages/AuthPage'

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

    <>
      <AuthPage />
       <Loader />
      <Footer />
    </>
  );

}


export default App;
