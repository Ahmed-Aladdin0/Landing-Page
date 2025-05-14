import React from "react";

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

	return (
		<div className="container py-5">
			<div className="text-center mb-5">
					<h1 className="fw-bold" style={{ fontSize: "37px" }}>
						Success Stories
					</h1>
					<p className="fw-bold text-muted">
						Hear from cities, residents, and service providers who are transforming urban <br /> management with Citio.
					</p>
				</div>
			<div className="row justify-content-center g-4 mb-3">
				{cardsItems.map((item) => (
					<div key={item.id} className="col-lg-4 d-flex" style={{ minWidth: 340, maxWidth: 400 }}>
						<div
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
							}}
						>
							<div className="d-flex align-items-center mb-3">
								<img
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
								/>
								<div className="d-flex flex-column">
									<span style={{ fontWeight: 700, fontSize: "17.5px", color: "#1a2138", lineHeight: 1 }}>{item.name}</span>
									<span style={{ color: "#8191aa", fontSize: 14 }}>{item.role}</span>
								</div>
							</div>
							<div style={{ fontSize: 15.5, fontWeight: 500, lineHeight: 1.55, textAlign: "left",fontStyle: "italic", color: "#1a2138" }} >
								"{item.description}"
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}