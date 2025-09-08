import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "Seasand Properties exceeded all my expectations. Their commitment to quality and attention to detail is unmatched. My family and I couldn't be happier with our new beachfront home.",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "IT Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      text: "I was skeptical about investing in property, but Seasand Properties made the entire process seamless. The location and amenities are exactly what I was looking for, and the value appreciation has been impressive.",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      position: "Doctor",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      stars: 5,
      text: "The team at Seasand Properties understood my requirements perfectly. They helped me find the perfect plot in a prime location. Their after-sales service is truly commendable.",
    },
    {
      id: 4,
      name: "Aisha Khan",
      position: "Finance Consultant",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      stars: 5,
      text: "As an investor, I look for properties with high potential returns. Seasand Properties delivered exactly that. Their market insights and property selection are top-notch.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Render star ratings
  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
        >
          <motion.span
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 font-exo"
            whileHover={{ scale: 1.05 }}
          >
            Client Testimonials
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-exo">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg font-exo">
            Discover why our clients choose Seasand Properties for their dream
            homes and investment properties.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 text-blue-100 opacity-70 transform rotate-12 scale-150 transition-transform duration-300 group-hover:scale-170 group-hover:rotate-6">
                <Quote size={80} />
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <div className="mr-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 font-exo">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-exo">
                    {testimonial.position}
                  </p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 italic relative z-10 font-exo">
                "{testimonial.text}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.6 },
            },
          }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-exo">
            Are you part of Seasand Properties ?
          </h3>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="https://docs.google.com/forms/d/11ptui1Q7yFxdwkjQswfhZ_WknXxOoENb7xCMRCzrn7s/edit"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-md font-semibold transition-colors duration-300 font-exo"
            >
              Give your valuable feedback
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
