import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MdBusiness, MdVerified, MdLocationOn } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";

const WhoWeAre = () => {
  // Edit the establishment year if needed
  const EST_YEAR = 2015;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - EST_YEAR;

  return (
    <section
      id="about"
      className="py-16 px-6 bg-white text-gray-900"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            id="who-we-are-heading"
            className="text-3xl sm:text-4xl font-bold mb-2"
          >
            About Chhaya Industries
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            — Who We Are / हम कौन हैं —
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Legal clarity */}
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Chhaya Industries:</strong> A Unit of{" "}
                <strong>Sonu Industries</strong>.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Established in <strong>{EST_YEAR}</strong>, Chhaya Industries is
                the dedicated plastic yarn manufacturing brand of Sonu
                Industries — serving bulk B2B clients across India with
                consistent quality and timely deliveries.
              </p>
            </div>

            {/* Bullet strengths */}
            <ul className="grid gap-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-blue-600">
                  <GiFactory />
                </span>
                <div>
                  <p className="font-semibold">
                    {yearsOfExperience >= 1
                      ? `${yearsOfExperience}+ Years of Manufacturing Expertise`
                      : `Established ${EST_YEAR}`}
                  </p>
                  <p className="text-sm text-gray-600">
                    Proven experience in producing high-consistency PP plastic
                    yarn for bulk buyers.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-green-600">
                  <MdVerified />
                </span>
                <div>
                  <p className="font-semibold">Strict Quality Control</p>
                  <p className="text-sm text-gray-600">
                    Multiple quality checkpoints to ensure consistency and
                    defect-free delivery.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-indigo-600">
                  <FaShippingFast />
                </span>
                <div>
                  <p className="font-semibold">
                    Reliable Logistics for Bulk Orders (Pan-India)
                  </p>
                  <p className="text-sm text-gray-600">
                    Fast, traceable shipping and strong logistics partnerships.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-2xl text-amber-500">
                  <MdBusiness />
                </span>
                <div>
                  <p className="font-semibold">100% GST Compliant</p>
                  <p className="text-sm text-gray-600">
                    Operates under Sonu Industries — GSTIN: <strong>06CESPS7817H1ZS</strong>.
                  </p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow"
                  aria-label="Get in touch with Chhaya Industries"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right: visual / short summary card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-gradient-to-br from-[#f8fafc] to-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3">Our Promise</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm">
              At Chhaya Industries (a unit of Sonu Industries) we combine
              industrial experience with strict quality checks to supply
              high-consistency plastic yarn for B2B customers. Your bulk
              requirements are handled with care — from manufacturing to
              delivery.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">MOQ</p>
                <p className="font-bold text-lg">100 kg</p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="text-sm text-gray-500">Primary Sizes</p>
                <p className="font-bold text-lg">0.19 / 0.20 / 0.25 mm</p>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Have a specific requirement? Contact our team for a custom quote.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
