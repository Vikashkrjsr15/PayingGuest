import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/footerbg.jpg')" }}
    >
     <div className="px-6 py-12 bg-gradient-to-r from-black/80 via-black/50 to-black/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* PG Finder */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">PG Finder</h3>
            <p className="text-gray-300 text-md">
              Verified listings, easy contact, and smooth search-PG life made simple!
            </p>
          </div>

          {/* Permalinks */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">PermaLinks</h3>
            <ul className="space-y-2 text-gray-300 text-md">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#testimonials">FAQ</a></li>
              {/* <li>Contact</li> */}
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Privacy</h3>
            <ul className="space-y-2 text-gray-300 text-md">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Term And Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Contact Us</h3>
            <div className="text-gray-300 text-md space-y-1">
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 7778825713</p>
              <p className="flex items-center gap-2"><FaEnvelope /> krishnavikashyadav@gmail.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Chhota Govindpur, JSR-831015</p>
            </div>
            <div className="flex space-x-4 mt-3 text-lg cursor-pointer">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
<hr className="border-t border-gray-500 mt-6" />
        <p className="text-center text-white text-md mt-4">
          @copyright 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
