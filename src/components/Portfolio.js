import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container my-5">
      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Here are some of my recent works and projects.</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project"
              className="img-fluid"
            />
            <h4>Sample Project 1</h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project"
              className="img-fluid"
            />
            <h4>Sample Project 2</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
