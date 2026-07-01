import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, FileText, Briefcase, Mail, Menu, X, Layers, Sun, Moon, MapPin, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import logoImg from "@/assets/logo.png";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "services", label: "Services", icon: Layers },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Sidebar Navigation - Fixed left */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 lg:w-[220px] xl:w-[250px] z-50">
        <div className="w-full h-full bg-sidebar flex flex-col items-center py-6 px-4">
          {/* Profile Section */}
          <div className="text-left mb-8">
            <div className="w-28 h-28 mb-4 rounded-lg overflow-hidden border-4 border-sidebar-accent">
              <img
                src={logoImg}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-sidebar-foreground font-heading">
              Wako Dida Godana
            </h2>
            <p className="text-accent font-medium text-sm mt-1">
              <span className="text-info">TVET ICT Trainer &</span>{' '}
              <span className="text-gradient">Full-stack Developer</span>
            </p>
            <div className="flex items-center gap-2 text-info mt-2">
              <MapPin className="w-3 h-3" />
              <span className="text-xs">Marsabit, Kenya</span>
            </div>
            <div className="inline-flex items-center gap-2 text-accent text-xs font-medium mt-2">
              <CheckCircle className="w-3 h-3" />
              Available for projects
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 mb-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <div className="mb-8 w-full rounded-2xl border border-sidebar-border/50 bg-sidebar-accent/20 p-3">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-sidebar-foreground/50 mb-1">
                  Theme
                </p>
                <p className="text-sm font-medium text-sidebar-foreground">
                  Toggle light / dark mode
                </p>
              </div>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full bg-sidebar-accent text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 w-full flex-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-3 px-3 py-3 rounded-2xl text-left transition-all duration-300 w-full ${
                  activeSection === id
                    ? "text-accent bg-sidebar-accent"
                    : "text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{label}</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-auto pt-8 border-t border-sidebar-border w-full">
            <p className="text-sm text-sidebar-foreground/60">
              © {new Date().getFullYear()} Wako Dida Godana
            </p>
            <p className="text-xs text-sidebar-foreground/40 mt-1">
              Full Stack Developer
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        {/* Mobile Menu Button */}
        <Button
          variant="default"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 right-4 z-50 bg-sidebar text-sidebar-foreground hover:bg-accent shadow-lg"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-[min(86vw,240px)] md:w-[min(80vw,260px)] bg-sidebar z-50 animate-slide-in-left">
              <div className="flex flex-col h-full p-6">
                {/* Profile */}
                <div className="text-left mb-6">
                  <div className="w-24 h-24 mb-3 rounded-lg overflow-hidden border-4 border-sidebar-accent">
                    <img
                      src={logoImg}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-sidebar-foreground">
                    Wako Dida Godana
                  </h2>
                  <p className="text-accent font-medium text-xs mt-1">
                    <span className="text-info">TVET ICT Trainer &</span>{' '}
                    <span className="text-gradient">Full-stack Developer</span>
                  </p>
                  <div className="flex items-center gap-2 text-info mt-2">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">Marsabit, Kenya</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-accent text-xs font-medium mt-2">
                    <CheckCircle className="w-3 h-3" />
                    Available for projects
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-2 mb-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Mobile theme toggle */}
                <div className="mb-6 w-full rounded-2xl border border-sidebar-border/50 bg-sidebar-accent/20 p-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-sidebar-foreground/50 mb-1">
                        Theme
                      </p>
                      <p className="text-xs font-medium text-sidebar-foreground">
                        Toggle light / dark
                      </p>
                    </div>
                    <Button
                      onClick={toggleTheme}
                      variant="ghost"
                      size="icon"
                      className="w-9 h-9 rounded-full bg-sidebar-accent text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-2 flex-1">
                  {navItems.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                        activeSection === id
                          ? "text-accent bg-sidebar-accent"
                          : "text-sidebar-foreground hover:text-accent"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navigation;
