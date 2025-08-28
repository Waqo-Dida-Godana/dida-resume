import React from "react";
import { Helmet } from "react-helmet-async";
import profileImg from "../assets/img/profile-img.png"; // ✅ Use your actual profile path

function About() {
  return (
    <>
      <section id="about" className="about" style={styles.aboutSection}>
        <Helmet>
          <title>About - Wako Dida Godana</title>
          <meta
            name="description"
            content="Learn more about Wako Dida Godana, a passionate full stack developer, freelancer, and designer based in Nairobi, Kenya."
          />
        </Helmet>

        <div className="container">
          {/* ===== Section Title ===== */}
          <div className="section-title text-center" style={styles.sectionTitleWrapper}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.introText}>
              Excellent technical aptitude individual, experienced working with
              core programming languages. Proficient in web design technologies
              such as CMS, JavaScript/jQuery (AJAX, Dynamic UI), Web Services,
              MySQL, plus strong analytical and communication skills.
            </p>
          </div>

          <div className="row align-items-center">
            {/* ===== Left Side Image ===== */}
            <div className="col-lg-4 text-center" data-aos="fade-right">
              <img
                src={profileImg}
                className="img-fluid rounded shadow"
                alt="profile"
                style={styles.profileImg}
              />
            </div>

            {/* ===== Right Side Content ===== */}
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 style={styles.subHeading}>Basic Information</h3>
              <p className="fst-italic" style={styles.italic}>
                Full Stack Developer, Freelancer, Graphic Designer, Website
                Designer & Developer.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul style={styles.infoList}>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>waxzstarways.co.ke</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong>{" "}
                      <span>+254 716 792 928</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Marsabit, Kenya</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul style={styles.infoList}>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>info@waxzstarways.co.ke</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Smooth Scroll Global CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </>
  );
}

/* ===== Inline Styling ===== */
const styles = {
  aboutSection: {
    padding: "40px 0", // 🔥 reduced from 60px
    background: "#fff",
  },
  sectionTitleWrapper: {
    marginTop: "0px", // 🔥 remove top margin
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "15px",
    paddingBottom: "15px",
    position: "relative",
    color: "#173b6c",
  },
  introText: {
    fontSize: "16px",
    color: "#444",
    maxWidth: "900px",
    margin: "0 auto",
  },
  profileImg: {
    borderRadius: "10px",
    maxWidth: "100%",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#173b6c",
    marginBottom: "15px",
  },
  italic: {
    color: "#555",
    marginBottom: "20px",
  },
  infoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "15px",
    color: "#444",
  },
};

export default About;
