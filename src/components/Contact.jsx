// src/components/ContactSection.js
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "loading", "error", "sent"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Replace with your API call or form submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactInfo = {
    location: ["Marsabit, Kenya"],
    phones: ["+254 792-852-100", "+254 716-792-928"],
    emails: ["support@maganatti.com"],
  };

  return (
    <>
      <Helmet>
        <title>Contact | Maganatti</title>
        <meta name="description" content="Contact Maganatti Dida Godana for IT services and inquiries." />
      </Helmet>

      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Get in touch with me for IT services, inquiries, or support.</p>
        </div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Contact Info Column */}
            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="info-box">
                <h3>Contact Info</h3>
                <p>Reach out via any of the methods below or use the contact form.</p>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Our Location</h4>
                    {contactInfo.location.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    {contactInfo.phones.map((phone, idx) => (
                      <p key={idx}>{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Email Address</h4>
                    {contactInfo.emails.map((email, idx) => (
                      <p key={idx}>{email}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-form">
                <h3>Get In Touch</h3>
                <p>Fill out the form below, and I'll get back to you promptly.</p>

                <form className="php-email-form" onSubmit={handleSubmit}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      {status === "loading" && <div className="loading">Loading</div>}
                      {status === "error" && <div className="error-message">Something went wrong. Try again.</div>}
                      {status === "sent" && <div className="sent-message">Your message has been sent. Thank you!</div>}

                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Inline CSS for styling like template */}
        <style jsx="true">{`
          .contact .section-title {
            text-align: center;
            margin-bottom: 40px;
          }
          .info-box {
            background: #1a1a1a;
            color: #fff;
            padding: 30px;
            border-radius: 12px;
          }
          .info-item {
            display: flex;
            margin-top: 20px;
          }
          .icon-box {
            font-size: 1.5rem;
            color: #56b8f0;
            margin-right: 15px;
          }
          .contact-form {
            background: #111;
            padding: 30px;
            border-radius: 12px;
            color: #fff;
          }
          .form-control {
            background: #222;
            border: 1px solid #333;
            color: #fff;
            padding: 10px 15px;
            border-radius: 6px;
            transition: 0.3s;
            width: 100%;
          }
          .form-control:focus {
            border-color: #56b8f0;
            box-shadow: 0 0 10px rgba(86, 184, 240, 0.3);
          }
          .php-email-form .btn {
            background: #56b8f0;
            color: #fff;
            padding: 10px 30px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
          }
          .php-email-form .btn:hover {
            background: #1f90d8;
          }
          .loading, .error-message, .sent-message {
            margin-bottom: 15px;
            font-weight: 500;
          }
          .loading { color: #fff; }
          .error-message { color: #ff4d4d; }
          .sent-message { color: #00e676; }
        `}</style>
      </section>
    </>
  );
};

export default ContactSection;
