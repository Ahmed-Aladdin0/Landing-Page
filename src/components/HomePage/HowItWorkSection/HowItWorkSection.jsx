import React from "react";

export default function HowItWorkSection() {
	return (
		<>
			<div className="container py-5">
				<div className="text-center mb-5">
					<h1 className="fw-bold" style={{ fontSize: "42px" }}>
						How It Works
					</h1>
					<p className="fw-bold text-muted">
						A seamless process connecting all city stakeholders in one
						integrated <br />
						ecosystem
					</p>
				</div>
				<div className="row">
					<div className="row text-start justify-content-center">
						<div className="col-12 col-md-6 col-lg-3 mb-4">
							<div className="text-center px-3">
								<div
									className="bg-primary-subtle rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
									style={{ width: "60px", height: "60px" }}
								>
									<i className="fas fa-user text-primary fs-4"></i>
								</div>
								<h6 className="fw-bold">Resident Reports or Browses</h6>
								<p className="text-muted small">
									Citizens report issues, browse services, or access government
									resources via web or mobile app.
								</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-3 mb-4">
							<div className="text-center px-3">
								<div
									className="bg-success-subtle rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
									style={{ width: "60px", height: "60px" }}
								>
									<i className="fas fa-briefcase text-success fs-4"></i>
								</div>
								<h6 className="fw-bold">Providers or Officials Respond</h6>
								<p className="text-muted small">
									Relevant city departments or providers receive alerts and
									respond via their dashboard.
								</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-3 mb-4">
							<div className="text-center px-3">
								<div
									className="bg-primary-subtle rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
									style={{ width: "60px", height: "60px" }}
								>
									<i className="fas fa-sync text-primary fs-4"></i>
								</div>
								<h6 className="fw-bold">Updates & Feedback</h6>
								<p className="text-muted small">
									Progress updates are provided in real time, and citizens can
									provide feedback.
								</p>
							</div>
						</div>

						<div className="col-12 col-md-6 col-lg-3 mb-4">
							<div className="text-center px-3">
								<div
									className="bg-success-subtle rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
									style={{ width: "60px", height: "60px" }}
								>
									<i className="fas fa-users text-success fs-4"></i>
								</div>
								<h6 className="fw-bold">Community Engagement</h6>
								<p className="text-muted small">
									The community engages in city discussions, votes, and shares
									content with civic participants.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
