import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "The Future of HR: How AI is Transforming People Management",
      excerpt:
        "Explore how artificial intelligence is revolutionizing HR practices, from recruitment to employee engagement and performance management.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "HR Technology",
    },
    {
      title: "Building Compliant HR Policies: A Guide for Indian Businesses",
      excerpt:
        "Navigate the complexities of Indian labor laws and create HR policies that protect your business while empowering your employees.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Compliance",
    },
    {
      title: "Cost Optimization Strategies for Growing Businesses",
      excerpt:
        "Learn practical approaches to reduce operational costs without compromising quality or employee satisfaction.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Business Strategy",
    },
    {
      title: "The Rise of Automation in Educational Technology",
      excerpt:
        "How EdTech companies are leveraging automation to create more personalized and effective learning experiences.",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "EdTech",
    },
    {
      title: "Effective Event Management in the Hybrid Work Era",
      excerpt:
        "Tips and strategies for organizing successful corporate events that engage both in-person and remote participants.",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Event Management",
    },
    {
      title: "Soft Skills Training: The Competitive Advantage",
      excerpt:
        "Why communication and leadership skills are more important than ever in the digital workplace and how to develop them.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Professional Development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insights & Articles</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Expert perspectives on business consulting, technology, and organizational growth
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">{article.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="container mx-auto max-w-3xl text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights, industry trends, and expert advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
