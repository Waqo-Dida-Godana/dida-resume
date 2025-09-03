// src/components/Portfolio.js
import React, { useState } from "react";
import Modal from "react-modal";

// Local images
import calculatorImg from "../assets/img/portfolio/calculator.png";
import loginFormImg from "../assets/img/portfolio/login-form.png";
import numberGuessImg from "../assets/img/portfolio/number-guessing.png";
import resumeImg from "../assets/img/portfolio/resume.png";
import weatherAppImg from "../assets/img/portfolio/weather-app.png";

Modal.setAppElement("#root");

const categories = [
  { label: "All Projects", key: "all" },
  { label: "UI/UX DESIGN", key: "ui-ux-design" },
  { label: "WEB DEVELOPMENT", key: "web-development" },
  { label: "GRAPHIC DESIGN", key: "graphic-design" },
  { label: "CYBER SERVICES", key: "cyber-services" },
  { label: "WEB APP DEVELOPMENT", key: "web-app-development" },
];

const portfolioItems = [
  {
    title: "Maganatti Calculator",
    category: "WEB DEVELOPMENT",
    filterKey: "web-development",
    image: calculatorImg,
  },
  {
    title: "Login Form",
    category: "UI/UX DESIGN",
    filterKey: "ui-ux-design",
    image: loginFormImg,
  },
  {
    title: "Number Guessing Game",
    category: "GRAPHIC DESIGN",
    filterKey: "graphic-design",
    image: numberGuessImg,
  },
  {
    title: "Resume Project",
    category: "CYBER SERVICES",
    filterKey: "cyber-services",
    image: resumeImg,
  },
  {
    title: "Weather App",
    category: "WEB APP DEVELOPMENT",
    filterKey: "web-app-development",
    image: weatherAppImg,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage("");
  };

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filterKey === activeCategory);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
         Explore a curated collection of my projects, showcasing creativity, technical expertise, and a commitment to crafting intuitive and visually engaging digital experiences.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3 filter-sidebar">
            <ul className="portfolio-filters isotope-filters">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className={activeCategory === cat.key ? "filter-active" : ""}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Items */}
          <div className="col-lg-9">
            <div className="row gy-4 portfolio-container">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 portfolio-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(item.image)}
                >
                  <div className="portfolio-wrap">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">{item.category}</span>
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Portfolio Image"
        style={{
          content: {
            maxWidth: "800px",
            margin: "auto",
            height: "auto",
            borderRadius: "10px",
            padding: "0",
            border: "none",
            overflow: "hidden",
          },
          overlay: {
            backgroundColor: "rgba(0,0,0,0.75)",
            zIndex: 1000,
          },
        }}
      >
        <img src={modalImage} alt="Portfolio Item" className="img-fluid" />
      </Modal>
    </section>
  );
};

export default Portfolio;
