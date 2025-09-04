import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  CheckSquare,
  ArrowRight,
  Calendar,
  Award,
  Tag,
  Home,
  Clock,
} from "lucide-react";

const upcomingProjects = [
  {
    name: "Shreekhetra Vihar - 1",
    slug: "shreekhetra-vihar-1",
    image: "/Shreeketravihar-1-6.jpeg",
    location: "Bhubaneswar-Puri NH",
    description:
      "Experience luxury living with a sea view. Premium plots for your dream home.",
    keyDistances: ["5kms from Konark Temple", "10kms from Puri Beach"],
    amenities: [
      "Sea view plots",
      "40 feet main road",
      "24/7 Security",
      "Landscaping & Parks",
    ],
  },
  {
    name: "Shreekhetra Vihar - 2",
    slug: "shreekhetra-vihar-2",
    image: "/Shreeketravihar-2-9.jpeg",
    location: "Near Puri",
    description:
      "A serene and peaceful environment, perfect for building a family home away from the city hustle.",
    keyDistances: [
      "8kms from Puri Railway Station",
      "Near proposed medical college",
    ],
    amenities: [
      "Community Hall",
      "Children's play area",
      "Drainage system",
      "Water supply",
    ],
  },
  {
    name: "Shreekhetra Vihar - 3",
    slug: "shreekhetra-vihar-3",
    image: "/Shreekhetravihar-3-6.jpeg",
    location: "Sakhigopal, Puri",
    description:
      "Invest in the future with these strategically located plots with high appreciation potential.",
    keyDistances: ["2kms from Sakhigopal Temple", "On NH-316 (New)"],
    amenities: [
      "Commercial zone",
      "Easy accessibility",
      "Street lights",
      "Plantation",
    ],
  },
  {
    name: "Shreekhetra Vihar 4",
    slug: "shreekhetra-vihar-4",
    image: "/Shreekhetravihar-4-6.jpeg",
    location: "Bhubaneswar",
    description:
      "A golden opportunity to make your dream come true at an affordable budget with maximum facility.",
    keyDistances: [
      "14kms from Kalpana Square, Bhubaneswar",
      "Close to major hospitals and schools",
    ],
    amenities: [
      "Gated community",
      "30 feet wide roads",
      "Electric poles",
      "Boundary walls",
      "Prime location",
    ],
  },
];

const completedProjects = [
  {
    name: "Green Valley Plots",
    slug: "green-valley",
    image:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Cuttack",
    description:
      "Successfully delivered premium residential plots with excellent infrastructure and amenities.",
    keyDistances: [
      "10kms from Cuttack city center",
      "5kms from major highways",
    ],
    amenities: [
      "Landscaped gardens",
      "Wide roads",
      "Street lighting",
      "Security features",
    ],
    completionYear: "2023",
  },
  {
    name: "Coastal Heights",
    slug: "coastal-heights",
    image:
      "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Puri",
    description:
      "A beachside residential plot development with modern infrastructure and serene surroundings.",
    keyDistances: ["3kms from Puri beach", "Near to tourist attractions"],
    amenities: [
      "Underground electricity",
      "Drainage system",
      "24/7 security",
      "Community hall",
    ],
    completionYear: "2022",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="relative">
        {/* Projects Hero Section */}
        <div
          className="relative h-[50vh] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/projects_hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60"></div>
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-exo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium Properties
            </motion.h1>
            <motion.p
              className="text-lg max-w-2xl text-gray-200 font-exo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover exceptional investment opportunities in prime locations
              across Odisha. Build your future with Seasand Properties.
            </motion.p>
          </div>
        </div>
      </div>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4 font-semibold font-exo">
              Discover Your Perfect Plot
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-exo">
              Featured Property Projects
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 font-exo">
              Carefully curated plots in prime locations, designed for families
              and investors looking for quality and value appreciation.
            </p>
          </motion.div>

          {/* Upcoming Projects Section */}
          <div className="mb-24">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 font-exo relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-blue-800">
                  Completed Projects
                </span>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-red-700"></div>
              </h2>
              <div className="hidden md:block text-red-700 font-semibold font-exo">
                Limited Plots Available
              </div>
            </div>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {upcomingProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  variants={itemVariants}
                  className="group relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    <div className="absolute top-4 left-4 z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                        <span className="text-white font-exo text-sm">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-exo group-hover:text-blue-200 transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.amenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-exo"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 font-exo line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="text-red-700 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-lg">
                        <span className="font-exo">Limited Plots</span>
                      </div>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="flex items-center font-semibold text-red-700 hover:text-red-800 transition-colors duration-300 group/link"
                      >
                        <span className="font-exo">Explore</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Completed Projects Section */}
          {completedProjects.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 font-exo relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                    Upcomming Projects
                  </span>
                  <div className="absolute -bottom-2 left-0 w-20 h-1 bg-green-600"></div>
                </h2>
              </div>
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {completedProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    variants={itemVariants}
                    className="group relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative overflow-hidden h-72">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-green-600 text-white text-sm px-4 py-1.5 rounded-full font-semibold flex items-center">
                          <Award className="w-3.5 h-3.5 mr-1.5" />
                          Completed
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full font-semibold flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1.5" />
                          {project.completionYear}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="flex items-center mb-2">
                          <MapPin className="w-5 h-5 mr-2 text-green-400" />
                          <span className="text-white font-exo text-sm">
                            {project.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-exo group-hover:text-green-200 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.amenities.slice(0, 3).map((amenity, idx) => (
                            <span
                              key={idx}
                              className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-exo"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6 font-exo line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="text-green-700 font-semibold text-sm bg-green-50 px-3 py-1 rounded-lg flex items-center">
                          <CheckSquare className="w-3.5 h-3.5 mr-1.5" />
                          <span className="font-exo">
                            Successfully Delivered
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Call to Action Section */}
          <motion.div
            className="relative overflow-hidden rounded-xl p-12 mt-24 text-white text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-red-700 z-0"></div>
            <div
              className="absolute inset-0 opacity-20 z-0"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full mb-6 font-semibold font-exo">
                Premium Investment Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-exo">
                Ready to Secure Your Dream Property?
              </h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto font-exo">
                Join the growing community of satisfied customers who've found
                their ideal plot with Seasand Properties. Our team is ready to
                assist you in finding the perfect location for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="bg-white text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 font-exo flex items-center"
                >
                  <span>Schedule a Site Visit</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+919861892233"
                  className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 font-exo"
                >
                  Call Now: +91 98618 92233
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
