import React from "react";
import styles from "./PlatformOverviewSection.module.css";
import { motion } from "framer-motion";
import mobilePic from "../../../assets/ChatGPT Image May 12, 2025, 09_13_45 PM.png";
import dashboardPic from "../../../assets/DashboardAnalytics.png";
import providerPortalPic from "../../../assets/Portal2.png";
import communityPic from "../../../assets/community.jpg";

export default function PlatformOverviewSection() {
	const PlatformCards = [
		{
			id: 1,
			imageSrc: mobilePic,
			imageAlt: "Mobile App Interface",
			title: "Mobile App Interface",
			description:
				"Residents can easily report issues through our intuitive mobile app",
			delay: 0,
		},
		{
			id: 2,
			imageSrc: dashboardPic,
			imageAlt: "Dashboard Analytics",
			title: "Dashboard Analytics",
			description: "View real-time data and insights about city operations",
			delay: 0.1,
		},
		{
			id: 3,
			imageSrc: providerPortalPic,
			imageAlt: "Service Provider Portal",
			title: "Service Provider Portal",
			description: "Efficient tool for service providers to manage requests",
			delay: 0.2,
		},
		{
			id: 4,
			imageSrc: communityPic,
			imageAlt: "Community Engagement",
			title: "Community Engagement",
			description:
				"Connect with fellow residents and contribute to city improvement",
			delay: 0.3,
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const titleVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const cardVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			rotateY: -90,
		},
		visible: (custom) => ({
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				delay: custom * 0.2,
				duration: 0.8,
				ease: "easeOut",
			},
		}),
		hover: {
			scale: 1.02,
			boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
			transition: {
				duration: 0.3,
			},
		},
	};

	const imageVariants = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.4,
				ease: "easeOut",
			},
		},
	};

	const titleBarVariants = {
		initial: {
			background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
		},
		hover: {
			background: "linear-gradient(to top, rgba(13,110,253,0.9), transparent)",
			transition: {
				duration: 0.3,
			},
		},
	};

	const hoverContentVariants = {
		initial: {
			opacity: 0,
			y: 20,
		},
		hover: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const hoverTextVariants = {
		initial: { y: 20, opacity: 0 },
		hover: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		},
	};

	const buttonVariants = {
		initial: { scale: 0, opacity: 0 },
		hover: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.2,
				duration: 0.3,
				type: "spring",
				stiffness: 300,
			},
		},
		tap: {
			scale: 0.95,
		},
	};

	return (
		<motion.div
			className="container py-5"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div className="text-center mb-5" variants={titleVariants}>
				<motion.h1
					className="fw-bold"
					style={{
						fontSize: "37px",
						background: "linear-gradient(90deg, #0d6efd, #6610f2, #0d6efd)",
						backgroundSize: "200% 100%",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text",
					}}
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					Platform Overview
				</motion.h1>
				<motion.p
					className="fw-bold text-muted"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					Explore the Intuitive interfaces designed for all city stakeholders.
				</motion.p>
			</motion.div>

			<motion.div
				className="row row-cols-1 row-cols-md-2 g-4"
				variants={containerVariants}
			>
				{PlatformCards.map((card, index) => (
					<motion.div
						key={card.id}
						className="col"
						custom={index}
						variants={cardVariants}
						whileHover="hover"
						initial="hidden"
						animate="visible"
					>
						<motion.div
							className={`${styles.cardContainer} shadow rounded overflow-hidden position-relative`}
							style={{
								height: "550px",
								perspective: "1000px",
							}}
						>
							{/* Animated background effect */}
							<motion.div
								className="position-absolute"
								style={{
									top: "-50%",
									left: "-50%",
									width: "200%",
									height: "200%",
									background: `radial-gradient(circle, ${
										index % 2 === 0
											? "rgba(13,110,253,0.1)"
											: "rgba(102,16,242,0.1)"
									} 0%, transparent 70%)`,
									pointerEvents: "none",
								}}
								animate={{
									rotate: [0, 360],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}
							/>

							{/* Image */}
							<motion.img
								src={card.imageSrc}
								alt={card.imageAlt}
								className="w-100 h-100"
								style={{ objectFit: "cover" }}
								variants={imageVariants}
							/>

							<motion.div
								className={`${styles.cardTitle} position-absolute bottom-0 start-0 w-100 p-3 text-white`}
								variants={titleBarVariants}
								initial="initial"
								whileHover="hover"
							>
								<motion.h3
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: card.delay + 0.5 }}
								>
									{card.title}
								</motion.h3>
							</motion.div>

							{/* Hover Content */}
							<motion.div
								className={`${styles.hoverContent} position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-4`}
								variants={hoverContentVariants}
								initial="initial"
								whileHover="hover"
								style={{
									background: `linear-gradient(135deg, ${
										index % 2 === 0
											? "rgba(13,110,253,0.95)"
											: "rgba(102,16,242,0.95)"
									} 0%, rgba(0,0,0,0.8) 100%)`,
								}}
							>
								<motion.h3 className="mb-3" variants={hoverTextVariants}>
									{card.title}
								</motion.h3>
								<motion.p className="text-center" variants={hoverTextVariants}>
									{card.description}
								</motion.p>
								<motion.button
									className="btn btn-outline-light mt-3"
									variants={buttonVariants}
									whileTap="tap"
								>
									Learn More
								</motion.button>
							</motion.div>

							{/* Corner decoration */}
							<motion.div
								className="position-absolute"
								style={{
									top: "10px",
									right: "10px",
									width: "60px",
									height: "60px",
									borderRadius: "50%",
									background:
										index % 2 === 0
											? "rgba(13,110,253,0.1)"
											: "rgba(102,16,242,0.1)",
									backdropFilter: "blur(10px)",
								}}
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.5,
								}}
							/>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
