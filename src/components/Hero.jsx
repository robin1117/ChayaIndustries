import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <section
        id="hero"
        className="hero-back absolute z-10 flex flex-col justify-center items-center bg-gradient-to-r text-white text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="sm:text-5xl text-2xl border-b-6 p-2 border-t-6 font-bold mb-4 text-gray-600"
        >
          High Quality Plastic Yarn
        </motion.h1>

        {/* Yarn sizes */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-xl text-white"
        >
          <span className="inline-block pl-5 pr-5 bg-red-500 rounded-[5px]">
            Available Sizes For Now
          </span>
          <br />
          <span className="bg-red-500 inline-block pl-2 pr-2 rounded-[5px] mt-1">
            0.19mm | 0.20mm | 0.25mm
          </span>
        </motion.p>

        {/* ✅ MOQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4"
        >
          <span className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md text-sm sm:text-base">
            MOQ: 100kg
          </span>
        </motion.div>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} className="mt-8 text-blue-600">
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              borderRadius: "100px",
              backgroundColor: "#1e40af",
              "&:hover": {
                backgroundColor: "#1d4ed8",
              },
              px: 6,
              py: 2,
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "18px",
                lg: "20px",
                xl: "22px",
              },
            }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="mainTxt"
            >
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
