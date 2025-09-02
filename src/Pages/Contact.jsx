import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 font-exo">
            Contact Us
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 font-exo">
            Get in touch with our team to discuss your property needs.
          </p>

          {/* Content placeholder - replace with actual Contact page content */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <p className="text-gray-700">
              Contact form and details will go here.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
