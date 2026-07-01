import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Code2, Palette, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero: React.FC = () => {
  const roles = [
    { text: "TVET Trainer", color: "text-red-500" },
    { text: "Curriculum Designer", color: "text-blue-600" },
    { text: "ICT Instructor", color: "text-emerald-500" },
    { text: "Full-stack Developer", color: "text-purple-600" },
    { text: "Web Developer", color: "text-amber-500" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(roles[0].color);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    setCurrentColor(currentRole.color);

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.text.length) {
          setDisplayedText(currentRole.text.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.text.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const stats = [
    { value: "150+", label: "Projects Completed", valueColor: "text-blue-600", labelColor: "text-blue-500" },
    { value: "5+", label: "Years Experience", valueColor: "text-emerald-600", labelColor: "text-emerald-500" },
    { value: "232+", label: "Happy Clients", valueColor: "text-amber-600", labelColor: "text-amber-500" },
  ];

  const skillBadges = [
    { icon: Code2, label: "Web Development", bg: "bg-blue-500/20", text: "text-blue-500" },
    { icon: Palette, label: "UI/UX Design", bg: "bg-purple-500/20", text: "text-purple-500" },
    { icon: GraduationCap, label: "ICT Training", bg: "bg-red-500/20", text: "text-red-500" },
  ];

  return (
    <motion.section
      id="home"
      className="min-h-[calc(100vh-6rem)] flex items-center py-12 lg:pl-[300px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-6 lg:pl-0 lg:pr-12">
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
                <span className="text-info">TVET ICT Trainer &</span>
                <br />
                <span className="text-gradient">Full-stack Developer</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I am a TVET-licensed trainer certified up to KNQF Level 6, dedicated to designing
                competency-based curricula and delivering practical ICT training that simplifies
                complex technical concepts. Parallel to my educational role, I work as a freelancer
                and full stack developer, specializing in end-to-end website design and development.
                This dual expertise allows me to bridge the gap between theoretical instruction and
                real-world technical application.
              </motion.p>

              <motion.div
                className="h-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-xl text-muted-foreground">I'm a </span>
                <span className={`text-xl font-semibold ${currentColor}`}>
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/Waqo-Dida-Godana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold transition-colors no-underline inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://gitconnected.com/waqo-dida-godana/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors no-underline inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-nowrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-xl font-bold mb-0.5 font-heading ${stat.valueColor}`}>{stat.value}</div>
                  <div className={`text-xs font-medium ${stat.labelColor}`}>{stat.label}</div>
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
                    alt="Wako Dida Godana - TVET ICT Trainer & Full-stack Developer"
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
                const BadgeIcon = badge.icon;
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
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${badge.bg} ${badge.text}`}>
                      <BadgeIcon className="w-4 h-4" />
                    </div>
                    <span className={`text-sm font-medium hidden md:block ${badge.text}`}>{badge.label}</span>
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
