import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RequestDemoSection({ activeButton }) {
    const navigate = useNavigate();
    
    const getDemoContent = () => {
        switch (activeButton) {
            case "For Residents":
                return {
                    title: "Experience Citio as a Resident",
                    description: "See how easy it is to report issues, connect with your community, and access local services.",
                    buttonText: "Try Demo"
                };
            case "For Government":
                return {
                    title: "Transform Your City Operations",
                    description: "Discover how Citio can streamline your city's services and improve citizen engagement.",
                    buttonText: "Request Demo"
                };
            case "For Providers":
                return {
                    title: "Grow Your Business with Citio",
                    description: "Learn how to reach more customers and manage your services efficiently on our platform.",
                    buttonText: "Request Demo"
                };
            default:
                return {
                    title: "See How Citio Can Help Your City",
                    description: "Join the growing network of smart cities using Citio to transform urban management",
                    buttonText: "Request a Demo"
                };
        }
    };

    const demoContent = getDemoContent();

	const sectionVariants = {
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
	return (
		<motion.div
			style={{
				background: "linear-gradient(90deg,#129990 0%,rgb(15, 72, 193) 100%)",
				borderRadius: 18,
				boxShadow: "0 2px 24px 0 rgba(60,72,88,.10)",
				margin: "52px auto 0 auto",
				maxWidth: 1200,
				padding: "48px 32px",
				textAlign: "center",
			}}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			transition= {{ duration: 1.4, ease: "easeOut" }}
		>
			<motion.h2
				className="fw-bold mb-4"
				style={{ fontSize: "2.1rem", color: "#fff", lineHeight: 1.18 }}
				variants={itemVariants}
			>
				{demoContent.title}
			</motion.h2>
			<motion.p
				className="lead"
				style={{
					color: "rgba(255,255,255,0.94)",
					fontWeight: 500,
					marginBottom: 36,
				}}
				variants={itemVariants}
			>
				{demoContent.description}
			</motion.p>
			<motion.div className="d-flex gap-3 justify-content-center" variants={itemVariants}>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className="btn fw-bold px-md-4 px-3 py-2"
					style={{
						background: "#fff",
						color: "#2563eb",
						borderRadius: 999,
						minWidth: 130,
						fontSize: 16,
						boxShadow: "0 2px 10px 0 rgba(37,99,235,0.05)",
					}}
                    onClick={()=>navigate("/demo")}
				>
					{demoContent.buttonText}
				</motion.button>
			</motion.div>
		</motion.div>
	);
}
