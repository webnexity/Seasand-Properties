import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Building,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const linkHover = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  const socialHover = {
    hover: { y: -5, scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:pr-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-md flex items-center justify-center mr-3">
                <img className="w-10 h-6" src="/logo.png" alt="Seasand Properties" />
              </div>
              <h3 className="text-xl font-bold text-white font-exo">
                Seasand Properties
              </h3>
            </div>
            <p className="mb-6 text-gray-400 font-exo">
              Creating exceptional living and working spaces that inspire and
              elevate experiences.
            </p>
            <div className="flex space-x-3">
              {/* Social Links */}
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
                whileHover="hover"
                variants={socialHover}
              >
                <Facebook className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
                whileHover="hover"
                variants={socialHover}
              >
                <Twitter className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
                whileHover="hover"
                variants={socialHover}
              >
                <Instagram className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
                whileHover="hover"
                variants={socialHover}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-300"
                whileHover="hover"
                variants={socialHover}
              >
                <Youtube className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:px-4">
            <h3 className="text-lg font-bold text-white mb-6 font-exo">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Projects",
                "Properties",
                "Services",
                "Contact Us",
              ].map((item) => (
                <motion.li key={item} whileHover="hover">
                  <motion.a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center text-gray-400 hover:text-red-800 transition-colors duration-300 font-exo"
                    variants={linkHover}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:pl-4">
            <h3 className="text-lg font-bold text-white mb-6 font-exo">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="https://goo.gl/maps/your-address"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-gray-400 hover:text-red-800 transition-colors duration-300"
                  whileHover={{ color: "#991b1b" }}
                >
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span className="font-exo hover:text-red-800">
                    Plot no 2132/5124,Nageshwar tangi, Lewis road, old town 
                    <br />
                    Bhubaneswar, Odisha 751002
                    <br />
                    India
                  </span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:+919876543210"
                  className="flex items-center text-gray-400 hover:text-red-800 transition-colors duration-300 font-exo"
                  whileHover={{ color: "#991b1b" }}
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  0674-3588362
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:info@seasandproperties.com"
                  className="flex items-center text-gray-400 hover:text-red-800 transition-colors duration-300 font-exo"
                  whileHover={{ color: "#991b1b" }}
                >
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  info@seasandproperties.com
                </motion.a>
              </li>
              <li className="flex items-center text-gray-400 font-exo">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                Mon-Sat: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left font-exo">
              © {currentYear} Seasand Properties. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
              <a
                href="/privacy-policy"
                className="text-gray-500 hover:text-red-800 text-sm transition-colors duration-300 font-exo px-2 py-1"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <a
                href="/terms-of-service"
                className="text-gray-500 hover:text-red-800 text-sm transition-colors duration-300 font-exo px-2 py-1"
              >
                Terms of Service
              </a>
              <span className="text-gray-700 hidden md:inline">|</span>
              <motion.a
                href="https://webnexity.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-800 text-sm transition-colors duration-300 flex items-center font-exo px-2 py-1"
                whileHover={{ scale: 1.05 }}
              >
                Developed by WebNexity
                <ExternalLink className="w-3 h-3 ml-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
