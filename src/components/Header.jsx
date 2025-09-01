// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "Home", icon: "bi-house" },
    { id: "about", label: "About", icon: "bi-person" },
    { id: "resume", label: "Resume", icon: "bi-file-earmark-text" },
    { id: "skills", label: "Skills", icon: "bi-bar-chart" },
    { id: "portfolio", label: "Portfolio", icon: "bi-images" },
    { id: "services", label: "Services", icon: "bi-hdd-stack" },
    { id: "contact", label: "Contact", icon: "bi-envelope" },
  ];

  const socialIcons = [
    { href: "#", icon: "bi-twitter-x" },
    { href: "#", icon: "bi-facebook" },
    { href: "#", icon: "bi-instagram" },
    { href: "#", icon: "bi-skype" },
    { href: "#", icon: "bi-linkedin" },
  ];

  return (
    <header className="header dark-background d-flex flex-column justify-content-center">
      {/* Mobile toggle */}
      <i
        className={`header-toggle d-xl-none bi ${isOpen ? "bi-x" : "bi-list"}`}
        onClick={toggleMenu}
      ></i>

      <div className={`header-container d-flex flex-column align-items-start ${isOpen ? "open" : ""}`}>
        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  <i className={`bi ${link.icon} navicon`}></i> {link.label}
                </a>
              </li>
            ))}

            {/* Example Dropdown */}
            <li className="dropdown">
              <a href="#">
                <i className="bi bi-menu-button navicon"></i> Dropdown{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown">
                  <a href="#">
                    Deep Dropdown <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="social-links text-center mt-3">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.href}>
              <i className={`bi ${item.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
