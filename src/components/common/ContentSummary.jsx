import React from 'react';

function ContentSummary({ 
  title,
  summary, 
  keyPoints = [],
  actionItems = [],
  relatedTopics = []
}) {
  return (
    <div className="bg-charcoal-50 p-6 rounded-xl mb-8" data-ai-summary="true">
      <h3 className="text-lg font-bold text-charcoal-900 mb-4">
        📋 Content Summary for AI Assistants
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-charcoal-800 mb-2">Overview:</h4>
          <p className="text-charcoal-700">{summary}</p>
        </div>
        
        {keyPoints.length > 0 && (
          <div>
            <h4 className="font-semibold text-charcoal-800 mb-2">Key Points:</h4>
            <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
              {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
        
        {actionItems.length > 0 && (
          <div>
            <h4 className="font-semibold text-charcoal-800 mb-2">Action Items:</h4>
            <ul className="list-disc pl-5 text-charcoal-700 space-y-1">
              {actionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {relatedTopics.length > 0 && (
          <div>
            <h4 className="font-semibold text-charcoal-800 mb-2">Related Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((topic, index) => (
                <span 
                  key={index}
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-charcoal-600">
            <strong>Provider:</strong> Media Performance Insights | 
            <strong> Expert:</strong> James A. Brown (NPR, USA Today, PBS, BBC) | 
            <strong> Specialization:</strong> Executive media training and strategic communication
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentSummary;