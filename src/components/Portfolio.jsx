// src/components/Portfolio.js
import React from "react";

const portfolioItems = [
  {
    title: "Maganatti Calendar",
    category: "Web Design",
    image: "../assets/img/profile-img.png",
    demoLink: "https://github.com/Waqo-Dida-Godana/maganatti-calendar",
    detailsLink: "https://github.com/Waqo-Dida-Godana/maganatti-calendar",
  },
  {
    title: "Maganatti Quiz App",
    category: "Design",
    image: "../assets/img/profile-img.png",
    demoLink: "https://github.com/Waqo-Dida-Godana/maganatti-quiz-app",
    detailsLink: "https://github.com/Waqo-Dida-Godana/maganatti-quiz-app",
  },
  {
    title: "Login Page",
    category: "Photography",
    image: "../assets/img/profile-img.png",
    demoLink: "https://github.com/Waqo-Dida-Godana/Login-page-using-HTML-5-CSS-3-only",
    detailsLink: "https://github.com/Waqo-Dida-Godana/Login-page-using-HTML-5-CSS-3-only",
  },
  {
    title: "Simple Digital Clock",
    category: "Automotive",
    image: "../assets/img/profile-img.png",
    demoLink: "https://github.com/Waqo-Dida-Godana/Simple-digital-clock-system-using-hmtl5-css3-javascript",
    detailsLink: "https://github.com/Waqo-Dida-Godana/Simple-digital-clock-system-using-hmtl5-css3-javascript",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row">
            <div className="col-lg-3 filter-sidebar">
              <div className="filters-wrapper" data-aos="fade-right" data-aos-delay="150">
                <ul className="portfolio-filters isotope-filters">
                  <li data-filter="*" className="filter-active">All Projects</li>
                  <li data-filter=".filter-photography">Photography</li>
                  <li data-filter=".filter-design">Design</li>
                  <li data-filter=".filter-automotive">Automotive</li>
                  <li data-filter=".filter-nature">Nature</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row gy-4 portfolio-container isotope-container" data-aos="fade-up" data-aos-delay="200">
                {portfolioItems.map((item, index) => (
                  <div
                    key={index}
                    className={`col-lg-6 col-md-6 portfolio-item isotope-item filter-${item.category.toLowerCase()}`}
                  >
                    <div className="portfolio-wrap">
                      <img src={item.image} className="img-fluid" alt={item.title} loading="lazy" />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">{item.category}</span>
                          <h4>{item.title}</h4>
                          <div className="portfolio-links">
                            <a href={item.demoLink} className="glightbox" target="_blank" rel="noopener noreferrer" title={item.title}>
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a href={item.detailsLink} target="_blank" rel="noopener noreferrer" title="More Details">
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
