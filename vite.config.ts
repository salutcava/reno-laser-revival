import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    async closeBundle() {
      const fs = await import("fs");
      const { allDepartments, getAllCities } = await import("./src/data/seoLocations.ts");

      const base = "https://www.renovlaser.fr";
      const today = new Date().toISOString().split("T")[0];

      const staticPages = [
        { url: "/", priority: "1.0", changefreq: "weekly" },
        { url: "/zones-intervention", priority: "0.9", changefreq: "monthly" },
        { url: "/qui-sommes-nous", priority: "0.7", changefreq: "monthly" },
        { url: "/laser-renovation", priority: "0.8", changefreq: "monthly" },
        { url: "/renovation-decapage", priority: "0.8", changefreq: "monthly" },
        { url: "/mentions-legales", priority: "0.3", changefreq: "yearly" },
        { url: "/cgu", priority: "0.3", changefreq: "yearly" },
      ];

      const deptPages = allDepartments.map((d) => ({
        url: `/decapage-laser/${d.slug}`,
        priority: "0.8",
        changefreq: "monthly",
      }));

      const cityPages = getAllCities().map((c) => ({
        url: `/decapage-laser/${c.slug}`,
        priority: "0.7",
        changefreq: "monthly",
      }));

      const allPages = [...staticPages, ...deptPages, ...cityPages];

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${base}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

      fs.writeFileSync("dist/sitemap.xml", xml);
      console.log(`✅ Sitemap generated with ${allPages.length} URLs`);
    },
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
