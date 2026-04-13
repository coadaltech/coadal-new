import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — COADAL",
  description: "Get in touch with COADAL to start your next project.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-14">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
