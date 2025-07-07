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
			}}
		>
			<div className="container">
				<motion.img
					src={citioLogo}
					alt="Citio Logo"
					style={{ height: "40px", width: "auto", cursor: "pointer" }}
					whileHover={{
						scale: 1.1,
						rotate: [0, -3, 3, 0],
						y: -2,
					}}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
				/>

				<button
					className="navbar-toggler border-0 shadow-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center">
						<li className="nav-item">
							<motion.a
								className="nav-link px-3 fw-medium"
								href="/"
								style={{ color: "#333", fontSize: "0.95rem" }}
								whileHover={{  color: "#129990" }}
								transition={{ duration: 0.1 }}
							>
								Home
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a
								className="nav-link px-3 fw-medium"
								href="/features"
								style={{ color: "#333", fontSize: "0.95rem" }}
								whileHover={{  color: "#129990" }}
								transition={{ duration: 0.1 }}
							>
								Features
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a
								className="nav-link px-3 fw-medium"
								href="/how-it-works"
								style={{ color: "#333", fontSize: "0.95rem" }}
								whileHover={{  color: "#129990" }}
								transition={{ duration: 0.1 }}
							>
								How It Works
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a
								className="nav-link px-3 fw-medium"
								href="/about"
								style={{ color: "#333", fontSize: "0.95rem" }}
								whileHover={{  color: "#129990" }}
								transition={{ duration: 0.1 }}
							>
								About
							</motion.a>
						</li>
						<li className="nav-item">
							<motion.a
								className="nav-link px-3 fw-medium"
								href="/contact"
								style={{ color: "#333", fontSize: "0.95rem" }}
								whileHover={{  color: "#129990" }}
								transition={{ duration: 0.1 }}
							>
								Contact
							</motion.a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
