import React from "react";
import { Calendar, MapPin, Award, GraduationCap, Briefcase, BadgeCheck, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
  iconColor?: string;
  companyColor?: string;
  periodColor?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  type,
  iconColor = "text-accent",
  companyColor = "text-accent",
  periodColor = "text-accent"
}) => {
  const Icon = type === "work" ? Briefcase : GraduationCap;
  
  return (
    <div className="relative pl-8 pb-4 group">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-border group-last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-6 h-6 bg-accent rounded-full border-4 border-background flex items-center justify-center flex-shrink-0 z-10">
        <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
      </div>
      
      {/* Period Badge */}
      <div className={`inline-block bg-accent/10 ${periodColor} px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4`}>
        {period}
      </div>
      
      {/* Content */}
      <div className="bg-card rounded-xl p-4 sm:p-5 shadow-card border border-border/50 hover-lift">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
            <p className={`${companyColor} font-medium text-sm`}>{company}</p>
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
  certColor?: string;
  yearColor?: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, year, licenseNo, certColor = "text-accent", yearColor = "bg-muted" }) => {
  const bgClassName = certColor.replace('text-', '') + '/10';
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover-lift transition-all duration-300 hover:scale-102">
      <div className={`w-12 h-12 bg-${bgClassName} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <BadgeCheck className={`w-6 h-6 ${certColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{issuer}</p>
        {licenseNo && <p className={`text-xs ${certColor} mt-1`}>License: {licenseNo}</p>}
      </div>
      <span className={`text-xs ${yearColor} px-2 py-1 rounded dark:text-gray-900`}>{year}</span>
    </div>
  );
};

interface SkillBarProps {
  skill: string;
  percentage: number;
  skillColor?: string;
  progressColor?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, skillColor = "text-accent", progressColor = "bg-accent", delay = 0 }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  // framer-motion provides in-view detection via hooks like `useInView`.
  // React itself does not have `useInView`, so referencing it causes a runtime crash.
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={`font-medium text-foreground`}>{skill}</span>
        <motion.span 
          className={`${skillColor}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <CountUp target={percentage} isInView={isInView} />%
        </motion.span>
      </div>
      <div className="h-2 bg-border/30 rounded-full overflow-hidden">
        <motion.div 
          className={`${progressColor} h-full rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay }}
        />
      </div>
    </div>
  );
};

const CountUp: React.FC<{ target: number; isInView: boolean }> = ({ target, isInView }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [isInView, target]);
  
  return <>{count}</>;
};

const Resume: React.FC = () => {
  const workExperience = [
    {
      title: "Computer Studies Teacher",
      company: "Mt. Olives Adventist School (MOAS)",
      location: "Ngong Hills, Kajiado County",
      period: "Mar 2026 – Present",
      description: [
        "Prepared lesson plans and delivered Computer Studies lessons in line with the Kenyan education curriculum",
        "Facilitated learner-centred teaching and integrated ICT tools to enhance classroom learning",
        "Assessed student performance through assignments, examinations and continuous evaluations",
        "Managed classroom activities, maintained a positive and disciplined learning environment",
        "Trained learners in computer applications, internet technologies and basic programming skills",
        "Managed and maintained computer laboratory resources for effective teaching and learning",
        "Troubleshot basic computer hardware and software issues to ensure smooth ICT operations",
        "Guided learners on the safe, responsible and effective use of ICT resources",
        "Developed instructional materials and practical exercises to improve learners' technical skills",
        "Collaborated with fellow teachers and school administration to support academic objectives",
        "Applied strong communication and interpersonal skills to support learner development and teamwork",
        "Demonstrated professionalism, integrity and commitment in all teaching and training activities"
      ],
      type: "work" as const,
      iconColor: "text-blue-500",
      companyColor: "text-blue-400",
      periodColor: "text-sky-400"
    },
    {
      title: "Full-Stack Developer",
      company: "Maganatti Tech Solution",
      location: "Marsabit, Kenya",
      period: "Jan 2023 – Present",
      description: [
        "Developed responsive web applications using modern front-end frameworks",
        "Integrated APIs to enhance application functionality and user experience",
        "Designed database schemas for efficient data storage and retrieval",
        "Collaborated with clients to gather requirements and deliver tailored solutions",
        "Troubleshot and resolved technical issues in a timely manner",
        "Developed and maintained front-end web applications using HTML, CSS, JavaScript, jQuery and React"
      ],
      type: "work" as const,
      iconColor: "text-purple-500",
      companyColor: "text-purple-400",
      periodColor: "text-indigo-400"
    },
    {
      title: "ICT Trainer",
      company: "Direct-Aid/AMA",
      location: "Marsabit, Kenya",
      period: "June 2021 – Feb 2026",
      description: [
        "Developed instructional materials using current industry tools and standards",
        "Assessed learner progress through evaluations and feedback sessions",
        "Facilitated hands-on workshops to enhance practical skills in technology",
        "Delivered engaging presentations to diverse groups of learners",
        "Implemented innovative training methods to improve knowledge retention",
        "Collaborated with subject matter experts to ensure content relevance"
      ],
      type: "work" as const,
      iconColor: "text-emerald-500",
      companyColor: "text-emerald-400",
      periodColor: "text-green-400"
    },
    {
      title: "Computer Studies Teacher",
      company: "Dakabaricha Mixed Day Secondary School",
      location: "Marsabit, Kenya",
      period: "May 2024 – Aug 2024",
      description: [
        "Instructed students in computer programming and digital literacy skills",
        "Developed engaging lesson plans for diverse student groups",
        "Implemented classroom management techniques to maintain a positive learning environment",
        "Organized extracurricular computer clubs to foster student interest in technology",
        "Evaluated student performance through assessments and provided constructive feedback",
        "Created tests and assignments to assess student knowledge of presented coursework"
      ],
      type: "work" as const,
      iconColor: "text-orange-500",
      companyColor: "text-orange-400",
      periodColor: "text-red-400"
    },
    {
      title: "Computer Studies Teacher",
      company: "Marsabit Mixed Day Secondary School",
      location: "Marsabit, Kenya",
      period: "Nov 2021 – Oct 2022",
      description: [
        "Developed engaging lesson plans for computer studies curriculum",
        "Facilitated hands-on activities to enhance student understanding of technology",
        "Assessed student performance through tests and practical assignments",
        "Integrated educational software to support learning objectives in class",
        "Mentored students in coding and programming projects during extracurricular sessions"
      ],
      type: "work" as const,
      iconColor: "text-rose-500",
      companyColor: "text-rose-400",
      periodColor: "text-pink-400"
    },
    {
      title: "ICT Clerk",
      company: "IEBC",
      location: "Marsabit, Kenya",
      period: "Aug 2022 – Sept 2022",
      description: [
        "Enforced strict access protocols for sensitive voter databases, ensuring data confidentiality",
        "Provided on-site technical support for KIEMS kits, printers, and scanning devices",
        "Executed routine data backup procedures for electoral records and implemented recovery protocols",
        "Monitored and maintained local network stability to ensure uninterrupted data transmission",
        "Conducted brief technical training sessions for non-technical staff on electoral management software",
        "Documented all system activities, data changes, and correspondence logs for compliance",
        "Assisted in execution of contingency plans for power outages or network disruptions"
      ],
      type: "work" as const,
      iconColor: "text-cyan-500",
      companyColor: "text-cyan-400",
      periodColor: "text-blue-400"
    },
    {
      title: "Data Enumerator",
      company: "Kenya Climate Smart Agriculture (KCSAP)",
      location: "Marsabit, Kenya",
      period: "May 2021 – Jul 2021",
      description: [
        "Underwent 3 days training at KARLO Centre Marsabit",
        "Conducted test trials before the commencement of actual household survey",
        "Conducted household survey among the Sagante-Jaldesa residents",
        "Accurately captured and recorded data using ODK tools such as Kobo Collect",
        "Double checked and revised the survey to correct mistakes",
        "Ensured adherence to the code of conduct for enumerators",
        "Reported to the field supervisor"
      ],
      type: "work" as const,
      iconColor: "text-violet-500",
      companyColor: "text-violet-400",
      periodColor: "text-purple-400"
    },
    {
      title: "Polling & Counting Clerk",
      company: "IEBC",
      location: "Marsabit, Kenya",
      period: "Aug 2017 – Sept 2017",
      description: [
        "Operated the Kenya Integrated Election Management System (KIEMS) to verify voter identities",
        "Assisted Presiding Officers in secure stamping, issuance and sorting/counting of ballot papers",
        "Managed voter queues and facilitated smooth flow at the polling station",
        "Provided specialized assistance to voters with disabilities to ensure inclusive access",
        "Prepared and arranged polling/counting rooms with necessary equipment and security measures",
        "Executed additional duties assigned by Returning Officer during election period"
      ],
      type: "work" as const,
      iconColor: "text-amber-500",
      companyColor: "text-amber-400",
      periodColor: "text-yellow-400"
    },
    {
      title: "Untrained Teacher (Volunteer)",
      company: "Milima Mitatu Primary School",
      location: "Marsabit, Kenya",
      period: "Volunteer",
      description: [
        "Provided teaching support in various subjects",
        "Assisted with extracurricular activities and student mentoring"
      ],
      type: "work" as const,
      iconColor: "text-teal-500",
      companyColor: "text-teal-400",
      periodColor: "text-emerald-400"
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
      type: "education" as const,
      iconColor: "text-blue-500",
      companyColor: "text-blue-400",
      periodColor: "text-sky-400"
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
      type: "education" as const,
      iconColor: "text-purple-500",
      companyColor: "text-purple-400",
      periodColor: "text-indigo-400"
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
      type: "education" as const,
      iconColor: "text-emerald-500",
      companyColor: "text-emerald-400",
      periodColor: "text-green-400"
    },
    {
      title: "Kenya Certificate of Secondary Education (K.C.S.E)",
      company: "Arabuko Forest High School",
      location: "Kilifi, Kenya",
      period: "2013 – 2016",
      description: [
        "Attained mean score of B minus (B-)"
      ],
      type: "education" as const,
      iconColor: "text-orange-500",
      companyColor: "text-orange-400",
      periodColor: "text-red-400"
    },
    {
      title: "Kenya Certificate of Primary Education (K.C.P.E)",
      company: "Al-Hidaya Muslim Primary School",
      location: "Marsabit, Kenya",
      period: "2005 – 2012",
      description: [
        "Attained 347 marks"
      ],
      type: "education" as const,
      iconColor: "text-rose-500",
      companyColor: "text-rose-400",
      periodColor: "text-pink-400"
    }
  ];

  const certifications = [
    {
      title: "TVETA Licensed Information Technology Trainer",
      issuer: "Technical and Vocational Education and Training Authority",
      year: "2024",
      licenseNo: "TVETA/T258738",
      certColor: "text-emerald-500",
      yearColor: "bg-emerald-100"
    },
    {
      title: "Front-End Web Pro-Development",
      issuer: "ALX Africa - In Progress",
      year: "Oct 2025",
      certColor: "text-blue-500",
      yearColor: "bg-blue-100"
    },
    {
      title: "Professional Foundations",
      issuer: "ALX Africa - Completed",
      year: "Jun 2025",
      certColor: "text-purple-500",
      yearColor: "bg-purple-100"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Networking Academy",
      year: "2021",
      certColor: "text-orange-500",
      yearColor: "bg-orange-100"
    },
    {
      title: "Understanding Open Educational Resources (OER)",
      issuer: "Commonwealth of Learning",
      year: "2024",
      certColor: "text-sky-500",
      yearColor: "bg-sky-100"
    },
    {
      title: "Quality Assurance of Blended & Online Learning",
      issuer: "Commonwealth of Learning",
      year: "2023",
      certColor: "text-indigo-500",
      yearColor: "bg-indigo-100"
    },
    {
      title: "Universal Design For Learning (UDL)",
      issuer: "Commonwealth of Learning",
      year: "2024",
      certColor: "text-violet-500",
      yearColor: "bg-violet-100"
    }
  ];

  const technicalSkills = [
    { skill: "Web Design", percentage: 90, skillColor: "text-blue-500", progressColor: "bg-blue-500", delay: 0 },
    { skill: "Graphic Design", percentage: 95, skillColor: "text-purple-500", progressColor: "bg-purple-500", delay: 0.1 },
    { skill: "WordPress/CMS", percentage: 90, skillColor: "text-emerald-500", progressColor: "bg-emerald-500", delay: 0.2 },
    { skill: "Hardware & Cyber Services", percentage: 85, skillColor: "text-orange-500", progressColor: "bg-orange-500", delay: 0.3 },
    { skill: "IT Consultancy", percentage: 80, skillColor: "text-rose-500", progressColor: "bg-rose-500", delay: 0.4 },
    { skill: "UI/UX Design", percentage: 55, skillColor: "text-cyan-500", progressColor: "bg-cyan-500", delay: 0.5 }
  ];

  return (
    <motion.section
      id="resume"
      className="py-20 lg:pl-[280px] bg-muted"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="px-6 lg:pl-0 lg:pr-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">Professional Experience</h3>
            </div>
            
            <div>
              {workExperience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem {...item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">Education & Qualifications</h3>
            </div>
            
            <div>
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ExperienceItem {...item} />
                </motion.div>
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
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-card border border-blue-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Technical Expertise
              </h4>
              <div className="space-y-4">
                {technicalSkills.slice(0, 3).map((item, index) => (
                  <SkillBar key={index} {...item} delay={index * 0.1} />
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 shadow-card border border-purple-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-purple-700 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Professional Skills
              </h4>
              <div className="space-y-4">
                {technicalSkills.slice(3).map((item, index) => (
                  <SkillBar key={index} {...item} delay={index * 0.1 + 0.3} />
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-card border border-emerald-200/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-emerald-700 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Primary Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Node.js", "MySQL", "WordPress", "PHP", "HTML/CSS", "jQuery", "Figma", "Adobe Suite"].map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Award className="w-6 h-6 text-amber-500" />
            <h3 className="text-xl font-bold text-foreground font-heading">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CertificationCard {...cert} />
              </motion.div>
            ))}
          </div>

          {/* TVETA License Banner */}
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-900 mb-1">TVETA Licensed Trainer</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-800 mb-3">
                  Registered and Licensed under Section 23 of the TVET Act, 2013
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">Name:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">WAKO GODANA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">ID No:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">36492716</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">License No:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">TVETA/T258738</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">Specialization:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">IT Trainer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">Category:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">Up to Level 6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">KNQF Level:</span>
                    <span className="text-emerald-700 dark:text-emerald-800">Level 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ALX Program Banner */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-blue-800 dark:text-blue-900 mb-1">ALX Front-End Web Pro-Development Program</h4>
                <p className="text-sm text-blue-700 dark:text-blue-800 mb-3">
                  A specialist Front-End Developer program focusing on creating user-facing parts of websites and 
                  applications, ensuring they are visually appealing, interactive, and functional.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">Professional Foundations</span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-700">Completed - Jun 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-900 dark:text-gray-900 font-medium">Front End ProDev</span>
                    <span className="text-xs text-amber-600 dark:text-amber-700">In Progress - Oct 2025</span>
                  </div>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-800 mt-3">
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
