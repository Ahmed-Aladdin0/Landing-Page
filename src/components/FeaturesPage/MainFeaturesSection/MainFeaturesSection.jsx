import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBullhorn,
	faComments,
	faStore,
	faCheckCircle,
	faChartLine,
	faCogs,
	faUsers,
	faShieldAlt,
	faHandshake,
	faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function MainFeaturesSection({ activeButton }) {
	const getFeaturesItems = () => {
		switch (activeButton) {
			case "For Residents":
				return [
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
			case "For Government":
				return [
					{
						id: 1,
						title: "Analytics Dashboard",
						description:
							"Comprehensive insights into city operations, citizen engagement, and service performance.",
						icon: faChartLine,
						features: [
							"Real-time metrics",
							"Performance tracking",
							"Data visualization",
						],
						bgColor: "#eef2ff",
					},
					{
						id: 2,
						title: "Issue Management",
						description:
							"Efficiently track, assign, and resolve citizen-reported issues across departments.",
						icon: faCogs,
						features: [
							"Automated routing",
							"Status updates",
							"Priority management",
						],
						bgColor: "#e6f7ef",
					},
					{
						id: 3,
						title: "Citizen Engagement",
						description:
							"Monitor and participate in community discussions, announcements, and public feedback.",
						icon: faUsers,
						features: ["Community monitoring", "Response management", "Engagement metrics"],
						bgColor: "#eef2ff",
					},
				];
			case "For Providers":
				return [
					{
						id: 1,
						title: "Service Management",
						description:
							"Manage your service offerings, pricing, and availability through an intuitive dashboard.",
						icon: faCogs,
						features: [
							"Service catalog",
							"Pricing management",
							"Availability control",
						],
						bgColor: "#eef2ff",
					},
					{
						id: 2,
						title: "Order Processing",
						description:
							"Receive and manage service requests from residents with automated workflows.",
						icon: faHandshake,
						features: [
							"Order notifications",
							"Status updates",
							"Payment processing",
						],
						bgColor: "#e6f7ef",
					},
					{
						id: 3,
						title: "Business Analytics",
						description:
							"Track your business performance, customer satisfaction, and revenue metrics.",
						icon: faChartLine,
						features: ["Performance metrics", "Customer insights", "Revenue tracking"],
						bgColor: "#eef2ff",
					},
				];
			default:
				return [];
		}
	};

	const featuresItems = getFeaturesItems();

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
