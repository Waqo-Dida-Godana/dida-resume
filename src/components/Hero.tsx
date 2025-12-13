import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Palette, Code, Camera } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/WAQO-300x300.png";

const Hero: React.FC = () => {
  const roles = [
    "Full Stack Developer",
    "Web Designer",
    "Freelancer",
    "Graphic Designer",
    "IT Trainer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "232+", label: "Happy Clients" },
  ];

  const skillBadges = [
    { icon: Palette, label: "UI/UX Design" },
    { icon: Code, label: "Web Development" },
    { icon: Camera, label: "Graphic Design" },
  ];

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center py-20 lg:pl-[280px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-foreground">Creative Developer &</span>
                <br />
                <span className="text-gradient">Visual Storyteller</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I'm <span className="text-foreground font-semibold">Wako Dida Godana</span> —
                I craft meaningful digital experiences through thoughtful design and
                innovative solutions. Blending creativity with strategy to bring brands
                to life and connect with audiences on a deeper level.
              </motion.p>

              <motion.div
                className="h-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-xl text-muted-foreground">I'm a </span>
                <span className="text-xl text-accent font-semibold">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold"
              >
                <a
                  href="https://github.com/Waqo-Dida-Godana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border hover:bg-muted px-8 py-6 text-base font-semibold"
              >
                <a
                  href="https://gitconnected.com/waqo-dida-godana/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Floating Badges */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main image container */}
              <motion.div
                className="relative w-80 h-[420px] md:w-96 md:h-[500px]"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-dark rounded-3xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-elegant">
                  <img
                    src={profileImg}
                    alt="Wako Dida Godana - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sidebar/60 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Skill Badges */}
              {skillBadges.map((badge, index) => {
                const positions = [
                  "top-4 -left-4 md:-left-16",
                  "top-1/2 -right-4 md:-right-20",
                  "bottom-20 -left-4 md:-left-12"
                ];
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${positions[index]} glass rounded-full px-4 py-3 flex items-center gap-2 shadow-card`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground hidden md:block">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
