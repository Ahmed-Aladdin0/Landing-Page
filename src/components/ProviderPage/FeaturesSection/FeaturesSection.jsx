import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faTools,
  faBell,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const navigate = useNavigate();
  
  // Steps data with Font Awesome icons
  const steps = [
    {
      number: "01",
      title: "Register Your Business",
      description: "Complete our simple onboarding process to get started",
      icon: faFileSignature
    },
    {
      number: "02",
      title: "Set Up Your Profile",
      description: "Add your services, pricing, and availability",
      icon: faTools
    },
    {
      number: "03",
      title: "Start Receiving Requests",
      description: "Customers in your area will find and book your services",
      icon: faBell
    },
    {
      number: "04",
      title: "Grow Your Business",
      description: "Use our tools to expand your customer base",
      icon: faChartLine
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section style={{
      backgroundColor: "#ffffff",
      padding: "4rem 1rem",
      width: "100%",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: "700",
            color: "#2c3e50",
            marginBottom: "1rem"
          }}>
            How Our <span style={{
              background: "linear-gradient(90deg, #3498db, #2ecc71)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent"
            }}>Platform Works</span>
          </h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#7f8c8d",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Get started in just a few simple steps and begin growing your service business today
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem"
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease"
              }}
              variants={itemVariants}
              whileHover="hover"
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}>
                <FontAwesomeIcon 
                  icon={step.icon} 
                  style={{
                    fontSize: "2rem",
                    marginRight: "1rem",
                    color: "#129990"
                  }} 
                />
                <span style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#129990"
                }}>{step.number}</span>
              </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                color: "#2c3e50",
                marginBottom: "0.8rem"
              }}>{step.title}</h3>
              <p style={{
                color: "#7f8c8d",
                lineHeight: "1.6"
              }}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          style={{ textAlign: "center", marginTop: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => navigate("/demo")}
            style={{
              backgroundColor: "#129990",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(52, 152, 219, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 12px rgba(52, 152, 219, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 6px rgba(52, 152, 219, 0.2)";
            }}
          >
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}