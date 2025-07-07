import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
export default function HeroSection() {
	const [activeButton, setActiveButton] = useState("For Residents");
	const sectionVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};
	return (
		<>
			<motion.div className="container py-5" 
			variants={sectionVariants}
			initial="hidden"
			animate="visible"
			>
				<motion.div className="text-center mb-3">
					<h1 className="fw-bold" style={{ fontSize: "37px" ,color:"#129990"}}>
						Everything You Need to Run a Smart City
					</h1>
					<p className="fw-bold text-muted">
						Citio brings together residents, government, and providers in one
						intelligent platform.
					</p>
					<motion.div
						role="group"
						className="mt-4 btn-group rounded-pill shadow p-md-2 px-md-3 bg-body-tertiary"
					>
						<motion.button
							type="button"
							className={`${styles["btn1"]} me-2 ${
								activeButton === "For Residents" ? styles.activeButton : ""
							}`}
							onClick={() => setActiveButton("For Residents")}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							For Residents
						</motion.button>
						<motion.button
							type="button"
							className={`${styles["btn1"]} me-2 ${
								activeButton === "For Government" ? styles.activeButton : ""
							}`}
							onClick={() => setActiveButton("For Government")}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							For Government
						</motion.button>
						<motion.button
							type="button"
							className={`${styles["btn1"]} ${
								activeButton === "For Providers" ? styles.activeButton : ""
							}`}
							onClick={() => setActiveButton("For Providers")}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							For Providers
						</motion.button>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}
