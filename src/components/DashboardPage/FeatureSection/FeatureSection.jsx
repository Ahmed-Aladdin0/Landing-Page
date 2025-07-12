import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChartPie, 
  faListCheck, 
  faUserGear, 
  faCommentDots,
  faTriangleExclamation,
  faHashtag
} from "@fortawesome/free-solid-svg-icons";

const DashboardFeatures = () => {
  const features = [
    {
      icon: faChartPie,
      title: "Analytics Dashboard",
      description: "Real-time data visualization and performance metrics with interactive charts",
      color: "#129990"
    },
    {
      icon: faListCheck,
      title: "Report Management",
      description: "Comprehensive tools to track, filter, and manage citizen reports",
      color: "#4CAF50"
    },
    {
      icon: faUserGear,
      title: "User Administration",
      description: "Manage user roles, permissions, and access levels efficiently",
      color: "#2196F3"
    },
    {
      icon: faCommentDots,
      title: "Feedback System",
      description: "Collect and analyze citizen feedback for continuous improvement",
      color: "#9C27B0"
    },
    {
      icon: faTriangleExclamation,
      title: "Emergency Alerts",
      description: "Immediate notification system for critical incidents and emergencies",
      color: "#F44336"
    },
    {
      icon: faHashtag,
      title: "Social Integration",
      description: "Connect with citizens through integrated social media channels",
      color: "#FF9800"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#129990" }}>
            Core Dashboard Features
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Powerful tools designed to streamline civic management and enhance citizen engagement
          </p>
        </motion.div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 // Stagger effect
              }}
            >
              <div className="h-100 p-4 rounded-3 border-0 shadow-sm feature-card">
                <div 
                  className="icon-wrapper mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    background: `${feature.color}20`,
                    color: feature.color
                  }}
                >
                  <FontAwesomeIcon icon={feature.icon} size="lg" />
                </div>
                <h3 className="h4 fw-bold mb-3 text-center" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="mb-0 text-muted text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DashboardFeatures;