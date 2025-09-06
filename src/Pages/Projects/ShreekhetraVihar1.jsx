import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Tag,
  Users,
} from "lucide-react";

const ShreekhetraVihar1New = () => {
  const [activeImage, setActiveImage] = useState(0);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Project Data
  const project = {
    id: "shreekhetra-vihar-1",
    name: "Shreekhetra Vihar 1",
    headline: "Exclusive Residential Plots in Prime Location",
    description:
      "Shreekhetra Vihar 1 offers exclusive residential plots with world-class amenities and exceptional connectivity in Bhubaneswar. Located in a prime area, these plots are designed for those who seek comfort, luxury, and convenience.",
    fullDescription: [
      "Shreekhetra Vihar 1 is a premium residential plotting project that represents the epitome of luxury living in Bhubaneswar. Set in one of the city's most sought-after locations, this project brings together strategic positioning with world-class amenities to create an unparalleled living experience.",
      "Each plot in Shreekhetra Vihar 1 is carefully designed to optimize space and ensure privacy while providing ample room for creativity in home design. The project features expansive internal roads, beautifully landscaped green spaces, and cutting-edge infrastructure that enhances your lifestyle.",
      "With easy access to major educational institutions, healthcare facilities, shopping centers, and entertainment hubs, Shreekhtera Vihar 1 offers the perfect blend of urban connectivity and peaceful residential living.",
    ],
    location: "Bhubaneswar-puri NH",
    locationDetails:
      "Strategically located in Bhubaneswar-puri NH, just 200 meters from NH, 27 km from Bhubaneswar, and 2km from satasankha market",
    status: "Ready to start",
    price: "Very competative price",
    availability: "Few Plots Left",
    totalUnits: "64 Plots",

    possessionDate: "Ready to Move",
    plotSizes: ["1200 sq.ft", "1500 sq.ft", "2000 sq.ft", "4000 sq.ft"],
    amenities: [
      "Home-Stead Land",
      "30ft. Developed Road",
      "Master Boundary Wall",
      "Security Facility",
      "Electrical facility",
      "Temple",
      "Park",
      "Gated Community",
      "Open space",
      "Plantation",
    ],
    contactPhone: "+91 98765 43210",
    contactEmail: "info@seasandproperties.com",
    contactAddress:
      "Plot no 2132/5124,Nageshwar tangi, Lewis road, old town ,Bhubaneswar, 751002",
    images: [
      "/Shreeketravihar-1-3.jpeg",
      "/Shreeketravihar-1-4.jpeg",
      "/Shreeketravihar-1-5.jpeg",
      "/Shreeketravihar-1-6.jpeg",
      "/Shreeketravihar-1-map1.jpeg",
      "/Shreeketravihar-1-map2.jpeg",
    ],
    locationMap:
      "https://maps.googleapis.com/maps/api/staticmap?center=Bhubaneswar,Odisha&zoom=14&size=600x300&key=YOUR_API_KEY",
  };

  // Similar projects data
  const similarProjects = [
    {
      id: "shreekhetra-vihar-2",
      name: "Shreekhetra Vihar Phase 2",
      headline: "Premium Residential Plots",
      location: "Nirmala, Mangalapur , Bhubaneswar-Puri NH",
      status: "On Going",
      images: ["/Shreeketravihar-2-4.jpeg"],
    },
    {
      id: "shreekhetra-vihar-3",
      name: "Shreekhetra Vihar Phase 3",
      headline: "Luxury Residential Plots",
      location: "Pipili Square , Puri",
      status: "On Going",
      images: ["/Shreekhetravihar-3-3.jpeg"],
    },
    {
      id: "shreekhetra-vihar-4",
      name: "Shreekhetra Vihar Phase 4",
      headline: "Premium Residential Plots",
      location: "Toshali Square , Puri",
      status: "On Going",
      images: ["/Shreeketravihar-2-4.jpeg"],
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
              <span className="bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
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
          <div className="grid lg:grid-row-12 gap-12">
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
                          ? "border-red-700"
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
                    className="bg-red-700 cursor-pointer hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition duration-300 font-exo shadow-md"
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
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700"></div>
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm mb-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed font-exo text-lg">
                    <span className="font-semibold text-blue-800">
                      Shreekhetra Vihar
                    </span>{" "}
                    is a prestigious ready-to-move mega plotting project
                    spanning across{" "}
                    <span className="font-semibold">6 acres</span> of prime land
                    at Mangalpur, Bhubaneswar. This thoughtfully designed gated
                    community offers a perfect blend of modern amenities and
                    natural surroundings, creating an ideal environment for your
                    dream home. The property enjoys excellent connectivity via
                    the proposed{" "}
                    <span className="font-semibold">
                      30ft Revenue Black Top Road
                    </span>
                    , ensuring convenient access to all essential destinations.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 shadow-lg mb-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 font-exo border-b pb-2 border-blue-200">
                    Strategic Location Advantages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-red-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-exo">
                          Distance from NH
                        </p>
                        <p className="text-gray-800 font-bold font-exo text-lg">
                          200 MTR
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-red-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-exo">
                          Distance from Bhubaneswar
                        </p>
                        <p className="text-gray-800 font-bold font-exo text-lg">
                          27 KM
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-red-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-exo">
                          Mangalpur Market & Medical
                        </p>
                        <p className="text-gray-800 font-bold font-exo text-lg">
                          20 M
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-red-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-exo">
                          Puri Bus Stand
                        </p>
                        <p className="text-gray-800 font-bold font-exo text-lg">
                          25 KM
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3 border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200 md:col-span-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MapPin className="w-6 h-6 text-red-700" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm font-exo">
                          Jagannath Temple
                        </p>
                        <p className="text-gray-800 font-bold font-exo text-lg">
                          28 KM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-sm mb-6 border border-green-100 flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 font-exo">
                      Our Legacy of Trust
                    </h4>
                    <p className="text-gray-700 font-exo">
                      With{" "}
                      <span className="font-bold text-green-700">
                        10+ years
                      </span>{" "}
                      of experience in developing premium residential land
                      projects across Bhubaneswar, we've earned the trust of{" "}
                      <span className="font-bold text-green-700">
                        1000+ satisfied clients
                      </span>{" "}
                      throughout Odisha.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-exo mb-4">
                  Each plot in Shreekhetra Vihar 1 is carefully designed to
                  optimize space and ensure privacy while providing ample room
                  for creativity in home design. The project features expansive
                  internal roads, beautifully landscaped green spaces, and
                  cutting-edge infrastructure that enhances your lifestyle.
                </p>

                <p className="text-gray-700 leading-relaxed font-exo mb-4">
                  With easy access to major educational institutions, healthcare
                  facilities, shopping centers, and entertainment hubs,
                  Shreekhetra Vihar 1 offers the perfect blend of urban
                  connectivity and peaceful residential living.
                </p>
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
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700"></div>
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
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700"></div>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.plotSizes.map((size, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300"
                    >
                      {/* <Home className="w-8 h-8 mx-auto mb-2 text-red-700" /> */}
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
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700"></div>
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-red-700 mr-3 mt-1" />
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
                <div className="bg-red-700 py-4 px-6">
                  <h3 className="text-xl font-bold text-white font-exo">
                    Contact Information
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <Phone className="w-5 h-5 text-red-700 mr-3 mt-1" />
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
                    <Mail className="w-5 h-5 text-red-700 mr-3 mt-1" />
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
                    <MapPin className="w-5 h-5 text-red-700 mr-3 mt-1" />
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
                      className=" w-full flex justify-center items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-lg text-center transition duration-300 font-exo"
                    >
                      Enquire Now <BiSupport className="text-white text-lg" />
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
                    <span className="bg-red-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-exo">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-red-700" />
                    <span className="text-sm font-exo">{item.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2 font-exo">
                    {item.headline}
                  </p>
                  <Link
                    to={`/projects/${item.id}`}
                    className="block w-full bg-red-700 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-300 font-exo"
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

export default ShreekhetraVihar1New;
