import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStore,
	faTools,
	faAmbulance,
	faLandmark,
	faNewspaper,
	faBell,
} from "@fortawesome/free-solid-svg-icons";

const AboutAppSection = () => {
	const features = [
		{
			icon: faStore,
			title: "City Providers & Offers",
			description:
				"Browse providers, see trending products, view ratings, and place orders with multiple payment options.",
		},
		{
			icon: faTools,
			title: "Report City Issues",
			description:
				"Submit a report with photos and descriptions. Share it on city's social feed and track status updates.",
		},
		{
			icon: faAmbulance,
			title: "Emergency Services",
			description:
				"Instantly notify Fire Department, Police or Medical help with one click.",
		},
		{
			icon: faLandmark,
			title: "Government Services",
			description:
				"View and apply for government services. Track requests and complete payments securely.",
		},
		{
			icon: faNewspaper,
			title: "Social Media Feed",
			description:
				"Stay updated with the city's latest news, alerts, and social updates. Like, comment and share posts.",
		},
		{
			icon: faBell,
			title: "Notifications Center",
			description:
				"Receive categorized alerts for updates, offers, and emergencies directly from all city services.",
		},
	];

	return (
		<section className="py-5 bg-light">
			<div className="container">
				{/* About the App Section */}
				<motion.div
					className="text-center mb-5"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="display-5 fw-bold mb-4" style={{ color: "#129990" }}>
						What is Citio Mobile App?
					</h2>
					<p className="lead mx-auto" style={{ maxWidth: "700px" }}>
						Our mobile application empowers residents to engage with their city
						services efficiently. Whether it's reporting issues, accessing
						government services, or shopping from local providers, the app is
						your one-stop digital solution.
					</p>
				</motion.div>

				{/* Resident Features Grid */}
				<div className="row g-4">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="col-md-6 col-lg-4"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.05,
							}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="h-100 p-4 rounded-3 bg-white shadow-sm d-flex flex-column align-items-center text-center">
								<div
									className="icon-wrapper mb-4 rounded-circle d-flex align-items-center justify-content-center"
									style={{
										width: "70px",
										height: "70px",
										background: "rgba(18, 153, 144, 0.1)",
										color: "#129990",
									}}
								>
									<FontAwesomeIcon icon={feature.icon} size="lg" />
								</div>
								<h3 className="h5 fw-bold mb-3" style={{ color: "#129990" }}>
									{feature.title}
								</h3>
								<p className="mb-0">{feature.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutAppSection;
