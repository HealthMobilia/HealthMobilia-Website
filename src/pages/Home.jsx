import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

export default function Home() {
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Adjusted for Dark Theme (White/Sage nodes on Dark BG)
  const networkParticlesConfig = {
    fullScreen: { enable: false }, // CRITICAL: Ensures particles stay inside the container, not the whole screen
    background: { color: { value: "transparent" } }, 
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#ffffff" }, // White nodes
      links: {
        color: "#6ee7b7", // Soft Sage/Emerald Green lines
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  return (
    // This div inherits the global 'bg-charcoal-950' from your CSS
    <div className="w-full text-gray-100 font-sans selection:bg-emerald-900 selection:text-white">
      
      {/* =========================================
          SECTION 1: HERO 
          (Contained, not full screen. Fits under header.)
      ========================================= */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden border-b border-white/5">
        
        {/* Particle Background - Restricted to this section */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={networkParticlesConfig}
            className="h-full w-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          
          {/* Tagline */}
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-xs md:text-sm font-semibold text-emerald-400 tracking-widest uppercase">
              Advancing the One Health Approach
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Moving From Fragmented Data <br className="hidden md:block" />
            to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200"> To Achieve Systemic Clarity</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            We empower public health systems to translate raw community signals into predictive insights and proactive, life-saving interventions.
          </p>

        </div>
      </section>


      {/* =========================================
          SECTION 2: THE CORE CHALLENGE
          (Responsive Grid)
      ========================================= */}
      <section className="relative z-10 px-6 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12 border-l-4 border-emerald-500 pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Gap in Public Health</h2>
            <p className="text-gray-500 mt-2">Why current systems struggle to see the full picture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Card 1 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-4">
                The Invisible Gradual
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Reproductive and metabolic health challenges do not appear overnight. They are gradual, systemic, and driven by changing environmental factors often developing silently.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-4">
                The Data Disconnect
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Vast amounts of health information exist within communities, yet genuine insight remains fragmented. Without synthesis, vital signals are lost in the noise.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-4">
                The Reactive Trap
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Systems are often forced to react only when conditions escalate. We believe in shifting the timeline moving from late-stage reaction to early-stage understanding.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: OUR ROLE (THE STACK)
          (Visualizing the architecture)
      ========================================= */}
      <section className="relative z-10 px-6 py-20 md:py-32 bg-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Data-to-Decision Layer
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
              HealthMobilia operates at the intersection of observation and action. We do not replace existing health infrastructure; we enhance its interpretability.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              By identifying patterns in reproductive and metabolic health, we provide administration and policy-makers with the visibility needed to plan evidence-informed, preventive care strategies.
            </p>
          </div>

          {/* Abstract Visualization: The Stack */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-3">
            
            {/* Top Layer: Decision */}
            <div className="w-full max-w-sm p-5 bg-emerald-900/40 border border-emerald-500/50 text-white text-center rounded-lg backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-emerald-300 block mb-1">Outcome</span>
              <span className="text-lg font-bold">Informed Decision Support</span>
            </div>

            {/* Connector Line */}
            <div className="h-6 w-px bg-gray-600"></div>

            {/* Middle Layer: HealthMobilia (The Bridge) */}
            <div className="w-full max-w-sm p-6 bg-white text-black text-center rounded-lg relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Synthesis Layer</span>
               <span className="text-xl font-bold">HealthMobilia Intelligence</span>
            </div>

            {/* Connector Line */}
            <div className="h-6 w-px bg-gray-600"></div>

            {/* Bottom Layer: Data */}
            <div className="w-full max-w-sm p-5 bg-transparent border border-dashed border-gray-600 text-gray-400 text-center rounded-lg">
              <span className="text-[10px] uppercase tracking-widest block mb-1">Input Source</span>
              <span className="text-base font-medium">Fragmented Field Information</span>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: PHILOSOPHY (Bottom Anchor)
          (Leads into your Footer)
      ========================================= */}
      <section className="relative z-10 px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-gray-200 leading-tight mb-8">
            "Prevention is a function of Awareness."
          </blockquote>
          <p className="text-gray-500 text-lg font-light">
            True public health resilience comes from understanding the subtle shifts in community wellbeing today, to protect the populations of tomorrow.
          </p>
        </div>
      </section>

    </div>
  );
}