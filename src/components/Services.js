import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
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
        "Dedicated and passionate about UI/UX design with a strong understanding of user-centered design principles. I create visually appealing and intuitive interfaces that enhance the overall user experience.",
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

  const sectionStyle = {
    container: { padding: "60px 0", background: "#f9f9f9" },
    sectionTitle: { fontSize: "32px", fontWeight: 700, marginBottom: "40px", color: "#173b6c", textTransform: "uppercase" },
    sectionDesc: { marginBottom: "40px", fontSize: "16px", color: "#444" },
    card: {
      position: "relative",
      background: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      cursor: "pointer",
      transition: "transform 0.3s",
    },
    iconBox: {
      float: "left",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "54px",
      height: "54px",
      background: "#149ddd",
      borderRadius: "50%",
      border: "1px solid #149ddd",
      transition: "0.5s",
    },
    icon: { color: "#fff", fontSize: "24px" },
    cardTitle: { marginLeft: "80px", fontWeight: "700", marginBottom: "15px", fontSize: "18px" },
    cardDesc: { marginLeft: "80px", lineHeight: "24px", fontSize: "14px", color: "#555" },
  };

  return (
    <section id="services" style={sectionStyle.container}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-5" data-aos="fade-down">
          <h2 style={sectionStyle.sectionTitle}>MY SERVICES</h2>
          <p style={sectionStyle.sectionDesc}>
            As an IT Expert, I provide technical expertise and support across various IT systems and infrastructure. With strong problem-solving skills and deep understanding of IT systems, I diagnose and resolve complex issues. Here are the services I offer:
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
              style={sectionStyle.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={sectionStyle.iconBox} className="icon-box">
                <i className={`bi ${service.icon}`} style={sectionStyle.icon}></i>
              </div>
              <h4 style={sectionStyle.cardTitle}>{service.title}</h4>
              <p style={sectionStyle.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hover effect for icon background color
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .icon-box:hover {
    background: #fff !important;
  }
  .icon-box:hover i {
    color: #149ddd !important;
  }
`;
document.head.appendChild(styleSheet);

export default Services;
