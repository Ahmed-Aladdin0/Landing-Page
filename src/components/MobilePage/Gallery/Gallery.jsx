import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import screenshot1 from "../../../assets/WhatsApp Image 2025-07-08 at 1.49.20 AM.jpeg";
import screenshot2 from "../../../assets/WhatsApp Image 2025-07-08 at 1.49.33 AM.jpeg";
import screenshot3 from "../../../assets/WhatsApp Image 2025-07-08 at 1.50.07 AM.jpeg";
import screenshot4 from "../../../assets/WhatsApp Image 2025-07-08 at 1.50.22 AM.jpeg";

const ScreenshotsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenshots = [
    { id: 1, src: screenshot1, rotation: -5 },
    { id: 2, src: screenshot2, rotation: 2 },
    { id: 3, src: screenshot3, rotation: -3 },
    { id: 4, src: screenshot4, rotation: 4 }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#129990" }}>
            App Screenshots
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Explore our intuitive interface through these screenshots
          </p>
        </motion.div>

        <div className="d-flex justify-content-center">
          <div className="position-relative" style={{ height: "500px", width: "300px", right: "40px" }}>
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                className="position-absolute"
                style={{
                  width: "85%",
                  height: "auto",
                  left: `${index * 50}px`,
                  zIndex: index + 1,
                  transform: `rotate(${screenshot.rotation}deg)`,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15
                }}
                whileHover={{
                  zIndex: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => openModal(screenshot)}
              >
                <img 
                  src={screenshot.src} 
                  alt={`App screenshot ${screenshot.id}`} 
                  className="img-fluid rounded-3 border border-2 border-white"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for full-size image */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="modal-backdrop d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 30000
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content position-relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeModal} 
              >
                <img 
                  src={selectedImage?.src} 
                  alt={`Full size ${selectedImage?.id}`} 
                  className="img-fluid rounded-3"
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    objectFit: "contain"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ScreenshotsGallery;