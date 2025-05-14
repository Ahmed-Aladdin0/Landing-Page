import React, { useState } from "react";
import styles from "./HeroSection.module.css";
export default function HeroSection() {
    const [activeButton, setActiveButton] = useState("For Residents");
	return (
		<>
			<div className="container py-5">
				<div className="text-center mb-3">
					<h1 className="fw-bold" style={{ fontSize: "42px" }}>
						Everything You Need to Run a Smart <br /> City
					</h1>
					<p className="fw-bold text-muted">
						Citio brings together residents, government, and providers in one
						intelligent platform.
					</p>
					<div
						role="group"
						className="mt-4 btn-group rounded-pill shadow p-2 px-3 bg-body-tertiary"
					>
						<button type="button" className={`${styles["btn1"]} me-2 ${activeButton === "For Residents" ? styles.activeButton : ""}` }  onClick ={() => setActiveButton("For Residents")}>
							For Residents
						</button>
						<button type="button" className={`${styles["btn1"]} me-2 ${activeButton === "For Government" ? styles.activeButton : ""}`} onClick={() => setActiveButton("For Government")}>
							For Government
						</button>
						<button type="button" className={`${styles["btn1"]} ${activeButton === "For Providers" ? styles.activeButton : ""}`} onClick ={() => setActiveButton("For Providers")}>
							For Providers
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
