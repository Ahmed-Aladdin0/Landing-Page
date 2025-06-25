import React from "react";
import heropic from "../../../assets/heropic.png";
import styles from "./HeroSection.module.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
	const navigate = useNavigate();

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	};

	const leftColumnVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const rightColumnVariants = {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut"
			}
		}
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
			transition: {
				duration: 0.3,
				yoyo: Infinity
			}
		},
		tap: {
			scale: 0.95
		}
	};

	const imageVariants = {
		initial: { scale: 0.8, opacity: 0 },
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		},
		hover: {
			scale: 1.02,
			transition: {
				duration: 0.3
			}
		}
	};

	const textGradientVariants = {
		animate: {
			backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
			transition: {
				duration: 5,
				repeat: Infinity,
				ease: "linear"
			}
		}
	};

	return (
		<motion.div 
			className={`${styles["hero-container"]} container d-flex align-items-center justify-content-center`}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className="row h-75">
				<motion.div 
					className="col-lg-6 pe-4 d-flex flex-column justify-content-center"
					variants={leftColumnVariants}
				>
					<motion.h1 
						className="fw-bold" 
						style={{ 
							fontSize: "37px",
							background: "linear-gradient(90deg, #0d6efd, #0056b3, #0d6efd)",
							backgroundSize: "200% 100%",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text"
						}}
						variants={textGradientVariants}
						animate="animate"
					>
						Welcome to Citio - Smart City Management in One Platform
					</motion.h1>
					
					<motion.p 
						className="lead"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}
					>
						Empowering residents, services, and government with intelligent
						tools. Connect your entire city ecosystem in one integrated
						platform.
					</motion.p>
					
					<motion.div 
						className="d-flex gap-3 mt-4 mb-md-0 mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.6 }}
					>
						<motion.button 
							className="btn btn-primary rounded-pill fw-bold px-md-4 px-2 py-2" 
							onClick={() => navigate("/features")}
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							Explore Features
						</motion.button>
						
						<motion.button 
							className="btn btn-outline-primary rounded-pill fw-bold px-md-4 px-2 py-2" 
							onClick={() => navigate("/demo")}
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
						>
							Request a Demo
						</motion.button>
					</motion.div>
				</motion.div>
				
				<motion.div 
					className="col-lg-6 d-flex align-items-center justify-content-center"
					variants={rightColumnVariants}
				>
					<motion.div 
						className="shadow p-4 h-100 w-100 bg-white rounded"
						whileHover={{ 
							boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
							transition: { duration: 0.3 }
						}}
					>
						<motion.img
							src={heropic}
							className={`${styles["hero-image"]} img-fluid`}
							alt="Smart city management"
							style={{ objectFit: "contain", height: "100%" }}
							variants={imageVariants}
							initial="initial"
							animate="animate"
							whileHover="hover"
						/>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}