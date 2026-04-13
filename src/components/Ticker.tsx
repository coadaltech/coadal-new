"use client";

const items = [
  "AI Development", "Web Applications", "Mobile Apps", "SEO & Content",
  "Brand Strategy", "Performance Marketing", "Cloud Solutions", "UI/UX Design",
  "AI Agents", "Data Analytics", "Social Media Growth", "Enterprise Solutions",
  "AI Development", "Web Applications", "Mobile Apps", "SEO & Content",
  "Brand Strategy", "Performance Marketing", "Cloud Solutions", "UI/UX Design",
  "AI Agents", "Data Analytics", "Social Media Growth", "Enterprise Solutions",
];

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-black/[0.07] bg-white py-3.5">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="flex animate-ticker whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-5 mx-1">
            <span className="text-[11px] font-semibold text-black/35 tracking-[0.18em] uppercase">{item}</span>
            <span className="w-1 h-1 rounded-full bg-[#17184B]/50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
