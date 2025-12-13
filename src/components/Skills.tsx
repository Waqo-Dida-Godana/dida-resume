import React from "react";
import { Code, Palette, Monitor, Settings, Database, Layers } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: number }[];
  color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills, color }) => {
  return (
    <div className="bg-surface rounded-xl p-6 shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-accent font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Frontend Development",
      color: "bg-accent/10",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-success" />,
      title: "Backend Development",
      color: "bg-success/10",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "RESTful APIs", level: 92 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6 text-warning" />,
      title: "Design & UI/UX",
      color: "bg-warning/10",
      skills: [
        { name: "Graphic Design", level: 95 },
        { name: "UI/UX Design", level: 75 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Prototyping", level: 75 }
      ]
    },
    {
      icon: <Monitor className="w-6 h-6 text-info" />,
      title: "CMS & Platforms",
      color: "bg-info/10",
      skills: [
        { name: "WordPress", level: 95 },
        { name: "Drupal", level: 80 },
        { name: "Shopify", level: 85 },
        { name: "Custom CMS", level: 90 },
        { name: "E-commerce", level: 88 }
      ]
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      title: "DevOps & Tools",
      color: "bg-purple-500/10",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 70 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: "Technical Services",
      color: "bg-red-500/10",
      skills: [
        { name: "IT Consultancy", level: 88 },
        { name: "Hardware Support", level: 85 },
        { name: "Network Setup", level: 80 },
        { name: "System Administration", level: 82 },
        { name: "Cybersecurity", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
            Technical Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, design capabilities, and 
            the tools I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Overall Proficiency Summary */}
        <div className="mt-16 bg-background rounded-2xl p-8 shadow-elegant border border-border/50">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Professional Proficiency Overview
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Web Development", percentage: 95, color: "text-accent" },
              { label: "Graphic Design", percentage: 90, color: "text-warning" },
              { label: "IT Services", percentage: 85, color: "text-success" },
              { label: "UI/UX Design", percentage: 75, color: "text-info" }
            ].map((skill, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold ${skill.color} mb-2`}>
                  {skill.percentage}%
                </div>
                <div className="text-muted-foreground font-medium">
                  {skill.label}
                </div>
                <div className="w-full bg-muted rounded-full h-1 mt-3">
                  <div 
                    className="bg-gradient-primary h-1 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;