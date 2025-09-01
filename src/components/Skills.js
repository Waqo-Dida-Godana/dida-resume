import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const progressBars = sectionRef.current.querySelectorAll(".progress-bar");
    const percentages = sectionRef.current.querySelectorAll(".skill-percentage");

    const animateCounter = (el, target) => {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(counter);
        }
        el.textContent = Math.round(start) + "%";
      }, 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressBars.forEach((bar, index) => {
              const value = bar.getAttribute("aria-valuenow");
              bar.style.width = `${value}%`;
              animateCounter(percentages[index], parseInt(value));
            });
          } else {
            progressBars.forEach((bar, index) => {
              bar.style.width = "0%";
              percentages[index].textContent = "0%";
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <Helmet>
        <title>Skills - Wako Dida Godana</title>
      </Helmet>

      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Frontend Column */}
          <div className="col-lg-6">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="200">
              <h3>Front-end Development</h3>
              <div className="skills-animation">
                {[
                  { name: "HTML/CSS", value: 95, tooltip: "Expert level knowledge of semantic HTML5 and modern CSS3 techniques" },
                  { name: "JavaScript", value: 85, tooltip: "Strong proficiency in ES6+, DOM manipulation, and modern frameworks" },
                  { name: "React", value: 80, tooltip: "Experience with React hooks, state management, and component architecture" },
                ].map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>{skill.name}</h4>
                      <span className="skill-percentage">0%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="skill-tooltip">{skill.tooltip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Column */}
          <div className="col-lg-6">
            <div className="skills-category" data-aos="fade-up" data-aos-delay="300">
              <h3>Back-end Development</h3>
              <div className="skills-animation">
                {[
                  { name: "Node.js", value: 75, tooltip: "Server-side JavaScript development with Express and REST APIs" },
                  { name: "Python", value: 70, tooltip: "Python development with Django and data analysis tools" },
                  { name: "SQL", value: 65, tooltip: "Database design, optimization, and complex queries" },
                ].map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>{skill.name}</h4>
                      <span className="skill-percentage">0%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={skill.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="skill-tooltip">{skill.tooltip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
