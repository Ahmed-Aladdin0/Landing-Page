import React from "react";

export default function ChooseCitioSection() {
  const featureItems = [
    {
      id: 1,
      icon: "🏢", 
      title: "Centralized City Services",
      description: "All your city services managed from one powerful platform",
    },
    {
      id: 2,
      icon: "👥",
      title: "Engaged Residents",
      description: "Better connection between citizens and local government",
    },
    {
      id: 3,
      icon: "✓", 
      title: "Efficient Resolution",
      description: "Quick and effective response to community needs",
    },
    {
      id: 4,
      icon: "📈", 
      title: "Real-time Dashboards",
      description: "Data-driven insights for better decision making",
    },
  ];

  return (
    <>
      <div className="container pt-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ fontSize: "42px" }}>
            Why Cities Choose Citio
          </h1>
        </div>
        <div className="row justify-content-center g-4 mb-5">
          {featureItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 d-flex">
              <div
                className="bg-white text-center"
                style={{
                  borderRadius: 16,
                  boxShadow: "0 2px 16px 0 rgba(60,72,88,.08)",
                  border: "1px solid #f0f0f0",
                  padding: "28px 20px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    color: "#4169e1",
                    marginBottom: "15px",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#1a2138",
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#8191aa",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}