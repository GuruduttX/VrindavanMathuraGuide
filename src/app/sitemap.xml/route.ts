
export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap>
    <loc>${process.env.BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${process.env.BASE_URL}/sitemap-packages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${process.env.BASE_URL}/sitemap-blogs.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>

</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400", 
    },
  });
}
