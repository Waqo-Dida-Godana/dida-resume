import React from "react";
import { Code, Palette, Monitor, Settings, Smartphone, Search } from "lucide-react";

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

  return (
    <section id="services" className="py-20 bg-background lg:pl-[280px]">
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
                color: "text-accent"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Creating comprehensive project roadmap, timeline, and technical specifications.",
                color: "text-warning"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution using modern technologies and industry best practices.",
                color: "text-success"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, optimization, deployment, and ongoing support for your project.",
                color: "text-info"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`text-6xl font-bold ${process.color} mb-4 opacity-20`}>
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{process.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {process.description}
                </p>
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