import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = ["Home", "contact"];

  return (
    <div className="sticky top-0 w-full bg-[#001F3F] shadow-md z-50">
      <nav className="md:max-w-[1020px] m-auto flex justify-between items-center px-4 py-3 relative">
        {/* Logo */}
        <h1 className="text-[1.2rem] font-bold  sm:text-3xl uppercase italic text-white">
          Chaya Industries
        </h1>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-7 text-[1.2rem] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()} // 👈 match section ID
              smooth={true}
              duration={500}
              offset={-80} // optional: adjust scroll position (for fixed navbar)
              className={`text-white cursor-pointer capitalize ${
                active === link ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setActive(link)}
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <TfiAlignJustify
          size={25}
          className="sm:hidden cursor-pointer text-amber-200"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden absolute top-full right-0 bg-white shadow-md w-48 rounded mt-2 flex flex-col p-4 gap-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer capitalize ${
                    active === link ? "font-bold text-blue-600" : ""
                  }`}
                  onClick={() => {
                    setActive(link);
                    setIsDrawerOpen(false); // ✅ close drawer after click
                  }}
                >
                  {link}
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
