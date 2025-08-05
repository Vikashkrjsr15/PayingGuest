// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative">
      <div
        className="absolute inset-0 bg-black/50 z-0"
        style={{
          backgroundImage: "url('/footerbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 text-white py-12 px-6 sm:px-10 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Future Developer</h2>
          <p className="text-sm max-w-xs">
            Grow Your Skill With Us For Advance Career.
          </p>
        </div>

        {/* Permalinks */}
        <div>
          <h2 className="text-lg font-bold mb-2">PermaLinks</h2>
          <ul className="text-sm space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="text-lg font-bold mb-2">Privacy</h2>
          <ul className="text-sm space-y-1">
            <li>Privacy Policy</li>
            <li>Term And Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MdPhone /> +91 7778825713
            </li>
            <li className="flex items-center gap-2">
              <MdEmail /> krishnavikashyadav@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn /> Chhota Govindpur , JSR-831015
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center py-4 text-white text-sm bg-indigo-900">
        @copyright 2024
      </div>
    </footer>
  );
};

export default Footer;