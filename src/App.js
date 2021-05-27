import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Routes from "./routes"
import Navbar from "./client/Navba/Navbar"
import Footer from "./Footer/Footer"

import React from "react"

import AuthPage from "./pages/AuthPage"

import PlanningPage from "./client/Planning/pages/PlanningPage"

function App() {
  return (
    <>
      <Router>
        <AwardsCard />
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </>
  )
}

export default App
