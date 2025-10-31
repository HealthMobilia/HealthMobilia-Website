import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseLink = "block px-4 py-2 transition duration-150";
  const activeClasses = "text-black font-semibold";
  const inactiveClasses = "text-gray-700 hover:text-gray-500";

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-300 bg-white sticky top-0 z-50">
      <NavLink to="/" className="font-bold text-xl">
        HealthMobilia
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-2 lg:space-x-4">
        <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          About Us
        </NavLink>
        <NavLink to="/our-work" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Our Work
        </NavLink>
        <NavLink to="/collaborate" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Pilot & Collaborations
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden z-40">
          <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            About
          </NavLink>
          <NavLink to="/our-work" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Our Work
          </NavLink>
          <NavLink to="/collaborate" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Collaborate
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeClasses : inactiveClasses}`} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
