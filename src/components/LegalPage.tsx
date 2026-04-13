import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section { heading: string; body: string | string[] }

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <div className="pt-14" style={{ background: "#F0EEE9" }}>

        {/* Hero */}
        <div className="py-16 md:py-20 border-b border-black/[0.06]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <p className="section-label mb-4">{subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0d0d0d] mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-sm text-[#0d0d0d]/40" style={{ fontFamily: "var(--font-inter)" }}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i} className="border-b border-black/[0.06] pb-10 last:border-none last:pb-0">
                <h2 className="text-xl font-bold text-[#0d0d0d] mb-4 tracking-tight">{sec.heading}</h2>
                {Array.isArray(sec.body) ? (
                  <ul className="space-y-2">
                    {sec.body.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#0d0d0d]/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#17184B]/30 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#0d0d0d]/60 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {sec.body}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-16 rounded-2xl p-8 border border-black/[0.07] bg-white">
            <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">Have questions?</h3>
            <p className="text-sm text-[#0d0d0d]/50 mb-5" style={{ fontFamily: "var(--font-inter)" }}>
              If you have any questions about this policy, please contact us at:
            </p>
            <div className="space-y-1 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              <div><span className="text-[#0d0d0d]/40">Email: </span><a href="mailto:info@coadal.com" className="text-[#17184B] font-medium hover:underline">info@coadal.com</a></div>
              <div><span className="text-[#0d0d0d]/40">Phone: </span><span className="text-[#0d0d0d]/70">+91 95093 67378</span></div>
              <div><span className="text-[#0d0d0d]/40">Address: </span><span className="text-[#0d0d0d]/70">Jaipur, Rajasthan, India</span></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
