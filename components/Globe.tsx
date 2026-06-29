"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Places I've lived, worked & traveled — [latitude, longitude]
const markers: { location: [number, number]; size: number }[] = [
  // South America
  { location: [-23.5505, -46.6333], size: 0.09 }, // São Paulo, Brazil
  { location: [-22.9068, -43.1729], size: 0.07 }, // Rio de Janeiro
  { location: [-25.6953, -54.4367], size: 0.07 }, // Iguazu Falls
  { location: [-54.8019, -68.303],  size: 0.08 }, // Ushuaia, Argentina
  { location: [-15.7797, -47.9297], size: 0.06 }, // Brasília
  { location: [-34.6037, -58.3816], size: 0.07 }, // Buenos Aires
  // Europe
  { location: [51.5074, -0.1278],   size: 0.08 }, // London
  // Asia
  { location: [6.9271, 79.8612],    size: 0.07 }, // Colombo, Sri Lanka
  { location: [39.9042, 116.4074],  size: 0.1  }, // Beijing
  { location: [31.2304, 121.4737],  size: 0.08 }, // Shanghai
  { location: [45.8038, 126.534],   size: 0.07 }, // Heilongjiang (Harbin)
  { location: [22.3193, 114.1694],  size: 0.07 }, // Hong Kong
  { location: [34.3416, 108.9398],  size: 0.07 }, // Xi'an
  { location: [22.1987, 113.5439],  size: 0.06 }, // Macau
  { location: [37.5665, 126.978],   size: 0.08 }, // Seoul
  { location: [35.6762, 139.6503],  size: 0.08 }, // Tokyo
  // United States
  { location: [61.2181, -149.9003], size: 0.09 }, // Alaska
  { location: [40.7608, -111.891],  size: 0.07 }, // Utah
  { location: [33.4484, -112.074],  size: 0.07 }, // Arizona
  { location: [41.14, -104.8197],   size: 0.07 }, // Wyoming
  { location: [45.5051, -122.675],  size: 0.08 }, // Oregon
  { location: [37.3382, -121.8863], size: 0.09 }, // California (Bay Area)
  { location: [43.615, -116.2023],  size: 0.06 }, // Idaho
  { location: [41.8781, -87.6298],  size: 0.07 }, // Illinois (Chicago)
  { location: [39.9526, -75.1652],  size: 0.06 }, // Pennsylvania
  { location: [42.3601, -71.0589],  size: 0.09 }, // Massachusetts (Boston)
  { location: [43.6591, -70.2568],  size: 0.07 }, // Maine
  { location: [40.7128, -74.006],   size: 0.08 }, // New York
  { location: [25.7617, -80.1918],  size: 0.07 }, // Florida
  { location: [44.8408, -93.2983],  size: 0.1  }, // Minnesota (Bloomington/Minneapolis)
];

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const rotation = useRef(0); // user-applied rotation offset

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    let raf = 0;
    let needResize = true;

    const onResize = () => {
      width = canvas.offsetWidth;
      needResize = true;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.12, 0.16, 0.24],
      markerColor: [0.2, 0.83, 0.6], // aurora green
      glowColor: [0.08, 0.18, 0.16],
      markers,
    });

    // cobe v2 renders on demand — drive it with our own animation loop.
    const render = () => {
      if (pointerInteracting.current === null) phi += 0.004; // auto-rotate
      const state: Record<string, number> = { phi: phi + rotation.current };
      if (needResize) {
        state.width = width * 2;
        state.height = width * 2;
        needResize = false;
      }
      globe.update(state);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const fadeIn = setTimeout(() => {
      canvas.style.opacity = "1";
    }, 100);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
      clearTimeout(fadeIn);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square">
      {/* aurora glow behind the globe */}
      <div className="absolute inset-0 rounded-full bg-aurora-green/10 blur-3xl" />
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-700 cursor-grab touch-none"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerMovement.current = delta;
            rotation.current = delta / 200;
          }
        }}
      />
    </div>
  );
}
