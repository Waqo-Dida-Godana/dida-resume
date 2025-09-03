// src/App.js
import React from "react";
import { Helmet } from "react-helmet-async"; 
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import "./assets/css/main.css"; 

function App() {
  return (
    <div className="App">
      {/* Page metadata */}
      <Helmet>
        <title>Wako Dida Godana - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Wako Dida Godana - Software Developer, Designer, and Tech Enthusiast."
        />
      </Helmet>

      {/* Sidebar / Header */}
      <Header />

      {/* Main content */}
      <main className="main">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
