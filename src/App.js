import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Membership from "./components/Membership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./components/Login"; // ✅ Make sure filename is Login.jsx

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar /> Navbar will always be visible

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
            <>
              <Hero />
              <About />
              <Classes />
              <Membership />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
