// src/components/About.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Initialize PureCounter with scroll restart
    new PureCounter({
      selector: ".purecounter",
      start: 0,
      once: false,  // 🔄 Animate every time visible
      pulse: 2,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Wako Dida Godana</title>
        <meta
          name="description"
          content="Learn more about Wako Dida Godana, a passionate IT professional, full stack developer, freelancer, and IT trainer."
        />
      </Helmet>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="profile-card">
                <div className="profile-content">
                  <h3>About Me</h3>
                  <p className="profession">
                    🌐 Passionate IT Professional | 💻 Full Stack Developer | 📚 Certified IT Trainer
                  </p>

                  <div className="contact-links">
                    <a href="mailto:waqogodana98@gmail.com" className="contact-item">
                      <i className="bi bi-envelope"></i>
                      waqogodana98@gmail.com
                    </a>
                    <a href="tel:+254716792928" className="contact-item">
                      <i className="bi bi-telephone"></i>
                      +254 716 792 928
                    </a>
                    <a href="https://dida.maganatti.com" className="contact-item">
                      <i className="bi bi-globe"></i>
                      dida.maganatti.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <div className="section-header">
                  <a href="#resume" className="badge-text">
                    Get to Know Me
                  </a>
                  <h2>Passionate About Creating Digital Experiences</h2>
                </div>

                <div className="description">
                  <p>
                    I’m <strong>Wako Dida Godana</strong> — a passionate IT professional with a
                    <strong> BSc in Information Technology</strong> from Mount Kenya University
                    and <strong>CCNA certification</strong> from MKU Cisco Campus.
                  </p>
                  <p>
                    As a <strong>certified TVET Trainer</strong> and Diploma holder in Technical Trainer Education,
                    I combine academic expertise with hands-on industry experience. Currently, I serve as the
                    <strong> Founder & Lead Developer at Maganatti Tech Solution Ltd</strong>, where I’m building
                    innovative platforms like <strong>E-Maganatti</strong>.
                  </p>
                  <p>
                    Beyond development, I share knowledge as an IT trainer, create gaming content under
                    <strong> WDG Gaming</strong>, and offer freelance consulting & IT support.
                  </p>
                  <p>
                    Excellent technical aptitude individual, experienced working with core programming languages.
                    Proficient in web design technologies such as CMS, JavaScript/jQuery (AJAX, Dynamic UI),
                    Web Services, MySQL, plus strong analytical and communication skills.
                  </p>
                  <p>
                    <strong>Roles:</strong> Full Stack Developer, Freelancer, Graphic Designer, Website Designer & Developer.
                    <br />
                    <em>Available for freelance projects.</em>
                  </p>
                </div>

                              {/* Inline Stats */}
                <div className="stats-grid">
                  <div className="stat-item">
                    <div
                      className="purecounter stat-number"
                      data-purecounter-start="0"
                      data-purecounter-end="150"
                      data-purecounter-duration="1"
                    ></div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div
                      className="purecounter stat-number"
                      data-purecounter-start="0"
                      data-purecounter-end="5"
                      data-purecounter-duration="1"
                    ></div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div
                      className="purecounter stat-number"
                      data-purecounter-start="0"
                      data-purecounter-end="98"
                      data-purecounter-duration="1"
                    ></div>
                    <div className="stat-label">Client Satisfaction (%)</div>
                  </div>
                </div>

                {/* Extra Details */}
                <div className="details-grid">
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Specialization</span>
                      <span className="detail-value">Full Development & Digital Solutions</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Experience Level</span>
                      <span className="detail-value">Senior Professional</span>
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-item">
                      <span className="detail-label">Education</span>
                      <span className="detail-value">BSc IT (Mount Kenya University)</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Languages</span>
                      <span className="detail-value">English, Swahili</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="cta-section">
                  <a href="#" className="btn btn-primary">
                    <i className="bi bi-download"></i>
                    Download Resume
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    <i className="bi bi-chat-dots"></i>
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section id="stats" className="stats section light-background">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="stats-wrapper">
                <div className="stats-item" data-aos="zoom-in" data-aos-delay="150">
                  <div className="icon-wrapper">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="120"
                    data-purecounter-duration="1"
                  ></span>
                  <p>Happy Clients</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon-wrapper">
                    <i className="bi bi-journal-richtext"></i>
                  </div>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="150"
                    data-purecounter-duration="1"
                  ></span>
                  <p>Projects Completed</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="250">
                  <div className="icon-wrapper">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="5"
                    data-purecounter-duration="1"
                  ></span>
                  <p>Years of Experience</p>
                </div>

                <div className="stats-item" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon-wrapper">
                    <i className="bi bi-people"></i>
                  </div>
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="98"
                    data-purecounter-duration="1"
                  ></span>
                  <p>Client Satisfaction (%)</p>
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
