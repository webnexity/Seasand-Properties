import React from "react";
// Import motion for animations - used with motion.div for the infinite scroll effect
import { motion } from "framer-motion";

const Brands = () => {
  // Bank logos - replace these with actual bank logos when available
  const bankLogos = [
    {
      name: "State Bank of India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg",
      bgColor: "bg-white",
    },
    {
      name: "Bank of Baroda",
      logo: "https://companieslogo.com/img/orig/BANKBARODA.NS_BIG-4f3f4c39.png?t=1604067029",
      bgColor: "bg-white",
    },
    {
      name: "UCO Bank",
      logo: "https://seekvectors.com/files/download/UCO%20Bank.png",
      bgColor: "bg-white",
    },
    {
      name: "Union Bank",
      logo: "https://tse3.mm.bing.net/th/id/OIP.RhvBiUR14AFK_Kpg70PSRQHaBj?pid=Api&P=0&h=180",
      bgColor: "bg-white",
    },
    {
      name: "LIC",
      logo: "https://tse1.mm.bing.net/th/id/OIP.AILFXVIJaGmz2qpMjWKq9gHaDx?pid=Api&P=0&h=180",
      bgColor: "bg-white",
    },
    {
      name: "ICICI Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
      bgColor: "bg-white",
    },
    {
      name: "HDFC Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
      bgColor: "bg-white",
    },
  ];

  // Duplicate the bank logos array to create a seamless infinite effect
  const duplicatedBankLogos = [...bankLogos, ...bankLogos];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-exo">
            Approved by Best Banks
          </h2>
          <p className="text-gray-600 font-exo">
            Our projects are financed and approved by India's leading financial
            institutions
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* First Scroll (Left to Right) */}
          <div className="relative mb-8">
            <motion.div
              className="flex space-x-12 py-4"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBankLogos.map((bank, index) => (
                <div
                  key={`${bank.name}-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-20 w-48 ${bank.bgColor} rounded-lg shadow-md p-3`}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Scroll (Right to Left - opposite direction) */}
          <div className="relative">
            <motion.div
              className="flex space-x-12 py-4"
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBankLogos.reverse().map((bank, index) => (
                <div
                  key={`${bank.name}-reverse-${index}`}
                  className={`flex-shrink-0 flex items-center justify-center h-20 w-48 ${bank.bgColor} rounded-lg shadow-md p-3`}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center text-blue-600 font-medium font-exo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by top financial institutions across India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
