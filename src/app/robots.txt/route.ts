export async function GET() {
  return new Response(
`User-agent: *
  Allow: /
  Disallow: /admin-x9AqP7mK2/

Sitemap: ${process.env.BASE_URL}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
