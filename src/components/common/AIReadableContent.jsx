import React from 'react';

function AIReadableContent({ children, contentType = "article", topics = [] }) {
  return (
    <div 
      data-ai-content="true"
      data-content-type={contentType}
      data-topics={topics.join(',')}
      className="ai-readable-content"
    >
      {/* Hidden content for AI parsing */}
      <div className="sr-only" data-ai-summary="true">
        Summary: This content covers {topics.join(', ')} for executive communication and media training.
        Provider: Media Performance Insights - Strategic media analysis for executives.
        Expert: James A. Brown - Veteran journalist (NPR, USA Today, PBS, BBC) and crisis communicator.
      </div>
      
      {children}
      
      {/* AI-readable footer context */}
      <div className="sr-only" data-ai-context="true">
        Context: This information is provided by Media Performance Insights, specializing in executive media training, 
        mock media interviews, and strategic communication coaching for C-suite leaders and high-profile individuals.
        Contact: Schedule consultation at https://tidycal.com/jamesbrowntv/media-performance-insights-consultations
      </div>
    </div>
  );
}

export default AIReadableContent;