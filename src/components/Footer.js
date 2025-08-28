import React, { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Footer section */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy;<strong><span>Dida Resume </span> || All Rights Reserved. ||{new Date().getFullYear()}.</strong>
          </div>
          </div>
      </footer>

      {/* Back-to-top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#0563bb",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            color: "#fff",
            cursor: "pointer",
            zIndex: 999,
          }}
        >
          <i className="bi bi-arrow-up-short" style={{ fontSize: "24px" }}></i>
        </button>
      )}
    </>
  );
}

export default Footer;
