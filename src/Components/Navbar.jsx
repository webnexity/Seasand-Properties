import React, { useState, useEffect } from "react";
// Imports for Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import {
  Menu,
  X,
  Home as HomeIcon,
  Briefcase,
  Users,
  MessageSquare,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll, { passive: true });
  }, [scrolled]);

  const menuItems = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5 mr-3" /> },

    {
      name: "About us",
      href: "/about",
      icon: <Users className="w-5 h-5 mr-3" />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Briefcase className="w-5 h-5 mr-3" />,
    },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.3,
      },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-md" 
            : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center"
            >
              <NavLink to="/" className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto mr-3" />
                <h1 className={`text-2xl font-bold font-exo ${
                  scrolled ? "text-gray-900 hover:text-red-700" : "text-white hover:text-gray-200"
                }`}>
                  Seasand Properties
                </h1>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <NavLink to={item.href}>
                    {({ isActive }) => (
                      <>
                        <span
                          className={`flex items-center space-x-1 px-2 py-2 font-medium text-base transition-all duration-300 group font-exo ${
                            isActive
                              ? "text-red-700 font-semibold"
                              : scrolled
                              ? "text-gray-900 hover:text-red-700"
                              : "text-white/90 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                        <div
                          className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-700 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          } transition-transform duration-300 ease-out`}
                        />
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Right side navigation and buttons */}
            <div className="flex items-center space-x-5">
              {/* Contact Us Button */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  to="/contact"
                  className={`hidden md:flex items-center px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 font-exo ${
                    scrolled 
                      ? "bg-red-700 hover:bg-red-800 text-white" 
                      : "bg-red-700 hover:bg-white/30 text-white border border-white/30"
                  }`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact us
                </NavLink>
              </motion.div>

              {/* Mobile Toggle */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  scrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
                }`}
              >
                <div className="relative w-6 h-6">
                  <AnimatePresence mode="wait">
                    {isOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <X className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -180, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Menu className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed inset-0 bg-white z-[100] flex flex-col"
            >
              <div className="flex justify-between items-center h-20 px-4 border-b border-gray-200">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center"
                >
                  <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
                  <h1 className="text-xl font-bold text-gray-900 hover:text-red-700 font-exo">
                    Seasand Properties
                  </h1>
                </NavLink>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex-grow flex flex-col justify-center items-center">
                <ul className="space-y-6 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      custom={index}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <NavLink
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center text-2xl font-semibold transition-colors duration-300 font-exo ${
                            isActive
                              ? "text-red-700"
                              : "text-gray-800 hover:text-blue-500"
                          }`
                        }
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                  <motion.li
                    custom={menuItems.length}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <NavLink
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center text-2xl font-semibold transition-colors duration-300 font-exo ${
                          isActive
                            ? "text-red-700"
                            : "text-gray-800 hover:text-blue-500"
                        }`
                      }
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <span>Contact</span>
                    </NavLink>
                  </motion.li>
                </ul>
              </div>

              <div className="py-8 px-4 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-gray-500 hover:text-red-700"
                  >
                    <Facebook size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-gray-500 hover:text-red-700"
                  >
                    <Twitter size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-gray-500 hover:text-red-700"
                  >
                    <Instagram size={22} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="text-gray-500 hover:text-red-700"
                  >
                    <Linkedin size={22} />
                  </motion.a>
                </div>
                <p className="text-center text-gray-500 mt-6 text-sm font-exo">
                  © {new Date().getFullYear()} Seasand Properties
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
