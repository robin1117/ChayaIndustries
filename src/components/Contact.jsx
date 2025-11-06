import React from "react";
import { motion } from "framer-motion";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

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

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 text-gray-800">
        {/* WhatsApp Contact */}
        <motion.a
          href="https://wa.me/919467715978"
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
          href="mailto:robinsinghofficial2504@gmail.com"
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
    </section>
  );
};

export default Contact;
