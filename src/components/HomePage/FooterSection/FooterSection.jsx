import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function FooterSection() {
  return (
    <footer
      style={{
        background: "#20294a",
        color: "#e2e8f0",
        paddingTop: 50,
        paddingBottom: 24,
      }}
    >
      <div className="container">
        <div className="row pb-4">
          {/* Company Info */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h4
              style={{
                color: "#fff",
                fontWeight: 700,
                letterSpacing: 0,
                marginBottom: 15,
              }}
            >
              Citio
            </h4>
            <p style={{ fontSize: 15.3, marginBottom: 22 }}>
              Empowering smarter cities with real-time engagement, data & seamless urban management—helping city leaders and communities thrive together.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" style={{ color: "#e2e8f0" }}>
                <FontAwesomeIcon size="lg" icon={faFacebookF} />
              </a>
              <a href="#" style={{ color: "#e2e8f0" }}>
                <FontAwesomeIcon size="lg" icon={faTwitter} />
              </a>
              <a href="#" style={{ color: "#e2e8f0" }}>
                <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
              </a>
              <a href="#" style={{ color: "#e2e8f0" }}>
                <FontAwesomeIcon size="lg" icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="col-6 col-md-2 mb-4">
            <h6 style={{ fontWeight: 600, color: "#fff", marginBottom: 14 }}>
              Platform
            </h6>
            <ul className="list-unstyled" style={{ fontSize: 15 }}>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  For Cities
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  For Residents
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-2 mb-4">
            <h6 style={{ fontWeight: 600, color: "#fff", marginBottom: 14 }}>
              Resources
            </h6>
            <ul className="list-unstyled" style={{ fontSize: 15 }}>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 style={{ fontWeight: 600, color: "#fff", marginBottom: 14 }}>
              Contact Us
            </h6>
            <div style={{ fontSize: 15.2 }}>
              <div>
                <span style={{ color: "#a7b1c6", fontWeight: 500 }}>Email:</span>{" "}
                support@citio.com
              </div>
              <div>
                <span style={{ color: "#a7b1c6", fontWeight: 500 }}>Phone:</span>{" "}
                +1 234 567 890
              </div>
              <div>
                <span style={{ color: "#a7b1c6", fontWeight: 500 }}>
                  Address:
                </span>{" "}
                712 Smart City Blvd, New York, NY 10001
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #2d375b",
            paddingTop: 22,
            fontSize: 14,
            color: "#bec6d7",
            letterSpacing: 0.08,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Citio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}