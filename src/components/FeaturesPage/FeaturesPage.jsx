import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import MainFeaturesSection from "./MainFeaturesSection/MainFeaturesSection";
import MultiPlatformsSection from "./MultiPlatformsSection/MultiPlatformsSection";
import CompareFeaturesSection from "./CompareFeaturesSection/CompareFeaturesSection";
import RequestDemoSection from "./RequestDemoSection/RequestDemoSection";
import FooterSection from "../HomePage/FooterSection/FooterSection";

export default function FeaturesPage() {
	return (
		<>
			<div
				style={{
					width: "100%",
					position: "relative",
					backgroundColor: "#effbf9",
					
				}}
			>
				<HeroSection />
			</div>
			<div
				style={{ width: "100%", position: "relative", backgroundColor: "#fff" }}
				className="pt-5"
			>
				<MainFeaturesSection />
			</div>
			<div
				style={{ width: "100%", position: "relative", backgroundColor: "#effbf9" }}
				className="pt-5"
			>
				<MultiPlatformsSection />
			</div>
			<div
				style={{ width: "100%", position: "relative", backgroundColor: "#fff" }}
				className="pt-5"
			>
				<CompareFeaturesSection />
			</div>
			<div
				style={{ width: "100%", position: "relative", backgroundColor: "#effbf9" }}
				className="pt-5"
			>
				<RequestDemoSection />
			</div>
			<div style={{ width: "100%", position: "relative"}} className=' pt-5'>
				  <FooterSection />
			</div>
		</>
	);
}
