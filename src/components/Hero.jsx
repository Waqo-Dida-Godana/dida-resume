// src/components/Hero.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Helmet } from "react-helmet-async";
import heroProfile from "../assets/img/profile-img.png"; // ✅ Import the image

function Hero() {
  const typedEl = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(typedEl.current, {
      strings: [
        "Full Stack Developer 💻",
        "Freelancer 🌍",
        "Graphic Designer 🎨",
        "Website Designer 🌐",
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
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <div className="hero-text">
                  <h1>
                    Wako <span className="accent-text">Dida</span>
                  </h1>
                  <h2>Wako Dida Godana</h2>
                  <p className="lead">
                    I'm a <span ref={typedEl} className="typed"></span>
                  </p>
                  <p className="description">
                    Passionate about creating exceptional digital experiences that
                    blend innovative design with functional development. Let's bring
                    your vision to life.
                  </p>

                  <div className="hero-actions">
                    <a href="#portfolio" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Get In Touch</a>
                  </div>

                  <div className="social-links">
                    <a href="#"><i className="bi bi-dribbble"></i></a>
                    <a href="#"><i className="bi bi-behance"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <div className="hero-visual">
                  <div className="profile-container">
                    <div className="profile-background"></div>
                    <img
                      src={heroProfile}
                      alt="Wako Dida Godana"
                      className="profile-image"
                    />
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
