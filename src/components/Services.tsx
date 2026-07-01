import React from "react";
import { Code, Palette, Monitor, Settings, Smartphone, Search, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgGradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color, bgGradient }) => {
  return (
    <div className={`${bgGradient} rounded-xl p-8 shadow-elegant border border-white/10 hover:shadow-glow transition-all duration-300 group h-full flex flex-col`}>
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies and best practices.",
      color: "bg-blue-500/10",
      bgGradient: "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10",
      features: [
        "React/Next.js Applications",
        "Custom CMS Development",
        "E-commerce Solutions",
        "API Development & Integration",
        "Database Design & Optimization",
        "Performance Optimization"
      ]
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Graphic Design",
      description: "Creative visual solutions that communicate your brand message effectively and professionally.",
      color: "bg-pink-500/10",
      bgGradient: "bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-orange-500/10",
      features: [
        "Brand Identity Design",
        "Logo & Business Cards",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Digital Illustrations"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-emerald-600" />,
      title: "UI/UX Design",
      description: "User-centered design approaches that create intuitive and engaging digital experiences.",
      color: "bg-emerald-500/10",
      bgGradient: "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-500/10",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing",
        "Responsive Design"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that provide seamless user experiences.",
      color: "bg-indigo-500/10",
      bgGradient: "bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-500/10",
      features: [
        "React Native Apps",
        "Progressive Web Apps",
        "Mobile-First Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-amber-600" />,
      title: "IT Consultancy",
      description: "Strategic technology guidance to help your business make informed decisions.",
      color: "bg-amber-500/10",
      bgGradient: "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10",
      features: [
        "Technology Strategy",
        "System Architecture",
        "Security Assessment",
        "Performance Audits",
        "Cloud Migration",
        "Training & Support"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-rose-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      color: "bg-rose-500/10",
      bgGradient: "bg-gradient-to-br from-rose-500/10 via-red-500/10 to-orange-500/10",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media Management",
        "Google Ads Campaign",
        "Analytics & Reporting",
        "Email Marketing"
      ]
    }
  ];

  const projects = [
    {
      title: "JangaVoice Early Warning System",
      description: "A multi-hazard early warning platform for vulnerable communities in Northern Kenya, helping residents report climate, health, and water issues while sending real-time alerts to agencies and humanitarian partners.",
      status: "In Production",
      tags: ["Vue.js", "Django", "MySQL", "Docker", "RabbitMQ", "Redis"],
      metrics: ["5,000+ Users", "Real-time Alerts", "Live"],
      accent: "from-emerald-500/20 to-teal-500/20",
      badge: "text-emerald-300"
    },
    {
      title: "MagaWallet",
      description: "A personal expense tracker with M-Pesa integration that automatically reads transaction SMS, supports biometric authentication, and exports detailed spending reports as PDF.",
      status: "Live",
      tags: ["React", "TypeScript", "Firebase", "Capacitor", "Tailwind CSS", "M-Pesa"],
      metrics: ["Biometric Auth", "Google Drive Backup", "Live"],
      accent: "from-blue-500/20 to-cyan-500/20",
      badge: "text-sky-300"
    },
    {
      title: "StockYangu",
      description: "A cloud-based inventory management system for Kenyan SMEs, designed with offline mobile support, barcode scanning, credit management, and real-time analytics.",
      status: "Live",
      tags: ["React", "Firebase", "Capacitor", "Node.js"],
      metrics: ["Offline Mobile", "Barcode Scanning", "Live"],
      accent: "from-violet-500/20 to-fuchsia-500/20",
      badge: "text-violet-300"
    },
    {
      title: "Online Timetable Generator",
      description: "An automated timetable generation system for schools that handles class scheduling, teacher assignments, room allocation, and conflict resolution efficiently.",
      status: "Live",
      tags: ["Django", "Vue.js", "PostgreSQL"],
      metrics: ["Smart Scheduling", "Conflict Resolution", "Live"],
      accent: "from-amber-500/20 to-orange-500/20",
      badge: "text-amber-300"
    },
    {
      title: "Nexus Focus Consultancy",
      description: "A professional website for an environmental consulting firm focused on Environmental Impact Assessments (EIA) and Environmental and Social Impact Assessments (ESEA).",
      status: "Live",
      tags: ["Django", "Vue.js", "MySQL"],
      metrics: ["Consultancy Website", "EIA Focus", "Live"],
      accent: "from-rose-500/20 to-pink-500/20",
      badge: "text-rose-300"
    },
    {
      title: "Alpharika Ltd",
      description: "An API platform for commerce, ERP, commodity markets, and insurance services across Africa, built to support large-scale business operations.",
      status: "Live",
      tags: ["Node.js", "Express.js", "PostgreSQL"],
      metrics: ["API Platform", "Enterprise Ready", "Live"],
      accent: "from-indigo-500/20 to-blue-500/20",
      badge: "text-indigo-300"
    },
    {
      title: "Maganatti E-Commerce",
      description: "A full e-commerce platform for electronic products with payment processing, inventory management, and order tracking features.",
      status: "Live",
      tags: ["Django", "DRF", "PostgreSQL"],
      metrics: ["Payment Processing", "Order Tracking", "Live"],
      accent: "from-lime-500/20 to-emerald-500/20",
      badge: "text-lime-300"
    },
    {
      title: "Maganatti Website",
      description: "A polished company website for Maganatti, built to showcase services, projects, and professional presence with a modern digital experience.",
      status: "Live",
      tags: ["React", "Tailwind CSS", "Vite", "Modern UI"],
      metrics: ["Company Website", "Professional Brand", "Live"],
      accent: "from-sky-500/20 to-blue-500/20",
      badge: "text-sky-300"
    },
    {
      title: "ParlaAfrica Website",
      description: "A professional website for ParlaAfrica built to present organizational information, initiatives, and public-facing content in a clear and engaging way.",
      status: "Live",
      tags: ["React", "Tailwind CSS", "Responsive UI", "Content-First"],
      metrics: ["NGO Website", "Responsive Design", "Live"],
      accent: "from-fuchsia-500/20 to-purple-500/20",
      badge: "text-fuchsia-300"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background lg:pl-[300px]">
      <div className="px-4 lg:pl-0 lg:pr-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
            What I Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Services & Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to meet your business needs and help you 
            achieve your goals through innovative technology and creative design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-elegant border border-border/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">My Work Process</h3>
            <p className="text-muted-foreground">A systematic approach to delivering exceptional results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and project requirements through detailed consultation.",
                cardClass: "bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-yellow-500/15 border-amber-500/30 text-amber-700 dark:text-amber-300",
                numberClass: "text-amber-600 dark:text-amber-400"
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating comprehensive project roadmap, timeline, and technical specifications.",
                cardClass: "bg-gradient-to-br from-sky-500/15 via-cyan-500/10 to-blue-500/15 border-sky-500/30 text-sky-700 dark:text-sky-300",
                numberClass: "text-sky-600 dark:text-sky-400"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution using modern technologies and industry best practices.",
                cardClass: "bg-gradient-to-br from-emerald-500/15 via-green-500/10 to-lime-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
                numberClass: "text-emerald-600 dark:text-emerald-400"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, optimization, deployment, and ongoing support for your project.",
                cardClass: "bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-purple-500/15 border-violet-500/30 text-violet-700 dark:text-violet-300",
                numberClass: "text-violet-600 dark:text-violet-400"
              }
            ].map((process, index) => (
              <div key={index} className={`rounded-2xl border p-6 shadow-sm ${process.cardClass}`}>
                <div className={`text-6xl font-bold mb-4 opacity-80 ${process.numberClass}`}>
                  {process.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                <p className="text-sm leading-relaxed opacity-90">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-12 shadow-elegant text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200 mb-4">
                Projects
              </span>
              <h3 className="text-3xl font-bold mb-3">Featured Work</h3>
              <p className="text-slate-300 max-w-2xl">
                All projects built under Maganatti Tech Solutions, focused on practical digital products that solve real community and business challenges.
              </p>
            </div>
            <a
              href="https://maganatti.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground shadow-sm"
            >
              View reference site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${project.badge}`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-slate-400">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                <p className="text-sm leading-relaxed text-slate-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold text-accent-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-accent-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into reality. I'm available for freelance 
              projects and long-term collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors duration-300"
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
                Get a Quote
              </button>
              <button
                className="border-2 border-background/30 text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:border-background/50 transition-colors duration-300"
                onClick={() => {
                  window.open('https://github.com/Waqo-Dida-Godana', '_blank', 'noopener,noreferrer');
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;