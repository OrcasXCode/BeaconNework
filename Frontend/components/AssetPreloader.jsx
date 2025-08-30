import { useEffect } from 'react';

// Critical assets that should be preloaded
const CRITICAL_ASSETS = [
  '/logo.svg',
  '/name.svg',
  '/seller.svg',
];

// Lottie animations to preload
const CRITICAL_ANIMATIONS = [
  '/src/assets/Animation.json',
  '/src/assets/interview1.json'
];

const AssetPreloader = () => {
  useEffect(() => {
    // Preload critical images
    CRITICAL_ASSETS.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical animations
    CRITICAL_ANIMATIONS.forEach(src => {
      fetch(src)
        .then(response => response.json())
        .then(data => {
          // Animation data is now cached
          console.log(`Preloaded animation: ${src}`);
        })
        .catch(error => {
          console.warn(`Failed to preload animation: ${src}`, error);
        });
    });

    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preconnect';
    fontLink.href = 'https://fonts.googleapis.com';
    document.head.appendChild(fontLink);

    const fontLink2 = document.createElement('link');
    fontLink2.rel = 'preconnect';
    fontLink2.href = 'https://fonts.gstatic.com';
    fontLink2.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink2);

    // Preconnect to external image sources
    const imagePreconnect = document.createElement('link');
    imagePreconnect.rel = 'preconnect';
    imagePreconnect.href = 'https://cdn.builder.io';
    document.head.appendChild(imagePreconnect);

    const imagePreconnect2 = document.createElement('link');
    imagePreconnect2.rel = 'preconnect';
    imagePreconnect2.href = 'https://images.pexels.com';
    document.head.appendChild(imagePreconnect2);

    const imagePreconnect3 = document.createElement('link');
    imagePreconnect3.rel = 'preconnect';
    imagePreconnect3.href = 'https://images.unsplash.com';
    document.head.appendChild(imagePreconnect3);

  }, []);

  return null; // This component doesn't render anything
};

export default AssetPreloader;
