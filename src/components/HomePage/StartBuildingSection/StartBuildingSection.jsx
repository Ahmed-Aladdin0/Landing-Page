import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function StartBuildingSection() {
	const navigate = useNavigate();

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 }
		}
	};

	const buttonVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
			transition: { duration: 0.3 }
		},
		tap: { scale: 0.95 }
	};

	return (
		<motion.div
			style={{
				background: "linear-gradient(90deg, #1ec9a7 0%, #2563eb 100%)",
				borderRadius: 18,
				boxShadow: "0 2px 24px 0 rgba(60,72,88,.10)",
				margin: "52px auto 0 auto",
				maxWidth: 950,
				padding: "48px 32px",
				textAlign: "center",
				position: "relative",
				overflow: "hidden"
			}}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
		>
			{/* Animated background shapes */}
			<motion.div
				style={{
					position: "absolute",
					top: "-50%",
					left: "-25%",
					width: "50%",
					height: "200%",
					background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
					borderRadius: "50%"
				}}
				animate={{
					rotate: [0, 360],
					scale: [1, 1.2, 1]
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "linear"
				}}
			/>
			
			<motion.div
				style={{
					position: "absolute",
					bottom: "-50%",
					right: "-25%",
					width: "50%",
					height: "200%",
					background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
					borderRadius: "50%"
				}}
				animate={{
					rotate: [360, 0],
					scale: [1.2, 1, 1.2]
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "linear"
				}}
			/>

			<motion.h2
				className="fw-bold mb-4"
				style={{ 
					fontSize: "2.1rem", 
					color: "#fff", 
					lineHeight: 1.18,
					position: "relative",
					zIndex: 1
				}}
				variants={itemVariants}
			>
				<motion.span
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
					}}
					style={{
						background: "linear-gradient(90deg, #fff, #f0f0f0, #fff)",
						backgroundSize: "200% 100%",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text"
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear"
					}}
				>
					Start building a smarter city with Citio
				</motion.span>
			</motion.h2>

			<motion.p
				className="lead"
				style={{
					color: "rgba(255,255,255,0.94)",
					fontWeight: 500,
					marginBottom: 36,
					position: "relative",
					zIndex: 1
				}}
				variants={itemVariants}
			>
				Join the growing network of smart cities leveraging technology to <br />
				improve urban life for everyone.
			</motion.p>

			<motion.div 
				className="d-flex gap-3 justify-content-center"
				variants={itemVariants}
				style={{ position: "relative", zIndex: 1 }}
			>
				<motion.button
					className="btn fw-bold px-md-4 px-3 py-2"
					style={{
						background: "#fff",
						color: "#2563eb",
						borderRadius: 999,
						minWidth: 130,
						fontSize: 16,
						boxShadow: "0 2px 10px 0 rgba(37,99,235,0.05)",
						position: "relative",
						overflow: "hidden"
					}}
					onClick={() => navigate("/demo")}
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
				>
					<motion.span
						style={{
							position: "absolute",
							top: 0,
							left: "-100%",
							width: "100%",
							height: "100%",
							background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)",
						}}
						animate={{
							left: ["100%", "-100%"]
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					Book a Demo
				</motion.button>

				<motion.button
					className="btn fw-bold px-md-4 px-3 py-2"
					style={{
						background: "rgba(255,255,255,0.16)",
						color: "#fff",
						border: "1.5px solid #fff",
						borderRadius: 999,
						minWidth: 130,
						fontSize: 16,
						backdropFilter: "blur(10px)"
					}}
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
				>
					Learn More
				</motion.button>
			</motion.div>

			{/* Floating particles */}
			{[...Array(5)].map((_, i) => (
				<motion.div
					key={i}
					style={{
						position: "absolute",
						width: "6px",
						height: "6px",
						background: "rgba(255,255,255,0.5)",
						borderRadius: "50%",
						left: `${20 + i * 15}%`,
						top: "20%"
					}}
					animate={{
						y: [0, -30, 0],
						opacity: [0.5, 1, 0.5]
					}}
					transition={{
						duration: 3 + i * 0.5,
						repeat: Infinity,
						delay: i * 0.3,
						ease: "easeInOut"
					}}
				/>
			))}
		</motion.div>
	);
}