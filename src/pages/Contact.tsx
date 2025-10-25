import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .sendForm('service_6eketmq', 'template_9qspb3v', form.current, {
      publicKey: 'sH4Ha_H3IseI9ZNeE',
    })
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    })
    .catch(() => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    });
};



const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

return (
  <div className="min-h-screen bg-background">
    <Navigation />

    {/* Hero Section */}
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto px-4">
          Let's discuss how we can help transform your business
        </p>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="hr-consulting">HR & Team Coordination</SelectItem>
                      <SelectItem value="soft-skills">Speaking & Soft Skills</SelectItem>
                      <SelectItem value="web-development">Website Development</SelectItem>
                      <SelectItem value="event-management">Event Coordination</SelectItem>
                      <SelectItem value="hr-compliance">HR Compliance & Policy</SelectItem>
                      <SelectItem value="cost-optimization">Cost Optimization</SelectItem>
                      <SelectItem value="social-media">Social Media Management</SelectItem>
                      <SelectItem value="ai-automation">AI & Automation</SelectItem>
                      <SelectItem value="onboarding">Onboarding Courses</SelectItem>
                      <SelectItem value="content-generation">AI Content Generation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements..."
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following channels. We're here to help!
              </p>
            </div>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:contact@vsh7.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@vsh7.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Linkedin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/vaibhavvsh7/" className="text-muted-foreground hover:text-primary transition-colors">
                      Connect with us on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">Gurgaon, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
};

export default Contact;
