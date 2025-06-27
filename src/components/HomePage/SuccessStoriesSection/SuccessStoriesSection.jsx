import React from "react";
import { motion } from "framer-motion";

export default function SuccessStoriesSection() {
	const cardsItems = [
		{
			id: 1,
			name: "Yousef Adel",
			description: "The best app I have ever used, it is very useful and easy to use and it is very fast and responsive.",
			imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			role: "City Mayor, Westport"
		},
		{
			id: 2,
			name: "Mohanned Ashraf",
			description: "The best app I have ever used, it is very useful and easy to use and it is very fast and responsive.",
			imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			role: "Resident, Eastlake"
		},
		{
			id: 3,
			name: "Mahmoud Fathy",
			description: "The best app I have ever used, it is very useful and easy to use and it is very fast and responsive.",
			imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			role: "Service Provider, GreenScape"
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 }
		}
	};

	const cardVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: "easeOut" }
		},
		hover: {
			y: -10,
			boxShadow: "0 10px 30px rgba(60,72,88,.15)",
			transition: { duration: 0.3 }
		}
	};

	const imageVariants = {
		hover: {
			scale: 1.1,
			rotate: 5,
			transition: { duration: 0.3 }
		}
	};

	return (
		<motion.div 
			className="container py-5"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<motion.div 
				className="text-center mb-5"
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<motion.h1 
					className="fw-bold" 
					style={{ 
						fontSize: "37px",
						background: "linear-gradient(90deg, #0d6efd, #198754, #0d6efd)",
						backgroundSize: "200% 100%",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						backgroundClip: "text"
					}}
					animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
					transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
				>
					Success Stories
				</motion.h1>
				<motion.p 
					className="fw-bold text-muted"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					Hear from cities, residents, and service providers who are transforming urban <br /> management with Citio.
				</motion.p>
			</motion.div>

			<motion.div 
				className="row justify-content-center g-4 mb-3"
				variants={containerVariants}
			>
				{cardsItems.map((item, index) => (
					<motion.div 
						key={item.id} 
						className="col-lg-4 d-flex" 
						style={{ minWidth: 340, maxWidth: 400 }}
						variants={cardVariants}
						whileHover="hover"
					>
						<motion.div
							className="bg-white"
							style={{
								borderRadius: 16,
								boxShadow: "0 2px 16px 0 rgba(60,72,88,.08)",
								border: "1px solid #f0f0f0",
								padding: "28px 26px",
								width: "100%",
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								height: "100%",
								position: "relative",
								overflow: "hidden"
							}}
						>

							<div className="d-flex align-items-center mb-3">
								<motion.img
									src={item.imageSrc}
									alt={item.name}
									style={{
										width: 48,
										height: 48,
										borderRadius: "50%",
										marginRight: 16,
										border: "2px solid #eee",
										objectFit: "cover"
									}}
									variants={imageVariants}
								/>
								<div className="d-flex flex-column">
									<span style={{ fontWeight: 700, fontSize: "17.5px", color: "#1a2138", lineHeight: 1 }}>{item.name}</span>
									<span style={{ color: "#8191aa", fontSize: 14 }}>{item.role}</span>
								</div>
							</div>
							
							<motion.div 
								style={{ fontSize: 15.5, fontWeight: 500, lineHeight: 1.55, textAlign: "left", fontStyle: "italic", color: "#1a2138" }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: index * 0.2 + 0.7 }}
							>
								"{item.description}"
							</motion.div>

							{/* Rating stars animation */}
							<motion.div
								className="mt-3 d-flex gap-1"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: index * 0.2 + 0.9 }}
							>
								{[...Array(5)].map((_, i) => (
									<motion.i
										key={i}
										className="fas fa-star text-warning"
										initial={{ scale: 0, rotate: -180 }}
										animate={{ scale: 1, rotate: 0 }}
										transition={{ 
											delay: index * 0.2 + 1 + i * 0.1,
											type: "spring",
											stiffness: 300
										}}
									/>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}