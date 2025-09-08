import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Home, ArrowRight, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState("previous");

  const previousProjects = [
    {
      id: 1,
      title: "Shreekhetra vihar Phase 1",
      location: "Magalapur , Bhubaneswar - Puri NH",
      image: "/Shreeketravihar-1-5.jpeg",

      status: "Almost filled",
      rating: 4.8,
      path: "/projects/shreekhetra-vihar-1",
      description:
        "Luxury high-rise apartments with panoramic city views and premium amenities.",
    },
    {
      id: 2,
      title: "Shreekhetra vihar Phase 2",
      location: "Green Valley Estate",
      image: "/Shreeketravihar-2-8.jpeg",

      status: "Almost filled",
      rating: 4.9,
      path: "/projects/shreekhetra-vihar-2",
      description:
        "Eco-friendly villas surrounded by lush landscapes and water features.",
    },
    {
      id: 3,
      title: "Shreekhetra vihar Phase 3",
      location: "Financial District",
      image: "/Shreekhetravihar-3-2.jpeg",
      path: "/projects/shreekhetra-vihar-3",
      status: "Almost filled",
      rating: 4.7,
      description:
        "Modern commercial and residential complex in the heart of the financial district.",
    },
  ];

  const upcomingProjects = [
    {
      id: 4,
      title: "Skyline Towers",
      location: "Tech Hub District",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      price: "$1.8M - $5.2M",
      units: "180 Units",
      path: "/SkylineTowers",
      status: "Pre-Launch",
      rating: null,
      launchDate: "Q2 2025",
      description:
        "Twin towers featuring smart home technology and world-class amenities.",
    },
    {
      id: 5,
      title: "Ocean View Estates",
      location: "Coastal Highway",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      price: "$2.2M - $6.5M",
      units: "95 Villas",
      status: "Coming Soon",
      rating: null,
      launchDate: "Q4 2025",
      description:
        "Exclusive beachfront villas with private access to pristine beaches.",
    },
    {
      id: 6,
      title: "Green Commons",
      location: "Suburban Heights",
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop",
      price: "$950K - $2.1M",
      units: "150 Townhomes",
      status: "Planning Phase",
      rating: null,
      launchDate: "Q1 2026",
      description:
        "Sustainable community living with integrated parks and recreational facilities.",
    },
  ];

  const currentProjects =
    activeTab === "previous" ? previousProjects : upcomingProjects;

  const tabVariants = {
    active: {
      backgroundColor: "#b91c1c", // red-700
      color: "#ffffff",
      scale: 1.02,
    },
    inactive: {
      backgroundColor: "#ffffff",
      color: "#b91c1c", // red-700
      scale: 1,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-700">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of exceptional properties that redefine
            modern living
          </p>
        </motion.div>

        {/* Smart Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100">
            {["previous", "upcoming"].map((tab) => (
              <motion.button
                key={tab}
                variants={tabVariants}
                animate={activeTab === tab ? "active" : "inactive"}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: activeTab === tab ? "#dc2626" : "#fee2e2",
                }} // red-600 when active, red-100 when inactive
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab)}
                className="px-8 py-3 rounded-full cursor-pointer font-semibold text-lg mx-1 border-2 border-transparent transition-all duration-300 capitalize"
              >
                {tab === "previous"
                  ? "Completed Projects"
                  : "Upcoming Projects"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    variants={imageVariants}
                    whileHover="hover"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        activeTab === "previous"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-red-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.rating && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">
                        {project.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Link to={project.path}>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full cursor-pointer bg-red-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2  transition-colors duration-300 hover:bg-red-800"
                    >
                      Know More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-red-700 mb-2">25+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-700 mb-2">500+</h3>
              <p className="text-gray-600">Happy Families</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-700 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-700 mb-2">4.9★</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
