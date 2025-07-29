import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAIOptimization(pageData) {
  const location = useLocation();
  
  useEffect(() => {
    // Add AI-readable meta information to the page
    const aiMetaInfo = {
      page: location.pathname,
      title: pageData.title,
      description: pageData.description,
      topics: pageData.topics || [],
      lastUpdated: new Date().toISOString(),
      contentType: pageData.contentType || 'informational',
      targetAudience: 'C-suite executives, industry leaders, high-profile individuals',
      provider: 'Media Performance Insights',
      expert: 'James A. Brown'
    };
    
    // Add to window object for AI crawlers
    window.aiPageData = aiMetaInfo;
    
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageData.title,
      "description": pageData.description,
      "url": `https://mediaperformanceinsights.com${location.pathname}`,
      "keywords": pageData.topics?.join(', '),
      "author": {
        "@type": "Person",
        "name": "James A. Brown"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Media Performance Insights"
      }
    });
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname, pageData]);
}