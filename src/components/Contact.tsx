import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Globe, Github, Linkedin, Twitter, Facebook, Youtube, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value, link }) => {
  const content = (
    <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-card border border-border/50 hover-lift">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm text-muted-foreground mb-1">{title}</div>
        <div className="font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block" target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast({
        title: "Error",
        description: `Failed to send message: ${errorMessage}. Please contact me directly at waqogodana98@gmail.com.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email us",
      value: "waqogodana98@gmail.com",
      link: "mailto:waqogodana98@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call us",
      value: "+254 716 792 928",
      link: "tel:+254716792928"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit us",
      value: "Marsabit, Kenya"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website",
      value: "maganatti.com",
      link: "https://maganatti.com"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/wakodida", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com/wakodida", label: "Facebook" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Waqo-Dida-Godana", label: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@wakodida", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/wako-dida-godana", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 lg:pl-[280px] bg-muted/30">
      <div className="px-6 lg:pl-0 lg:pr-12">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground font-heading">
            Contact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I would love to hear from you! Whether you have a project in mind or just want to say hello, 
            feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="bg-gradient-dark rounded-3xl p-8 h-full">
              <h3 className="text-xl font-bold text-sidebar-foreground mb-2 font-heading">
                Let's Connect
              </h3>
              <p className="text-sidebar-foreground/70 text-sm mb-8">
                We're here to discuss your vision and explore how we can bring it to life together.
              </p>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="flex items-center gap-4 p-4 rounded-xl bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        <span className="text-accent">{info.icon}</span>
                        <div>
                          <span className="text-xs text-sidebar-foreground/60">{info.title}</span>
                          <p className="text-sidebar-foreground font-medium text-sm">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-sidebar-accent/50">
                        <span className="text-accent">{info.icon}</span>
                        <div>
                          <span className="text-xs text-sidebar-foreground/60">{info.title}</span>
                          <p className="text-sidebar-foreground font-medium text-sm">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-sidebar-foreground mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6 font-heading">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-background border-border focus:border-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full bg-background border-border focus:border-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can I help you?"
                      required
                      className="w-full bg-background border-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full bg-background border-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Wako Dida Godana. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Full Stack Developer | IT Trainer | Graphic Designer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
