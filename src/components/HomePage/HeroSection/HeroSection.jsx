import React from "react";
import heropic from "../../../assets/heropic.png";
import styles from "./HeroSection.module.css";
import { useNavigate } from 'react-router-dom';
export default function HeroSection() {
	const navigate=useNavigate();
	return (
		<>
			<div className={`${styles["hero-container"]} container d-flex align-items-center justify-content-center`}>
				<div className="row h-75">
					<div className="col-lg-6 pe-4 d-flex flex-column justify-content-center">
						<h1 className="fw-bold" style={{ fontSize: "42px" }}>
							Welcome to Citio - Smart City Management in One Platform
						</h1>
						<p className="lead ">
							Empowering residents, services, and government with intelligent
							tools. Connect your entire city ecosystem in one integrated
							platform.
						</p>
						<div className="d-flex gap-3 mt-4 mb-md-0 mb-4">
							<button className="btn btn-primary rounded-pill fw-bold px-md-4 px-2 py-2" onClick={()=>navigate("/features")}>
								Explore Features
							</button>
							<button className="btn btn-outline-primary rounded-pill fw-bold px-md-4 px-2 py-2" onClick={()=>navigate("/demo")}>
								Request a Demo
							</button>
						</div>
					</div>
					<div className="col-lg-6 d-flex align-items-center justify-content-center">
						<div className="shadow p-4 h-100 w-100 bg-white rounded">
							<img
								src={heropic}
								className="img-fluid"
								alt="Smart city management"
								style={{ objectFit: "contain", height: "100%" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
