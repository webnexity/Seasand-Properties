import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = {
    phone: "0674-3588362",
    email: "seasandpropertiespvtltd@gmail.com",
    address: "Plot no 2132/5124, Nageshwar tangi, Lewis road, old town, Bhubaneswar, 751002",
    googleFormLink: "https://docs.google.com/forms/d/1ER83ckItBxWPAFbEHKKqqJlP0sD7IDLOL_1ligszmYw/viewform?edit_requested=true" // Replace with actual Google Form link
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 font-exo">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-exo">
              We'd love to hear from you. Reach out to us for any inquiries or schedule a visit to our projects.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-exo">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 font-exo">Our Office</h3>
                      <p className="mt-1 text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-green-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 font-exo">Phone</h3>
                      <a href={`tel:${contactInfo.phone}`} className="mt-1 text-gray-600 hover:text-blue-600 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full text-purple-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 font-exo">Email</h3>
                      <a href={`mailto:${contactInfo.email}`} className="mt-1 text-gray-600 hover:text-blue-600 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Form Button */}
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={contactInfo.googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-red-700 hover:bg-red-800 text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition-colors font-exo"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Fill Out Our Contact Form
                  </Link>
                </motion.div>
              </div>

              {/* Office Hours */}
              <motion.div 
                className="bg-red-700 text-white p-8 rounded-2xl shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h2 className="text-2xl font-bold mb-4 font-exo">Office Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium">11:00 AM - 6:00 PM</span>
                  </p>
                 
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg h-full min-h-[500px]"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-exo">Our Location</h2>
              <div className="h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14975.79516090254!2d85.8239885!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c5f5b7a3a6b5%3A0x3b5f5a5b5b5b5b5b!2sLewis%20Rd%2C%20Old%20Town%2C%20Bhubaneswar%2C%20Odisha%20751002!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Seasand Properties Location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6 font-exo">
              Ready to find your dream property?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-exo">
              Contact us today to schedule a site visit or to learn more about our available properties.
            </p>
            <motion.a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-red-800 md:py-4 md:text-lg md:px-10 transition-colors font-exo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Now
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
