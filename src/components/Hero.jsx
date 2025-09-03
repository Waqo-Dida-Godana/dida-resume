// src/components/Hero.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";

function Hero() {
  const typedEl = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(typedEl.current, {
      strings: [
        "Full Stack Developer 💻",
        "Freelancer 🌍",
        "Graphic Designer 🎨",
        "Website Developer 🌐",
        "Tech Enthusiast 🚀",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.current.destroy();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wako Dida Godana - Portfolio</title>
        <meta name="description" content="Portfolio of Wako Dida Godana" />
      </Helmet>

      {/* ======= Hero Section ======= */}
      <section id="hero" className="hero section">
        {/* Background circles */}
        <div className="background-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center">
              {/* Hero Text */}
              <div className="col-lg-12" data-aos="fade-right" data-aos-delay="100">
                <div className="hero-text">
                  <h1>
                    Wako <span className="accent-text">Dida</span>
                  </h1>
                  <h2>Full Stack Developer | Freelancer | Graphic Designer | Website Developer</h2>
                  <p className="lead">
                    Crafting innovative solutions as a <span ref={typedEl} className="typed"></span>
                  </p>
                  <p className="description">
                    I create visually appealing and highly functional digital experiences. Combining creativity with technology, I help businesses shine online and achieve their goals.
                  </p>

                  <p className="description">
                    Passionate about creating exceptional digital experiences that blend innovative design with functional development. Let's bring your vision to life.
                  </p>

                  <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                  </div>

                  <div className="social-links">
                    <a href="https://github.com/Waqo-Dida-Godana/Waqo-Dida-Godana" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/wako-dida-godana/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/wako.dida.godana" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com/wako_dida" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.tiktok.com/@wako.godana1" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-tiktok"></i>
                    </a>
                    <a href="https://www.instagram.com/wako_dida/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
