import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="py-5 bg-white" style={{ minHeight: "80vh" }}>
			<div className="container py-5">
				<div className="row align-items-center">
					{/* Main Content Column */}
					<div className="col-lg-7 mb-5 mb-lg-0">
						<motion.div
							initial={{ opacity: 0, x: -70 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1
								className="display-4 fw-bold mb-4"
								style={{ color: "#129990" }}
							>
								About Citio
							</h1>

							<p className="lead text-muted mb-5" style={{ lineHeight: "1.8" }}>
								We are transforming cities into smarter, more connected
								communities. Our system simplifies how residents interact with
								their local services — from reporting issues to shopping from
								trusted providers, all from one app.
							</p>

							<div className="bg-light p-4 p-lg-5 rounded-3">
								<h2 className="h3 fw-bold mb-4" style={{ color: "#129990" }}>
									Our Vision
								</h2>
								<p className="mb-4 text-dark" style={{ lineHeight: "1.8" }}>
									To create smarter cities that serve their residents better —
									combining technology, transparency, and community in one
									powerful platform.
								</p>

								<div className="d-flex flex-column gap-3">
									<div>
										<h3 className="h5 fw-bold mb-2 text-dark">Clear Vision</h3>
										<p className="mb-0 text-muted">
											Transparent city management
										</p>
									</div>
									<div>
										<h3 className="h5 fw-bold mb-2 text-dark">
											Smart Solutions
										</h3>
										<p className="mb-0 text-muted">
											Innovative technology integration
										</p>
									</div>
									<div>
										<h3 className="h5 fw-bold mb-2 text-dark">
											Community Focus
										</h3>
										<p className="mb-0 text-muted">
											Resident-centered services
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Visual Column */}
					<div className="col-lg-5">
						<motion.div
							initial={{ opacity: 0, x: 70 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="h-100 d-flex align-items-center"
						>
							<div
								className="w-100 rounded-4"
								style={{
									height: "500px",
									background:
										"#129990",
									border: "1px solid rgba(18,153,144,0.1)",
								}}
							>
								<div className="h-100 d-flex align-items-center justify-content-center text-muted">
									[City Illustration/Image]
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
