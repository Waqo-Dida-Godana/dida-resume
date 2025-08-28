import React from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wako Dida Godana",
    "jobTitle": "Full Stack Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "email": "wariodida98@gmail.com",
    "telephone": "+254712345678",
    "url": "https://your-portfolio-domain.com", // replace with your portfolio link
    "sameAs": [
      "https://www.linkedin.com/in/your-linkedin",
      "https://github.com/your-github",
      "https://twitter.com/your-twitter",
      "https://www.facebook.com/your-facebook",
      "https://www.instagram.com/your-instagram"
    ]
  };

  return (
    <section id="contact" className="contact">
      <Helmet>
        <title>Contact - Wako Dida Godana</title>
        <meta
          name="description"
          content="Get in touch with Wako Dida Godana for collaborations, freelance projects, or professional inquiries. Based in Nairobi, Kenya."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Get in touch with me for collaborations or freelance work.</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Nairobi, Kenya</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>wariodida98@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+254 712 345 678</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Your Name</label>
                  <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label>Your Email</label>
                  <input type="email" name="email" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" className="form-control" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="6"
                  className="form-control"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
