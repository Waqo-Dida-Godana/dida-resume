// src/components/ResumeSection.js
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/img/profile-img.png";

const ResumeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const barsRef = useRef([]);
  const percRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const value = parseInt(bar.getAttribute("data-value"), 10);

            // Smooth animation using requestAnimationFrame
            let start = null;
            const duration = 1500; // 1.5 seconds
            const idx = barsRef.current.indexOf(bar);

            const animate = (timestamp) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const easedProgress = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress; // easeInOut

              const currentValue = Math.floor(value * easedProgress);
              bar.style.width = currentValue + "%";
              if (percRef.current[idx]) {
                percRef.current[idx].innerText = currentValue + "%";
                percRef.current[idx].style.left = currentValue + "%";
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                // Ensure it ends exactly at value
                bar.style.width = value + "%";
                if (percRef.current[idx]) {
                  percRef.current[idx].innerText = value + "%";
                  percRef.current[idx].style.left = value + "%";
                }
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    barsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  const location = "Marsabit, Kenya";
  const email = "you@example.com";
  const phone = "+254 700 000 000";
  const linkedin = "https://linkedin.com/in/your-handle";
  const cvUrl = "/assets/docs/Maganatti_CV.pdf";

  const careerObjective =
    "Founder and full-stack developer with hands-on experience building and deploying responsive web applications end-to-end. Comfortable across the stack and in customer-facing collaboration, from requirements to launch and support.";

  const skills = [
    { name: "Full-Stack Development", value: 95 },
    { name: "Responsive UI / Bootstrap", value: 90 },
    { name: "Networking (CCNA)", value: 85 },
    { name: "Project Delivery", value: 85 },
  ];

  const experience = [
    {
      role: "Founder / Full-Stack Developer",
      company: "Maganatti Tech Solution",
      location: "Marsabit",
      dates: "2023 – Present",
      bullets: [
        "Established and manage Maganatti Tech Solution.",
        "Specialize in full-stack development, website design, and deployment.",
        "Develop dynamic, responsive, and visually engaging web applications.",
        "Lead projects from planning, design, coding, testing, to launch.",
        "Collaborate with clients to meet business requirements.",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      dates: "2017 – 2021",
      org: "Mount Kenya University, Thika",
      extra: "Second Class Honors Upper Division",
    },
    {
      title: "Diploma in Technical Trainer Education (Computer Studies)",
      dates: "2023 – 2024",
      org: "Kenya School of TVET, Nairobi",
      extra: "Post Graduate Diploma in Education",
    },
    {
      title: "Kenya Certificate of Secondary Education (KCSE)",
      dates: "2013 – 2016",
      org: "Arabuko Forest High School, Kilifi",
      extra: "Mean score: B minus (B-)",
    },
    {
      title: "Kenya Certificate of Primary Education (KCPE)",
      dates: "2005 – 2012",
      org: "Al-Hidaya Muslim Primary School, Marsabit",
      extra: "Marks: 347",
    },
  ];

  const certifications = [
    {
      title: "Cisco Certified Networking Academy (CCNA)",
      dates: "2018 – 2021",
      org: "MKU CISCO, Nairobi",
    },
    {
      title: "Technical Trainer Education (TVET Level IV)",
      dates: "2024",
      org: "Kenya School of TVET",
    },
    {
      title: "ALX Software Engineering Program",
      dates: "2023",
      org: "ALX Africa",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Resume | Maganatti</title>
        <meta
          name="description"
          content="Resume of Maganatti Dida Godana - Full-Stack Developer & IT Professional"
        />
      </Helmet>

      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p className="mb-0">{careerObjective}</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="resume-side" data-aos="fade-right" data-aos-delay="100">
                <div className="profile-img mb-4 text-center">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                    style={{ maxWidth: "180px" }}
                  />
                </div>

                <h3>Professional Summary</h3>
                <p>
                  Founder and full-stack developer with hands-on experience
                  building and deploying responsive web applications end-to-end.
                  Comfortable across the stack and in customer-facing
                  collaboration, from requirements to launch and support.
                </p>

                <a
                  href={cvUrl}
                  className="btn btn-primary btn-sm mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-download me-2"></i>Download CV
                </a>

                <h3 className="mt-4">Contact Information</h3>
                <ul className="contact-info list-unstyled">
                  <li>
                    <i className="bi bi-geo-alt me-2"></i>
                    {location}
                  </li>
                  <li>
                    <i className="bi bi-envelope me-2"></i>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                  <li>
                    <i className="bi bi-phone me-2"></i>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </li>
                  <li>
                    <i className="bi bi-linkedin me-2"></i>
                    <a href={linkedin} target="_blank" rel="noreferrer">
                      {linkedin}
                    </a>
                  </li>
                </ul>

                <div className="skills-animation mt-4">
                  <h3>Technical Skills</h3>
                  {skills.map((s, i) => (
                    <div
                      className="skill-item mb-3"
                      key={s.name}
                      data-aos="fade-right"
                      data-aos-delay={(i + 1) * 200}
                    >
                      <div className="progress" style={{ position: "relative" }}>
                        <div
                          ref={(el) => (barsRef.current[i] = el)}
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={s.value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          data-value={s.value}
                        />
                        <span
                          ref={(el) => (percRef.current[i] = el)}
                          className="progress-text"
                        >
                          0%
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mt-1">
                        <span>{s.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 ps-4 ps-lg-5">
              <div className="resume-section" data-aos="fade-up">
                <h3>
                  <i className="bi bi-briefcase me-2"></i>Professional Experience
                </h3>
                {experience.map((job, idx) => (
                  <div className="resume-item" key={idx}>
                    <h4>{job.role}</h4>
                    <h5>{job.dates}</h5>
                    <p className="company mb-1">
                      <i className="bi bi-building me-1"></i> {job.company}
                      {job.location ? <span className="ms-2">• {job.location}</span> : null}
                    </p>
                    <ul>
                      {job.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="resume-section" data-aos="fade-up" data-aos-delay="100">
                <h3>
                  <i className="bi bi-mortarboard me-2"></i>Education
                </h3>
                {education.map((ed, idx) => (
                  <div className="resume-item" key={idx}>
                    <h4>{ed.title}</h4>
                    <h5>{ed.dates}</h5>
                    <p className="company mb-1">
                      <i className="bi bi-building me-1"></i> {ed.org}
                    </p>
                    {ed.extra && <p className="mb-0">{ed.extra}</p>}
                  </div>
                ))}
              </div>

              <div className="resume-section" data-aos="fade-up" data-aos-delay="200">
                <h3>
                  <i className="bi bi-award me-2"></i>Certifications
                </h3>
                {certifications.map((c, idx) => (
                  <div className="resume-item" key={idx}>
                    <h4>{c.title}</h4>
                    <h5>{c.dates}</h5>
                    {c.org && <p className="mb-0">{c.org}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .resume .section-title {
          text-align: center;
          margin-bottom: 40px;
        }
        .resume-side {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .resume-side:hover {
          transform: translateY(-5px);
        }
        .resume-section {
          margin-bottom: 40px;
        }
        .resume-item {
          margin-bottom: 20px;
          animation: fadeInUp 1s ease;
        }
        .resume-item h4 {
          font-weight: bold;
          color: #0563bb;
        }
        .progress {
          background: #e0e0e0;
          border-radius: 5px;
          height: 25px;
          overflow: hidden;
          position: relative;
        }
        .progress-bar {
          background-color: #0563bb;
          width: 0;
          height: 100%;
          position: relative;
        }
        .progress-text {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          white-space: nowrap;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ResumeSection;
