import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for optimized image loading with intersection observer
 * Provides lazy loading, error handling, and loading states
 */
export const useOptimizedImage = (src, options = {}) => {
  const [imageState, setImageState] = useState({
    loaded: false,
    error: false,
    loading: false,
  });

  const imgRef = useRef(null);
  const observerRef = useRef(null);

  const {
    rootMargin = "50px",
    threshold = 0.1,
    fallbackSrc = null,
    eager = false,
  } = options;

  const handleImageLoad = useCallback(() => {
    setImageState({
      loaded: true,
      error: false,
      loading: false,
    });
  }, []);

  const handleImageError = useCallback(() => {
    setImageState({
      loaded: false,
      error: true,
      loading: false,
    });
  }, []);

  const startLoading = useCallback(() => {
    if (!src || imageState.loaded || imageState.loading) return;

    setImageState((prev) => ({ ...prev, loading: true }));

    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = () => {
      if (fallbackSrc) {
        const fallbackImg = new Image();
        fallbackImg.onload = handleImageLoad;
        fallbackImg.onerror = handleImageError;
        fallbackImg.src = fallbackSrc;
      } else {
        handleImageError();
      }
    };
    img.src = src;
  }, [
    src,
    imageState.loaded,
    imageState.loading,
    fallbackSrc,
    handleImageLoad,
    handleImageError,
  ]);

  useEffect(() => {
    if (eager) {
      startLoading();
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoading();
          observerRef.current?.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [eager, startLoading, rootMargin, threshold]);

  return {
    imgRef,
    ...imageState,
    src: imageState.loaded
      ? imageState.error && fallbackSrc
        ? fallbackSrc
        : src
      : undefined,
  };
};

/**
 * Optimized Image Component with built-in lazy loading and error handling
 */
export const LazyImage = ({
  src,
  alt,
  className = "",
  fallbackSrc = null,
  eager = false,
  loadingClassName = "animate-pulse bg-gray-200",
  errorClassName = "bg-gray-300 flex items-center justify-center text-gray-500",
  ...props
}) => {
  const {
    imgRef,
    loaded,
    error,
    loading,
    src: optimizedSrc,
  } = useOptimizedImage(src, {
    fallbackSrc,
    eager,
  });

  if (loading) {
    return (
      <div
        ref={imgRef}
        className={`${className} ${loadingClassName}`}
        {...props}
      />
    );
  }

  if (error && !fallbackSrc) {
    return (
      <div ref={imgRef} className={`${className} ${errorClassName}`} {...props}>
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={optimizedSrc}
      alt={alt}
      className={`${className} ${
        loaded ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...props}
    />
  );
};

export default LazyImage;
