import React from 'react';
import ThemeProvider from './Context/ThemeContext.js';
import Contactus from './Pages/Contactus.js';
import Home from './Pages/Home.js';
import { AboutRoutes } from './Pages/About.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import './styles.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about/*" element={<AboutRoutes/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
