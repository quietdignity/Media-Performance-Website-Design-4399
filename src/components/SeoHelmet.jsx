import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function SeoHelmet({ 
  title, 
  description, 
  keywords,
  ogImage = "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753477059899-blob",
  ogType = "website",
  schema = null,
  breadcrumbs = null
}) {
  const location = useLocation();
  const baseUrl = "https://mediaperformanceinsights.com";
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default title and description if not provided
  const defaultTitle = "Media Performance Insights | Strategic Media Analysis for Leaders";
  const defaultDescription = "Transform your media presence with strategic analysis from veteran journalist James A. Brown. Expert media training for executives and thought leaders.";
  const defaultKeywords = "media training, executive communication, media performance, strategic communication";
  
  // Use provided values or defaults
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;

  // Generate breadcrumbs schema if not provided
  const defaultBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // Add current page to breadcrumbs if not home
  if (location.pathname !== '/' && !breadcrumbs) {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pageName = pathSegments[pathSegments.length - 1];
    defaultBreadcrumbs.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName.charAt(0).toUpperCase() + pageName.slice(1),
      "item": currentUrl
    });
  }

  const breadcrumbsSchema = breadcrumbs || defaultBreadcrumbs;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`Media Performance Insights - ${title}`} />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={currentUrl} />

      {/* Language */}
      <html lang="en" />
      
      {/* Schema.org structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Breadcrumbs schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbsSchema)}
      </script>
    </Helmet>
  );
}

export default SeoHelmet;