import { useState, useEffect, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaFingerprint, FaWaveSquare, FaDna } from 'react-icons/fa6';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particlesInit = useCallback(async (engine) => await loadSlim(engine), []);

  return (
    <div className="bg-charcoal-950 text-paper min-h-screen">
      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Particles id="tsparticles" init={particlesInit} 
            options={{
              fullScreen: { enable: false },
              particles: {
                color: { value: "#94A89A" },
                links: { enable: true, opacity: 0.05, distance: 200, color: "#94A89A" },
                move: { enable: true, speed: 0.4 },
                number: { value: 30 },
                opacity: { value: 0.2 },
                size: { value: 1 }
              }
            }} className="h-full w-full" />
        </div>

        <div className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-1000 hidden md:block"
          style={{ background: `radial-gradient(circle 450px at ${mousePos.x}px ${mousePos.y}px, rgba(148, 168, 154, 0.04), transparent 80%)` }} />

        <div className="relative z-20 max-w-6xl text-center animate-reveal">
          <p className="text-sage tracking-[0.4em] uppercase text-[10px] font-bold mb-8 opacity-80">
            Intelligence Infrastructure • Stealth Phase
          </p>
          <h1 className="font-serif text-5xl md:text-[7.5vw] leading-[0.95] tracking-tight mb-12">
            Health is a <span className="text-sage italic">Lifespan</span>, <br /> Not a Pregnancy.
          </h1>
          <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
            <p className="text-gray-500 max-w-sm text-left text-[14px] leading-relaxed border-l border-sage/20 pl-6">
              Engineering the missing decade of reproductive health intelligence to eliminate metabolic diagnostic lag.
            </p>
            <button className="group relative px-10 py-5 bg-sage text-charcoal-950 font-bold uppercase text-[10px] tracking-widest overflow-hidden rounded-full transition-all hover:scale-105">
              Enter Stealth R&D
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE GAP (EDITORIAL) */}
      <section className="py-40 bg-charcoal-900 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              The Invisible <br /> <span className="text-sage italic">Fifteen.</span>
            </h2>
            <div className="text-gray-400 font-light leading-relaxed space-y-6 text-lg">
              <p>Public health programs focus on women after marriage or after 30. This leaves a 15-year void for the young population, where PCOS and metabolic issues go ignored.</p>
              <p className="border-l-2 border-sage pl-6 text-sage font-medium italic">"We are transforming reproductive health from a taboo into a standard health vital."</p>
            </div>
          </div>
          <div className="lg:w-1/2 relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-sage/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <FaFingerprint className="text-sage/10 text-[12rem] animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}