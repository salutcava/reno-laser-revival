import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const ZonesIntervention = lazy(() => import("./pages/ZonesIntervention"));
const QuiSommesNous = lazy(() => import("./pages/QuiSommesNous"));
const LaserRenovation = lazy(() => import("./pages/LaserRenovation"));
const RenovationDecapage = lazy(() => import("./pages/RenovationDecapage"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const CGU = lazy(() => import("./pages/CGU"));
const SeoPage = lazy(() => import("./pages/SeoPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/zones-intervention" element={<ZonesIntervention />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/laser-renovation" element={<LaserRenovation />} />
            <Route path="/renovation-decapage" element={<RenovationDecapage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/decapage-laser/:slug" element={<SeoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
