import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AwardsPage from './pages/AwardsPage/AwardsPage';
import Routes from './routes'
import AuthPage from './pages/AuthPage'
import Footer from "./client/Footer/components/Footer";

import Loader from "./shared/components/Loader";

function App() {

  
  return (
    <Router>
      <AuthPage />
      <AwardsPage/>
      <Routes />
      <Footer />
      <Loader />
    </Router>
  );
};
export default App;