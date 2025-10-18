import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, CheckCircle2, ArrowLeft } from "lucide-react";

const SoftSkills = () => {
  const benefits = [
    "Enhanced communication and presentation skills",
    "Improved leadership capabilities",
    "Better negotiation techniques",
    "Increased professional confidence",
    "Practical activities and role-play exercises",
    "Personalized feedback mechanisms",
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
              <Mic className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Speaking and Soft Skills Workshop</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our <span className="font-semibold text-foreground">workshops and training programs</span> focus on enhancing <span className="font-semibold text-foreground">communication, leadership, negotiation, and presentation skills</span>. These sessions are designed to empower employees, students, and leaders to perform with confidence in professional and academic environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Each workshop is customized with <span className="font-semibold text-foreground">practical activities, role-play exercises, and feedback mechanisms</span> to make a lasting impact on participants.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">What You'll Gain</h2>
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
              <h2 className="text-2xl font-bold mb-4">Invest in Your Team's Growth</h2>
              <p className="text-muted-foreground mb-6">
                Schedule a customized soft skills workshop for your organization.
              </p>
              <Link to="/contact">
                <Button size="lg">Book a Workshop</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftSkills;
