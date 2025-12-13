import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, FileText, Briefcase, Mail, Menu, X, Layers, Github, Linkedin, Twitter, Facebook, Youtube, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import profileImg from "@/assets/WAQO-300x300.png";

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
    { id: "services", label: "Portfolio", icon: Layers },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/wakodida", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/wakodida", label: "Facebook" },
    { icon: Github, href: "https://github.com/Waqo-Dida-Godana", label: "GitHub" },
    { icon: Youtube, href: "https://youtube.com/@wakodida", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/in/wako-dida-godana", label: "LinkedIn" },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar Navigation - Fixed left */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[280px] z-50">
        <div className="w-full h-full bg-sidebar flex flex-col items-center py-8 px-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-sidebar-accent">
              <img
                src={profileImg}
                alt="Wako Dida Godana"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-sidebar-foreground font-heading">
              Wako Dida Godana
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 mb-8">
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

          {/* Theme Toggle */}
          <div className="mb-8">
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

          {/* Navigation Links */}
          <div className="flex flex-col gap-1 w-full flex-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 w-full ${
                  activeSection === id
                    ? "text-accent bg-sidebar-accent"
                    : "text-sidebar-foreground hover:text-accent hover:bg-sidebar-accent/50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
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
            <div className="fixed inset-y-0 left-0 w-[280px] bg-sidebar z-50 animate-slide-in-left">
              <div className="flex flex-col h-full p-6">
                {/* Profile */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden border-4 border-sidebar-accent">
                    <img
                      src={profileImg}
                      alt="Wako Dida Godana"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-sidebar-foreground">
                    Wako Dida Godana
                  </h2>
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

                {/* Nav Links */}
                <div className="flex flex-col gap-1 flex-1">
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
