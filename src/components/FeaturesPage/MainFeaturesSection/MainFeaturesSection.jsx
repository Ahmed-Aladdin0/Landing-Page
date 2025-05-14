import React from "react";

export default function MainFeaturesSection() {
  const featuresItems = [
    {
      id: 1,
      title: "Report Issues Instantly",
      description: "Citizens can easily report potholes, broken lights, or other issues via the mobile app.",
      icon: "🔊", 
      features: [
        "Real-time issue tracking",
        "Photo attachments",
        "Location mapping"
      ],
      bgColor: "#eef2ff"
    },
    {
      id: 2,
      title: "City Social Feed",
      description: "Residents can share updates, like and comment, and engage in local conversations.",
      icon: "💬", 
      features: [
        "Community discussions",
        "Event announcements",
        "Public notices"
      ],
      bgColor: "#e6f7ef"
    },
    {
      id: 3,
      title: "Browse Local Services",
      description: "Discover nearby service providers, browse their offerings, and place orders.",
      icon: "🏪", 
      features: [
        "Service directory",
        "Online booking",
        "Secure payments"
      ],
      bgColor: "#eef2ff" 
    },
  ];

  return (
    <div className="container py-5">
      <div className="row justify-content-center g-4 mb-3">
        {featuresItems.map((item) => (
          <div key={item.id} className="col-lg-4 d-flex">
            <div
              className="bg-white"
              style={{
                borderRadius: 16,
                boxShadow: "0 2px 16px 0 rgba(60,72,88,.08)",
                border: "1px solid #f0f0f0",
                padding: "28px 26px",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Icon Circle */}
              <div 
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: item.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 21,
                  marginBottom: 20
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h5 style={{ fontWeight: 600, marginBottom: 14 }}>
                {item.title}
              </h5>

              {/* Description */}
              <p style={{ fontSize: 15, color: "#666", marginBottom: 20 }}>
                {item.description}
              </p>

              {/* Feature List */}
              <div>
                {item.features.map((feature, index) => (
                  <div key={index} className="d-flex align-items-center mb-2">
                    <span style={{ color: "#4CAF50", marginRight: 10 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#555" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}