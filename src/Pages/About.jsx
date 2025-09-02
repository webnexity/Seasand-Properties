import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useSpring,
  animate,
} from "framer-motion";
import {
  Award,
  Users,
  Home,
  TrendingUp,
  CheckCircle,
  Target,
  Handshake,
  Building,
} from "lucide-react";

// Animated counter component
const Counter = ({ from, to, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setDisplayValue(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const stats = [
    {
      icon: <Award className="w-10 h-10 text-blue-500" />,
      end: 10,
      label: "Years of Experience",
      suffix: "+",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      end: 1000,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: <Home className="w-10 h-10 text-blue-500" />,
      end: 500,
      label: "Plots Delivered",
      suffix: "+",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      end: 98,
      label: "Customer Satisfaction",
      suffix: "%",
    },
  ];

  const standoutPoints = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Quality Assurance",
      description:
        "We adhere to the highest standards of quality in every project, ensuring durability and excellence.",
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We provide personalized services and full accountability.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-green-500" />,
      title: "Timely Delivery",
      description:
        "We are committed to self-discipline and delivering projects on schedule, every time.",
    },
    {
      icon: <Building className="w-6 h-6 text-green-500" />,
      title: "Affordable Excellence",
      description:
        "Our projects offer the best value, combining affordability with maximum facilities and quality.",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[101]"
        style={{ scaleX }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gray-50 pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-exo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Seasand Properties
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-exo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building Dreams, Creating Futures. A Decade of Excellence in Real
              Estate.
            </motion.p>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-exo">
                Our Journey & Mission
              </h2>
              <p className="text-gray-700 mb-4 font-exo">
                “Seasand Properties” is a certified company with over 10 years
                of experience, backed by a team of registered architects and
                seasoned real-estate professionals. Our dream is to create homes
                for millions, and our maiden project, “THE Shreekhetra Vihar 4,” was a
                humble beginning towards that vision.
              </p>
              <p className="text-gray-700 font-exo">
                Our reputation is built on a foundation of self-discipline,
                timely delivery, quality assurance, and unwavering customer
                satisfaction. We don't just build properties; we build trust.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Architectural plans"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {stat.icon}
                  <p className="text-4xl md:text-5xl font-bold mt-3">
                    <Counter from={0} to={stat.end} duration={2} />
                    {stat.suffix}
                  </p>
                  <p className="text-gray-400 mt-2 font-exo">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Standout Points Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-exo">
                What Makes Us Stand Out
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 font-exo">
                We are committed to providing the best plots and ensuring
                complete accountability for our customers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standoutPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-exo">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 font-exo">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
