import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobileScreen, 
  faFlag, 
  faStore, 
  faBell, 
  faShieldHalved,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const MissionAndFeatures = () => {
  // Selected 6 features for balanced layout (2x3 on desktop)
  const features = [
    { icon: faMobileScreen, title: "Unified Platform", desc: "Single app for all city services" },
    { icon: faFlag, title: "Reporting System", desc: "Trackable issue reporting with sharing" },
    { icon: faStore, title: "Service Marketplace", desc: "Verified local service providers" },
    { icon: faShieldHalved, title: "Emergency Integration", desc: "Direct access to emergency services" },
    { icon: faBell, title: "Real-time Alerts", desc: "Instant notifications for city updates" },
    { icon: faChartLine, title: "Admin Dashboards", desc: "Comprehensive service analytics" }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Mission and Features Combined */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <h2 className="fw-bold mb-3" style={{ color: '#129990' }}>OUR MISSION</h2>
              <p className="text-muted mb-4" style={{ color: '#129990', lineHeight: '1.3' }}>
                Simplifying resident-city interactions through secure, scalable digital solutions
              </p>
              <hr />
              <h3 className="h3 fw-bold mt-5" style={{ color: '#129990' }}>
                WHAT WE OFFER
              </h3>
            </motion.div>

            {/* Features Grid */}
            <div className="row">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="col-md-6 col-lg-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.floor(index/2) * 0.1 }}
                >
                  <div className="h-100 p-4 rounded-3 feature-card">
                    <div className="icon-wrapper mb-3">
                      <FontAwesomeIcon 
                        icon={feature.icon} 
                        size="xl" 
                        style={{ color: '#129990' }} 
                      />
                    </div>
                    <h3 className="h5 fw-bold mb-2">{feature.title}</h3>
                    <p className="mb-0 text-muted">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndFeatures;