import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BirthdayPage from './Components/BirthdayPage';
import ContactPage from './Components/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

const Allroutes = () => {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/birthday" element={<BirthdayPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default Allroutes
