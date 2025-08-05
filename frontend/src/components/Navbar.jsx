import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
        <div className="md:hidden px-4 pb-4 space-y-3 text-lg">
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
