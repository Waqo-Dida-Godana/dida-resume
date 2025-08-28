// src/components/Header.js
import React, { useState, useEffect } from "react";
import profileImg from "../assets/img/profile-img.png"; // Update with your image path

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll-based active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile nav toggle button */}
      <i
        className={`bi ${isOpen ? "bi-x" : "bi-list"} mobile-nav-toggle d-xl-none`}
        onClick={toggleMenu}
        style={{
          fontSize: "28px",
          position: "fixed",
          top: "20px",
          right: "20px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      ></i>

      {/* ======= Header ======= */}
      <header id="header" className={isOpen ? "mobile-nav-active" : ""}>
        <div className="d-flex flex-column">
          {/* Profile Section */}
          <div className="profile text-center mt-4">
            <img
              src={profileImg}
              alt="Wako Dida Godana"
              className="img-fluid rounded-circle"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                border: "4px solid #fff",
              }}
            />
            <h1 className="text-light mt-3">
              <a href="/">Wako Dida Godana</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/dev_dida" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://www.facebook.com/waxzstarways/" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://github.com/wariodida98" className="github">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCsFVzJaF6varo0fFDv1p5GQ"
                className="youtube"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/mwlite/in/dida-waqo-3a7954206"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Navbar Section */}
          <nav id="navbar" className={`nav-menu navbar mt-4 ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a
                  href="#hero"
                  className={`nav-link scrollto ${activeSection === "hero" ? "active" : ""}`}
                >
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link scrollto ${activeSection === "about" ? "active" : ""}`}
                >
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={`nav-link scrollto ${activeSection === "resume" ? "active" : ""}`}
                >
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`nav-link scrollto ${activeSection === "skills" ? "active" : ""}`}
                >
                  <i className="bx bx-bar-chart-alt"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`nav-link scrollto ${activeSection === "portfolio" ? "active" : ""}`}
                >
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`nav-link scrollto ${activeSection === "services" ? "active" : ""}`}
                >
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link scrollto ${activeSection === "contact" ? "active" : ""}`}
                >
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* End Navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}

export default Header;
