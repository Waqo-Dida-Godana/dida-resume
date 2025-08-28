import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="resume" className="resume" style={styles.resumeSection}>
      <Helmet>
        <title>Resume - Wako Dida Godana</title>
        <meta
          name="description"
          content="Resume of Wako Dida Godana - Full Stack Developer, Trainer, Freelancer, and Designer."
        />
      </Helmet>

      <div className="container">
        {/* ===== Section Title ===== */}
        <div className="section-title text-center mb-5" data-aos="fade-down">
          <h2 style={styles.sectionTitle}>MY RESUME</h2>
        </div>

        <div className="row">
          {/* ===== Left Column (Education) ===== */}
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="resume-title" style={styles.subHeading}>
              OVERVIEW
            </h3>
            <div className="resume-item pb-0" style={styles.resumeItem} data-aos="zoom-in">
              <h4>Career Objective</h4>
              <p>
                <em>
                  To be compliant with rules and regulations while taking up
                  duties and responsibilities; with minimal supervision, either
                  independently or as a team player, in different environments
                  and under changing working conditions where my abilities,
                  skills, qualification and experience will lead to the
                  accomplishment of the set goals and objectives.
                </em>
              </p>
            </div>

            <h3 className="resume-title" style={styles.subHeading}>
              EDUCATION
            </h3>

            {/* Latest First */}
            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up">
              <h4>Diploma in Technical Trainer Education (Computer Studies)</h4>
              <h5>2023 - 2024</h5>
              <p><em>Kenya School of TVET, Nairobi.</em></p>
              <p>Post Graduate Diploma in Education</p>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="100">
              <h4>Cisco Certified Networking Academy (CCNA)</h4>
              <h5>2018 - 2021</h5>
              <p><em>MKU CISCO, Nairobi.</em></p>
              <p>Cisco Professional Certification</p>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="200">
              <h4>Bachelor of Science in Information Technology</h4>
              <h5>2017 - 2021</h5>
              <p><em>Mount Kenya University, Thika.</em></p>
              <p>Second class honors Upper Division</p>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="300">
              <h4>Kenya Certificate of Secondary Education (KCSE)</h4>
              <h5>2013 - 2016</h5>
              <p><em>Arabuko Forest High School, Kilifi.</em></p>
              <p>Mean score: B minus (B-)</p>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="400">
              <h4>Kenya Certificate of Primary Education (KCPE)</h4>
              <h5>2005 - 2012</h5>
              <p><em>Al-Hidaya Muslim Primary School, Marsabit.</em></p>
              <p>Marks: 347</p>
            </div>
          </div>

          {/* ===== Right Column (Professional Experience) ===== */}
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="resume-title" style={styles.subHeading}>
              PROFESSIONAL EXPERIENCE
            </h3>

            {/* Latest First */}
            <div className="resume-item" style={styles.resumeItem} data-aos="zoom-in">
              <h4>Computer Studies Teacher – DKCHA</h4>
              <h5>May 2024 – Aug 2024</h5>
              <p><em>Dakabaricha Mixed Day Secondary School, Marsabit.</em></p>
              <ul>
                <li>Taught computer-related topics with theoretical and practical focus.</li>
                <li>Used hands-on activities to solidify learning.</li>
                <li>Encouraged curiosity and supported students in a positive environment.</li>
                <li>Developed teaching methods and gained insights into the field.</li>
              </ul>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="100">
              <h4>ICT Clerk – IEBC</h4>
              <h5>July 2022 – Sept 2022</h5>
              <p><em>Independent Electoral and Boundaries Commission, Marsabit.</em></p>
              <ul>
                <li>Provided ICT support at the tallying centre.</li>
                <li>Configured and tested KIEMS kits for election readiness.</li>
                <li>Trained staff and supported presiding officers.</li>
                <li>Handled data backup, restoration, and troubleshooting.</li>
              </ul>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="200">
              <h4>Computer Studies Teacher – MMDSS</h4>
              <h5>2021 – 2022</h5>
              <p><em>Marsabit Mixed Day Secondary School, Marsabit.</em></p>
              <ul>
                <li>Taught computer studies (Form 1 - Form 4).</li>
                <li>Guided students in KCSE computer projects.</li>
                <li>Handled practical computer applications training.</li>
                <li>Set and marked exams.</li>
              </ul>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="300">
              <h4>ICT Trainer</h4>
              <h5>June 2021 – Present</h5>
              <p><em>Marsabit Islamic Institute (Direct-Aid/AMA), Marsabit.</em></p>
              <ul>
                <li>Taught Microsoft Office packages.</li>
                <li>Installed & configured hardware/software.</li>
                <li>Provided system & user support.</li>
                <li>Troubleshot hardware issues.</li>
              </ul>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="400">
              <h4>Self-Established Full Stack Developer / Freelancer</h4>
              <h5>2017 – Present</h5>
              <p><em>Waxzstarways Technologies Solution Ltd, Marsabit.</em></p>
              <ul>
                <li>Designed, developed, and deployed engaging web applications.</li>
                <li>Gathered requirements, fixed bugs, maintained sites, and followed best practices.</li>
                <li>
                  Owned websites:{" "}
                  <a href="https://dida.maganatti.com" target="_blank" rel="noreferrer">dida.maganatti.com</a>,{" "}
                  <a href="https://maganatti.com" target="_blank" rel="noreferrer">maganatti.com</a>,{" "}
                  <a href="https://waxzstarways.co.ke" target="_blank" rel="noreferrer">waxzstarways.co.ke</a>,{" "}
                  <a href="https://deen.waxzstarways.co.ke" target="_blank" rel="noreferrer">deen.waxzstarways.co.ke</a>,{" "}
                  <a href="https://inspire.waxzstarways.co.ke" target="_blank" rel="noreferrer">inspire.waxzstarways.co.ke</a>,{" "}
                  <a href="https://dev.waxzstarways.co.ke" target="_blank" rel="noreferrer">dev.waxzstarways.co.ke</a>
                </li>
              </ul>
            </div>

            <div className="resume-item" style={styles.resumeItem} data-aos="fade-up" data-aos-delay="500">
              <h4>Data Collection Enumerator – KCSAP</h4>
              <h5>June 2021 – July 2021</h5>
              <p><em>Kenya Climate Smart Agriculture Project, Marsabit.</em></p>
              <ul>
                <li>Interviewed sampled households and re-collected data.</li>
                <li>Ensured respondents understood survey objectives & questions.</li>
                <li>Validated and double-checked data for accuracy.</li>
                <li>Reported progress daily and flagged issues.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Download CV Button ===== */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="300">
          <a href="/resume.pdf" download className="btn-download" style={styles.downloadBtn}>
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===== Inline Styles ===== */
const styles = {
  resumeSection: {
    padding: "60px 0",
    background: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "40px",
    color: "#173b6c",
  },
  subHeading: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "20px 0",
    color: "#2c4964",
  },
  resumeItem: {
    marginBottom: "30px",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  downloadBtn: {
    display: "inline-block",
    background: "#173b6c",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: "50px",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
  },
};

// Hover effect for download button
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  .btn-download:hover {
    background: #2c4964 !important;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;
document.head.appendChild(styleSheet);

export default Resume;
