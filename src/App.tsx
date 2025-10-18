import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import HRConsulting from "./pages/services/HRConsulting";
import SoftSkills from "./pages/services/SoftSkills";
import WebDevelopment from "./pages/services/WebDevelopment";
import EventManagement from "./pages/services/EventManagement";
import HRCompliance from "./pages/services/HRCompliance";
import CostOptimization from "./pages/services/CostOptimization";
import SocialMedia from "./pages/services/SocialMedia";
import AIAutomation from "./pages/services/AIAutomation";
import Onboarding from "./pages/services/Onboarding";
import ContentGeneration from "./pages/services/ContentGeneration";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services/hr-consulting" element={<HRConsulting />} />
            <Route path="/services/soft-skills" element={<SoftSkills />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/event-management" element={<EventManagement />} />
            <Route path="/services/hr-compliance" element={<HRCompliance />} />
            <Route path="/services/cost-optimization" element={<CostOptimization />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/onboarding" element={<Onboarding />} />
            <Route path="/services/content-generation" element={<ContentGeneration />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
