import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About VSH7 Technologies</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Forward-thinking consulting and solutions for the modern business landscape
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in">Who We Are</h2>
          <div className="prose prose-lg max-w-none animate-fade-in">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              VSH7 Technologies Pvt. Ltd. is a forward-thinking consulting and solutions company founded by{" "}
              <span className="font-semibold text-foreground">Vaibhav Sharma</span>, an{" "}
              <span className="font-semibold text-foreground">IIT Mandi alumnus</span> with expertise across
              education, corporate strategy, and digital transformation.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              We specialize in <span className="font-semibold text-foreground">business consultancy, HR compliance,
              AI-driven automation, and content solutions</span> that empower organizations to operate smarter, leaner,
              and more efficiently.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our approach blends{" "}
              <span className="font-semibold text-foreground">
                management consulting frameworks, cutting-edge technology, and practical execution
              </span>
              . Whether it is drafting airtight HR policies, optimizing costs, building websites, managing events, or
              automating processes with AI, we provide end-to-end solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-large transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To <span className="font-semibold text-foreground">simplify business complexities</span> and enable
                  organizations to achieve sustainable growth through{" "}
                  <span className="font-semibold text-foreground">consulting, compliance, and digital innovation</span>.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-large transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 rounded-full bg-secondary/10">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become <span className="font-semibold text-foreground">India's most trusted partner</span> for{" "}
                  <span className="font-semibold text-foreground">HR, automation, and strategic growth consulting</span>,
                  helping businesses of all sizes embrace the future of work with clarity, efficiency, and confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-6 inline-flex p-4 rounded-full bg-accent/10">
              <Lightbulb className="h-12 w-12 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground">
              At VSH7 Technologies, we believe that{" "}
              <span className="font-semibold text-foreground">clarity drives efficiency, and efficiency drives growth</span>.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    1
                  </div>
                  <div>
                    <p className="text-foreground">
                      We analyze business pain points with <span className="font-semibold">precision</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    2
                  </div>
                  <div>
                    <p className="text-foreground">
                      We design <span className="font-semibold">custom strategies and frameworks</span>, not generic
                      templates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    3
                  </div>
                  <div>
                    <p className="text-foreground">
                      We integrate <span className="font-semibold">AI, automation, and technology</span> into traditional
                      processes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    4
                  </div>
                  <div>
                    <p className="text-foreground">
                      We ensure <span className="font-semibold">execution support</span>, so recommendations translate
                      into real impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why VSH7 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-6 inline-flex p-4 rounded-full bg-secondary/10">
              <Award className="h-12 w-12 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why VSH7 Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Strong Foundation</h3>
                <p className="text-muted-foreground">
                  Founded by an IITian with a proven track record in both education and corporate advisory.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Consulting + Technology Hybrid</h3>
                <p className="text-muted-foreground">
                  We bridge the gap between management consulting and digital execution.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Customized Solutions</h3>
                <p className="text-muted-foreground">
                  Every business is different; we tailor strategies for maximum impact.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Compliance + Creativity</h3>
                <p className="text-muted-foreground">
                  From HR law compliance to AI content generation, we bring rigor and innovation together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
