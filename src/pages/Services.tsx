import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Business Consultancy: HR and Team Coordination",
      description:
        "We help organizations streamline their people management and team coordination systems. From setting up work structures, reporting frameworks, and performance tracking to conflict resolution and efficiency mapping.",
      link: "/services/hr-consulting",
    },
    {
      icon: Mic,
      title: "Speaking and Soft Skills Workshop",
      description:
        "Our workshops and training programs focus on enhancing communication, leadership, negotiation, and presentation skills. Each workshop is customized with practical activities, role-play exercises, and feedback mechanisms.",
      link: "/services/soft-skills",
    },
    {
      icon: Globe,
      title: "Website Development and Management",
      description:
        "We design, develop, and manage websites that are modern, responsive, and performance-oriented. Beyond just building, we provide ongoing management—ensuring security, updates, SEO optimization, and user experience improvements.",
      link: "/services/web-development",
    },
    {
      icon: Calendar,
      title: "Event Coordination and Management",
      description:
        "From corporate get-togethers, conferences, and workshops to student events and seminars, we manage end-to-end event execution. Our expertise covers planning, logistics, vendor coordination, bookings, hospitality, and on-ground execution.",
      link: "/services/event-management",
    },
    {
      icon: FileCheck,
      title: "HR Compliance and Policy Formation",
      description:
        "We create customized HR policies, handbooks, and compliance frameworks aligned with Indian labor laws and international standards. Our services cover employee onboarding, workplace conduct, leave and attendance policies, POSH, and more.",
      link: "/services/hr-compliance",
    },
    {
      icon: TrendingDown,
      title: "Cost Efficiency and Optimisation",
      description:
        "We analyze existing business processes to identify leakages, inefficiencies, and hidden costs. Our consulting helps optimize operations, vendor management, team allocation, and digital tools usage.",
      link: "/services/cost-optimization",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "We help brands establish and grow their digital presence across LinkedIn, Instagram, YouTube, and other platforms. Our services include content planning, graphics design, video creation, copywriting, post scheduling, and performance analytics.",
      link: "/services/social-media",
    },
    {
      icon: Brain,
      title: "AI and Automation",
      description:
        "We integrate AI tools, chatbots, and automation workflows into your business processes. From automating HR tasks, customer service, and data processing to building AI-driven assistants and custom solutions.",
      link: "/services/ai-automation",
    },
    {
      icon: GraduationCap,
      title: "Onboarding Course Generation",
      description:
        "We develop interactive onboarding modules for organizations to train new employees effectively. These courses cover company culture, policies, product/service knowledge, and role-specific training, delivered in an engaging format.",
      link: "/services/onboarding",
    },
    {
      icon: Sparkles,
      title: "Content Generation and Automation via AI Clone",
      description:
        "We specialize in building AI-powered content clones that can replicate a brand's voice, tone, and style. This enables companies to generate consistent, scalable content—from blogs and reports to scripts and social media posts.",
      link: "/services/content-generation",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Comprehensive solutions designed to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
