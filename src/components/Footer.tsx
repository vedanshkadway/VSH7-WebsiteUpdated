import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-card via-primary/5 to-secondary/5 border-t border-primary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-extrabold bg-gradient-cta bg-clip-text text-transparent">
              VSH7
            </div>
            <p className="text-sm font-semibold text-foreground">
              Smart Solutions. Smarter Growth.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming businesses through consulting, technology, and innovation.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-cta flex items-center justify-center text-white hover:shadow-glow transition-all hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@vsh7.com" className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white hover:shadow-glow transition-all hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Top Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground font-medium">💼 HR Consulting</li>
              <li className="text-sm text-muted-foreground font-medium">🤖 AI & Automation</li>
              <li className="text-sm text-muted-foreground font-medium">🌐 Web Development</li>
              <li className="text-sm text-muted-foreground font-medium">📅 Event Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground group">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a href="mailto:contact@vsh7.com" className="hover:text-primary transition-colors">
                    contact@vsh7.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground group">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Location</div>
                  <span>Gurgaon, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} <span className="font-semibold text-foreground">VSH7 Technologies Pvt. Ltd.</span> All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with 💜 in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
