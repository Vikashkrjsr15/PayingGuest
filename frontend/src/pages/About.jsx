import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSearchLocation, FaShieldAlt, FaComments } from "react-icons/fa";

const features = [
  {
    title: "Easy Search",
    desc: "Find PGs instantly based on city, budget, and preferences.",
    icon: <FaSearchLocation className="text-indigo-600 text-4xl mb-4" />,
    link: "/search",
  },
  {
    title: "Verified Listings",
    desc: "We ensure all PGs are verified for safety and reliability.",
    icon: <FaShieldAlt className="text-purple-600 text-4xl mb-4" />,
    link: "/verified",
  },
  {
    title: "Direct Contact",
    desc: "No middlemen! Talk directly to PG owners anytime.",
    icon: <FaComments className="text-yellow-500 text-4xl mb-4" />,
    link: "/contact",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <motion.section
      id="about"
      className="bg-gradient-to-br from-indigo-50 to-purple-100 py-20 px-4 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 relative inline-block">
          About Us
          <span className="block h-1 w-24 bg-yellow-400 mt-2 mx-auto rounded-full"></span>
        </h2>
          <h6 className="text-2xl font-bold text-indigo-800">Why PG Finder?</h6>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-4">
          PG Finder simplifies your search for Paying Guest accommodations.
        Whether you're a student or a working professional, we offer
        verified listings and seamless communication with owners.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition cursor-pointer text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + index * 0.1 }}
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default About;
