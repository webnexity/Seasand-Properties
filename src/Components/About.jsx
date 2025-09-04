import React from "react";
// Import motion for animations - used in motion.div components throughout
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Building,
  Calendar,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Company Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          {/* Logo */}
          <motion.div variants={fadeIn} className="mb-8 inline-block">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Building className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-exo"
          >
            About <span className="text-red-700">Seasand Properties</span>
          </motion.h1>

          <motion.div variants={fadeIn} className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed font-exo">
              Building exceptional spaces for modern living and working since
              2015.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className=" rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/logo.png"
                  alt="Seasand Properties Headquarters"
                  className="w-full h-full "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h2 className="text-white text-2xl font-bold font-exo">
                      Our Journey
                    </h2>
                    <div className="flex items-center mt-2">
                      <Calendar className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-white font-medium font-exo">
                        Since 2015
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-exo">
                  Leading the Real Estate Evolution
                </h3>

                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed font-exo">
                    <span className="font-semibold text-red-700">
                      Seasand Properties
                    </span>{" "}
                    has transformed the real estate landscape for over one
                    decade, delivering exceptional spaces that blend
                    functionality, aesthetics, and sustainability.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-blue-800 italic font-exo">
                      "Our mission is to create spaces that elevate human
                      experiences while respecting our environment and
                      communities."
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-red-700 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 font-exo">
                        Growth Trajectory
                      </h4>
                      <p className="text-gray-600 font-exo">
                        From humble beginnings with local residential projects
                        to becoming industry leaders with a portfolio spanning
                        multiple locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats and Info */}
          <div className="space-y-8">
            {/* Company Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-red-700 mb-2 font-exo">
                  20+
                </div>
                <div className="text-gray-600 font-medium font-exo">
                  Years of Excellence
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-red-700 mb-2 font-exo">
                  500+
                </div>
                <div className="text-gray-600 font-medium font-exo">
                  Projects Completed
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-red-700 mb-2 font-exo">
                  50+
                </div>
                <div className="text-gray-600 font-medium font-exo">
                  Cities Served
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-red-700 mb-2 font-exo">
                  98%
                </div>
                <div className="text-gray-600 font-medium font-exo">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>

            {/* Flagship Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center font-exo">
                <Award className="w-6 h-6 text-red-700 mr-3" />
                Notable Projects
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-exo">
                      SkyLine Towers
                    </h4>
                    <p className="text-gray-600 text-sm font-exo">
                      A luxury residential complex with panoramic views and
                      sustainable design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-exo">
                      GreenTech Business Park
                    </h4>
                    <p className="text-gray-600 text-sm font-exo">
                      Award-winning commercial space combining modern design
                      with eco-friendly practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-900 font-exo">
                      Marina Heights
                    </h4>
                    <p className="text-gray-600 text-sm font-exo">
                      Waterfront development with premium apartments and
                      recreational facilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-exo">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="text-center pt-6">
                <Users className="w-10 h-10 text-red-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 font-exo">
                  Consult
                </h3>
                <p className="text-gray-600 text-sm font-exo">
                  We begin by understanding your vision, requirements, and
                  aspirations.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="text-center pt-6">
                <MapPin className="w-10 h-10 text-red-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 font-exo">Plan</h3>
                <p className="text-gray-600 text-sm font-exo">
                  Our experts develop comprehensive plans aligned with your
                  goals and budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="text-center pt-6">
                <Building className="w-10 h-10 text-red-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 font-exo">
                  Execute
                </h3>
                <p className="text-gray-600 text-sm font-exo">
                  We bring the vision to life with precision, quality, and
                  attention to detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 relative"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div className="text-center pt-6">
                <Award className="w-10 h-10 text-red-700 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 font-exo">
                  Deliver
                </h3>
                <p className="text-gray-600 text-sm font-exo">
                  We ensure a smooth handover and continued support for your
                  satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-red-700 to-blue-800 rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6 font-exo">
              Ready to start your next project?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 font-exo">
              Let's collaborate to create spaces that inspire, endure, and
              elevate. Your vision is our mission.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-red-700 hover:bg-red-700 hover:text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 font-exo"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
