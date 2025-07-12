import React from "react";
import serviceHero from "../../../assets/provider.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceHero() {
  const navigate = useNavigate();

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

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.section
      className="bg-light py-5 py-lg-6 mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Content */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0 pe-lg-5"
            variants={leftVariants}
          >
            <motion.h1
              className="fw-bold mb-4 display-4"
              style={{
                lineHeight: "1.2",
                color: "#2c3e50",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Empower Your Business with Our{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3498db, #2ecc71)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  position: "relative",
                }}
              >
                Service Provider Platform
                <span
                  style={{
                    content: '""',
                    position: "absolute",
                    bottom: "-5px",
                    left: "0",
                    width: "100%",
                    height: "3px",
                    background: "linear-gradient(90deg, #3498db, #2ecc71)",
                    borderRadius: "3px",
                  }}
                ></span>
              </span>
            </motion.h1>

            <motion.p
              className="lead text-muted mb-4 mb-lg-5"
              style={{
                fontSize: "1.2rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Streamline operations, manage orders, and grow your customer base with our comprehensive vendor management solution. Designed specifically for service providers in smart cities.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-3 mb-4 mb-lg-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >

              <motion.button
                className="btn btn-outline-primary px-4 py-3 fw-semibold"
                style={{
                  borderRadius: "8px",
                  borderWidth: "2px",
                }}
                onClick={() => navigate("/features")}
                variants={buttonVariants}
                whileHover={{
                  ...buttonVariants.hover,
                  backgroundColor: "#3498db",
                  color: "white",
                }}
                whileTap="tap"
              >
                Explore Features
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="col-lg-6"
            variants={rightVariants}
          >
            <motion.div
              className="position-relative overflow-hidden rounded-4 shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={serviceHero}
                alt="Service provider dashboard"
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                }}
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: "linear-gradient(to right, rgba(52, 152, 219, 0.1), rgba(46, 204, 113, 0.1))",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}