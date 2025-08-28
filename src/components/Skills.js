import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const progressBars = sectionRef.current.querySelectorAll(".progress-bar");
    const values = sectionRef.current.querySelectorAll(".val");

    const animateCounter = (el, target) => {
      let start = 0;
      const duration = 1500; // 1.5s
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
              const targetWidth = bar.getAttribute("data-width");
              bar.style.width = targetWidth;

              // Animate numbers
              const targetValue = parseInt(targetWidth);
              animateCounter(values[index], targetValue);
            });
          } else {
            // 🔄 Reset when out of view
            progressBars.forEach((bar, index) => {
              bar.style.width = "0%";
              values[index].textContent = "0%";
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills section-bg" ref={sectionRef}>
      <Helmet>
        <title>Skills - Wako Dida Godana</title>
        <meta
          name="description"
          content="Explore the technical skills of Wako Dida Godana, including HTML, CSS, JavaScript, React, Node.js, and Graphic Design expertise."
        />
      </Helmet>

      {/* ✅ Styles */}
      <style>{`
        .skills {
          padding: 60px 0;
          overflow: hidden;
        }
        .skills .section-title h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #173b6c;
          text-transform: uppercase;
        }
        .skills .section-title p {
          margin-bottom: 40px;
          font-size: 16px;
          color: #444;
        }
        .skills .progress {
          height: 60px;
          background: none;
          margin-bottom: 30px;
        }
        .skills .progress .skill {
          padding: 10px 0;
          text-transform: uppercase;
          font-weight: 600;
          font-family: "Poppins", sans-serif;
          color: #050d18;
        }
        .skills .progress .skill .val {
          float: right;
        }
        .skills .progress-bar-wrap {
          background: #dce8f8;
          height: 10px;
          border-radius: 5px;
          overflow: hidden;
        }
        .skills .progress-bar {
          height: 10px;
          width: 0; /* start hidden */
          transition: width 1.5s ease-in-out;
          background-color: #149ddd;
        }
        .section-bg {
          background: #f5f8fd;
        }
      `}</style>

      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>Here are my main technical skills and expertise areas.</p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="100%"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="90%"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="85%"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                React <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="80%"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Node.js <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="75%"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Graphic Design <i className="val">0%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
