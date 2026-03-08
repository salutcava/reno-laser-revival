import { useParams, Navigate } from "react-router-dom";
import { getDepartmentBySlug, getCityBySlug } from "@/data/seoLocations";
import SeoDepartment from "./SeoDepartment";
import SeoCity from "./SeoCity";

const SeoPage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/zones-intervention" replace />;

  const dept = getDepartmentBySlug(slug);
  if (dept) return <SeoDepartment slug={slug} />;

  const city = getCityBySlug(slug);
  if (city) return <SeoCity slug={slug} />;

  return <Navigate to="/zones-intervention" replace />;
};

export default SeoPage;
