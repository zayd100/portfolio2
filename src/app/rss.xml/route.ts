import { DATA } from "@/data/resume";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" 
      xmlns:atom="http://www.w3.org/2005/Atom"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
    >
      <channel>
        <title>${DATA.name}'s Site</title>
        <description>${DATA.description || 'Personal portfolio and projects.'}</description>
        <link>${DATA.url}</link>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <generator>Next.js</generator>
        <atom:link href="${DATA.url}/rss.xml" rel="self" type="application/rss+xml"/>
        <copyright>All rights reserved ${new Date().getFullYear()}, ${DATA.name}</copyright>
        <item>
          <title>No Blog Posts</title>
          <description>This site no longer features a blog. Visit for portfolio and projects.</description>
          <link>${DATA.url}</link>
          <guid isPermaLink="true">${DATA.url}</guid>
          <pubDate>${new Date().toUTCString()}</pubDate>
          <dc:creator>${DATA.name}</dc:creator>
          <author>${DATA.contact?.email || ''} (${DATA.name})</author>
        </item>
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}