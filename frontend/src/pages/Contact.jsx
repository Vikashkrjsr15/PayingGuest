import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  return (
    <motion.section
    id="contact"
      className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-50 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800 mb-2 relative inline-block">
          Contact Us
          <span className="block h-1 w-20 bg-yellow-400 mt-2 mx-auto rounded-full"></span>
        </h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto mt-2">
          We're here to help! Reach out to us with questions, feedback, or partnership opportunities.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-md text-center"
        >
          <FaPhoneAlt className="text-indigo-600 text-3xl mb-3 mx-auto" />
          <h4 className="text-xl font-semibold text-indigo-800 mb-1">Call Us</h4>
          <p className="text-gray-700">+912345678222</p>
        </motion.div>

        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-md text-center"
        >
          <FaEnvelope className="text-purple-600 text-3xl mb-3 mx-auto" />
          <h4 className="text-xl font-semibold text-indigo-800 mb-1">Email Us</h4>
          <p className="text-gray-700">support@pgfinder.com</p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-xl p-6 shadow-md text-center"
        >
          <h4 className="text-xl font-semibold text-indigo-800 mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4 text-white">
            <a href="#" className="bg-blue-600 p-3 rounded-full hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-pink-500 p-3 rounded-full hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-sky-500 p-3 rounded-full hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-800 p-3 rounded-full hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
