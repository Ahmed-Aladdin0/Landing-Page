import React from "react";

export default function MultiPlatformsSection() {
  const platformItems = [
    {
      id: 1,
      title: "Mobile App",
      description: "Resident-focused interface for on-the-go access to city services.",
      imgSrc: "https://placehold.co/600x400/eef6ff/0d6efd?text=Mobile+App+Interface" 
    },
    {
      id: 2,
      title: "Government Dashboard",
      description: "Comprehensive control center for city officials and administrators.",
      imgSrc: "https://placehold.co/600x400/e6f7ef/0d6efd?text=Dashboard+Interface" 
    },
    {
      id: 3,
      title: "Provider Portal",
      description: "Business management tools for service providers and vendors.",
      imgSrc: "https://placehold.co/600x400/f8f9fa/0d6efd?text=Provider+Portal" 
    },
  ];

  return (
    <div className="container py-5">
        <div className="text-center mb-5">
					<h1 className="fw-bold" style={{ fontSize: "42px" }}>
						One Platform, Multiple Interfaces
					</h1>
					<p className="fw-bold text-muted">
                        Tailored experiences for every user type, accessible from any device.
                    </p>
				</div>
      <div className="row justify-content-center g-4 mb-3">
        {platformItems.map((item) => (
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
              {/* Image  */}
              <div style={{ width: "100%", marginBottom: 20 }}>
                <img 
                  src={item.imgSrc} 
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Title */}
              <h5 style={{ fontWeight: 600, marginBottom: 14 }}>
                {item.title}
              </h5>

              {/* Description */}
              <p style={{ fontSize: 15, color: "#666", marginBottom: 20 }}>
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}