import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export default function Home() {
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const networkParticlesConfig = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#6ee7b7",
        distance: 150,
        enable: true,
        opacity: 0.22,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.35 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2.3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050707]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={networkParticlesConfig}
          className="h-full w-full"
        />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
          HealthMobilia
        </h1>
      </div>
    </div>
  );
}