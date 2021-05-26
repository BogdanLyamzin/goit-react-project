import Header from './Header'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AwardsPage from './pages/AwardsPage/AwardsPage';
import Routes from './routes'
// import Navbar from './client/Navbar/Navbar';
import AuthPage from './pages/AuthPage'
// import Footer from './client/Footer';

import "./shared/styles/style.scss"

function App() {

  return (
    <Router>
      <Header/>
      <AuthPage />
       <AwardsPage/>
      {/* <Navbar /> */}
      <Routes />
      {/* <Footer />  */}
    </Router>
  );
};
export default App;
