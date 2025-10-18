import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, CheckCircle2, ArrowLeft } from "lucide-react";

const SocialMedia = () => {
  const benefits = [
    "Strategic content planning",
    "Professional graphics design",
    "Video creation and editing",
    "Engaging copywriting",
    "Post scheduling and management",
    "Performance analytics and reporting",
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
              <Share2 className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Social Media Management</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12 animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We help brands establish and grow their <span className="font-semibold text-foreground">digital presence across LinkedIn, Instagram, YouTube, and other platforms</span>. Our services include <span className="font-semibold text-foreground">content planning, graphics design, video creation, copywriting, post scheduling, and performance analytics</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                By blending creativity with strategy, we ensure your brand voice is <span className="font-semibold text-foreground">consistent, professional, and engaging</span> across all channels.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
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
              <h2 className="text-2xl font-bold mb-4">Grow Your Brand Online</h2>
              <p className="text-muted-foreground mb-6">
                Let's build a social media strategy that drives engagement and results.
              </p>
              <Link to="/contact">
                <Button size="lg">Start Growing</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
