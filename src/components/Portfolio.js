import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import profileImg from "../assets/img/profile-img.png";

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "App Project 1",
      category: "App",
      img: profileImg,
      description:
        "This is an example of an App project with details about features and technologies used.",
    },
    {
      id: 2,
      title: "Web Project 2",
      category: "Web",
      img: profileImg,
      description:
        "This is an example of a Web project that showcases responsive design and backend integration.",
    },
    {
      id: 3,
      title: "Card Project 3",
      category: "Card",
      img: profileImg,
      description:
        "This is a creative Card design project that highlights modern UI/UX elements.",
    },
  ];

  const sectionStyle = {
    container: { backgroundColor: "#f5f8fd", padding: "60px 0" },
    sectionTitle: { fontSize: "32px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", color: "#173b6c" },
    sectionDesc: { maxWidth: "600px", margin: "0 auto 40px auto", fontSize: "16px", color: "#444" },
    projectCard: { cursor: "pointer", flex: "1 0 30%", position: "relative", overflow: "hidden", borderRadius: "8px" },
    projectCategory: { position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", background: "#149ddd", color: "#fff", padding: "5px 15px", borderRadius: "20px" },
    modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "20px" },
    modalContent: { background: "#fff", borderRadius: "10px", maxWidth: "800px", width: "100%", padding: "30px", position: "relative" },
    modalCloseBtn: { position: "absolute", top: "15px", right: "15px", background: "#149ddd", border: "none", color: "#fff", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" },
    modalTitle: { fontSize: "28px", marginBottom: "15px", color: "#173b6c" },
    modalDesc: { fontSize: "16px", lineHeight: "24px", color: "#444" },
  };

  return (
    <section id="portfolio" style={sectionStyle.container}>
      <div className="container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title text-center mb-5">
          <h2 style={sectionStyle.sectionTitle}>Portfolio</h2>
          <p style={sectionStyle.sectionDesc}>
            Here are some of my works and projects.
          </p>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6 portfolio-item"
              style={sectionStyle.projectCard}
              onClick={() => setActiveProject(project)}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={sectionStyle.projectCategory}>{project.category}</div>
            </div>
          ))}
        </div>

        {/* Portfolio Details Modal */}
        {activeProject && (
          <div style={sectionStyle.modalOverlay} onClick={() => setActiveProject(null)}>
            <div style={sectionStyle.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveProject(null)}
                style={sectionStyle.modalCloseBtn}
              >
                ✕
              </button>

              <img
                src={activeProject.img}
                alt={activeProject.title}
                style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
              />
              <h2 style={sectionStyle.modalTitle}>{activeProject.title}</h2>
              <p style={sectionStyle.modalDesc}>{activeProject.description}</p>

              <ul style={{ marginTop: "20px" }}>
                <li><strong>Category:</strong> {activeProject.category}</li>
                <li><strong>Client:</strong> Example Client</li>
                <li><strong>Project date:</strong> Jan 2025</li>
                <li><strong>Project URL:</strong> <a href="#">www.example.com</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
