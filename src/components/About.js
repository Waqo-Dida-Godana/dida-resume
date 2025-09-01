// src/components/About.js
import React from "react";
import { Helmet } from "react-helmet-async";
import profileImg from "../assets/img/profile-img.png"; // replace with your image

function About() {
  return (
    <>
      <Helmet>
        <title>About - Wako Dida Godana</title>
        <meta
          name="description"
          content="Learn more about Wako Dida Godana, a passionate full stack developer, freelancer, and designer."
        />
      </Helmet>

      {/* ======= About Section ======= */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Left Column: Profile Card */}
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-image">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="img-fluid"
                    />
                  </div>
                  <div className="profile-badge">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                </div>
                <div className="profile-content">
                  <h3>Wako Dida Godana</h3>
                  <p className="profession">
                    Full Stack Developer &amp; Freelancer
                  </p>
                  <div className="contact-links">
                    <a href="mailto:info@waxzstarways.co.ke" className="contact-item">
                      <i className="bi bi-envelope"></i>
                      info@waxzstarways.co.ke
                    </a>
                    <a href="tel:+254716792928" className="contact-item">
                      <i className="bi bi-telephone"></i>
                      +254 716 792 928
                    </a>
                    <a href="#" className="contact-item">
                      <i className="bi bi-geo-alt"></i>
                      Marsabit, Kenya
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: About Content */}
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <div className="section-header">
                  <span className="badge-text">Get to Know Me</span>
                  <h2>Passionate About Creating Digital Experiences</h2>
                </div>

                <div className="description">
                  <p>
                    Excellent technical aptitude individual, experienced working
                    with core programming languages. Proficient in web design
                    technologies such as CMS, JavaScript/jQuery (AJAX, Dynamic UI),
                    Web Services, MySQL, plus strong analytical and communication
                    skills.
                  </p>
                  <p>
                    Full Stack Developer, Freelancer, Graphic Designer, Website
                    Designer & Developer. Available for freelance projects.
                  </p>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Specialization</span>
                      <span className="detail-value">UI/UX Design & Development</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Experience Level</span>
                      <span className="detail-value">Senior Professional</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Education</span>
                      <span className="detail-value">Computer Science, MIT</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Languages</span>
                      <span className="detail-value">English, Spanish, French</span>
                    </div>
                  </div>
                </div>

                <div className="cta-section">
                  <a href="#" className="btn btn-primary">
                    <i className="bi bi-download"></i>
                    Download Resume
                  </a>
                  <a href="#" className="btn btn-outline">
                    <i className="bi bi-chat-dots"></i>
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= Stats Section ======= */}
      <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="stats-wrapper">
                <div className="stats-item" data-aos="zoom-in" data-aos-delay="150">
                  <div className="icon-wrapper">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"></span>
                  <p>Happy Clients</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon-wrapper">
                    <i className="bi bi-journal-richtext"></i>
                  </div>
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"></span>
                  <p>Projects</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="250">
                  <div className="icon-wrapper">
                    <i className="bi bi-headset"></i>
                  </div>
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"></span>
                  <p>Hours Of Support</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon-wrapper">
                    <i className="bi bi-people"></i>
                  </div>
                  <span className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
