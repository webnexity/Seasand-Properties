import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { MapPin, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  // Refs for scroll animations
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const statsRef = useRef(null);
  const moreProjectsRef = useRef(null);

  // Check if sections are in view
  const headerInView = useInView(headerRef, { once: true, threshold: 0.1 });
  const projectsInView = useInView(projectsRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const moreProjectsInView = useInView(moreProjectsRef, {
    once: true,
    threshold: 0.1,
  });

  // Animation controls
  const headerControls = useAnimation();
  const projectsControls = useAnimation();
  const statsControls = useAnimation();
  const moreProjectsControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start("visible");
    if (projectsInView) projectsControls.start("visible");
    if (statsInView) statsControls.start("visible");
    if (moreProjectsInView) moreProjectsControls.start("visible");
  }, [
    headerInView,
    projectsInView,
    statsInView,
    moreProjectsInView,
    headerControls,
    projectsControls,
    statsControls,
    moreProjectsControls,
  ]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const moreProjectsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Shreekhetra vihar Phase 1",
      location: "Magalapur , Bhubaneswar - Puri NH",
      image: "/Shreeketravihar-1-5.jpeg",
      status: "Completed",
      rating: 4.8,
      path: "/projects/shreekhetra-vihar-1",
      description:
        "Luxury high-rise apartments with panoramic city views and premium amenities.",
    },
    {
      id: 2,
      title: "Shreekhetra vihar Phase 2",
      location: "Nirmala, Mangalpur, Bhubaneswar",
      image: "/Shreeketravihar-2-8.jpeg",
      status: "Completed",
      rating: 4.9,
      path: "/projects/shreekhetra-vihar-2",
      description:
        "Eco-friendly villas surrounded by lush landscapes and water features.",
    },
    {
      id: 3,
      title: "Shreekhetra vihar Phase 3",
      location: "Pipili Square, Bhubaneswar-Puri NH",
      image: "/Shreekhetravihar-3-2.jpeg",
      path: "/projects/shreekhetra-vihar-3",
      status: "Completed",
      rating: 4.7,
      description:
        "Modern commercial and residential complex in the heart of the financial district.",
    },
  ];

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
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={headerVariants}
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

        {/* Projects Grid */}
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsControls}
          variants={projectsContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
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
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
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

                <Link to={project.path}>
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full cursor-pointer bg-red-700 text-white hover:bg-red-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-300 "
                  >
                    Know More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* +Many More Link */}
        <motion.div
          ref={moreProjectsRef}
          initial="hidden"
          animate={moreProjectsControls}
          variants={moreProjectsVariants}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl font-bold text-red-700 border-b-2 border-red-700 pb-1 hover:text-red-800 transition-colors">
                + Many More
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={statsVariants}
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
