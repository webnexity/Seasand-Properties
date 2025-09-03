import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  Clock,
  Home,
  Phone,
  Mail,
  Tag,
  Users,
} from "lucide-react";

const ShreekhetraVihar3 = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project Data
  const project = {
    id: "shreekhtera-vihar-3",
    name: "Shreekhtera Vihar 3",
    headline: "Luxury Residential Plots in Premium Location",
    description:
      "Shreekhtera Vihar 3 offers luxurious residential plots with world-class amenities and exceptional connectivity in Bhubaneswar. Situated in an upcoming premium location, these plots provide an ideal setting for your dream home.",
    fullDescription: [
      "Shreekhtera Vihar 3 is our most exclusive residential plotting project designed for those seeking uncompromised luxury and comfort. Set in one of Bhubaneswar's most prestigious localities, this project offers an extraordinary living experience with premium amenities and strategic positioning.",
      "Each plot in Shreekhtera Vihar 3 is thoughtfully designed to maximize space utilization while ensuring privacy and exclusivity. The project features wide tree-lined avenues, extensive green spaces, and state-of-the-art infrastructure to enhance your lifestyle.",
      "With close proximity to key business districts, premium educational institutions, healthcare facilities, and entertainment hubs, Shreekhtera Vihar 3 offers the perfect blend of convenience and luxury living.",
    ],
    location: "Bhubaneswar, Odisha",
    locationDetails:
      "Prime location in Bhubaneswar, just 2 km from Infocity, 5 km from KIIT University, and 7 km from city center with excellent connectivity to major highways and business districts.",
    status: "Coming Soon",
    price: "Starting from ₹20 lakhs",
    availability: "Pre-launch Booking Open",
    totalUnits: "30 Plots",
    availableUnits: "30 Plots",
    possessionDate: "June 2026",
    plotSizes: ["1800 sq.ft", "2100 sq.ft", "2400 sq.ft", "3000 sq.ft"],
    amenities: [
      "24/7 Security with CCTV Surveillance",
      "Landscaped Gardens and Parks",
      "Children's Play Area",
      "40-feet Wide Internal Roads",
      "Underground Electrical Wiring",
      "Solar Street Lights",
      "Water Supply System",
      "Premium Clubhouse",
      "Swimming Pool",
      "Fitness Center",
      "Indoor Games Room",
      "Community Hall",
      "Walking and Jogging Track",
    ],
    contactPhone: "+91 98765 43210",
    contactEmail: "info@seasandproperties.com",
    contactAddress: "Plot No. 12, Patia, Bhubaneswar, Odisha - 751024",
    images: [
      "/Shreekhetravihar-3-4.jpeg",
      "/Shreekhetravihar-3-2.jpeg",
      "/Shreekhetravihar-3-3.jpeg",
      "/Shreekhetravihar-3-1.jpeg",
      "/Shreekhetravihar-3-5.jpeg",
      "/Shreekhetravihar-3-6.jpeg",
      "/Shreekhetravihar-3-7.jpeg",
    ],
    locationMap:
      "https://maps.googleapis.com/maps/api/staticmap?center=Bhubaneswar,Odisha&zoom=14&size=600x300&key=YOUR_API_KEY",
  };

  // Similar projects data
  const similarProjects = [
    {
      id: "sai-vihar",
      name: "Sai Vihar",
      headline: "Premium Residential Plots",
      location: "Bhubaneswar, Odisha",
      status: "Under Construction",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      id: "shreekhtera-vihar-1",
      name: "Shreekhtera Vihar 1",
      headline: "Exclusive Residential Plots",
      location: "Bhubaneswar, Odisha",
      status: "Ready to Move",
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      id: "shreekhtera-vihar-2",
      name: "Shreekhtera Vihar 2",
      headline: "Modern Residential Plots",
      location: "Bhubaneswar, Odisha",
      status: "Under Construction",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-white hover:text-blue-300 mb-4 font-exo"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-exo">
              {project.name}
            </h1>
            <p className="text-xl text-gray-200 mb-4 font-exo">
              {project.headline}
            </p>
            <div className="flex items-center text-gray-300 mb-8">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-lg font-exo">{project.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {project.status}
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {project.price}
              </span>
              <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {project.availability}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-col-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 mx-auto lg:mx-0">
              {/* Gallery */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden shadow-2xl mb-4 h-[400px]">
                  <img
                    src={project.images[activeImage]}
                    alt={`${project.name} - View ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className={`rounded-lg overflow-hidden h-24 cursor-pointer border-2 ${
                        activeImage === index
                          ? "border-blue-600"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={img}
                        alt={`${project.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() =>
                      window.open(`${project.locationMap}`, "_blank")
                    }
                    className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition duration-300 font-exo shadow-md"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    View Map
                  </button>
                </div>
              </motion.div>

              {/* About Section */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  About {project.name}
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-blue-600"></div>
                </h2>
                <p className="text-gray-700 leading-relaxed font-exo mb-6">
                  {project.description}
                </p>

                {project.fullDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed font-exo mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Amenities */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Amenities & Features
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-blue-600"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {project.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700 font-exo">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              {/* Plot Sizes */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Available Plot Sizes
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-blue-600"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.plotSizes.map((size, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300"
                    >
                      <Home className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <span className="font-semibold text-gray-800 font-exo">
                        {size}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Location
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-blue-600"></div>
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <p className="text-gray-700 font-exo">
                      {project.locationDetails}
                    </p>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <img
                      src={project.locationMap}
                      alt={`Map of ${project.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Contact Info */}
              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-blue-600 py-4 px-6">
                  <h3 className="text-xl font-bold text-white font-exo">
                    Contact Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold font-exo">
                        Phone
                      </p>
                      <p className="text-gray-600 font-exo">
                        {project.contactPhone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold font-exo">
                        Email
                      </p>
                      <p className="text-gray-600 font-exo">
                        {project.contactEmail}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-800 font-semibold font-exo">
                        Address
                      </p>
                      <p className="text-gray-600 font-exo">
                        {project.contactAddress}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition duration-300 font-exo"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                className="bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="bg-green-600 py-4 px-6">
                  <h3 className="text-xl font-bold text-white font-exo">
                    Availability Status
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-exo">Total Units</span>
                    <span className="text-gray-900 font-semibold font-exo">
                      {project.totalUnits}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-exo">
                      Available Units
                    </span>
                    <span className="text-gray-900 font-semibold font-exo">
                      {project.availableUnits}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-exo">
                      Project Status
                    </span>
                    <span className="text-gray-900 font-semibold font-exo">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-exo">
                      Possession Date
                    </span>
                    <span className="text-gray-900 font-semibold font-exo">
                      {project.possessionDate}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Similar Projects */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 font-exo text-center">
            Other Projects You May Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {similarProjects.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-56">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-exo">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-blue-600" />
                    <span className="text-sm font-exo">{item.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2 font-exo">
                    {item.headline}
                  </p>
                  <Link
                    to={`/projects/${item.id}`}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-300 font-exo"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShreekhetraVihar3;
