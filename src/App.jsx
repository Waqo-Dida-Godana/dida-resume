// src/App.js
import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ Use async version
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./assets/css/main.css"; // Global styles

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

      {/* Sidebar + Footer */}
      <Header />

      {/* Main page content */}
      <main id="main">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
