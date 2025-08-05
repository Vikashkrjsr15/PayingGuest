// src/pages/Home.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import hero1 from "../assets/pg1.jpg";
import hero2 from "../assets/pg2.jpg";
import hero3 from "../assets/pg3.jpg";
import hero4 from "../assets/pg4.jpg";
import About from "./About";
import Contact from "./Contact";
import Testimonials from "../components/Testimonials";

const images = [hero1, hero2, hero3,hero4];

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: false, // ✅ disable fade to avoid blur effect
    pauseOnHover: false,
  };

  return (
    <motion.div
    id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Slider container */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Background slider */}
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[90vh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Text overlay always on top */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="bg-white/10 border backdrop-blur-sm border-white/30 text-white px-8 py-10 rounded-xl shadow-xl max-w-2xl mx-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
              Find Your <span className="text-yellow-300">Perfect PG</span> Today
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-white">
              Verified listings, easy contact, and smooth search—PG life made simple!
            </p>
            <button className="bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-full text-lg shadow-md transition">
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>
       <About/>
       <Testimonials/>
       {/* <Contact/> */}

    </motion.div>
  );
}

export default Home;
