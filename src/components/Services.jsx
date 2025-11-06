import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaPaintBrush, FaTools } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

// Add background images for each card
const services = [
  {
    title: "Manufacturing",
    desc: "We specialize in producing high-quality yarn with precision and consistency.",
    icon: <FaIndustry size={40} className="text-white drop-shadow-md" />,
    bg: "https://image.shutterstock.com/image-vector/red-threadvector-thread-looped-swirl-260nw-2626876629.jpg", // factory
  },
  {
    title: "Custom Branding",
    desc: "Offering personalized designs and packaging for your products",
    icon: <FaPaintBrush size={40} className="text-white drop-shadow-md" />,
    bg: "https://images.unsplash.com/photo-1515162305280-d934addff2a6?auto=format&fit=crop&w=800&q=60", // design
  },
  {
    title: "Transportation",
    desc: "Providing reliable support and regular maintenance for smooth operations.",
    icon: <FaTruck size={40} />,
    bg: "https://images.unsplash.com/photo-1581092334707-9c27b1b1e7a6?auto=format&fit=crop&w=800&q=60", // maintenance
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-[#004d4d] to-[#00b3b3] text-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-12 drop-shadow-lg"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 px-10 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Background image */}
            {/* <motion.div
              initial={{ scale: 1.3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.bg})` }}
            ></motion.div> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col items-center text-center text-white">
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-200 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
