import {
	faChartLine,
	faComments,
	faHouse,
	faLandmark,
	faMobileScreenButton,
	faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function KeyFeaturesSection() {
	const cardsItems = [
		{
			id: 1,
			icon: faHouse,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Report Issues in Real-Time",
			description:
				"Residents can report city issues instantly through the mobile app and track status updates from submission to resolution.",
		},
		{
			id: 2,
			icon: faComments,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "City Social Media",
			description:
				"Residents can share issues and updates, like and comment – creating a digital public square for community engagement.",
		},
		{
			id: 3,
			icon: faStore,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Service & Product Providers",
			description:
				"Discover nearty service providers, view offerings, and order directly through Citio's integrated marketplace.",
		},
		{
			id: 4,
			icon: faLandmark,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Government Services Access",
			description:
				"Submit requests, access official services, and get updates-all in one place without the hassle of multiple platforms.",
		},
		{
			id: 5,
			icon: faChartLine,
			iconColor: "text-primary",
			iconBg: "bg-primary-subtle",
			title: "Smart Dashboards for Everyone",
			description:
				"City staff, providers, and service managers get tailored dashboards to manage tasks efficiently with data-driven insights.",
		},
		{
			id: 6,
			icon: faMobileScreenButton,
			iconColor: "text-success",
			iconBg: "bg-success-subtle",
			title: "Mobile-First Experience",
			description:
				"Access all features on the go with our responsive mobile app designed for residents, government staff, and service providers.",
		},
	];
	return (
		<>
			<div className="container py-5">
				<div className="text-center mb-5">
					<h1 className="fw-bold" style={{ fontSize: "42px" }}>
						Key Features
					</h1>
					<p className="fw-bold text-muted">
						One platform connecting residents, government, and service providers
						with <br />
						intelligent tools for modern city management.
					</p>
				</div>

				<div className="row g-4 mb-4">
					{cardsItems.map((item) => (
						<div key={item.id} className="col-md-6 col-lg-4">
							<div className="p-4 bg-white rounded shadow h-100">
								<div
									className={`rounded-circle d-inline-flex justify-content-center align-items-center mb-3 ${item.iconBg}`}
									style={{ width: "50px", height: "50px" }}
								>
									<FontAwesomeIcon
										icon={item.icon}
										className={`fs-5 ${item.iconColor}`}
									/>
								</div>
								<h5 className="fw-bold">{item.title}</h5>
								<p className="text-muted">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
