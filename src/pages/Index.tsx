import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <>
      <Helmet>
        <title>Wako Dida Godana - Full Stack Developer & IT Trainer</title>
        <meta
          name="description"
          content="Wako Dida Godana - Full Stack Developer, IT Trainer (TVETA Licensed), Graphic Designer, and Freelancer based in Marsabit, Kenya. Specializing in React, web development, and digital solutions."
        />
        <meta name="keywords" content="full stack developer, TVETA licensed trainer, web developer, graphic designer, React developer, Kenya developer, Marsabit, IT trainer, freelancer" />
        <meta name="author" content="Wako Dida Godana" />

        {/* Open Graph */}
        <meta property="og:title" content="Wako Dida Godana - Full Stack Developer & IT Trainer" />
        <meta property="og:description" content="Full Stack Developer and TVETA Licensed IT Trainer with 5+ years experience. Specializing in React, web development, and digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dida.maganatti.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wako Dida Godana - Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer and IT Trainer with expertise in React, web development, and digital solutions." />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <main className="overflow-x-hidden">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
            <Skills />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
