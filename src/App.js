import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Project from "./pages/Project"
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container body_part">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Project />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;