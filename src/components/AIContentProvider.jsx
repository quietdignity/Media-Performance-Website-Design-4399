import React from 'react';
import { Helmet } from 'react-helmet-async';

function AIContentProvider({ 
  title, 
  description, 
  keyTopics = [], 
  mainContent = '',
  actionableInsights = [],
  relatedPages = []
}) {
  const aiStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage", 
    "name": title,
    "description": description,
    "mainEntity": {
      "@type": "Article",
      "headline": title,
      "description": description,
      "keywords": keyTopics.join(', '),
      "articleBody": mainContent,
      "author": {
        "@type": "Person",
        "name": "James A. Brown"
      },
      "publisher": {
        "@type": "Organization", 
        "name": "Media Performance Insights"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": relatedPages.map((page, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": page.name,
        "item": page.url
      }))
    }
  };

  return (
    <Helmet>
      {/* AI-readable structured data */}
      <script type="application/ld+json">
        {JSON.stringify(aiStructuredData)}
      </script>
      
      {/* AI-specific meta tags */}
      <meta name="ai:topics" content={keyTopics.join(', ')} />
      <meta name="ai:content-type" content="executive-communication-training" />
      <meta name="ai:target-audience" content="C-suite executives, industry leaders, high-profile individuals" />
      <meta name="ai:actionable-insights" content={actionableInsights.join(' | ')} />
      
      {/* Enhanced description for AI understanding */}
      <meta name="ai:detailed-description" content={`${description} This content helps executives and leaders improve their media performance through strategic analysis and proven communication frameworks.`} />
      
      {/* Content accessibility for AI */}
      <meta name="ai:content-summary" content={mainContent.substring(0, 300)} />
    </Helmet>
  );
}

export default AIContentProvider;