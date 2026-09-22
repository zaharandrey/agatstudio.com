import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";
import { projectsMeta } from "@/lib/content/projects";
import { locales, localizeHref, type Locale } from "@/lib/i18n/config";

const staticPaths = ["", "/services", "/work", "/process", "/lab", "/about", "/contact"];

function alternatesFor(path: string) {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${site.url}${localizeHref(locale, path)}`])
    ) as Record<Locale, string>,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = staticPaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${site.url}${localizeHref(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: alternatesFor(path),
    }))
  );

  const projectRoutes = projectsMeta.flatMap((project) => {
    const path = `/work/${project.slug}`;
    return locales.map((locale) => ({
      url: `${site.url}${localizeHref(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: alternatesFor(path),
    }));
  });

  return [...staticRoutes, ...projectRoutes];
}
