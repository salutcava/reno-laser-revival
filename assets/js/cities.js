/** Charge /data/cities.json avec un petit cache localStorage (24h). */
async function loadCities() {
  const LS_KEY = "cities_json_v1";
  const LS_TS  = "cities_json_v1_ts";
  try {
    const now = Date.now();
    const ts  = localStorage.getItem(LS_TS);
    const cached = localStorage.getItem(LS_KEY);
    if (cached && ts && (now - Number(ts) < 24*60*60*1000)) {
      return JSON.parse(cached);
    }
    const res = await fetch("/data/cities.json", { cache: "no-cache" });
    const json = await res.json();
    localStorage.setItem(LS_KEY, JSON.stringify(json));
    localStorage.setItem(LS_TS, String(now));
    return json;
  } catch (e) {
    // Fallback sans cache
    const res = await fetch("/data/cities.json");
    return await res.json();
  }
}

/** Slugs rattachés à l’Aisne (02). Par défaut => Marne (51). */
const AISNE_02 = new Set([
  "chateau-thierry","fere-en-tardenois","crezancy","mezy-moulins",
  "conde-en-brie","nesles-la-montagne","brasles","etampes-sur-marne",
  "essomes-sur-marne","chierry","nogent-l-artaud","charly-sur-marne",
  "pavant","saulchery","nogentel","gland","neuilly-saint-front",
  "bezu-saint-germain","trelou-sur-marne"
]);

/** Renvoie "02 – Aisne" ou "51 – Marne" selon le slug. */
function deptLabelFor(slug) {
  return AISNE_02.has(slug) ? "02 – Aisne" : "51 – Marne";
}

/** Utilitaire pour extraire le slug de l’URL courante (ville page). */
function getSlugFromUrl() {
  const url = new URL(window.location.href);
  let slug = url.searchParams.get('slug');
  if (!slug) {
    const parts = url.pathname.split('/').filter(Boolean);
    const last = parts[parts.length - 1] || '';
    if (last && !/index\.html?$/i.test(last)) slug = last.replace(/\.html?$/i,'');
    else if (parts.length >= 2) slug = parts[parts.length - 2];
  }
  return (slug || "").toLowerCase().replace(/\/+$/,'');
}
