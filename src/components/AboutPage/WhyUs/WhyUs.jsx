import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGears, 
  faCube, 
  faCloud,
  faRotate,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const WhyUsTechCTA = () => {
  const techHighlights = [
    { icon: faGears, title: "Backend", desc: "Microservices + API Gateway" },
    { icon: faCube, title: "Frontend", desc: "Responsive Web + Flutter App" },
    { icon: faCloud, title: "Hosting", desc: "Microsoft Azure (Container Apps)" },
    { icon: faRotate, title: "CI/CD Pipelines", desc: "Automated from development to deployment" },
    { icon: faShieldHalved, title: "Security", desc: "Authentication, Authorization, and Data Encryption" },
    { icon: faGears, title: "Real-time Sync", desc: "Live data synchronization across all platforms" }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Why Us Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="fw-bold mb-4" style={{ color: '#129990' }}>
                Why Choose Us
              </h2>
              <p className="lead text-muted" style={{ lineHeight: '1.7' }}>
                City Management System isn't just an app — it's a smart infrastructure layer built on secure cloud technologies. Whether you're a citizen, a service provider, or a government entity, our platform delivers simplicity, speed, and real-time access.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5"
            >
              <h2 className="fw-bold mb-4" style={{ color: '#129990' }}>
                Built with the Best Tools
              </h2>
            </motion.div>

            {/* Tech Stack Grid */}
            <div className="row">
              {techHighlights.map((tech, index) => (
                <motion.div
                  key={index}
                  className="col-sm-6 col-md-4 col-lg-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-100 p-3 p-md-4 rounded-3 bg-white shadow-sm">
                    <div className="icon-wrapper mb-3 text-center">
                      <FontAwesomeIcon 
                        icon={tech.icon} 
                        size="xl" 
                        style={{ color: '#129990' }} 
                      />
                    </div>
                    <h3 className="h6 h5-md fw-bold mb-2 text-center">{tech.title}</h3>
                    <p className="mb-0 text-muted small text-center">{tech.desc}</p>
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

export default WhyUsTechCTA;