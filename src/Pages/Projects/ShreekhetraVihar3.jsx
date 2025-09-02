import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
import { MapPin, CheckSquare, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projectsData = {
  "shreekhetra-vihar-3": {
    name: "Shreekhetra Vihar - 3",
    image:
      "https://images.pexels.com/photos/313961/pexels-photo-313961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Sakhigopal, Puri",
    description:
      "Invest in the future with these strategically located plots. This project offers high appreciation potential due to its prime location and upcoming infrastructure.",
    keyDistances: [
      "2kms from the famous Sakhigopal Temple",
      "Located on the new NH-316 for excellent connectivity",
      "15kms from Puri city center",
      "Close to educational institutions and markets",
    ],
    amenities: [
      "Designated commercial zone for shops and offices",
      "Easy accessibility from the national highway",
      "Well-lit streets with solar-powered lights",
      "Extensive tree plantation and green belts",
      "Clear land titles and easy registration process",
      "Future-ready infrastructure",
    ],
  },
  // ... other projects
};

const ShreekhetraVihar3 = () => {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-red-600">Project Not Found</h1>
          <p className="text-lg text-gray-600 mt-4">
            The project you are looking for does not exist.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-exo"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-exo">
              {project.name}
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              <span className="text-lg font-exo">{project.location}</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4 font-exo">
                  About {project.name}
                </h2>
                <p className="text-gray-700 leading-relaxed font-exo">
                  {project.description}
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-exo">
                  Project Highlights
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3 font-exo">
                    Key Amenities
                  </h4>
                  <ul className="space-y-2">
                    {project.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="flex items-start text-gray-600 font-exo"
                      >
                        <CheckSquare className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3 font-exo">
                    Location Advantages
                  </h4>
                  <ul className="space-y-2">
                    {project.keyDistances.map((distance) => (
                      <li
                        key={distance}
                        className="flex items-start text-gray-600 font-exo"
                      >
                        <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                        <span>{distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShreekhetraVihar3;
