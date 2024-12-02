import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Experiences from "./pages/Experiences";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import TripDetails from "./pages/TripDetails";
import Destination from "./pages/Destination";
import JourneyFinder from "./pages/JourneyFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/experiences/:category" element={<Experiences />} />
                <Route path="/trip/:id" element={<TripDetails />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/stories/:id" element={<StoryDetails />} />
                <Route path="/destination/:region" element={<Destination />} />
                <Route path="/journey-finder" element={<JourneyFinder />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;