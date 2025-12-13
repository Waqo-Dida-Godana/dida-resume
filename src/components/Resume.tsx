import React from "react";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, BadgeCheck, ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  type
}) => {
  const Icon = type === "work" ? Briefcase : GraduationCap;
  
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-border group-last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-6 h-6 bg-accent rounded-full border-4 border-background flex items-center justify-center">
        <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
      </div>
      
      {/* Period Badge */}
      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
        {period}
      </div>
      
      {/* Content */}
      <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 hover-lift">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
            <p className="text-accent font-medium text-sm">{company}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>
        </div>
        
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface CertificationProps {
  title: string;
  issuer: string;
  year: string;
  licenseNo?: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, year, licenseNo }) => (
  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover-lift">
    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
      <BadgeCheck className="w-6 h-6 text-accent" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-foreground text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{issuer}</p>
      {licenseNo && <p className="text-xs text-accent mt-1">License: {licenseNo}</p>}
    </div>
    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{year}</span>
  </div>
);

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-foreground">{skill}</span>
      <span className="text-accent">{percentage}%</span>
    </div>
    <Progress value={percentage} className="h-2" />
  </div>
);

const Resume: React.FC = () => {
  const workExperience = [
    {
      title: "Self-Established Full Stack Developer & Freelancer",
      company: "Waxzstarways Technologies Solution Ltd",
      location: "Marsabit, Kenya",
      period: "2017 – Present",
      description: [
        "Web developer who designs, develops, enhances, tests and deploys web applications with an end goal of creating engaging and user-friendly site layout and function",
        "Gather requirements, maintain websites, troubleshoot and fix bugs, follow best practices and collaborate with other teams",
        "Owned websites: dida.maganatti.com, maganatti.com, waxzstarways.co.ke, deen.waxzstarways.co.ke, inspire.waxzstarways.co.ke"
      ],
      type: "work" as const
    },
    {
      title: "ICT Trainer",
      company: "Marsabit Islamic Institute (Direct-Aid/AMA)",
      location: "Marsabit, Kenya",
      period: "June 2021 – Present",
      description: [
        "Teaching of computer application package from Microsoft Office suite",
        "Hardware and software installation & configuration",
        "User and information systems support",
        "Troubleshooting computer hardware issues"
      ],
      type: "work" as const
    },
    {
      title: "Computer Studies Teacher",
      company: "Dakabaricha Mixed Day Secondary School (DKCHA)",
      location: "Marsabit, Kenya",
      period: "May 2024 – August 2024",
      description: [
        "Taught computer-related topics with theoretical and practical focus",
        "Broke down complex concepts and used hands-on activities to solidify learning",
        "Fostered a positive environment, encouraged curiosity and supported students"
      ],
      type: "work" as const
    },
    {
      title: "Computer Studies Teacher",
      company: "Marsabit Mixed Day Secondary School (MMDSS)",
      location: "Marsabit, Kenya",
      period: "2021 – 2022",
      description: [
        "Taught computer studies from Form One to Form Four",
        "Guided students through computer application packages practicals",
        "Supervised KCSE computer projects milestones",
        "Set and marked computer studies exams"
      ],
      type: "work" as const
    },
    {
      title: "ICT Clerk",
      company: "Independent Electoral and Boundaries Commission (IEBC)",
      location: "Marsabit, Kenya",
      period: "July 2022 – September 2022",
      description: [
        "Provided first-level ICT support to the Returning Officer at the tallying centre",
        "Prepared, configured, and tested KIEMS kits for election readiness",
        "Performed data backup and restoration, trained staff"
      ],
      type: "work" as const
    },
    {
      title: "Data Collection Enumerator",
      company: "Kenya Climate Smart Agriculture Project (KCSAP)",
      location: "Marsabit, Kenya",
      period: "June 2021 – July 2021",
      description: [
        "Visited sampled households to interview respondents and collect data",
        "Conducted visual surveys and gathered data for decision-making",
        "Validated information via direct contact with families"
      ],
      type: "work" as const
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      company: "Mount Kenya University",
      location: "Thika, Main Campus",
      period: "2017 – 2021",
      description: [
        "Second Class Honors Upper Division",
        "Specialized in software development, database management, and network systems"
      ],
      type: "education" as const
    },
    {
      title: "Diploma in Technical Trainer Education (Computer Studies)",
      company: "Kenya School of TVET",
      location: "Nairobi, Main Campus",
      period: "2023 – 2024",
      description: [
        "Post Graduate Diploma in Education",
        "TVETA Licensed Trainer - License No: TVETA/T258738"
      ],
      type: "education" as const
    },
    {
      title: "Cisco Certified Networking Academy (CCNA)",
      company: "MKU CISCO Academy",
      location: "Nairobi Campus",
      period: "2018 – 2021",
      description: [
        "Cisco Professional Certification",
        "Network fundamentals, routing, switching, and security"
      ],
      type: "education" as const
    },
    {
      title: "Kenya Certificate of Secondary Education (K.C.S.E)",
      company: "Arabuko Forest High School",
      location: "Kilifi, Kenya",
      period: "2013 – 2016",
      description: [
        "Attained mean score of B minus (B-)"
      ],
      type: "education" as const
    },
    {
      title: "Kenya Certificate of Primary Education (K.C.P.E)",
      company: "Al-Hidaya Muslim Primary School",
      location: "Marsabit, Kenya",
      period: "2005 – 2012",
      description: [
        "Attained 347 marks"
      ],
      type: "education" as const
    }
  ];

  const certifications = [
    {
      title: "TVETA Licensed Information Technology Trainer",
      issuer: "Technical and Vocational Education and Training Authority",
      year: "2024",
      licenseNo: "TVETA/T258738"
    },
    {
      title: "Front-End Web Pro-Development",
      issuer: "ALX Africa - In Progress",
      year: "Oct 2025"
    },
    {
      title: "Professional Foundations",
      issuer: "ALX Africa - Completed",
      year: "Jun 2025"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Networking Academy",
      year: "2021"
    }
  ];

  const technicalSkills = [
    { skill: "Web Design", percentage: 90 },
    { skill: "Graphic Design", percentage: 95 },
    { skill: "WordPress/CMS", percentage: 90 },
    { skill: "Hardware & Cyber Services", percentage: 85 },
    { skill: "IT Consultancy", percentage: 80 },
    { skill: "UI/UX Design", percentage: 55 }
  ];

  return (
    <motion.section
      id="resume"
      className="py-20 lg:pl-[280px] bg-muted/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            My Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground font-heading">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional experience, education, 
            certifications, and the skills I've developed over the years.
          </p>
        </div>

        {/* Experience & Education Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Work Experience */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">Professional Experience</h3>
            </div>
            
            <div>
              {workExperience.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-info" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">Education & Qualifications</h3>
            </div>
            
            <div>
              {education.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground font-heading mb-2">My Skills</h3>
            <p className="text-muted-foreground">Mastery achieved through continuous exploration and dedicated refinement of craft</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Technical Expertise</h4>
              <div className="space-y-4">
                {technicalSkills.slice(0, 3).map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Professional Skills</h4>
              <div className="space-y-4">
                {technicalSkills.slice(3).map((item, index) => (
                  <SkillBar key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Primary Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Node.js", "MySQL", "WordPress", "PHP", "HTML/CSS", "jQuery", "Figma", "Adobe Suite"].map((tech, index) => (
                  <span key={index} className="skill-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-foreground font-heading">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>

          {/* TVETA License Banner */}
          <div className="mt-8 bg-gradient-dark rounded-2xl p-6 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BadgeCheck className="w-6 h-6 text-accent" />
              <h4 className="text-lg font-bold text-sidebar-foreground">TVETA Licensed Trainer</h4>
            </div>
            <p className="text-sidebar-foreground/80 text-sm mb-2">
              <strong>Name:</strong> WAKO GODANA | <strong>ID No:</strong> 36492716 | <strong>License No:</strong> TVETA/T258738
            </p>
            <p className="text-sidebar-foreground/70 text-xs">
              Area of Specialization: Information Technology Trainer | Category: Up to Level 6 | KNQF Level 6
            </p>
            <p className="text-sidebar-foreground/60 text-xs mt-2">
              Registered and Licensed under Section 23 of the TVET Act, 2013
            </p>
          </div>

          {/* ALX Program Banner */}
          <div className="mt-6 bg-card rounded-2xl p-6 border border-accent/30 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">ALX Front-End Web Pro-Development Program</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  A specialist Front-End Developer program focusing on creating user-facing parts of websites and 
                  applications, ensuring they are visually appealing, interactive, and functional.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-foreground font-medium">Professional Foundations</span>
                    <span className="text-xs text-muted-foreground">Completed - Jun 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-foreground font-medium">Front End ProDev</span>
                    <span className="text-xs text-muted-foreground">In Progress - Oct 2025</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Master advanced front-end technologies like React, Next.js, and TypeScript to build responsive and dynamic user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
