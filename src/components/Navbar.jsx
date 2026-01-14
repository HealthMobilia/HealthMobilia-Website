import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = ({ isActive }) => 
    `text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:text-[#94A89A] ${
      isActive ? "text-[#94A89A]" : "text-gray-500"
    }`;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${
      scrolled ? "bg-[#050707]/90 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-tighter text-[#F5F7F7]">
          HEALTH<span className="text-[#94A89A] italic">MOBILIA</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/genesis" className={linkStyle}>Our Origin</NavLink>
          <NavLink to="/intelligence" className={linkStyle}>Domains of Impact</NavLink>
          <NavLink to="/collaborate" className={linkStyle}>Partnerships</NavLink>
          <NavLink to="/contact" className="px-6 py-2 border border-[#94A89A]/30 text-[#94A89A] text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-[#94A89A] hover:text-[#050707] transition-all rounded-full">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}