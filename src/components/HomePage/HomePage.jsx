import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import KeyFeaturesSection from "./KeyFeaturesSection/KeyFeaturesSection";
import HowItWorkSection from "./HowItWorkSection/HowItWorkSection";
import PlatformOverviewSection from "./PlatformOverviewSection/PlatformOverviewSection";
import SuccessStoriesSection from "./SuccessStoriesSection/SuccessStoriesSection";
import StatisticsSection from "./StatisticsSection/StatisticsSection";
import StartBuildingSection from "./StartBuildingSection/StartBuildingSection";
import TrustedCitioSection from "./TrustedCitioSection/TrustedCitioSection";
import FooterSection from "./FooterSection/FooterSection";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ModalChatBot from "./ModalChatBot/ModalChatBot";

export default function HomePage() {
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [isChatMinimized, setIsChatMinimized] = useState(false);

	return (
		<>
			{/* Chat Components */}
			{isChatOpen && (
				<ModalChatBot
					isOpen={isChatOpen}
					onClose={() => {
						setIsChatOpen(false);
						setIsChatMinimized(false);
					}}
					onMinimize={() => {
						setIsChatMinimized(true);
						setIsChatOpen(false);
					}}
				/>
			)}

			{/* Main Chat Button - Only show when chat is completely closed */}
			{!isChatOpen && !isChatMinimized && (
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="btn btn-primary position-fixed rounded-circle shadow-lg"
					style={{
						bottom: "20px",
						right: "20px",
						width: "60px",
						height: "60px",
						zIndex: 1000,
						backgroundColor: "#2563eb",
						borderColor: "#2563eb",
					}}
					onClick={() => setIsChatOpen(true)}
					type="button"
				>
					<FontAwesomeIcon icon={faComment} size="lg" />
				</motion.button>
			)}

			{/* Minimized Chat Button - Only show when chat is minimized */}
			{isChatMinimized && (
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="btn btn-primary position-fixed rounded-circle shadow-lg"
					style={{
						bottom: "20px",
						right: "20px",
						width: "60px",
						height: "60px",
						zIndex: 1000,
						backgroundColor: "#2563eb",
						borderColor: "#2563eb",
					}}
					onClick={() => {
						setIsChatOpen(true);
						setIsChatMinimized(false);
					}}
					type="button"
				>
					<FontAwesomeIcon icon={faComment} size="lg" />
					{/* Indicator that there's an active chat */}
					<span
						className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
						style={{ fontSize: "8px" }}
					>
						1
					</span>
				</motion.button>
			)}

			{/* Main Page Content */}
			<Navbar />
			<HeroSection />
			<KeyFeaturesSection />
			<HowItWorkSection />
			<PlatformOverviewSection />
			<SuccessStoriesSection />
			<StatisticsSection />
			<StartBuildingSection />
			<TrustedCitioSection />
			<FooterSection />
		</>
	);
}