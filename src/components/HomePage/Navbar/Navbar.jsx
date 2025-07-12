import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import citioLogo from "../../../assets/citio.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const Navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-white shadow-sm"
      style={{
        transition: "all 0.3s ease",
        borderBottom: "1px solid rgba(0,0,0,0.08)"
      }}
    >
      <div className="container">
        <motion.div
          className="d-flex align-items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ cursor: "pointer" }}
          onClick={() => Navigate("/")}
        >
          <motion.img
            src={citioLogo}
            alt="Citio Logo"
            style={{ 
              height: "45px", 
              width: "auto", 
              cursor: "pointer",
              marginRight: "12px"
            }}
            whileHover={{
              scale: 1.08,
              rotate: [0, -2, 2, 0],
              y: -2,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
          <motion.span
            className="fw-bold"
            style={{
              fontSize: "1.5rem",
              color: "#129990",
              letterSpacing: "0.5px"
            }}
            whileHover={{ color: "#0f7a73" }}
          >
            Citio
          </motion.span>
        </motion.div>

        {/* Mobile Toggle Button */}
        <motion.button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          style={{
            padding: "8px 10px",
            borderRadius: "8px",
            outline: "none"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={isOpen ? "open" : "closed"}
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#129990",
              position: "relative",
              transition: "all 0.3s ease"
            }}
            variants={{
              closed: {
                rotate: 0,
                y: 0,
                backgroundColor: "#129990"
              },
              open: {
                rotate: 45,
                y: 6,
                backgroundColor: "#129990"
              }
            }}
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#129990",
              margin: "6px 0",
              position: "relative",
              transition: "all 0.3s ease"
            }}
            variants={{
              closed: {
                opacity: 1
              },
              open: {
                opacity: 0
              }
            }}
          />
          <motion.span
            animate={isOpen ? "open" : "closed"}
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              backgroundColor: "#129990",
              position: "relative",
              transition: "all 0.3s ease"
            }}
            variants={{
              closed: {
                rotate: 0,
                y: 0,
                backgroundColor: "#129990"
              },
              open: {
                rotate: -45,
                y: -10,
                backgroundColor: "#129990"
              }
            }}
          />
        </motion.button>

        {/* Desktop Menu */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item, index) => (
              <li key={item.name} className="nav-item mx-2">
                <motion.a
                  className="nav-link position-relative"
                  href={item.href}
                  style={{ 
                    color: "#333", 
                    fontSize: "1rem",
                    fontWeight: "500",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block"
                  }}
                  whileHover={{
                    color: "#129990",
                    scale: 1.05,
                    y: -2
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.1,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
            
            <li className="nav-item ms-3">
              <motion.a
                className="btn btn-outline-primary px-4 py-2"
                href="/demo"
                style={{
                  borderColor: "#129990",
                  color: "#129990",
                  fontWeight: "600",
                  borderRadius: "25px",
                  borderWidth: "2px",
                  fontSize: "0.95rem",
                  transition: "all 0.3s ease"
                }}
                whileHover={{
                  backgroundColor: "#129990",
                  color: "#fff",
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 25px rgba(18, 153, 144, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Book a Demo
              </motion.a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="d-lg-none w-100"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              style={{
                overflow: "hidden",
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                zIndex: 1000
              }}
            >
              <motion.ul 
                className="navbar-nav px-3 py-2"
                style={{ listStyle: "none" }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.name}
                    className="py-2 border-bottom"
                    variants={itemVariants}
                  >
                    <motion.a
                      href={item.href}
                      className="text-decoration-none"
                      style={{
                        color: "#333",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                        display: "block",
                        padding: "8px 16px"
                      }}
                      whileHover={{
                        color: "#129990",
                        x: 5
                      }}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
                <motion.li 
                  className="py-3"
                  variants={itemVariants}
                >
                  <motion.a
                    href="/demo"
                    className="btn btn-primary w-100"
                    style={{
                      backgroundColor: "#129990",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "25px",
                      border: "none",
                      padding: "10px 20px"
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(18, 153, 144, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleMenu}
                  >
                    Book a Demo
                  </motion.a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}