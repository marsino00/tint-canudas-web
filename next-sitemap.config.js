/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tintoreriacanudas.com",
  generateRobotsTxt: true, // Generar robots.txt automáticamente
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.tintoreriacanudas.com/server-sitemap.xml", // Opcional: para sitemaps dinámicos
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privado", "/api/*"], // Rutas que no quieres indexar
      },
    ],
  },
  exclude: ["/admin/*", "/privado/*", "/api/*"], // Exclusiones para el sitemap
  sitemapSize: 5000, // Número máximo de URLs por archivo sitemap

  // Transformación opcional de URL para añadir campos adicionales
  transform: async (config, path) => {
    // Por defecto
    const defaults = {
      loc: path, // URL de la página
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Personalización por ruta
    if (path === "/") {
      // Página principal
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    return defaults;
  },
};
