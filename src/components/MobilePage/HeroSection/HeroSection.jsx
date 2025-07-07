import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import screenImg from "../../../assets/screen.PNG";

const MobileHeroSection = () => {
	return (
		<section className="py-5 bg-white" style={{ minHeight: "90vh" }}>
			<div className="container py-5">
				<div className="row align-items-center">
					{/* Text Content */}
					<div className="col-lg-6 mb-5 mb-lg-0">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div className="d-flex align-items-center mb-4">
								<FontAwesomeIcon
									icon={faMobileScreen}
									size="lg"
									className="me-3"
									style={{ color: "#129990" }}
								/>
								<span
									className="badge rounded-pill px-3 py-2"
									style={{ backgroundColor: "#f0f8f7", color: "#129990" }}
								>
									MOBILE APP
								</span>
							</div>

							<h1 className="display-4 fw-bold mb-4 text-dark">
								Your Smart Gateway to
								<span style={{ color: "#129990" }}> City Services</span>
							</h1>

							<p className="lead text-muted mb-5" style={{ lineHeight: "1.8" }}>
								Access city services, providers, emergency help, and government
								features all from one place.
							</p>

							<motion.button
								whileHover={{
									y: -3,
                                    scale: 1.05,
									boxShadow: "0 10px 25px rgba(18,153,144,0.25)",
								}}
								whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
								onClick={() => window.open("https://download1584.mediafire.com/jjp0qhyqnz6gjHurrmQBRI1KjO2m55xb-t5Kcz1lIsZLAJJdXv5Msx1qiRzFQpry-XtQ-eOPFSyfTxaP7sVrDIYfVoMplIK8nI_tBhZ7cFJpFpIQHE5EP_vAFh_KaqyhzBB2RR98rC5IV8wTGInzURRzX6ktrNfqKP2U3wGM5-rYtgQ/t45trxcanitrt27/base.apk", "_blank")}
								className="btn px-4 py-3 rounded-4 d-flex align-items-center shadow-sm"
								style={{
									backgroundColor: "#129990",
									color: "white",
									border: "none",
								}}
							>
								<div className="text-start">
									<small className="d-block" style={{ fontSize: "0.7rem" }}>
										Download Now
									</small>
									<span className="fw-bold">Get the Mobile App</span>
								</div>
							</motion.button>
						</motion.div>
					</div>

					{/* Phone Mockup */}
					<div className="col-lg-6">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="position-relative d-flex justify-content-center"
						>
							<div className="position-relative" style={{ maxWidth: "320px" }}>
								{/* Phone Frame */}
								<div
									className="rounded-5 p-3 shadow-lg"
									style={{
										backgroundColor: "#1a1a1a",
										border: "3px solid #333",
									}}
								>
									{/* Screen */}
									<div
										className="rounded-4 overflow-hidden bg-white position-relative"
										style={{
											aspectRatio: "9/19.5",
											boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
										}}
									>
										{/* Notch */}
										<div
											className="position-absolute top-0 start-50 translate-middle-x rounded-bottom-3"
											style={{
												width: "120px",
												height: "25px",
												backgroundColor: "#1a1a1a",
												zIndex: 10,
											}}
										></div>

										{/* Screen Content - Actual Screenshot */}
										<img
											src={screenImg}
											alt="City Management App Screenshot"
											className="w-100 h-100 px-1 py-4"
											style={{ objectPosition: "top" }}
										/>
									</div>
								</div>

								{/* Floating elements */}
								<motion.div
									animate={{ y: [-10, 10, -10] }}
									transition={{ repeat: Infinity, duration: 3 }}
									className="position-absolute top-0 end-0 translate-middle-y"
									style={{ right: "-20px" }}
								>
									<div
										className="rounded-circle shadow-lg d-flex align-items-center justify-content-center"
										style={{
											width: "50px",
											height: "50px",
											backgroundColor: "#129990",
											color: "white",
										}}
									>
										<FontAwesomeIcon icon={faMobileScreen} />
									</div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MobileHeroSection;
