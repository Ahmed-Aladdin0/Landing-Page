import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import DemoPage from "./components/DemoPage/DemoPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ScrollToTop from "./util/Scroll";
import MobilePage from "./components/MobilePage/MobilePage";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import ProviderPage from "./components/ProviderPage/ProviderPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";

function App() {
	return (
    <>
			<ScrollToTop />
			<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/demo" element={<DemoPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/mobile" element={<MobilePage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/provider" element={<ProviderPage />} />
					<Route path="/community" element={<CommunityPage />} />
			</Routes>
	</>
	);
}

export default App;
