
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AwardsPage from './pages/AwardsPage/AwardsPage';
import Routes from './routes'
import Navbar from './client/Navba/Navbar';
import AuthPage from './pages/AuthPage'
import Footer from './Footer/Footer';
import ProgressBar from './client/ProgressBar'

import PlanningPage from "./client/Planning/pages/PlanningPage"

function App() {
  return (
    <Router>
      <AuthPage />

      <AwardsPage />
    <ProgressBar />
      <Navbar />
      <Routes />
      <Footer />  
      <PlanningPage />
      
    </Router>
  )
}
export default App
