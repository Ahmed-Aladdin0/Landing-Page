import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faUniversity, faLandmark, faBuilding, faMonument } from '@fortawesome/free-solid-svg-icons';

export default function TrustedSection() {
  // الأيقونات اللي على الشريط - يمكنك تغييره لما هو متاح لك في FontAwesome
  const trustedIcons = [
    { id: 1, icon: faCity, label: "City" },
    { id: 2, icon: faLandmark, label: "Landmark" },
    { id: 3, icon: faUniversity, label: "University" },
    { id: 4, icon: faBuilding, label: "Building" },
    { id: 5, icon: faMonument, label: "Monument" }
  ];

  return (
    <div style={{
      background: "#fff",
      padding: "44px 0 32px 0",
      borderBottom: "1px solid #f3f3f5"
    }}>
      <div className="container text-center">
        <div
          style={{
            color: "#20294a",
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 15,
            letterSpacing: 0.2,
          }}>
          Trusted by Leading Cities and Organizations
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-4 gap-md-5">
          {trustedIcons.map((item) => (
            <span key={item.id} style={{color: "#7e8ba1", fontSize: 32, opacity: 0.88}}>
              <FontAwesomeIcon icon={item.icon} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}