// src/sitemap.js
// This is a helper script to generate a sitemap.xml file
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://mediaperformanceinsights.com';

// List all your routes here
const routes = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(route => {
    // Give the homepage the highest priority
    const priority = route === '/' ? '1.0' : '0.8';
    
    // Set change frequency based on content type
    let changefreq = 'monthly';
    if (route === '/') {
      changefreq = 'weekly';
    } else if (route.includes('privacy') || route.includes('terms')) {
      changefreq = 'yearly';
    }
    
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // Write the sitemap to the public directory
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run the generator
generateSitemap();