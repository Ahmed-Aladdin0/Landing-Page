import React from "react";
import { motion } from "framer-motion";
import citioLogo from "../../../assets/citio.png";

export default function Navbar() {
    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top bg-white shadow-sm`}
            style={{
                transition: "all 0.3s ease",
                backgroundColor: "white",
         
                borderBottom: "1px solid rgba(0,0,0,0.08)"
            }}
        >
            <div className="container">
                <motion.div
                    className="d-flex align-items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
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

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        padding: "8px 10px",
                        borderRadius: "8px"
                    }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Features", href: "/features" },
                            { name: "About", href: "/about" },
                        ].map((item, index) => (
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
                                        backgroundColor: "#129990",
                                        color: "#fff",
                                        scale: 1.05,
                                        y: -2
                                    }}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.2,
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
            </div>
        </nav>
    );
}