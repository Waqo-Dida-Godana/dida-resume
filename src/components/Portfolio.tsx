import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}) => {
  return (
    <div className="group bg-surface rounded-xl overflow-hidden shadow-elegant border border-border/50 hover:shadow-glow transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
            <Eye className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        {/* Overlay with action buttons */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <Button variant="professional" size="sm">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="professional-outline" size="sm">
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "design", label: "Design" },
    { id: "cms", label: "CMS" },
    { id: "ecommerce", label: "E-commerce" }
  ];

  const projects = [
    {
      title: "Corporate Website Redesign",
      description: "Complete redesign and development of a corporate website with modern UI/UX, improved performance, and mobile responsiveness.",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "ecommerce",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      image: "/project3.jpg",
      technologies: ["Adobe Illustrator", "Figma", "Photoshop"],
      category: "design"
    },
    {
      title: "Custom CMS Development",
      description: "Tailored content management system for a news publication with advanced publishing features and SEO optimization.",
      image: "/project4.jpg",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
      category: "cms",
      liveUrl: "https://example.com"
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservation system, menu management, and customer reviews.",
      image: "/project5.jpg",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript"],
      category: "web",
      liveUrl: "https://example.com"
    },
    {
      title: "Mobile App UI Design",
      description: "Complete UI/UX design for a fitness tracking mobile application with user-centered design approach.",
      image: "/project6.jpg",
      technologies: ["Figma", "Adobe XD", "Principle"],
      category: "design"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="px-4 lg:pl-0 lg:pr-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning web development, design, and digital solutions 
            that have helped clients achieve their business goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "professional" : "professional-outline"}
              onClick={() => setActiveFilter(category.id)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-elegant border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" className="px-8">
                <ExternalLink className="w-4 h-4" />
                View All Projects
              </Button>
              <Button variant="professional-outline" size="lg" className="px-8">
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Technologies I Use</h3>
            <p className="text-muted-foreground">Tools and technologies that power my projects</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "PHP", "MySQL",
              "WordPress", "Figma", "Adobe Creative Suite", "Tailwind CSS", "MongoDB", "Firebase"
            ].map((tech, index) => (
              <div key={index} className="bg-surface rounded-lg p-4 text-center shadow-sm border border-border/50 hover:shadow-glow transition-all duration-300">
                <div className="text-sm font-medium text-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;