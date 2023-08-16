import Footer from "@/components/Footer";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <LandingNavbar />
      <LandingHero />
      {/* <LandingContent /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
