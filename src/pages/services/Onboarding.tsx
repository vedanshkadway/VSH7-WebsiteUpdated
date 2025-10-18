import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, CheckCircle2, ArrowLeft } from "lucide-react";

const Onboarding = () => {
  const benefits = [
    "Interactive training modules",
    "Company culture education",
    "Policy and procedure training",
    "Product/service knowledge courses",
    "Role-specific training content",
    "Engaging videos and quizzes",
    "Animated learning materials",
    "Progress tracking and assessments",
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
              <GraduationCap className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Onboarding Course Generation</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We develop <span className="font-semibold text-foreground">interactive onboarding modules</span> for organizations to train new employees effectively. These courses cover <span className="font-semibold text-foreground">company culture, policies, product/service knowledge, and role-specific training</span>, delivered in an engaging format with <span className="font-semibold text-foreground">videos, quizzes, and animations</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                This ensures every new hire starts their journey with <span className="font-semibold text-foreground">clarity, confidence, and alignment to organizational values</span>.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Course Features</h2>
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
              <h2 className="text-2xl font-bold mb-4">Enhance Your Onboarding Process</h2>
              <p className="text-muted-foreground mb-6">
                Create engaging training that sets new employees up for success from day one.
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

export default Onboarding;
