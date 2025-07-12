import Navbar from "../HomePage/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import DashboardAnalytics from "./Analytics/Analytics";
const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <DashboardAnalytics />
      <FeatureSection />
    </>
  );
};
export default DashboardPage;
