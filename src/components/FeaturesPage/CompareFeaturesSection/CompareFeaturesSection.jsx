import React from "react";
import { motion } from "framer-motion";
import styles from "./CompareFeaturesSection.module.css";

export default function CompareFeaturesSection({ activeButton }) {
	const getComparisonData = () => {
		switch (activeButton) {
			case "For Residents":
				return {
					columns: [
						{ id: "feature", label: "Feature" },
						{ id: "basic", label: "Basic" },
						{ id: "premium", label: "Premium" },
						{ id: "enterprise", label: "Enterprise" },
					],
					rows: [
						{
							id: 1,
							feature: "Issue Reporting",
							basic: true,
							premium: true,
							enterprise: true,
						},
						{
							id: 2,
							feature: "Community Feed",
							basic: true,
							premium: true,
							enterprise: true,
						},
						{
							id: 3,
							feature: "Service Booking",
							basic: false,
							premium: true,
							enterprise: true,
						},
						{
							id: 4,
							feature: "Priority Support",
							basic: false,
							premium: false,
							enterprise: true,
						},
					],
				};
			case "For Government":
				return {
					columns: [
						{ id: "feature", label: "Feature" },
						{ id: "starter", label: "Starter" },
						{ id: "professional", label: "Professional" },
						{ id: "enterprise", label: "Enterprise" },
					],
					rows: [
						{
							id: 1,
							feature: "Issue Management",
							starter: true,
							professional: true,
							enterprise: true,
						},
						{
							id: 2,
							feature: "Analytics Dashboard",
							starter: false,
							professional: true,
							enterprise: true,
						},
						{
							id: 3,
							feature: "Multi-Department",
							starter: false,
							professional: false,
							enterprise: true,
						},
						{
							id: 4,
							feature: "API Integration",
							starter: false,
							professional: false,
							enterprise: true,
						},
					],
				};
			case "For Providers":
				return {
					columns: [
						{ id: "feature", label: "Feature" },
						{ id: "basic", label: "Basic" },
						{ id: "professional", label: "Professional" },
						{ id: "enterprise", label: "Enterprise" },
					],
					rows: [
						{
							id: 1,
							feature: "Service Listing",
							basic: true,
							professional: true,
							enterprise: true,
						},
						{
							id: 2,
							feature: "Order Management",
							basic: true,
							professional: true,
							enterprise: true,
						},
						{
							id: 3,
							feature: "Business Analytics",
							basic: false,
							professional: true,
							enterprise: true,
						},
						{
							id: 4,
							feature: "Advanced Marketing",
							basic: false,
							professional: false,
							enterprise: true,
						},
					],
				};
			default:
				return { columns: [], rows: [] };
		}
	};

	const { columns, rows } = getComparisonData();

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className="container py-5"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.8, ease: "easeInOut" }}
		>
			<motion.div className="text-center mb-5">
				<motion.h1 className="fw-bold" style={{ fontSize: "37px" ,color:"#129990"}}>
					Compare Features by Plan
				</motion.h1>
				<motion.p className="fw-bold text-muted">
					See how Citio adapts to different {activeButton.toLowerCase()} needs.
				</motion.p>
			</motion.div>

			{/* Features Table */}
			<motion.div className={`${styles["table-responsive"]}`} >
				<motion.table
					className="table table-hover"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
				>
					<motion.thead whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}>
						<motion.tr variants={itemVariants}>
							{columns.map((column) => (
								<motion.th
									key={column.id}
									scope="col"
									className={
										column.id === "feature" ? "text-start" : "text-center"
									}
									style={{
										fontSize: 18,
										fontWeight: 600,
										color: "#333",
										padding: "16px 20px",
										borderBottom: "1px solid #dee2e6",
									}}
								>
									{column.label}
								</motion.th>
							))}
						</motion.tr>
					</motion.thead>
					<motion.tbody>
						{rows.map((row) => (
							<motion.tr key={row.id} whileHover ={{ scale: 1.02, transition: { duration: 0.2 }, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}} >
								<motion.td
									variants={itemVariants}
									
									className="text-start"
									style={{
										fontSize: 16,
										padding: "16px 20px",
										color: "#444",
										fontWeight: 500,
										borderBottom: "1px solid #dee2e6",
									}}
								>
									{row.feature}
								</motion.td>
								{columns.slice(1).map((column) => (
									<motion.td
										key={column.id}
										variants={itemVariants}
										className="text-center"
										style={{
											fontSize: 18,
											padding: "16px 20px",
											color: "#14d81a",
											borderBottom: "1px solid #dee2e6",
										}}
									>
										{row[column.id] ? "✓" : "-"}
									</motion.td>
								))}
							</motion.tr>
						))}
					</motion.tbody>
				</motion.table>
			</motion.div>
		</motion.div>
	);
}
