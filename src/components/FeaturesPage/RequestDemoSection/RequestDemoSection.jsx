import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function RequestDemoSection() {
    const navigate = useNavigate();
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
				background: "linear-gradient(90deg,rgb(41, 102, 232) 0%,rgb(7, 48, 135) 100%)",
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
				See How Citio Can Help Your City
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
				Join the growing network of smart cities using Citio to transform urban <br /> management
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
					Request a Demo
				</motion.button>
			</motion.div>
		</motion.div>
	);
}
