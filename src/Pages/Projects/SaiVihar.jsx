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

const SaiVihar = () => {
  // const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project Data
  const project = {
    id: "sai-vihar",
    name: "Sai Vihar",
    headline: "Premium Residential Plots in Bhubaneswar",
    description:
      "Sai Vihar offers premium residential plots with modern amenities and excellent connectivity in Bhubaneswar. Situated in a strategic location, these plots provide the perfect balance of comfort, convenience, and lifestyle.",
    fullDescription: [
      "Sai Vihar is an exclusive residential plotting project designed to provide you with the perfect foundation for your dream home. Located in one of Bhubaneswar's fastest-growing areas, this project combines strategic location with modern amenities to offer an exceptional living experience.",
      "Each plot at Sai Vihar is meticulously planned to maximize space utilization while ensuring privacy and comfort. The project features wide internal roads, lush green spaces, and modern infrastructure to enhance your quality of life.",
      "With proximity to major educational institutions, healthcare facilities, and commercial centers, Sai Vihar offers the convenience of urban living while maintaining a peaceful residential environment.",
    ],
    location: "Bhubaneswar, Odisha",
    locationDetails:
      "Located in Bhubaneswar's prime area, just 2 km from KIIT University, 5 km from Patia, and 7 km from Nandankanan Zoological Park with excellent connectivity to NH-5.",
    status: "Under Construction",
    price: "Starting from ₹12 lakhs",
    availability: "Limited Plots Available",
    totalUnits: "42 Plots",
    availableUnits: "18 Plots",
    possessionDate: "December 2024",
    plotSizes: ["1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "2400 sq.ft"],
    amenities: [
      "24/7 Security",
      "Landscaped Gardens",
      "Children's Play Area",
      "Wide Internal Roads",
      "Underground Electrical Wiring",
      "Street Lights",
      "Water Supply System",
      "Clubhouse",
      "Jogging Track",
    ],
    contactPhone: "+91 98765 43210",
    contactEmail: "info@seasandproperties.com",
    contactAddress: "Plot No. 12, Patia, Bhubaneswar, Odisha - 751024",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    ],
    locationMap:
      "https://maps.googleapis.com/maps/api/staticmap?center=Bhubaneswar,Odisha&zoom=14&size=600x300&key=YOUR_API_KEY",
  };

  // Similar projects data
  const similarProjects = [
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
      headline: "Premium Residential Plots",
      location: "Bhubaneswar, Odisha",
      status: "Under Construction",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
      ],
    },
    {
      id: "shreekhtera-vihar-3",
      name: "Shreekhtera Vihar 3",
      headline: "Luxury Residential Plots",
      location: "Bhubaneswar, Odisha",
      status: "Coming Soon",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
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
              </motion.div>

              {/* About Section */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative inline-block">
                  About {project.name}
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600"></div>
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

              {/* Plot Sizes */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative inline-block">
                  Available Plot Sizes
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600"></div>
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

              {/* Amenities */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative inline-block">
                  Amenities & Features
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600"></div>
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

              {/* Location */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative inline-block">
                  Location
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600"></div>
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

export default SaiVihar;
