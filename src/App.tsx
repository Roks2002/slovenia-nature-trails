import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SessionContextProvider, useSession } from "@supabase/auth-helpers-react";
import { supabase } from "./integrations/supabase/client";
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

// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  
  if (!session) {
    return <Navigate to="/auth?tab=login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  {/* Public routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Index />} />
                  
                  {/* Protected routes */}
                  <Route path="/booking" element={
                    <ProtectedRoute>
                      <Booking />
                    </ProtectedRoute>
                  } />
                  <Route path="/experiences" element={
                    <ProtectedRoute>
                      <Experiences />
                    </ProtectedRoute>
                  } />
                  <Route path="/experiences/:category" element={
                    <ProtectedRoute>
                      <Experiences />
                    </ProtectedRoute>
                  } />
                  <Route path="/trip/:id" element={
                    <ProtectedRoute>
                      <TripDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/stories" element={
                    <ProtectedRoute>
                      <Stories />
                    </ProtectedRoute>
                  } />
                  <Route path="/stories/:id" element={
                    <ProtectedRoute>
                      <StoryDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/destination/:region" element={
                    <ProtectedRoute>
                      <Destination />
                    </ProtectedRoute>
                  } />
                  <Route path="/journey-finder" element={
                    <ProtectedRoute>
                      <JourneyFinder />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;