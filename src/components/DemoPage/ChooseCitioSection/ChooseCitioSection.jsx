import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBuilding,
	faUsers,
	faCheckCircle,
	faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function ChooseCitioSection() {
	const featureItems = [
		{
			id: 1,
			icon: faBuilding,
			title: "Centralized City Services",
			description: "All your city services managed from one powerful platform",
		},
		{
			id: 2,
			icon: faUsers,
			title: "Engaged Residents",
			description: "Better connection between citizens and local government",
		},
		{
			id: 3,
			icon: faCheckCircle,
			title: "Efficient Resolution",
			description: "Quick and effective response to community needs",
		},
		{
			id: 4,
			icon: faChartLine,
			title: "Real-time Dashboards",
			description: "Data-driven insights for better decision making",
		},
	];
	const sectionVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const inputVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<motion.div
			className="py-5"
			style={{
				background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
			}}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.div className="container pt-5" variants={containerVariants}>
				<motion.div className="text-center mb-5">
					<motion.h1
						className="fw-bold mb-4"
						style={{
							fontSize: "37px",
							background: "linear-gradient(135deg, #007bff, #6610f2)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
						variants={inputVariants}
					>
						Why Cities Choose Citio
					</motion.h1>
				</motion.div>
				<motion.div className="row justify-content-center g-4 mb-5">
					{featureItems.map((item) => (
						<motion.div key={item.id} className="col-lg-3 col-md-6 d-flex" whileHover={{ scale: 1.05, y: -10 }}>
							<motion.div
								className="bg-white text-center shadow-lg h-100 w-100 position-relative overflow-hidden"
								style={{
									borderRadius: "20px",
									padding: "35px 25px",
									transition: "all 0.3s ease",
									border: "1px solid rgba(0,0,0,0.05)",
								}}
								variants={inputVariants}
							>
								<motion.div className="position-relative">
									<motion.div
										className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
										style={{
											width: "70px",
											height: "70px",
											background: "linear-gradient(135deg, #007bff, #6610f2)",
											color: "white",
											fontSize: "24px",
										}}
									>
										<FontAwesomeIcon icon={item.icon} />
									</motion.div>
									<motion.h3
										className="fw-bold mb-3"
										style={{
											fontSize: "20px",
											color: "#1a2138",
										}}
									>
										{item.title}
									</motion.h3>
									<motion.p
										className="text-muted mb-0"
										style={{
											fontSize: "15px",
											lineHeight: 1.6,
										}}
									>
										{item.description}
									</motion.p>
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
