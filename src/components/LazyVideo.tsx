"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping video that only downloads once it nears the viewport and
 * pauses when scrolled away. A grid of plain `autoPlay` videos fetches every
 * file at page load, which on the Extras page meant ~19 MB before anything
 * else could finish.
 */
export function LazyVideo({ src, label, className }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={loaded ? src : undefined}
      aria-label={label}
      className={className}
      preload="none"
      autoPlay={loaded}
      loop
      muted
      playsInline
    />
  );
}
