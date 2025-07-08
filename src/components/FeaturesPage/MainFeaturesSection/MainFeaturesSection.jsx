import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullhorn,
	faComments,
	faStore,
	faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function MainFeaturesSection() {
	const featuresItems = [
		{
			id: 1,
			title: "Report Issues Instantly",
			description:
				"Citizens can easily report potholes, broken lights, or other issues via the mobile app.",
			icon: faBullhorn,
			features: [
				"Real-time issue tracking",
				"Photo attachments",
				"Location mapping",
			],
			bgColor: "#eef2ff",
		},
		{
			id: 2,
			title: "City Social Feed",
			description:
				"Residents can share updates, like and comment, and engage in local conversations.",
			icon: faComments,
			features: [
				"Community discussions",
				"Event announcements",
				"Public notices",
			],
			bgColor: "#e6f7ef",
		},
		{
			id: 3,
			title: "Browse Local Services",
			description:
				"Discover nearby service providers, browse their offerings, and place orders.",
			icon: faStore,
			features: ["Service directory", "Online booking", "Secure payments"],
			bgColor: "#eef2ff",
		},
	];

	return (
		<motion.div
			className="container py-5"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<motion.div className="row justify-content-center g-4 mb-3">
				{featuresItems.map((item, i) => (
					<motion.div
						key={item.id}
						className="col-lg-4 d-flex"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.4 }}
					>
						<motion.div
							className="bg-white"
							style={{
								borderRadius: 16,
								boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
								border: "1px solid #f0f0f0",
								padding: "30px 26px",
								width: "100%",
								height: "100%",
								transition: "all 0.3s ease",
							}}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							}}
						>
							{/* Icon Circle */}
							<motion.div
								style={{
									width: 60,
									height: 60,
									borderRadius: "50%",
									backgroundColor: item.bgColor,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: 24,
									marginBottom: 20,
								}}
							>
								<motion.span
									initial={{ rotate: 0 }}
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.8, ease: "easeOut" }}
								>
									<FontAwesomeIcon icon={item.icon} size="lg" color="#129990" />
								</motion.span>
							</motion.div>

							{/* Title */}
							<h5
								style={{
									fontWeight: 700,
									marginBottom: 14,
									color: "#333",
									fontSize: "1.1rem",
								}}
							>
								{item.title}
							</h5>

							{/* Description */}
							<p
								style={{
									fontSize: 15,
									color: "#555",
									marginBottom: 20,
									lineHeight: 1.6,
								}}
							>
								{item.description}
							</p>

							{/* Feature List */}
							<motion.div>
								{item.features.map((feature, index) => (
									<motion.div
										key={index}
										className="d-flex align-items-center mb-2"
									>
										<FontAwesomeIcon
											icon={faCheckCircle}
											style={{
												color: "#10b981",
												marginRight: 10,
												fontSize: 16,
											}}
										/>
										<span style={{ fontSize: 14, color: "#444" }}>
											{feature}
										</span>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
