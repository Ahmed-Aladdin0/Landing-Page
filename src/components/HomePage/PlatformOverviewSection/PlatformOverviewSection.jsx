import React from "react";
import styles from "./PlatformOverviewSection.module.css";
import mobilepic from "../../../assets/ChatGPT Image May 12, 2025, 09_13_45 PM.png";
export default function PlatformOverviewSection() {
  const PlatformCards = [
    {
      id: 1,
      imageSrc: mobilepic,
      imageAlt: "Mobile App Interface",
      title: "Mobile App Interface",
      description: "Residents can easily report issues through our intuitive mobile app"
    },
    {
      id: 2,
      imageSrc: "https://ak-d.tripcdn.com/images/100h0q000000gcwf27C3A_C_1200_800_Q70.jpg?proc=source%2ftrip",
      imageAlt: "Dashboard Analytics",
      title: "Dashboard Analytics",
      description: "View real-time data and insights about city operations"
    },
    {
      id: 3,
      imageSrc: "https://ak-d.tripcdn.com/images/100h0q000000gcwf27C3A_C_1200_800_Q70.jpg?proc=source%2ftrip",
      imageAlt: "Service Provider Portal",
      title: "Service Provider Portal",
      description: "Efficient tool for service providers to manage requests"
    },
    {
      id: 4,
      imageSrc: "https://ak-d.tripcdn.com/images/100h0q000000gcwf27C3A_C_1200_800_Q70.jpg?proc=source%2ftrip",
      imageAlt: "Community Engagement",
      title: "Community Engagement",
      description: "Connect with fellow residents and contribute to city improvement"
    },
  ];
  
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ fontSize: "42px" }}>
          Platform Overview
        </h1>
        <p className="fw-bold text-muted">
          Explore the Intuitive interfaces designed for all city stakeholders.
        </p>
      </div>
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {PlatformCards.map((card) => (
          <div key={card.id} className="col">
            <div
              className={`${styles.cardContainer} shadow rounded overflow-hidden position-relative`}
              style={{ height: "550px" }}
            >
              {/* Image */}
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              
              <div className={`${styles.cardTitle} position-absolute bottom-0 start-0 w-100 p-3 text-white`}>
                <h3>{card.title}</h3>
              </div>
              
              {/* Hover Content */}
              <div className={`${styles.hoverContent} position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-4`}>
                <h3 className="mb-3">{card.title}</h3>
                <p className="text-center">{card.description}</p>
                <button className="btn btn-outline-light mt-3">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}