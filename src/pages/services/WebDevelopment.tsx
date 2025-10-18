import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, CheckCircle2, ArrowLeft } from "lucide-react";

const WebDevelopment = () => {
  const benefits = [
    "Modern, responsive website design",
    "Performance-oriented architecture",
    "Ongoing security updates",
    "SEO optimization",
    "User experience improvements",
    "Technical support and maintenance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto animate-fade-in">
          <Link to="/services" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded-lg bg-background/10 backdrop-blur-sm">
              <Globe className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Website Development and Management</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We design, develop, and manage websites that are <span className="font-semibold text-foreground">modern, responsive, and performance-oriented</span>. Beyond just building, we provide <span className="font-semibold text-foreground">ongoing management</span>—ensuring security, updates, SEO optimization, and user experience improvements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Whether it's a <span className="font-semibold text-foreground">corporate site, portfolio, or e-commerce platform</span>, our solutions are crafted to make your digital presence impactful and reliable.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-0 animate-fade-in">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Digital Presence?</h2>
              <p className="text-muted-foreground mb-6">
                Let's create a website that reflects your brand and drives results.
              </p>
              <Link to="/contact">
                <Button size="lg">Start Your Project</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
