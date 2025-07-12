import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CommunityHero() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      backgroundPosition: "100% 50%",
      transition: {
        duration: 0.5
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.section
      className="community-hero"
      style={{
        background: "white",
        color: "white",
        padding: "6rem 1rem",
        position: "relative",
        overflow: "hidden"
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated grid background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          linear-gradient(rgba(233, 7, 7, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        opacity: 0.5
      }}></div>
      
      {/* Floating dots */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56, 182, 255, 0.15) 0%, transparent 70%)",
        filter: "blur(20px)"
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "15%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
        filter: "blur(20px)"
      }}></div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
        textAlign: "center"
      }}>
        <motion.div variants={textVariants}>
          <motion.p
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              color: "#129990",
              marginBottom: "1rem",
              letterSpacing: "2px"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            CITIO COMMUNITY
          </motion.p>
        </motion.div>

        <motion.h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "1.5rem",
            background: "#129990",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }}
          variants={textVariants}
        >
          Where Your City Comes <span style={{ display: "block" }}>to Life</span>
        </motion.h1>

        <motion.p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto 2.5rem",
            color: "#94a3b8",
            lineHeight: "1.6"
          }}
          variants={textVariants}
        >
          Connect with neighbors, discover local events, and shape your community 
          through authentic conversations and shared experiences.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap"
          }}
        >
          <motion.button
            style={{
              background: "#129990",
              backgroundSize: "200% 100%",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.5s ease"
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/demo")}
          >
            Join Your Community
          </motion.button>
          
        </motion.div>

        {/* Animated stats */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginTop: "4rem",
            flexWrap: "wrap"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "50K+", label: "Active Members" },
            { value: "120+", label: "Cities" },
            { value: "10M+", label: "Monthly Interactions" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{
                textAlign: "center"
              }}
              whileHover={{ y: -5 }}
            >
              <div style={{
                fontSize: "2rem",
                fontWeight: "700",
                background: "linear-gradient(90deg, #38bdf8, #818cf8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "0.5rem"
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "0.9rem",
                color: "#94a3b8",
                letterSpacing: "1px"
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}