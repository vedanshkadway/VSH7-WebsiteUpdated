import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, CheckCircle2, ArrowLeft } from "lucide-react";

const HRCompliance = () => {
  const benefits = [
    "Customized HR policies and handbooks",
    "Compliance with Indian labor laws",
    "Employee onboarding frameworks",
    "Workplace conduct guidelines",
    "Leave and attendance policies",
    "POSH compliance",
    "Performance management systems",
    "Training and development frameworks",
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
              <FileCheck className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">HR Compliance and Policy Formation</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create customized <span className="font-semibold text-foreground">HR policies, handbooks, and compliance frameworks</span> aligned with <span className="font-semibold text-foreground">Indian labor laws and international standards</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Our services cover <span className="font-semibold text-foreground">employee onboarding, workplace conduct, leave and attendance policies, POSH, training & development, performance management</span>, and more. With legally compliant and practical policies, companies can build a <span className="font-semibold text-foreground">structured, transparent, and future-ready HR system</span>.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Coverage</h2>
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
              <h2 className="text-2xl font-bold mb-4">Build a Compliant HR Framework</h2>
              <p className="text-muted-foreground mb-6">
                Protect your organization with legally sound and practical HR policies.
              </p>
              <Link to="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRCompliance;
