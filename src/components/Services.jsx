// src/components/ServicesSection.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "UI/UX DESIGN",
      description:
        "Dedicated and passionate about UI/UX design with a strong understanding of user-centered design principles. I create visually appealing and intuitive interfaces that enhance the overall user experience.",
      icon: "bi bi-palette",
      link: "/service-details",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Specialized in building responsive and user-friendly websites. I use the latest web technologies to create custom sites, e-commerce platforms, and content management systems.",
      icon: "bi bi-code-slash",
      link: "/service-details",
    },
    {
      title: "GRAPHIC DESIGN",
      description:
        "My design philosophy combines aesthetics with functionality. I create designs that visually engage audiences while effectively conveying client messages and goals.",
      icon: "bi bi-megaphone",
      link: "/service-details",
    },
    {
      title: "CYBER SERVICES",
      description:
        "Providing tailored cyber services for small and medium-sized businesses. Connect, relax, and explore: unleash the power of technology at my remote Cyber Cafe.",
      icon: "bi bi-gear",
      link: "/service-details",
    },
    {
      title: "WEB APP DEVELOPMENT",
      description:
        "I develop robust, feature-rich mobile and web applications. From concept to deployment, I ensure seamless user experiences and business goal alignment.",
      icon: "bi bi-browser-safari",
      link: "/service-details",
    },
    {
      title: "IT CONSULTANCY SERVICES",
      description:
        "I provide strategic guidance and IT solutions to optimize infrastructure. I assess current systems, identify gaps, and recommend best practices for efficiency.",
      icon: "bi bi-graph-up",
      link: "/service-details",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Maganatti</title>
        <meta
          name="description"
          content="IT services offered by Maganatti Dida Godana including UI/UX, web development, graphic design, cyber services, web app development, and IT consultancy."
        />
      </Helmet>

      <section id="services" className="services section" style={{ background: "#1c1c1c", color: "#fff" }}>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            As an IT Expert, I provide technical expertise and support across
            various IT systems and infrastructure. With strong problem-solving
            skills and deep understanding of IT systems, I diagnose and resolve
            complex issues.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Service Header */}
          <div className="service-header">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="service-intro">
                  <h2 className="service-heading">
                    <div>Innovative business</div>
                    <div>
                      <span>performance solutions</span>
                    </div>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="service-summary">
                  <p>
                    We integrate forward-thinking strategies, creative
                    approaches, and state-of-the-art technologies to deliver
                    exceptional customer experiences that drive growth and
                    engage target markets.
                  </p>
                  <a href="/services" className="service-btn">
                    View All Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards (3 columns per row) */}
          <div className="row justify-content-center">
            {services.map((s, idx) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
                key={idx}
              >
                <div className="service-card position-relative z-1">
                  <div className="service-icon">
                    <i className={s.icon}></i>
                  </div>
                  <a
                    href={s.link}
                    className="card-action d-flex align-items-center justify-content-center rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <h3>
                    <a href={s.link}>{s.title}</a>
                  </h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline CSS */}
        <style jsx="true">{`
          .services .section-title {
            text-align: center;
            margin-bottom: 40px;
          }
          .service-header .service-heading div {
            font-weight: 600;
            font-size: 1.5rem;
            color: #fff;
          }
          .service-summary p {
            margin-bottom: 15px;
            color: #ddd;
          }
          .service-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #56b8f0;
            font-weight: 500;
          }
          .service-card {
            background: #2a2a2a;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            padding: 25px;
            color: #fff;
            height: 100%;
          }
          .service-card h3,
          .service-card p {
            color: #fff;
          }
          .service-card a {
            color: #56b8f0;
            text-decoration: none;
          }
          .service-card a:hover {
            color: #1f90d8;
          }
          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }
          .service-icon i {
            font-size: 2rem;
            color: #56b8f0;
            margin-bottom: 15px;
          }
          .card-action {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background: #56b8f0;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            text-decoration: none;
          }
          .card-action:hover {
            background: #1f90d8;
          }
        `}</style>
      </section>
    </>
  );
};

export default ServicesSection;
