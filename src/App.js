import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header /> {/* ✅ Keeps your menu */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              <section className="container text-center my-5">
                <h1>Dida Resume</h1>
                <p>Welcome to my resume web app 🚀</p>
              </section>

              <main id="main">
                <About />
                <Resume />   {/* ✅ Resume first */}
                <Skills />   {/* ✅ Skills after Resume */}
                <Services />
                <Portfolio />
                <Contact />
              </main>
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
