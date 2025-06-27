import React from "react";
import { motion } from "framer-motion";
export default function FormSection() {
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
	const buttonVariants = {
		hover: {
			scale: 1.05,
			boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
			transition: {
				duration: 0.3,
				yoyo: Infinity,
			},
		},
		tap: {
			scale: 0.95,
		},
	};
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const inputVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className="container py-5"
			style={{ maxWidth: 590 }}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
		>
			<motion.div
				className="bg-white p-4 p-md-5 rounded-3 shadow-lg"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
			>
				<motion.div className="row">
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<motion.label htmlFor="fullname" className="form-label fw-semibold">
							Full Name *
						</motion.label>
						<motion.input
							type="text"
							id="fullname"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
							required
						/>
					</motion.div>
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<motion.label htmlFor="email" className="form-label fw-semibold">
							Email Address *
						</motion.label>
						<motion.input
							type="email"
							id="email"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
							required
						/>
					</motion.div>
				</motion.div>
				<motion.div className="row">
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<motion.label htmlFor="phone" className="form-label fw-semibold">
							Phone Number
						</motion.label>
						<motion.input
							type="tel"
							id="phone"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
						/>
					</motion.div>
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<motion.label htmlFor="city" className="form-label fw-semibold">
							City / Municipality Name *
						</motion.label>
						<motion.input
							type="text"
							id="city"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
							required
						/>
					</motion.div>
				</motion.div>
				<motion.div className="row">
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<motion.label htmlFor="role" className="form-label fw-semibold">
							Role or Position *
						</motion.label>
						<motion.input
							type="text"
							id="role"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
							required
						/>
					</motion.div>
					<motion.div className="col-md-6 mb-3" variants={inputVariants}>
						<label htmlFor="interest" className="form-label fw-semibold">
							Area of Interest *
						</label>
						<select
							id="interest"
							className="form-select form-select-lg"
							style={{ borderRadius: "10px" }}
							required
						>
							<option value="">Select an option</option>
							<option value="smart-services">Smart City Services</option>
							<option value="analytics">City Analytics</option>
							<option value="citizen-engagement">Citizen Engagement</option>
							<option value="other">Other</option>
						</select>
					</motion.div>
				</motion.div>
				<motion.div className="row">
					<motion.div className="col-12 mb-3" variants={inputVariants}>
						<motion.label htmlFor="datetime" className="form-label fw-semibold">
							Preferred Date and Time
						</motion.label>
						<motion.input
							type="datetime-local"
							id="datetime"
							className="form-control form-control-lg"
							style={{ borderRadius: "10px" }}
						/>
					</motion.div>
				</motion.div>
				<motion.div className="row">
					<motion.div className="col-12 mb-3" variants={inputVariants}>
						<motion.label htmlFor="notes" className="form-label fw-semibold">
							Additional Notes
						</motion.label>
						<textarea
							id="notes"
							rows={3}
							className="form-control form-control-lg"
							placeholder="Anything else you would like to share?"
							style={{ borderRadius: "10px" }}
						/>
					</motion.div>
				</motion.div>
				<motion.button
					variants={buttonVariants}
					whileHover="hover"
					whileTap="tap"
					type="submit"
					className="btn btn-primary rounded-pill w-100 fw-bold btn-lg"
					style={{
						fontSize: 16,
						marginTop: 2,
						background: "linear-gradient(45deg, #007bff, #0056b3)",
					}}
				>
					Request Demo
				</motion.button>
			</motion.div>
		</motion.div>
	);
}
