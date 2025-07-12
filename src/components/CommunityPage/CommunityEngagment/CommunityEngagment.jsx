import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faComments, 
  faEye, 
  faCheckToSlot,
  faUsers,
  faHandshake,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

export default function CommunityEngagement() {
  // Engagement pillars data
  const pillars = [
    {
      title: "Local Conversations",
      description: "Engage in meaningful discussions with neighbors about what matters most in your area",
      icon: faComments
    },
    {
      title: "Neighborhood Watch",
      description: "Stay informed and keep your community safe with real-time updates",
      icon: faEye
    },
    {
      title: "Civic Participation",
      description: "Have your voice heard in local decision-making processes",
      icon: faCheckToSlot
    }
  ];

  // Community benefits data
  const benefits = [
    {
      title: "500+ Community Groups",
      description: "Active groups organized by interest and location",
      icon: faUsers
    },
    {
      title: "90% Resolution Rate",
      description: "Of local issues reported through the platform",
      icon: faHandshake
    },
    {
      title: "Innovative Solutions",
      description: "Crowdsourced ideas for community improvement",
      icon: faLightbulb
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
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <motion.section
      style={{
        backgroundColor: "#ffffff",
        padding: "6rem 1rem",
        position: "relative"
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative"
      }}>
        {/* Section Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "4rem" }}
          variants={containerVariants}
        >
          <motion.p
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "#129990",
              marginBottom: "1rem",
              letterSpacing: "2px"
            }}
            variants={itemVariants}
          >
            COMMUNITY POWER
          </motion.p>
          
          <motion.h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
              lineHeight: "1.2",
              color: "#1e293b",
              marginBottom: "1.5rem"
            }}
            variants={itemVariants}
          >
            Stronger <span style={{ color: "#129990" }}>Together</span>
          </motion.h2>
          
          <motion.p
            style={{
              fontSize: "1.25rem",
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
            variants={itemVariants}
          >
            Citio brings people together to build more connected, informed, and vibrant neighborhoods.
          </motion.p>
        </motion.div>

        {/* Engagement Pillars */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}
          variants={containerVariants}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                transition: "all 0.3s ease"
              }}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.2)"
              }}
            >
              <FontAwesomeIcon 
                icon={pillar.icon} 
                style={{
                  fontSize: "2rem",
                  color: "#3b82f6",
                  marginBottom: "1.5rem"
                }} 
              />
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#1e293b",
                marginBottom: "1rem"
              }}>
                {pillar.title}
              </h3>
              <p style={{
                color: "#64748b",
                lineHeight: "1.7"
              }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Impact Stats */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "5rem",
            textAlign: "center"
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                padding: "1.5rem"
              }}
            >
              <FontAwesomeIcon 
                icon={benefit.icon} 
                style={{
                  fontSize: "2rem",
                  color: "#3b82f6",
                  marginBottom: "1rem"
                }} 
              />
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "0.5rem"
              }}>
                {benefit.title}
              </h3>
              <p style={{
                color: "#64748b",
                lineHeight: "1.6"
              }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}