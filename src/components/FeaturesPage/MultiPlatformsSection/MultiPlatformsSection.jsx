import React from "react";
import { motion } from "framer-motion";

export default function MultiPlatformsSection({ activeButton }) {
	const getPlatformItems = () => {
		switch (activeButton) {
			case "For Residents":
				return [
					{
						id: 1,
						title: "Mobile App",
						description:
							"Resident-focused interface for on-the-go access to city services and community features.",
						imgSrc:
							"https://placehold.co/600x400/eef6ff/0d6efd?text=Mobile+App+Interface",
					},
					{
						id: 2,
						title: "Web Portal",
						description:
							"Full-featured web interface for desktop access to all resident services and community features.",
						imgSrc:
							"https://placehold.co/600x400/e6f7ef/0d6efd?text=Web+Portal+Interface",
					},
					{
						id: 3,
						title: "Smart Notifications",
						description:
							"Real-time alerts and updates about city services, community events, and issue resolution.",
						imgSrc: "https://placehold.co/600x400/f8f9fa/0d6efd?text=Notifications+Center",
					},
				];
			case "For Government":
				return [
					{
						id: 1,
						title: "Admin Dashboard",
						description:
							"Comprehensive control center for city officials to manage operations and monitor performance.",
						imgSrc:
							"https://placehold.co/600x400/eef6ff/0d6efd?text=Admin+Dashboard",
					},
					{
						id: 2,
						title: "Department Portal",
						description:
							"Specialized interfaces for different city departments to handle their specific responsibilities.",
						imgSrc:
							"https://placehold.co/600x400/e6f7ef/0d6efd?text=Department+Portal",
					},
					{
						id: 3,
						title: "Analytics Suite",
						description:
							"Advanced reporting and analytics tools for data-driven decision making and performance tracking.",
						imgSrc: "https://placehold.co/600x400/f8f9fa/0d6efd?text=Analytics+Suite",
					},
				];
			case "For Providers":
				return [
					{
						id: 1,
						title: "Provider Dashboard",
						description:
							"Business management interface for service providers to manage offerings and track orders.",
						imgSrc:
							"https://placehold.co/600x400/eef6ff/0d6efd?text=Provider+Dashboard",
					},
					{
						id: 2,
						title: "Mobile Business App",
						description:
							"Mobile interface for providers to manage services, process orders, and communicate with customers.",
						imgSrc:
							"https://placehold.co/600x400/e6f7ef/0d6efd?text=Business+Mobile+App",
					},
					{
						id: 3,
						title: "Business Analytics",
						description:
							"Comprehensive business intelligence tools for performance tracking and customer insights.",
						imgSrc: "https://placehold.co/600x400/f8f9fa/0d6efd?text=Business+Analytics",
					},
				];
			default:
				return [];
		}
	};

	const platformItems = getPlatformItems();

	return (
		<motion.div
			className="container py-5"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<motion.div className="text-center mb-5">
				<motion.h1 className="fw-bold" style={{ fontSize: "37px", color: "#129990" }} >
					One Platform, Multiple Interfaces
				</motion.h1>
				<motion.p className="fw-bold text-muted">
					Tailored experiences for {activeButton.toLowerCase()}, accessible from any device.
				</motion.p>
			</motion.div>
			<motion.div className="row justify-content-center g-4 mb-3">
				{platformItems.map((item, i) => (
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
								boxShadow: "0 2px 16px 0 rgba(60,72,88,.08)",
								border: "1px solid #f0f0f0",
								padding: "28px 26px",
								width: "100%",
								height: "100%",
							}}
              whileHover={{ scale: 1.05 , boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
						
						>
							{/* Image  */}
							<motion.div style={{ width: "100%", marginBottom: 20 }}>
								<img
									src={item.imgSrc}
									alt={item.title}
									style={{
										width: "100%",
										height: "200px",
										objectFit: "cover",
									}}
								/>
							</motion.div>

							{/* Title */}
							<motion.h5 style={{ fontWeight: 600, marginBottom: 14 }}>
								{item.title}
							</motion.h5>

							{/* Description */}
							<motion.p
								style={{ fontSize: 15, color: "#666", marginBottom: 20 }}
							>
								{item.description}
							</motion.p>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
