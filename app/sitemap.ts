import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/about",
    "/portfolio",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
