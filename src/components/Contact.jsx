import React from "react";
import { motion } from "framer-motion";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread, MdLocationOn } from "react-icons/md";
import { FaAmazon } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#005f99] to-[#00c49a] text-white py-20 px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-3"
      >
        Contact Us
      </motion.h2>

      <p className="text-center text-white/80 max-w-xl mx-auto mb-12 text-sm md:text-base">
        Have questions, bulk requirements, or business inquiries? Reach out to
        us directly — we’re happy to help.
      </p>

      {/* Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Contact Methods */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6 text-gray-800">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/917015526876"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 border border-green-400 rounded-xl p-4 hover:bg-green-50 transition"
          >
            <FaSquareWhatsapp size={42} color="#25D366" />
            <div>
              <h3 className="text-lg font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-600">
                Quick chat for orders & queries
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:Sonuindustry123@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 border border-blue-400 rounded-xl p-4 hover:bg-blue-50 transition"
          >
            <MdMarkEmailUnread size={42} color="#0078D4" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-600">Sonuindustry123@gmail.com</p>
            </div>
          </motion.a>
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-6 text-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <MdLocationOn size={42} color="#e63946" />
            <h3 className="text-xl font-semibold">Our Address</h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <strong>Chaya Industries</strong>
            <br />
            Near Main Market, Hansi Road
            <br />
            Bhiwani, Haryana – 127021
            <br />
            India
          </p>

          <a
            href="https://www.google.com/maps?q=Bhiwani,Haryana"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
          >
            View on Google Maps →
          </a>
        </motion.div>

        {/* Amazon Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-xl p-6 text-gray-800 md:col-span-2"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaAmazon size={40} color="#ff9900" />
            <h3 className="text-xl font-semibold">Available on Amazon</h3>
          </div>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl">
            Our products are available on <strong>Amazon.in</strong> for
            individual retail purchases.
            <br />
            <br />
            Prices on Amazon may be slightly higher due to platform fees,
            packaging, and logistics.
            <br />
            <br />
            👉 For <strong>bulk orders</strong>,{" "}
            <strong>wholesale pricing</strong>, or{" "}
            <strong>direct manufacturer deals</strong>, please contact us
            directly to get the best rates.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.in/s?k=Sonu+Industries&ref=bl_dp_s_web_0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#ff9900] text-white text-sm font-medium hover:opacity-90 transition"
            >
              View on Amazon
            </a>

            <a
              href="https://wa.me/917015526876"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-green-500 text-green-600 text-sm font-medium hover:bg-green-50 transition"
            >
              Contact for Bulk Orders
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
