import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  MapPin,
  Building2,
  Users,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-4 lg:pt-2">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 pt-12"
          >
            {/* New Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium text-sm mb-8 cursor-pointer"
            >
              <Link to="/projects" className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                Get
                <span className="ml-2 text-gray-700">One day registration </span>
                
              </Link>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-exo"
            >
              Get{" "}
              <span className="">
                Your dream <span className="text-blue-600 block">Property</span>{" "}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-xl text-gray-600 mb-12 leading-relaxed font-exo"
            >
              Find office space to match your ambition. Nomad Group's
              tech-driven tools and human touch make office leasing smooth and
              enjoyable.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link to="/projects">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 flex gap-2 items-center cursor-pointer justify-center text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg font-exo"
                >
                  Know more <IoArrowForwardOutline />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Background Decorative Elements */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-4 -right-4 w-32 h-32 bg-green-400 rounded-full opacity-80 blur-xl"
            ></motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400 rounded-full opacity-60 blur-lg"
            ></motion.div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/hero_image.jpg"
                alt="Modern office space with people working"
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Premium Locations
                    </div>
                    <div className="text-sm text-gray-600">
                      Downtown & Business Districts
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">
                      Growth Focused
                    </div>
                    <div className="text-sm text-gray-600">
                      Best Properties
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Play Button Overlay */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300">
                  <Play className="w-12 h-12 text-white fill-current" />
                </div>
              </motion.div> */}
            </div>

            {/* Secondary Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80"
                  alt="Office meeting room"
                  className="w-full h-32 object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80"
                  alt="Modern office lobby"
                  className="w-full h-32 object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-24 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Prime Locations</h3>
              <p className="text-gray-600">
                Strategic locations in major business districts and emerging
                markets.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated team of professionals to guide you through every step.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Building2 className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Modern Amenities</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and technology-enabled workspaces.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-100/30 to-transparent pointer-events-none z-0"></div>
    </div>
  );
};

export default Hero;
