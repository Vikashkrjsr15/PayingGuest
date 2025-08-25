import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md"
          : "bg-gradient-to-r from-black/50 via-gray-600/60 to-black/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold tracking-wide">PG Finder</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
          <Link to="/signup" className="hover:text-yellow-300 transition">Signup</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">About</a>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
