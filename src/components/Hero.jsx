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
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="sm:text-5xl text-2xl border-b-6 p-2 border-t-6  font-bold mb-4 text-gray-600"
        >
          High Quality Plastic Yarn
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-xl text-white "
        >
          <span className="inline-block pl-5 pr-5 bg-red-500 rounded-[5px]">
            Available Sizes For Now
          </span>
          <br />
          <span className="bg-red-500 inline-block pl-2 pr-2 rounded-[5px] mt-1">
            0.19mm | 0.20mm | 0.25mm
          </span>
        </motion.p>

        <motion.div
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="mt-8  text-blue-600"
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bold",
              borderRadius: "100px",
              backgroundColor: "#FA003F",
              "&:hover": {
                backgroundColor: "#FF4B33", // Tailwind's blue-700
              },
              px: 6, // horizontal padding
              py: 2, // vertical padding
              fontSize: {
                xs: "15px", // extra-small screens
                sm: "15px", // small screens ≥600px
                md: "18px", // medium screens ≥900px
                lg: "20px", // large screens ≥1200px
                xl: "22px", // extra-large screens ≥1536px
              },
            }}
          >
            <Link
              to="contact" // 👈 match section ID
              smooth={true}
              duration={500}
              offset={-80} // optional: adjust scroll position (for fixed navbar)
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
