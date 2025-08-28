import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroBg from "../assets/img/hero-bg.png";
import { Helmet } from "react-helmet-async";

function Hero() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
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
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      {/* ✅ Dynamic Title + Meta */}
      <Helmet>
        <title>Wako Dida Godana - Resume</title>
        <meta
          name="description"
          content="Portfolio and Resume of Wako Dida Godana, Full Stack Developer and Freelancer"
        />
      </Helmet>

      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh - 70px)", // ✅ screen height minus header
          width: "100%",
          position: "relative",
          zIndex: 1,
          paddingLeft: "260px", // space for sidebar header (desktop)
          display: "flex",
          alignItems: "center", // ✅ vertical centering
          justifyContent: "center", // ✅ horizontal centering
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <div className="hero-container" data-aos="fade-in">
          <h1 style={styles.heroTitle}>Wako Dida Godana</h1>
          <p style={styles.heroSubtitle}>
            I'm <span ref={el} className="typed" style={styles.typed}></span>
          </p>
        </div>

        {/* ✅ Scroll Down Indicator */}
        <a href="#about" className="scroll-down">
          <i className="bi bi-chevron-double-down"></i>
        </a>
      </section>

      {/* ✅ Extra CSS */}
      <style>
        {`
          /* Responsive */
          @media (max-width: 991px) {
            #hero {
              padding-left: 0 !important;
              height: calc(100vh - 90px) !important; /* ✅ adjust for taller mobile header */
            }
            #hero h1 {
              font-size: 36px !important;
              line-height: 40px !important;
            }
            #hero p {
              font-size: 20px !important;
              line-height: 24px !important;
            }
          }

          /* Scroll Down Arrow */
          .scroll-down {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            font-size: 28px;
            animation: bounce 1.8s infinite;
            text-decoration: none;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
            40% { transform: translate(-50%, -10px); }
            60% { transform: translate(-50%, -5px); }
          }
        `}
      </style>
    </>
  );
}

const styles = {
  heroTitle: {
    margin: "0 0 10px 0",
    fontSize: "64px",
    fontWeight: 700,
    lineHeight: "56px",
    color: "#fff",
  },
  heroSubtitle: {
    color: "#fff",
    fontSize: "26px",
    marginTop: "10px",
  },
  typed: {
    color: "#18d26e", // highlight like iPortfolio
    paddingLeft: "5px",
  },
};

export default Hero;
