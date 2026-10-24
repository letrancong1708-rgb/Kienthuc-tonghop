// Vercel Web Analytics
// This script initializes Vercel Web Analytics for the static site
(function() {
  // Initialize the analytics queue
  window.va = window.va || function () {
    (window.vaq = window.vaq || []).push(arguments);
  };

  // Create and inject the analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  // Only load in production (when deployed to Vercel)
  if (window.location.hostname.includes('vercel.app') || 
      window.location.hostname.includes('vercel.com') ||
      (!window.location.hostname.includes('localhost') && 
       !window.location.hostname.includes('127.0.0.1'))) {
    document.head.appendChild(script);
  }
})();
