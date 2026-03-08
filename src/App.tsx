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
import SeoDepartment from "./pages/SeoDepartment";
import SeoCity from "./pages/SeoCity";
import NotFound from "./pages/NotFound";
import { allDepartments, getAllCities } from "./data/seoLocations";

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
          {allDepartments.map((dept) => (
            <Route key={dept.slug} path={`/decapage-laser/${dept.slug}`} element={<SeoDepartment slug={dept.slug} />} />
          ))}
          {getAllCities().map((city) => (
            <Route key={city.slug} path={`/decapage-laser/${city.slug}`} element={<SeoCity slug={city.slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
