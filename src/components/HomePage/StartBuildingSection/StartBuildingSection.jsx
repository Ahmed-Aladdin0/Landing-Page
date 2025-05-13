import React from "react";

export default function StartBuildingSection() {
	return (
		<div
			style={{
				background: "linear-gradient(90deg, #1ec9a7 0%, #2563eb 100%)",
				borderRadius: 18,
				boxShadow: "0 2px 24px 0 rgba(60,72,88,.10)",
				margin: "52px auto 0 auto",
				maxWidth: 950,
				padding: "48px 32px",
				textAlign: "center",
			}}
		>
			<h2
				className="fw-bold mb-4"
				style={{ fontSize: "2.1rem", color: "#fff", lineHeight: 1.18 }}
			>
				Start building a smarter city with Citio
			</h2>
			<p
				className="lead"
				style={{
					color: "rgba(255,255,255,0.94)",
					fontWeight: 500,
					marginBottom: 36,
				}}
			>
				Join the growing network of smart cities leveraging technology to <br />
				improve urban life for everyone.
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
				>
					Book a Demo
				</button>
				<button
					className="btn fw-bold px-md-4 px-3 py-2"
					style={{
						background: "rgba(255,255,255,0.16)",
						color: "#fff",
						border: "1.5px solid #fff",
						borderRadius: 999,
						minWidth: 130,
						fontSize: 16,
					}}
				>
					Learn More
				</button>
			</div>
		</div>
	);
}
