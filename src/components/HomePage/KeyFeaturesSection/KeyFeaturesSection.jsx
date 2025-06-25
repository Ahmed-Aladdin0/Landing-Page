import {
	faChartLine,
	faComments,
	faHouse,
	faLandmark,
	faMobileScreenButton,
	faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

export default function KeyFeaturesSection() {
	const cardsItems = [
		{
			id: 1,
			icon: faHouse,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Report Issues in Real-Time",
			description:
				"Residents can report city issues instantly through the mobile app and track status updates from submission to resolution.",
		},
		{
			id: 2,
			icon: faComments,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "City Social Media",
			description:
				"Residents can share issues and updates, like and comment – creating a digital public square for community engagement.",
		},
		{
			id: 3,
			icon: faStore,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Service & Product Providers",
			description:
				"Discover nearty service providers, view offerings, and order directly through Citio's integrated marketplace.",
		},
		{
			id: 4,
			icon: faLandmark,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Government Services Access",
			description:
				"Submit requests, access official services, and get updates-all in one place without the hassle of multiple platforms.",
		},
		{
			id: 5,
			icon: faChartLine,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Smart Dashboards for Everyone",
			description:
				"City staff, providers, and service managers get tailored dashboards to manage tasks efficiently with data-driven insights.",
		},
		{
			id: 6,
			icon: faMobileScreenButton,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Mobile-First Experience",
			description:
				"Access all features on the go with our responsive mobile app designed for residents, government staff, and service providers.",
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const titleVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	const cardVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		},
		hover: {
			y: -10,
			boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
			transition: {
				duration: 0.3,
				ease: "easeInOut"
			}
		}
	};

	const iconVariants = {
		hidden: { scale: 0, rotate: -180 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20
			}
		},
		hover: {
			scale: 1.2,
			rotate: 360,
			transition: {
				duration: 0.6,
				ease: "easeInOut"
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
			className="container py-5"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div 
				className="text-center mb-5"
				variants={titleVariants}
			>
				<motion.h1 
					className="fw-bold" 
					style={{ 
						fontSize: "37px",
						background: "linear-gradient(90deg, #0d6efd, #198754, #0d6efd)",
						backgroundSize: "200% 100%",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text"
					}}
					variants={textGradientVariants}
					animate="animate"
					
				>
					Key Features
				</motion.h1>
				<motion.p 
					className="fw-bold text-muted"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					One platform connecting residents, government, and service providers
					with intelligent tools for modern city management.
				</motion.p>
			</motion.div>

			<motion.div 
				className="row g-4 mb-4"
				variants={containerVariants}
			>
				{cardsItems.map((item, index) => (
					<motion.div 
						key={item.id} 
						className="col-md-6 col-lg-4"
						variants={cardVariants}
						whileHover="hover"
					>
						<motion.div 
							className="p-4 bg-white rounded shadow h-100 position-relative overflow-hidden"
							style={{ cursor: "pointer" }}
						>
							{/* Background decoration */}
							<motion.div
								className="position-absolute"
								style={{
									top: "-50px",
									right: "-50px",
									width: "100px",
									height: "100px",
									background: item.iconColor.includes("primary") 
										? "rgba(13, 110, 253, 0.1)" 
										: "rgba(25, 135, 84, 0.1)",
									borderRadius: "50%",
									filter: "blur(40px)"
								}}
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.2
								}}
							/>
							
							<motion.div
								className={`rounded-circle d-inline-flex justify-content-center align-items-center mb-3 ${item.iconBg}`}
								style={{ width: "50px", height: "50px", position: "relative", zIndex: 1 }}
								variants={iconVariants}
								whileHover="hover"
							>
								<FontAwesomeIcon
									icon={item.icon}
									className={`fs-5 ${item.iconColor}`}
								/>
							</motion.div>
							
							<motion.h5 
								className="fw-bold"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								{item.title}
							</motion.h5>
							
							<motion.p 
								className="text-muted"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								{item.description}
							</motion.p>

							{/* Hover effect line */}
							<motion.div
								className="position-absolute bottom-0 start-0"
								style={{
									height: "3px",
									background: item.iconColor.includes("primary") 
										? "#0d6efd" 
										: "#198754",
									width: "0%"
								}}
								whileHover={{
									width: "100%",
									transition: { duration: 0.3 }
								}}
							/>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}