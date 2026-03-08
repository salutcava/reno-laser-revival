import { useParams, Navigate } from "react-router-dom";
import { getDepartmentBySlug, getCityBySlug } from "@/data/seoLocations";
import SeoDepartment from "./SeoDepartment";
import SeoCity from "./SeoCity";

const SeoDepartmentOrCity = () => {
  const params = useParams();
  const slug = params["*"] || "";
  if (!slug) return <Navigate to="/zones-intervention" replace />;

  if (getDepartmentBySlug(slug)) return <SeoDepartment />;
  if (getCityBySlug(slug)) return <SeoCity />;
  return <Navigate to="/zones-intervention" replace />;
};

export default SeoDepartmentOrCity;
