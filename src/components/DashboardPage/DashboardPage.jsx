import Navbar from "../HomePage/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import DashboardAnalytics from "./Analytics/Analytics";
import FooterSection from "../HomePage/FooterSection/FooterSection";
const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection /> 
      <DashboardAnalytics />
      <FeatureSection />
      <FooterSection />
    </>
  );
};
export default DashboardPage;
