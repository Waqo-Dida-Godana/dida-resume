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

            let start = null;
            const duration = 1500; // 1.5 seconds
            const idx = barsRef.current.indexOf(bar);

            const animate = (timestamp) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const easedProgress = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;

              const currentValue = Math.floor(value * easedProgress);
              bar.style.width = currentValue + "%";
              if (percRef.current[idx]) {
                percRef.current[idx].innerText = currentValue + "%";
                percRef.current[idx].style.left = currentValue + "%";
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
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
    "To be compliant with rules and regulations while taking up duties and responsibilities; with minimal supervision, either independently or as a team player, in different environments and under changing working conditions where my abilities, skills, qualification and experience will lead to the accomplishment of the set goals and objectives.";

  const skills = [
    { name: "Full-Stack Development", value: 95 },
    { name: "Responsive UI / Bootstrap", value: 90 },
    { name: "Networking (CCNA)", value: 85 },
    { name: "Project Delivery", value: 85 },
    { name: "AI & Data Science", value: 75 },
    { name: "Cloud Computing", value: 70 },
  ];

  const experience = [
    {
      role: "Founder & Lead Developer",
      company: "Maganatti Tech Solution Ltd",
      location: "Marsabit",
      dates: "2023 – Present",
      bullets: [
        "Design, develop, enhance, test, and deploy web applications with user-friendly layouts and functions.",
        "Gather requirements, maintain websites, troubleshoot bugs, and collaborate with other teams.",
        "Owned platforms include: dida.maganatti.com, maganatti.com, waxzstarways.co.ke, deen.waxzstarways.co.ke, inspire.waxzstarways.co.ke, dev.waxzstarways.co.ke",
      ],
    },
    {
      role: "Full Stack Developer & IT Consultant",
      company: "WDG Tech (Waxzstarways Technologies Solution Ltd)",
      location: "Marsabit",
      dates: "2017 – Present",
      bullets: [
        "Deliver innovative web solutions by developing, enhancing, and deploying user-focused applications.",
        "Maintain and optimize websites, troubleshoot issues, and ensure smooth operations.",
        "Collaborate across teams to deliver efficient IT solutions that meet both client and institutional needs.",
      ],
    },
    {
      role: "ICT Trainer",
      company: "Marsabit Islamic Institute",
      location: "Marsabit",
      dates: "June 2021 – Present",
      bullets: [
        "Teach Computer Application Packages and provide practical training in hardware/software installation.",
        "Offer user and system support while troubleshooting and resolving technical issues.",
      ],
    },
    {
      role: "Computer Studies Teacher",
      company: "Dakabaricha Mixed Day Secondary School (DKCHA)",
      location: "Marsabit",
      dates: "May 2024 – August 2024",
      bullets: [
        "Applied TVET training principles to deliver both theoretical and practical computer studies.",
        "Engaged students in hands-on activities to strengthen their IT knowledge.",
      ],
    },
    {
      role: "Computer Studies Teacher",
      company: "Marsabit Mixed Day Secondary School (MMDSS)",
      location: "Marsabit",
      dates: "2021 – 2022",
      bullets: [
        "Taught Computer Studies from Form One to Form Four, applying practical and industry-relevant approaches.",
        "Supervised KCSE computer projects, ensuring students gained practical and professional IT exposure.",
      ],
    },
    {
      role: "ICT Clerk",
      company: "IEBC (Independent Electoral and Boundaries Commission)",
      location: "Marsabit",
      dates: "July 2022 – September 2022",
      bullets: [
        "Delivered first-level ICT support at the tallying centre, ensuring seamless technology operations.",
        "Configured, tested, and supported KIEMS kits, and provided training to staff.",
      ],
    },
    {
      role: "Data Collection Enumerator",
      company: "KCSAP (Kenya Climate Smart Agriculture Project)",
      location: "Marsabit",
      dates: "June 2021 – July 2021",
      bullets: [
        "Collected, validated, and reported agricultural data from households.",
        "Ensured accurate survey data by directly engaging respondents and conducting visual field surveys.",
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
      title: "Cisco Certified Networking Academy (CCNA)",
      dates: "2018 – 2021",
      org: "MKU CISCO, Nairobi",
      extra: "Cisco Professional Certification",
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
    { title: "Cisco Networking Academy: Introduction to Cybersecurity", dates: "2018 – 2021", org: "Cisco Networking Academy" },
    { title: "Cisco Networking Academy: Cybersecurity Essentials", dates: "2018 – 2021", org: "Cisco Networking Academy" },
    { title: "Cisco Networking Academy: Networking Basics", dates: "2018 – 2021", org: "Cisco Networking Academy" },
    { title: "Cisco Networking Academy: Networking Devices and Initial Configuration", dates: "2018 – 2021", org: "Cisco Networking Academy" },
    { title: "Cisco Networking Academy: Endpoint Security", dates: "2018 – 2021", org: "Cisco Networking Academy" },
    { title: "Google Digital Skills for Africa: Fundamentals of Digital Marketing", dates: "2023", org: "Google" },
    { title: "Coursera: AI For Everyone (DeepLearning.AI)", dates: "2023", org: "Coursera" },
    { title: "ALX Software Engineering", dates: "2023", org: "ALX Africa" },
    { title: "ALX AI Career Essentials", dates: "2023", org: "ALX Africa" },
    { title: "ALX Cloud Computing Foundations", dates: "2023", org: "ALX Africa" },
    { title: "ALX Data Science Foundations", dates: "2023", org: "ALX Africa" },
    { title: "TVETA Certified Trainer", dates: "2024", org: "Kenya School of TVET" },
  ];

  return (
    <>
      <Helmet>
        <title>Resume | Maganatti</title>
        <meta name="description" content="Resume of Maganatti Dida Godana - Full-Stack Developer & IT Professional" />
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
                  <img src={profileImg} alt="Profile" className="img-fluid rounded-circle" style={{ maxWidth: "180px" }} />
                </div>

                <h3>Professional Summary</h3>
                <p>
                  Founder and full-stack developer with hands-on experience building and deploying responsive web applications end-to-end. Comfortable across the stack and in customer-facing collaboration.
                </p>

                <a href={cvUrl} className="btn btn-primary btn-sm mt-2" target="_blank" rel="noreferrer">
                  <i className="bi bi-download me-2"></i>Download CV
                </a>

                <h3 className="mt-4">Contact Information</h3>
                <ul className="contact-info list-unstyled">
                  <li><i className="bi bi-geo-alt me-2"></i>{location}</li>
                  <li><i className="bi bi-envelope me-2"></i><a href={`mailto:${email}`}>{email}</a></li>
                  <li><i className="bi bi-phone me-2"></i><a href={`tel:${phone}`}>{phone}</a></li>
                  <li><i className="bi bi-linkedin me-2"></i><a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a></li>
                </ul>

                <div className="skills-animation mt-4">
                  <h3>Technical Skills</h3>
                  {skills.map((s, i) => (
                    <div className="skill-item mb-3" key={s.name} data-aos="fade-right" data-aos-delay={(i + 1) * 200}>
                      <div className="progress" style={{ position: "relative" }}>
                        <div ref={(el) => (barsRef.current[i] = el)} className="progress-bar" role="progressbar" aria-valuenow={s.value} aria-valuemin={0} aria-valuemax={100} data-value={s.value} />
                        <span ref={(el) => (percRef.current[i] = el)} className="progress-text">0%</span>
                      </div>
                      <div className="d-flex justify-content-between mt-1"><span>{s.name}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 ps-4 ps-lg-5">
              <div className="resume-section" data-aos="fade-up">
                <h3><i className="bi bi-briefcase me-2"></i>Professional Experience</h3>
                {experience.map((job, idx) => (
                  <div className="resume-item" key={idx}>
                    <h4>{job.role}</h4>
                    <h5>{job.dates}</h5>
                    <p className="company mb-1"><i className="bi bi-building me-1"></i> {job.company} {job.location ? <span className="ms-2">• {job.location}</span> : null}</p>
                    <ul>{job.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
                  </div>
                ))}
              </div>

              <div className="resume-section" data-aos="fade-up" data-aos-delay="100">
                <h3><i className="bi bi-mortarboard me-2"></i>Education</h3>
                {education.map((ed, idx) => (
                  <div className="resume-item" key={idx}>
                    <h4>{ed.title}</h4>
                    <h5>{ed.dates}</h5>
                    <p className="company mb-1"><i className="bi bi-building me-1"></i> {ed.org}</p>
                    {ed.extra && <p className="mb-0">{ed.extra}</p>}
                  </div>
                ))}
              </div>

              <div className="resume-section" data-aos="fade-up" data-aos-delay="200">
                <h3><i className="bi bi-award me-2"></i>Certifications</h3>
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
        .resume .section-title { text-align: center; margin-bottom: 40px; }
        .resume-side { background: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05); transition: transform 0.3s ease; }
        .resume-side:hover { transform: translateY(-5px); }
        .resume-section { margin-bottom: 40px; }
        .resume-item { margin-bottom: 20px; animation: fadeInUp 1s ease; }
        .resume-item h4 { font-weight: bold; color: #0563bb; }
        .progress { background: #e0e0e0; border-radius: 5px; height: 25px; overflow: hidden; position: relative; }
        .progress-bar { background-color: #0563bb; width: 0; height: 100%; position: relative; }
        .progress-text { position: absolute; top: 50%; transform: translate(-50%, -50%); color: #fff; font-weight: bold; font-size: 12px; white-space: nowrap; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};

export default ResumeSection;
