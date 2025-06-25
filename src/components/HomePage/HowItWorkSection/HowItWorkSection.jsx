import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
	faUser, 
	faBriefcase, 
	faSync, 
	faUsers,
	faArrowRight 
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorkSection() {
	const steps = [
		{
			id: 1,
			icon: faUser,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Resident Reports or Browses",
			description: "Citizens report issues, browse services, or access government resources via web or mobile app."
		},
		{
			id: 2,
			icon: faBriefcase,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Providers or Officials Respond",
			description: "Relevant city departments or providers receive alerts and respond via their dashboard."
		},
		{
			id: 3,
			icon: faSync,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Updates & Feedback",
			description: "Progress updates are provided in real time, and citizens can provide feedback."
		},
		{
			id: 4,
			icon: faUsers,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Community Engagement",
			description: "The community engages in city discussions, votes, and shares content with civic participants."
		}
	];

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

	const titleVariants = {
		hidden: { y: -30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	const stepVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		}
	};

	const iconVariants = {
		hidden: { rotate: -180, scale: 0 },
		visible: {
			rotate: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20
			}
		},
		hover: {
			rotate: 360,
			scale: 1.1,
			transition: {
				duration: 0.8,
				ease: "easeInOut"
			}
		}
	};

	const arrowVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		},
		animate: {
			x: [0, 10, 0],
			transition: {
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}
	};

	const lineVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: {
			pathLength: 1,
			opacity: 1,
			transition: {
				duration: 2,
				ease: "easeInOut"
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
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear"
					}}
				>
					How It Works
				</motion.h1>
				<motion.p 
					className="fw-bold text-muted"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.6 }}
				>
					A seamless process connecting all city stakeholders in one
					integrated <br />
					ecosystem
				</motion.p>
			</motion.div>

			<motion.div 
				className="row"
				variants={containerVariants}
			>
				<div className="row text-start justify-content-center position-relative">
					{/* Connecting line SVG */}
					<svg 
						className="position-absolute d-none d-lg-block" 
						style={{ 
							top: "60px", 
							left: "0", 
							right: "0", 
							height: "10px", 
							zIndex: 0,
							width: "100%"
						}}
					>
						<motion.line
							x1="15%"
							y1="5"
							x2="85%"
							y2="5"
							stroke="#0d6efd"
							strokeWidth="2"
							strokeDasharray="5,5"
							variants={lineVariants}
						/>
					</svg>

					{steps.map((step, index) => (
						<React.Fragment key={step.id}>
							<motion.div 
								className="col-12 col-md-6 col-lg-3 mb-4 position-relative"
								variants={stepVariants}
								style={{ zIndex: 1 }}
							>
								<div className="text-center px-3">
									<motion.div
										className={`${step.iconBg} rounded-circle d-inline-flex justify-content-center align-items-center mb-3 position-relative`}
										style={{ 
											width: "60px", 
											height: "60px",
											cursor: "pointer"
										}}
										variants={iconVariants}
										whileHover="hover"
									>
										<FontAwesomeIcon
											icon={step.icon}
											className={`${step.iconColor} fs-4`}
										/>
										
										{/* Pulse effect */}
										<motion.div
											className="position-absolute"
											style={{
												width: "60px",
												height: "60px",
												border: `2px solid ${step.iconColor.includes("primary") ? "#0d6efd" : "#198754"}`,
												borderRadius: "50%",
												top: "-2px",
												left: "-2px"
											}}
											animate={{
												scale: [1, 1.3, 1],
												opacity: [0.5, 0, 0.5]
											}}
											transition={{
												duration: 2,
												repeat: Infinity,
												delay: index * 0.2
											}}
										/>
									</motion.div>
									
									<motion.h6 
										className="fw-bold"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										{step.title}
									</motion.h6>
									
									<motion.p 
										className="text-muted small"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										{step.description}
									</motion.p>
								</div>
							</motion.div>

							{/* Arrow between steps */}
							{index < steps.length - 1 && (
								<motion.div 
									className="col-auto d-none d-lg-flex align-items-center justify-content-center position-absolute"
									style={{ 
										top: "45px",
										left: `${25 * (index + 1) - 5}%`,
										transform: "translateX(-50%)",
										zIndex: 2
									}}
									variants={arrowVariants}
									animate="animate"
								>
									<FontAwesomeIcon 
										icon={faArrowRight} 
										className="text-primary fs-5"
										style={{ 
											filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
										}}
									/>
								</motion.div>
							)}
						</React.Fragment>
					))}

					{/* Mobile vertical flow indicator */}
					<div className="d-lg-none position-absolute" style={{ left: "50%", top: "0", bottom: "0", transform: "translateX(-50%)" }}>
						<motion.div
							style={{
								width: "2px",
								height: "100%",
								background: "linear-gradient(180deg, #0d6efd 0%, #198754 100%)",
								opacity: 0.3
							}}
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
						/>
					</div>
				</div>
			</motion.div>

			{/* Background decoration */}
			<motion.div
				className="position-absolute"
				style={{
					top: "50%",
					left: "-100px",
					width: "200px",
					height: "200px",
					background: "radial-gradient(circle, rgba(13,110,253,0.1) 0%, transparent 70%)",
					borderRadius: "50%",
					filter: "blur(40px)",
					zIndex: -1
				}}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3]
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut"
				}}
			/>
		</motion.div>
	);
}