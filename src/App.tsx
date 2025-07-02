
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NamesByAlphabet from "./pages/NamesByAlphabet";
import AlphabetNames from "./pages/AlphabetNames";
import NameDetail from "./pages/NameDetail";
import PopularNames from "./pages/PopularNames";
import GenderWise from "./pages/GenderWise";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/names-by-alphabet" element={<NamesByAlphabet />} />
          <Route path="/alphabet/:letter" element={<AlphabetNames />} />
          <Route path="/name/:id" element={<NameDetail />} />
          <Route path="/popular-names" element={<PopularNames />} />
          <Route path="/gender-wise" element={<GenderWise />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
