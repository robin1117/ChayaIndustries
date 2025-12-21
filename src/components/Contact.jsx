import React from "react";
import { motion } from "framer-motion";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#005f99] to-[#00c49a] text-white py-16 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-white mb-8"
      >
        Contact Me
      </motion.h2>

      {/* Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Methods */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 text-gray-800">
          {/* WhatsApp Contact */}
          <motion.a
            href="https://wa.me/917015526876"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 border border-green-400 rounded-xl p-4 hover:bg-green-100 transition"
          >
            <FaSquareWhatsapp size={40} color="#25D366" />
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-600">Chat with me directly</p>
            </div>
          </motion.a>

          {/* Email Contact */}
          <motion.a
            href="mailto:Sonuindustry123@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 border border-blue-400 rounded-xl p-4 hover:bg-blue-100 transition"
          >
            <MdMarkEmailUnread size={40} color="#0078D4" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-600">Sonuindustry123@gmail.com</p>
            </div>
          </motion.a>
        </div>

        {/* Right Side - Address Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-6 text-gray-800 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdLocationOn size={40} color="#e63946" />
            <h3 className="text-xl font-semibold text-gray-900">Our Address</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Chaya Industries<br />
            Near Main Market, Hansi Road<br />
            Bhiwani, Haryana – 127021<br />
            India
          </p>

          {/* Optional: Google Map Link */}
          <a
            href="https://www.google.com/maps?q=Bhiwani,Haryana"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline text-sm"
          >
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
