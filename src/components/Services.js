import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: "bi-briefcase",
      title: "UI/UX DESIGN",
      description:
        "Dedicated and passionate about UI/UX designs with a strong understanding of user-centered design principles. I create visually appealing and intuitive interfaces that enhance the overall user experience.",
    },
    {
      icon: "bi-card-checklist",
      title: "WEB DEVELOPMENT",
      description:
        "Specialized in building responsive and user-friendly websites. I use the latest web technologies to create custom sites, e-commerce platforms, and content management systems.",
    },
    {
      icon: "bi-bar-chart",
      title: "GRAPHIC DESIGN",
      description:
        "My design philosophy combines aesthetics with functionality. I create designs that visually engage audiences while effectively conveying client messages and goals.",
    },
    {
      icon: "bi-binoculars",
      title: "CYBER SERVICES",
      description:
        "Providing tailored cyber services for small and medium-sized businesses. Connect, relax, and explore: unleash the power of technology at my remote Cyber Cafe.",
    },
    {
      icon: "bi-brightness-high",
      title: "WEB APP DEVELOPMENT",
      description:
        "I develop robust, feature-rich mobile and web applications. From concept to deployment, I ensure seamless user experiences and business goal alignment.",
    },
    {
      icon: "bi-calendar4-week",
      title: "IT CONSULTANCY SERVICES",
      description:
        "I provide strategic guidance and IT solutions to optimize infrastructure. I assess current systems, identify gaps, and recommend best practices for efficiency.",
    },
  ];

  return (
    <section
      id="services"
      style={{ padding: "60px 20px", background: "#f9f9f9" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#023a70" }}>
          MY SERVICES
        </h2>
        <p style={{ maxWidth: "800px", margin: "10px auto", color: "#555" }}>
          As an IT Expert, I provide technical expertise and support across
          various IT systems and infrastructure. With strong problem-solving
          skills and deep understanding of IT systems, I diagnose and resolve
          complex issues. Here are the services I offer:
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                fontSize: "2rem",
                color: "#023a70",
                marginBottom: "15px",
              }}
            >
              <i className={`bi ${service.icon}`}></i>
            </div>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              {service.title}
            </h4>
            <p style={{ color: "#555", marginTop: "10px", lineHeight: "1.6" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
