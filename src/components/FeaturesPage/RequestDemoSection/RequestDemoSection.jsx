import React from "react";
import { useNavigate } from "react-router-dom";

export default function RequestDemoSection() {
    const navigate = useNavigate();
	return (
		<div
			style={{
				background: "linear-gradient(90deg,rgb(41, 102, 232) 0%,rgb(7, 48, 135) 100%)",
				borderRadius: 18,
				boxShadow: "0 2px 24px 0 rgba(60,72,88,.10)",
				margin: "52px auto 0 auto",
				maxWidth: 1200,
				padding: "48px 32px",
				textAlign: "center",
			}}
		>
			<h2
				className="fw-bold mb-4"
				style={{ fontSize: "2.1rem", color: "#fff", lineHeight: 1.18 }}
			>
				See How Citio Can Help Your City
			</h2>
			<p
				className="lead"
				style={{
					color: "rgba(255,255,255,0.94)",
					fontWeight: 500,
					marginBottom: 36,
				}}
			>
				Join the growing network of smart cities using Citio to transform urban <br /> management
			</p>
			<div className="d-flex gap-3 justify-content-center">
				<button
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
				</button>
			</div>
		</div>
	);
}
