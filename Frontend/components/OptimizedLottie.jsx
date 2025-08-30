import React, { Suspense, useMemo, useCallback } from 'react';
import Lottie from 'lottie-react';

const OptimizedLottie = ({ 
  animationData, 
  className = "max-w-full h-auto",
  loop = true,
  autoplay = true,
  rendererSettings = {},
  fallback = null,
  ...props 
}) => {
  
  // Optimize renderer settings
  const optimizedRendererSettings = useMemo(() => ({
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true,
    hideOnTransparent: true,
    ...rendererSettings
  }), [rendererSettings]);

  // Memoize the Lottie component to prevent unnecessary re-renders
  const MemoizedLottie = useMemo(() => {
    if (!animationData) return null;
    
    return (
      <Lottie 
        animationData={animationData}
        className={className}
        loop={loop}
        autoplay={autoplay}
        rendererSettings={optimizedRendererSettings}
        {...props}
      />
    );
  }, [animationData, className, loop, autoplay, optimizedRendererSettings, props]);

  // Custom fallback component
  const DefaultFallback = useCallback(() => (
    <div className={`${className} bg-gray-100 animate-pulse rounded-lg flex items-center justify-center`}>
      <div className="text-gray-400 text-sm">Loading animation...</div>
    </div>
  ), [className]);

  const FallbackComponent = fallback || DefaultFallback;

  return (
    <Suspense fallback={<FallbackComponent />}>
      {MemoizedLottie}
    </Suspense>
  );
};

export default OptimizedLottie;
