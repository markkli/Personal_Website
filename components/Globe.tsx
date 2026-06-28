"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Places I've lived / worked — [latitude, longitude]
const markers: { location: [number, number]; size: number }[] = [
  { location: [42.3601, -71.0589], size: 0.08 }, // Boston, MA
  { location: [37.8715, -122.273], size: 0.09 }, // Berkeley / SF
  { location: [44.8408, -93.2983], size: 0.1 }, // Bloomington, MN
  { location: [39.9042, 116.4074], size: 0.09 }, // Beijing
  { location: [-23.5505, -46.6333], size: 0.08 }, // São Paulo
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
