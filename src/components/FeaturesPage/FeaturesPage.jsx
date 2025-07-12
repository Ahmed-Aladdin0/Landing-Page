import React from "react";
import Navbar from '../HomePage/Navbar/Navbar'
import HeroSection from "./HeroSection/HeroSection";
import FooterSection from "../HomePage/FooterSection/FooterSection";

export default function FeaturesPage() {
	return (
		<>
		<Navbar/>
			<div
				style={{
					width: "100%",
					position: "relative",
					backgroundColor: "#effbf9",
				}}
				className="pt-5"
			>
				<HeroSection />
			</div>
			<div style={{ width: "100%", position: "relative"}} className=' pt-5'>
				  <FooterSection />
			</div>
		</>
	);
}
