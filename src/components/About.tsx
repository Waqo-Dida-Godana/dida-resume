import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "./ui/button";
import { Download, MessageCircle, MapPin, CheckCircle, Smile, FileText, Headphones, Users, Sparkles, Mail, Phone, Globe, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, number, label }) => {
  return (
    <div className="bg-card rounded-2xl p-6 text-center hover-lift border border-border/50">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <span className="block text-4xl font-bold text-foreground mb-1 font-heading">
        {number}
      </span>
      <p className="text-sm text-muted-foreground font-medium">
        {label}
      </p>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

function About() {
  return (
    <>
      <Helmet>
        <title>About - Wako Dida Godana</title>
        <meta
          name="description"
          content="Wako Dida Godana - TVET ICT Trainer, Full-stack Developer, and IT Consultant based in Marsabit, Kenya. BSc IT from Mount Kenya University. TVET licensed trainer, Cisco certified."
        />
      </Helmet>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 lg:pl-[280px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Main Card */}
              <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50 relative overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>

                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-glow">
                      <img
                        src={profileImg}
                        alt="Wako Dida Godana"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-card">
                      <CheckCircle className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-1 font-heading">
                      Wako Dida Godana
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      TVET ICT Trainer & Full-stack Developer
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>Marsabit, Kenya</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full text-success text-sm font-medium">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      Available for projects
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a full-stack developer, IT consultant, graphic designer, and educator based
                    in Marsabit, Kenya. I hold a BSc in Information Technology from Mount Kenya
                    University and a Diploma in Technical Trainer Education (Computer Studies) from
                    Kenya School of TVET, plus additional professional training from Cisco Networking
                    Academy.
                  </p>
                </div>

                {/* Skills Summary */}
                <div className="mt-8 space-y-4">
                  <SkillCard
                    icon={<Sparkles className="w-5 h-5" />}
                    title="Full Stack Development"
                    description="React, Node.js, MySQL, Web Services, CMS"
                  />
                  <SkillCard
                    icon={<Sparkles className="w-5 h-5" />}
                    title="UI/UX & Graphic Design"
                    description="User interfaces, brand identity, visual design"
                  />
                  <SkillCard
                    icon={<Sparkles className="w-5 h-5" />}
                    title="IT Training & Consultancy"
                    description="TVETA Licensed trainer, technical support"
                  />
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                  >
                    <a
                      href="https://gitconnected.com/waqo-dida-godana/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-border hover:bg-muted flex-1"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Let's Talk
                  </Button>
                </div>
              </div>

              {/* Quote Card */}
              <div className="mt-6 bg-sidebar rounded-2xl p-6 text-sidebar-foreground">
                <blockquote className="italic text-sidebar-foreground/80">
                  "Good design is not about perfection—it's about understanding, empathy,
                  and continuous learning from the people who use what we create."
                </blockquote>
              </div>
            </motion.div>

            {/* Right Column: About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  About Me
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-foreground font-heading mb-4">
                  A unique blend of education and IT
                </h2>
              </div>

              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="leading-relaxed">
                  Based in Marsabit, Kenya, I am a versatile full-stack developer, graphic designer,
                  and IT consultant. I build responsive websites and web apps, while also empowering
                  learners and organizations through practical ICT training.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <a href="mailto:waqogodana98@gmail.com" className="p-3 rounded-lg bg-accent text-accent-foreground flex items-center gap-3 no-underline">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">waqogodana98@gmail.com</span>
                </a>
                <a href="tel:+254716792928" className="p-3 rounded-lg bg-info text-white flex items-center gap-3 no-underline">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">+254 716 792 928</span>
                </a>
                <a href="https://maganatti.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-purple text-white flex items-center gap-3 no-underline">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">maganatti.com</span>
                </a>
                <button onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }} className="p-3 rounded-lg bg-success text-white flex items-center gap-3 cursor-pointer border-none">
                  <Briefcase className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">Available</span>
                </button>
              </div>

              {/* Hire Me Section */}
              <div className="bg-gradient-dark rounded-2xl p-5 text-center">
                <h3 className="text-lg font-bold text-sidebar-foreground mb-2">
                  Hire me as a Developer or ICT Trainer
                </h3>
                <p className="text-sidebar-foreground/70 text-xs mb-4">
                  Need a full-stack developer to build your next web project, or an ICT trainer
                  to upskill your team? I deliver practical, real-world solutions for both
                  development and education.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href="https://github.com/Waqo-Dida-Godana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-red-500 hover:bg-red-600 text-white text-xs font-medium transition-colors no-underline"
                  >
                    Hire as Developer
                  </a>
                  <a
                    href="https://gitconnected.com/waqo-dida-godana/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium transition-colors no-underline"
                  >
                    Hire as ICT Trainer
                  </a>
                  <a
                    href="#contact"
                    className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium transition-colors no-underline"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StatItem
              icon={<Smile className="w-7 h-7" />}
              number="232"
              label="Happy Clients"
            />
            <StatItem
              icon={<FileText className="w-7 h-7" />}
              number="521"
              label="Projects"
            />
            <StatItem
              icon={<Headphones className="w-7 h-7" />}
              number="1463"
              label="Hours Of Support"
            />
            <StatItem
              icon={<Users className="w-7 h-7" />}
              number="15"
              label="Team Members"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
