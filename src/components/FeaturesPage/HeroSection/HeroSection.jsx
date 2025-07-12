import React, { useState } from "react";
import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import MainFeaturesSection from "../MainFeaturesSection/MainFeaturesSection";
import MultiPlatformsSection from "../MultiPlatformsSection/MultiPlatformsSection";
import CompareFeaturesSection from "../CompareFeaturesSection/CompareFeaturesSection";
import RequestDemoSection from "../RequestDemoSection/RequestDemoSection";

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

	const contentVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
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

			{/* Dynamic Content Sections */}
			<motion.div
				key={activeButton}
				variants={contentVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Main Features Section */}
				<div
					style={{ width: "100%", position: "relative", backgroundColor: "#fff" }}
					className="pt-5"
				>
					<MainFeaturesSection activeButton={activeButton} />
				</div>

				{/* Multi Platforms Section */}
				<div
					style={{ width: "100%", position: "relative", backgroundColor: "#effbf9" }}
					className="pt-5"
				>
					<MultiPlatformsSection activeButton={activeButton} />
				</div>

				{/* Compare Features Section */}
				<div
					style={{ width: "100%", position: "relative", backgroundColor: "#fff" }}
					className="pt-5"
				>
					<CompareFeaturesSection activeButton={activeButton} />
				</div>

				{/* Request Demo Section */}
				<div
					style={{ width: "100%", position: "relative", backgroundColor: "#effbf9" }}
					className="pt-5"
				>
					<RequestDemoSection activeButton={activeButton} />
				</div>
			</motion.div>
		</>
	);
}
