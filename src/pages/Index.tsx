import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import {
  Users,
  Mic,
  Globe,
  Calendar,
  FileCheck,
  TrendingDown,
  Share2,
  Brain,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Award,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Users,
      title: "HR & Team Coordination",
      description: "Streamline people management and team structures for optimal productivity.",
      link: "/services/hr-consulting",
    },
    {
      icon: Mic,
      title: "Speaking & Soft Skills",
      description: "Customized workshops to enhance communication and leadership capabilities.",
      link: "/services/soft-skills",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites with ongoing management and optimization.",
      link: "/services/web-development",
    },
    {
      icon: Calendar,
      title: "Event Coordination",
      description: "End-to-end event management from planning to flawless execution.",
      link: "/services/event-management",
    },
    {
      icon: FileCheck,
      title: "HR Compliance & Policy",
      description: "Legally compliant HR frameworks aligned with Indian labor laws.",
      link: "/services/hr-compliance",
    },
    {
      icon: TrendingDown,
      title: "Cost Optimization",
      description: "Identify inefficiencies and boost profitability without compromising quality.",
      link: "/services/cost-optimization",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic content creation and brand growth across digital platforms.",
      link: "/services/social-media",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Integrate intelligent automation to work smarter and faster.",
      link: "/services/ai-automation",
    },
    {
      icon: GraduationCap,
      title: "Onboarding Courses",
      description: "Interactive training modules for effective employee orientation.",
      link: "/services/onboarding",
    },
    {
      icon: Sparkles,
      title: "AI Content Generation",
      description: "Scalable, authentic content through AI-powered brand clones.",
      link: "/services/content-generation",
    },
  ];

  const pillars = [
    {
      icon: Award,
      title: "Top-Tier Expertise",
      description: "Founded by an IIT alumnus with proven experience across corporate and education sectors.",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description: "Tailored strategies designed for your specific challenges, not generic templates.",
    },
    {
      icon: Zap,
      title: "Consulting + Technology",
      description: "Unique blend of management consulting frameworks with cutting-edge tech execution.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Execution",
      description: "We ensure recommendations translate into real, measurable business impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 64, 154, 0.95), rgba(20, 50, 120, 0.9)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>
        
        <div className="relative container mx-auto text-center animate-slide-up">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm animate-bounce-in animate-glow-pulse">
            🚀 Transforming Businesses Since 2020
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight px-4 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Smart Solutions. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-white to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Smarter Growth.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-4 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            VSH7 Technologies helps businesses transform with consulting, HR systems, AI-driven automation, and
            digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12 animate-scale-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <Link to="/services" className="group">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 relative overflow-hidden transition-all duration-2000 hover:shadow-glow">
                <span className="relative z-10 flex items-center gap-2">
                  🎯 Explore Services
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-2000 "></div>
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6 hover:scale-110 hover:shadow-glow transition-all duration-300">
                <span className="flex items-center gap-2">
                  💬 Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 items-center text-white/80 text-sm animate-slide-in-left" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform">
              <CheckCircle2 className="h-5 w-5 text-accent animate-pulse" />
              <span>IIT Alumni Founded</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform " style={{ animationDelay: "0.2s" }}>
              <CheckCircle2 className="h-5 w-5 text-accent animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span>10+ Services</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-110 transition-transform " style={{ animationDelay: "0.4s" }}>
              <CheckCircle2 className="h-5 w-5 text-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        
        <div className="container mx-auto max-w-4xl text-center animate-slide-up relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm animate-rotate-in">
            🎓 IIT Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cta bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Founded by IIT alumnus <span className="font-bold text-primary hover:animate-pulse">Vaibhav Sharma</span>, VSH7
            Technologies is a multidisciplinary consulting and solutions firm helping organizations optimize
            performance through HR consultancy, automation, compliance, and digital growth.
          </p>
          <Link to="/about" className="animate-scale-in group" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <Button variant="default" size="lg" className="group hover:scale-110 hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Know More
                <Award className="h-5 w-5 group-hover:rotate-[360deg] transition-transform duration-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-20 animate-shimmer"></div>
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-cta text-white font-semibold text-sm animate-shimmer bg-[length:200%_100%] animate-tilt">
              ⚡ Power-Packed Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cta bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <Card 
                  className="h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-slide-up border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-cta shadow-medium group-hover:shadow-glow group-hover:animate-glow-pulse transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <service.icon className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-accent text-white font-semibold text-sm animate-slide-in-right">
              🏆 Excellence Guaranteed
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cta bg-clip-text text-transparent">
              Why Choose VSH7
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring a unique combination of expertise, innovation, and execution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-large transition-all duration-500 animate-bounce-in hover:-translate-y-3 border-2 border-transparent hover:border-primary/30 bg-card relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-gradient-accent shadow-medium group-hover:shadow-glow transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]">
                    <pillar.icon className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-hero">

        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
        
        <div className="container mx-auto text-center animate-slide-up relative z-10">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm animate-rotate-in animate-glow-pulse">
            🎯 Ready to Transform?
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Looking for tailored consulting<br className="hidden sm:block" /> or digital solutions?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            Let's talk about how we can help your business grow and achieve unprecedented success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-scale-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <Link to="/contact" className="group">
              <Button variant="hero-outline" size="lg" className="text-lg px-10 py-7 hover:scale-110 hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  📅 Book a Consultation
                  <Sparkles className="h-5 w-5 group-hover:rotate-[360deg] transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
              </Button>
            </Link>
            <Link to="/services" className="group">
              <Button variant="hero-outline" size="lg" className="text-lg px-10 py-7 hover:scale-110 hover:shadow-glow transition-all duration-300">
                <span className="flex items-center gap-2">
                  🚀 View All Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
