import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faUsers, faBell, faComments } from "@fortawesome/free-solid-svg-icons";
import dashboardImage from "../../../assets/dashboardhero.jpg";

const HeroSection = () => {
  // Stats cards data
  const stats = [
    { icon: faChartLine, title: "Total Reports", value: "1,240", color: "#129990" },
    { icon: faUsers, title: "Active Users", value: "856", color: "#4CAF50" },
    { icon: faBell, title: "Emergency Alerts", value: "32", color: "#F44336" },
    { icon: faComments, title: "Feedback Items", value: "189", color: "#2196F3" }
  ];

  return (
    <section className="py-5 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        {/* Main content row - Text on left, Image on right */}
        <div className="row align-items-center mb-5">
          {/* Left Column - Text Content */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="d-flex align-items-center mb-4"
            >
              <FontAwesomeIcon 
                icon={faChartLine} 
                size="lg" 
                className="me-3" 
                style={{ color: "#129990" }} 
              />
              <span 
                className="badge rounded-pill px-3 py-2" 
                style={{ 
                  backgroundColor: "rgba(18, 153, 144, 0.1)",
                  color: "#129990"
                }}
              >
                ADMIN DASHBOARD
              </span>
            </motion.div>

            <motion.h1
              className="display-4 fw-bold mb-4"
              style={{ color: "#129990" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Citio Dashboard
            </motion.h1>

            <motion.p
              className="lead mb-5"
              style={{ lineHeight: "1.8" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your comprehensive platform for civic management and analytics. 
              Monitor reports, track performance, and engage with citizens 
              through our intuitive administrative interface.
            </motion.p>

            <motion.div
              className="d-flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(18, 153, 144, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="btn px-4 py-3 rounded-3"
                style={{ 
                  backgroundColor: "#129990",
                  color: "white",
                  border: "none"
                }}
              >
                Explore Features
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Image */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={dashboardImage} 
              alt="Dashboard Preview" 
              className="img-fluid rounded-3 shadow-lg w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </motion.div>
        </div>

        {/* Stats Cards Section - Below main content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="row g-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="col-md-6 col-lg-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.15 // Stagger effect
                }}
              >
                <div 
                  className="p-4 rounded-3 bg-white shadow-sm h-100"
                  style={{ borderTop: `4px solid ${stat.color}` }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="icon-wrapper rounded-circle p-3 me-3"
                      style={{ 
                        backgroundColor: `${stat.color}20`,
                        color: stat.color
                      }}
                    >
                      <FontAwesomeIcon icon={stat.icon} />
                    </div>
                    <h3 className="h5 mb-0" style={{ color: stat.color }}>
                      {stat.title}
                    </h3>
                  </div>
                  <p className="display-6 fw-bold mb-0">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;