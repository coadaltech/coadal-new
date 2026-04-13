import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import PortfolioApps from "@/components/PortfolioApps";
import PortfolioWebsites from "@/components/PortfolioWebsites";
import PortfolioCreatives from "@/components/PortfolioCreatives";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio — COADAL",
  description: "Explore COADAL's portfolio of web apps, mobile apps, AI products, and marketing campaigns.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <Portfolio />
        <PortfolioApps />
        <PortfolioWebsites />
        <PortfolioCreatives />
      </div>
      <Footer />
    </>
  );
}
