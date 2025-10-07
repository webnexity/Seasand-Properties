import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
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
  const [activeImage, setActiveImage] = useState(0);

  // Refs for scroll animations
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const amenitiesRef = useRef(null);
  const plotSizesRef = useRef(null);
  const locationRef = useRef(null);

  // Check if sections are in view
  const galleryInView = useInView(galleryRef, { once: true, threshold: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, threshold: 0.2 });
  const amenitiesInView = useInView(amenitiesRef, {
    once: true,
    threshold: 0.2,
  });
  const plotSizesInView = useInView(plotSizesRef, {
    once: true,
    threshold: 0.2,
  });
  const locationInView = useInView(locationRef, { once: true, threshold: 0.2 });

  // Animation controls
  const galleryControls = useAnimation();
  const aboutControls = useAnimation();
  const amenitiesControls = useAnimation();
  const plotSizesControls = useAnimation();
  const locationControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (galleryInView) galleryControls.start("visible");
    if (aboutInView) aboutControls.start("visible");
    if (amenitiesInView) amenitiesControls.start("visible");
    if (plotSizesInView) plotSizesControls.start("visible");
    if (locationInView) locationControls.start("visible");
  }, [
    galleryInView,
    aboutInView,
    amenitiesInView,
    plotSizesInView,
    locationInView,
    galleryControls,
    aboutControls,
    amenitiesControls,
    plotSizesControls,
    locationControls,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const amenitiesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const amenityItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const plotSizesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const plotSizeItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const locationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  const project = {
    id: "sai-vihar",
    name: "Sai Vihar",
    headline: "A Mega Residential Plotting Project",
    description:
      "Sai Vihar is a ready to move mega plotting project located at Jagannathpur, Bhubaneswar. Total project area is 5 Acres. The gated community is well connected by a proposed 30ft Revenue Black Top Road.",
    fullDescription: [
      "This premium homestead land development offers secure, legally compliant plots within a planned gated community featuring master boundary development and internal infrastructure.",
      "Designed to provide long‑term value, Sai Vihar combines strategic connectivity with a peaceful residential environment close to educational, spiritual and civic landmarks.",
      "We are having 10+ years of experience in developing residential land projects across Bhubaneswar and have gained the trust of 1000+ clients across Odisha.",
    ],
    distances: [
      "14 KM from Kalpana Square",
      "12 KM from Ravi Talkies Square",
      "10 KM from Sai Temple, Tankapani Road",
      "5 KM from BJEM - II, Rangabazar",
    ],
    location: "Jagannathpur, Bhubaneswar",
    locationDetails:
      "Situated at Jagannathpur, Bhubaneswar with smooth approach via proposed 30ft revenue black top road; rapid access to major city junctions and civic infrastructure.",
    status: "Completed",
    price: "Competitive Pricing",
    availability: "Few Plots Available",
    totalUnits: "84 Plots",
    availableUnits: "Limited Inventory",
    possessionDate: "Ready to move",
    plotSizes: ["1500 sq.ft", "1800 sq.ft", "2000 sq.ft", "2000+ sq.ft"],
    amenities: [
      "Home Stead Land",
      "Gated Community",
      "Security Facility",
      "Master Boundary Wall",
      "Electricity System",
      "Entrance Gate",
      "Plantation",
    ],
    contactPhone: "0674-3588362",
    contactEmail: "seasandpropertiespvtltd@gmail.com",
    contactAddress:
      "Plot no 2132/5124, Nageshwar Tangi, Lewis Road, Old Town, Bhubaneswar, 751002",
    images: [
      // Update filenames to match actual public folder image names
      "/saivihar-1.jpeg",
      "/saivihar-2.jpeg",
      "/saivihar-5.jpeg",
      "/saivihar-3.jpeg",

      "/saivihar-4.jpeg",
    ],
    locationMap: "https://maps.app.goo.gl/9a7mYfbWLMUEqopRA", // Replace with precise map URL if available
  };

  const similarProjects = [
    {
      id: "shreekhetra-vihar-1",
      name: "Shreekhetra Vihar Phase 1",
      headline: "Premium Residential Plots",
      location: "Cutttack-Puri Bypass",
      status: "Completed",
      images: ["/Shreeketravihar-1-3.jpeg"],
    },
    {
      id: "shreekhtera-vihar-2",
      name: "Shreekhetra Vihar Phase 2",
      headline: "Ready to Move Plotting",
      location: "Nirmala, Mangalpur, Cutttack-Puri Bypass",
      status: "Completed",
      images: ["/Shreeketravihar-2-4.jpeg"],
    },
    {
      id: "shreekhetra-vihar-3",
      name: "Shreekhetra Vihar Phase 3",
      headline: "Ready to Move Plotting",
      location: "Cuttack-Puri Bypass",
      status: "Completed",
      images: ["/Shreekhetravihar-3-3.jpeg"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
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

      {/* Main */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-row-12 gap-12">
            {/* Left */}
            <div className="lg:col-span-8 mx-auto lg:mx-0">
              {/* Gallery */}
              <motion.div
                ref={galleryRef}
                initial="hidden"
                animate={galleryControls}
                variants={galleryVariants}
                className="mb-12"
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
                    onClick={() => window.open(project.locationMap, "_blank")}
                    className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center transition duration-300 font-exo shadow-md"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    View in Map
                  </button>
                </div>
              </motion.div>

              {/* About */}
              <motion.div
                ref={aboutRef}
                initial="hidden"
                animate={aboutControls}
                variants={aboutVariants}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-red-600 mb-6 font-exo relative text-center">
                  About {project.name}
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700" />
                </h2>
                <p className="text-gray-700 leading-relaxed font-exo mb-6">
                  {project.description}
                </p>
                {project.fullDescription.map((p, i) => (
                  <p
                    key={i}
                    className="text-gray-700 leading-relaxed font-exo mb-4"
                  >
                    {p}
                  </p>
                ))}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3 font-exo">
                    Key Distances
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 font-exo space-y-1">
                    {project.distances.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                ref={amenitiesRef}
                initial="hidden"
                animate={amenitiesControls}
                variants={amenitiesVariants}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Amenities & Features
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700" />
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {project.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      variants={amenityItemVariants}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700 font-exo">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Plot Sizes */}
              <motion.div
                ref={plotSizesRef}
                initial="hidden"
                animate={plotSizesControls}
                variants={plotSizesVariants}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Available Plot Sizes
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700" />
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.plotSizes.map((size, index) => (
                    <motion.div
                      key={index}
                      variants={plotSizeItemVariants}
                      className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center hover:bg-blue-100 transition-colors duration-300"
                    >
                      <Home className="w-8 h-8 mx-auto mb-2 text-red-700" />
                      <span className="font-semibold text-gray-800 font-exo">
                        {size}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                ref={locationRef}
                initial="hidden"
                animate={locationControls}
                variants={locationVariants}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 font-exo relative text-center">
                  Location
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-32 h-1 bg-red-700" />
                </h2>
                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                  <div className="flex items-start mb-4">
                    <MapPin className="w-5 h-5 text-red-700 mr-3 mt-1" />
                    <p className="text-gray-700 font-exo">
                      {project.locationDetails}
                    </p>
                  </div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3080.7821079940777!2d85.953563!3d20.228320999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDEzJzQyLjAiTiA4NcKwNTcnMTIuOCJF!5e1!3m2!1sen!2sin!4v1759850441658!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      className="w-full h-full rounded-lg"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Contact */}
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
                      className="block w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-lg text-center transition duration-300 font-exo"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Availability */}
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

      {/* Similar */}
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

                  <Link
                    to={`/projects/${item.id}`}
                    className="block w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-300 font-exo"
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
