import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ZonesIntervention from "./pages/ZonesIntervention";
import QuiSommesNous from "./pages/QuiSommesNous";
import LaserRenovation from "./pages/LaserRenovation";
import RenovationDecapage from "./pages/RenovationDecapage";
import MentionsLegales from "./pages/MentionsLegales";
import CGU from "./pages/CGU";
import SeoDepartmentOrCity from "./pages/SeoDepartmentOrCity";
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
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/laser-renovation" element={<LaserRenovation />} />
          <Route path="/renovation-decapage" element={<RenovationDecapage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          {/* SEO pages with dynamic slugs */}
          <Route path="/decapage-laser-:slug" element={<SeoDepartmentOrCity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
