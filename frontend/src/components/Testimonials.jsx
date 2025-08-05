// src/components/Testimonials.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anjali Sharma",
    title: "Student, Delhi University",
    message:
      "PG Finder helped me find a clean, budget-friendly PG near my college. Super convenient and transparent.",
    image: "/testimonials/user1.jpg",
  },
  {
    name: "Raj Patel",
    title: "Software Engineer, Pune",
    message:
      "I relocated to Pune and within hours found a great PG through PG Finder. It made settling in much easier.",
    image: "/testimonials/user2.jpg",
  },
  {
    name: "Priya Verma",
    title: "MBA Aspirant, Bangalore",
    message:
      "The verified listings and owner contacts made the PG hunt hassle-free. Highly recommended!",
    image: "/testimonials/user3.jpg",
  },
  {
    name: "Aman Singh",
    title: "Intern, Noida",
    message:
      "Being new to the city, I was nervous. PG Finder’s listings gave me clarity and security.",
    image: "/testimonials/user4.jpg",
  },
  {
    name: "Ritika Das",
    title: "Fashion Student, Mumbai",
    message:
      "The interface is beautiful and listings were accurate. Found a stylish PG in my budget!",
    image: "/testimonials/user5.jpg",
  },
  {
    name: "Manoj Joshi",
    title: "Marketing Executive, Hyderabad",
    message:
      "I appreciated the no-middleman feature. Directly contacted the PG owner and finalized everything in a day.",
    image: "/testimonials/user6.jpg",
  },
  {
    name: "Divya Nair",
    title: "NEET Aspirant, Kota",
    message:
      "Found a peaceful girls’ PG right next to my coaching institute. Thank you PG Finder!",
    image: "/testimonials/user7.jpg",
  },
  {
    name: "Karan Mehta",
    title: "Accountant, Ahmedabad",
    message:
      "I moved for work and didn’t know the city. PG Finder helped me discover verified PGs with ease.",
    image: "/testimonials/user8.jpg",
  },
  {
    name: "Sneha Roy",
    title: "UX Designer, Bengaluru",
    message:
      "Clean interface, reliable listings, and timely updates. PG Finder is a blessing for renters!",
    image: "/testimonials/user9.jpg",
  },
];

function Testimonials() {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleMessage = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const faqs = [
    {
      question: "How do I search for PGs?",
      answer:
        "Use the search bar or filter options to find PGs based on your city, preferences, and budget.",
    },
    {
      question: "Are listings verified?",
      answer:
        "Yes, every PG listed on our platform is verified for safety, cleanliness, and authenticity.",
    },
    {
      question: "Can I contact PG owners directly?",
      answer:
        "Absolutely. You can call or chat with PG owners without any middlemen involved.",
    },
    {
      question: "Is this service free?",
      answer:
        "Yes, PG Finder is completely free for users searching for PG accommodations.",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-800 mb-2">
          Testimonials
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Hear what people say about PG Finder.
        </p>
      </div>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {testimonials.map((item, idx) => {
          const isExpanded = expandedIndexes.includes(idx);
          return (
            <div key={idx} className="px-3">
              <div className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-indigo-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.title}</p>
                <p className="text-gray-700 text-sm">
                  {isExpanded
                    ? item.message
                    : item.message.slice(0, 90) +
                      (item.message.length > 90 ? "..." : "")}
                </p>
                {item.message.length > 90 && (
                  <button
                    className="mt-3 text-purple-600 font-medium hover:underline"
                    onClick={() => toggleMessage(idx)}
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </Slider>

      {/* FAQ Section */}
      <section className="mt-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-purple-800 font-semibold">
                  {faq.question}
                </span>
                <span className="text-2xl text-purple-600">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 text-sm transition-all duration-500 ease-in-out ${
                  openFAQ === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
}

export default Testimonials;
