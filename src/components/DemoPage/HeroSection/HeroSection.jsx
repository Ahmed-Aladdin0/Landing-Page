import React from "react";
import DemoPagePic from "../../../assets/DemoPagePic.jpg";
import styles from "./HeroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function HeroSection() {
	const sectionVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2,
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};
	return (
		<>
			<motion.div
				className={`${styles["hero-container"]} container d-flex align-items-center justify-content-center`}
				variants={sectionVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="row h-75">
					<motion.div className="col-lg-6 pe-4 d-flex flex-column justify-content-center">
						<motion.h1
							className="fw-bold mb-4"
							variants={itemVariants}
							style={{
								fontSize: "37px",
								background: "linear-gradient(135deg, #129990,#129990)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								lineHeight: "1.2",
							}}
						>
							Schedule Your Personalized Demo of Citio
						</motion.h1>
						<motion.p
							className="lead mb-4 text-muted"
							variants={itemVariants}
							style={{
								fontWeight: 400,
								fontSize: "1.1rem",
								lineHeight: "1.6",
								
							}}
						>
							See how Citio transforms city operations and citizen engagement.
						</motion.p>
						<motion.div
							className="d-flex align-items-center"
							variants={itemVariants}
						>
							<motion.div className="bg-primary bg-opacity-10 rounded-pill px-3 py-2 d-inline-flex align-items-center mb-3">
								<motion.span whileHover={{ scale: 1.1 }} >
									<FontAwesomeIcon
										icon={faClock}
										className="me-2"
										style={{ fontSize: "16px" ,color:"#129990"}}
									/>
								</motion.span>

								<motion.span
									className="fw-medium"
									style={{ fontSize: "14px" ,color:"#129990"}}
									
								>
									Free - No Obligation - 30-Minute Session
								</motion.span>
							</motion.div>
						</motion.div>
					</motion.div>
					<motion.div
						className="col-lg-6 d-flex align-items-center justify-content-center"
						variants={itemVariants}
					>
						<motion.div
							className="shadow h-100 w-100 bg-white rounded"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							whileHover={{
								scale: 1.05,
								rotate: 1,
								filter: "brightness(1.1)",
							}}
						>
							<img
								src={DemoPagePic}
								className="img-fluid rounded"
								alt="Smart city management"
								style={{ objectFit: "cover", height: "100%" }}
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}
