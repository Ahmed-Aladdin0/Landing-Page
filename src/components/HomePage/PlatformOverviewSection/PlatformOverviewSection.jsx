import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./PlatformOverviewSection.module.css";
import mobilePic from "../../../assets/assets_task_01jzj8qg5zfrk8r1vr2an5p3bp_1751886151_img_0.png";
import dashboardPic from "../../../assets/assets_task_01jzjcwht2f769sgtg18ke9q1p_1751890483_img_1.png";
import providerPortalPic from "../../../assets/assets_task_01jzjcwht2f769sgtg18ke9q1p_1751890483_img_0.png";
import communityPic from "../../../assets/community.jpg";

export default function PlatformOverviewSection() {
  const navigate = useNavigate();

  const PlatformCards = [
    {
      id: 1,
      imageSrc: mobilePic,
      imageAlt: "Mobile App Interface",
      title: "Mobile App Interface",
      description: "Residents can easily report issues through our intuitive mobile app",
      route: "/mobile"
    },
    {
      id: 2,
      imageSrc: dashboardPic,
      imageAlt: "Dashboard Analytics",
      title: "Dashboard Analytics",
      description: "View real-time data and insights about city operations",
      route: "/dashboard"
    },
    {
      id: 3,
      imageSrc: providerPortalPic,
      imageAlt: "Service Provider Portal",
      title: "Service Provider Portal",
      description: "Efficient tool for service providers to manage requests",
      route: "/provider-portal"
    },
    {
      id: 4,
      imageSrc: communityPic,
      imageAlt: "Community Engagement",
      title: "Community Engagement",
      description: "Connect with fellow residents and contribute to city improvement",
      route: "/community"
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <motion.h1 
          className="fw-bold" 
          style={{ fontSize: "37px", color: "#129990" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Platform Overview
        </motion.h1>
        <motion.p 
          className="fw-bold text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore the Intuitive interfaces designed for all city stakeholders.
        </motion.p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {PlatformCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="col"
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.6,
                delay: index * 0.1
              }
            }}
          >
            <div className={`${styles.cardContainer} shadow rounded overflow-hidden position-relative`}>
              {/* Card Image */}
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              
              {/* Dark Overlay */}
              <div className={styles.imageOverlay}></div>
              
              {/* Title (shown by default) */}
              <div className={styles.cardTitle}>
                <h3>{card.title}</h3>
              </div>
              
              {/* Hover Content (shown on hover) */}
              <div className={styles.hoverContent}>
                <h3 className="mb-3">{card.title}</h3>
                <p className="text-center">{card.description}</p>
                
                {/* Learn More Button - Now properly clickable */}
                <motion.button 
                  className={styles.learnMoreButton}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#129990",
                    borderColor: "#129990"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(card.route)}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}