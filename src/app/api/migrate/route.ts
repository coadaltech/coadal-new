/**
 * One-time migration endpoint.
 * Call GET /api/migrate once after deployment to seed all existing JSON data into the DB.
 * Uses ON CONFLICT DO NOTHING so it is safe to run multiple times.
 */
import { getDB } from "@/lib/db";

const portfolioWebsites = [
  { id:"1", type:"websites", data:{ id:"1", title:"NeuralCart", category:"AI E-Commerce", url:"neuralcart.ai", desc:"AI-powered product discovery engine with personalised recommendations, dynamic pricing, and one-click checkout.", metric:"+40%", metricLabel:"Conversion Rate", tech:["Next.js","OpenAI","Stripe"], accent:"#D8E63C", imageSrc:"" } },
  { id:"2", type:"websites", data:{ id:"2", title:"LogiFlow SaaS", category:"SaaS Dashboard", url:"logiflow.io", desc:"End-to-end logistics SaaS — shipment tracking, warehouse management, and analytics dashboard for 3PL companies.", metric:"20h", metricLabel:"Saved per Week", tech:["Next.js","Prisma","AWS"], accent:"#D8E63C", imageSrc:"" } },
  { id:"3", type:"websites", data:{ id:"3", title:"TechNova Brand", category:"Brand + Web", url:"technova.io", desc:"Full brand identity and marketing website for a B2B SaaS startup — #1 on Product Hunt with 8K signups in 48h.", metric:"8K", metricLabel:"Signups in 48h", tech:["Next.js","Framer Motion","Webflow"], accent:"#D6B4FC", imageSrc:"" } },
  { id:"4", type:"websites", data:{ id:"4", title:"Maverick Agency", category:"Marketing Site", url:"maverick.agency", desc:"Performance marketing agency website with animated stats, case study showcase, and a multi-step project wizard.", metric:"3×", metricLabel:"Inbound Leads", tech:["Next.js","GSAP","Sanity CMS"], accent:"#D8E63C", imageSrc:"" } },
  { id:"5", type:"websites", data:{ id:"5", title:"MediConnect", category:"Healthcare Portal", url:"mediconnect.health", desc:"Patient-doctor portal with appointment booking, teleconsultation, EHR integration, and insurance claim tracking.", metric:"50K", metricLabel:"Patients Onboarded", tech:["Next.js","PostgreSQL","Twilio"], accent:"#D6B4FC", imageSrc:"" } },
  { id:"6", type:"websites", data:{ id:"6", title:"UrbanRealty", category:"Real Estate", url:"urbanrealty.in", desc:"Property listing marketplace with AI-powered search, virtual tours, EMI calculator, and developer dashboards.", metric:"50K", metricLabel:"Monthly Visitors", tech:["Next.js","Algolia","Mapbox"], accent:"#D8E63C", imageSrc:"" } },
];

const portfolioApps = [
  { id:"a1", type:"apps", data:{ id:"a1", title:"PocketPay", category:"FinTech", desc:"P2P payments, instant transfers, and smart budgeting — built on React Native with real-time transaction feeds.", platform:"iOS & Android", metric:"100K+", metricLabel:"Downloads", tech:["React Native","Node.js","Stripe"], accent:"#D6B4FC", imageSrc:"" } },
  { id:"a2", type:"apps", data:{ id:"a2", title:"UrbanEats", category:"Food Delivery", desc:"Hyperlocal food delivery app with live order tracking, loyalty rewards, and restaurant partner dashboard.", platform:"iOS & Android", metric:"4.8★", metricLabel:"App Store Rating", tech:["React Native","Firebase","Google Maps"], accent:"#D8E63C", imageSrc:"" } },
  { id:"a3", type:"apps", data:{ id:"a3", title:"FitSync Pro", category:"Health & Fitness", desc:"AI-powered workout planner, nutrition tracker, and wearable sync — with personalised plans that adapt weekly.", platform:"iOS & Android", metric:"30K", metricLabel:"Active Users", tech:["Flutter","Python AI","HealthKit"], accent:"#D6B4FC", imageSrc:"" } },
  { id:"a4", type:"apps", data:{ id:"a4", title:"LogiDriver", category:"Logistics", desc:"Fleet management and driver app for last-mile delivery — real-time tracking, proof of delivery, and route optimisation.", platform:"Android", metric:"60%", metricLabel:"Faster Deliveries", tech:["React Native","AWS","Google Maps"], accent:"#D8E63C", imageSrc:"" } },
];

const portfolioCreatives = [
  { id:"c1", type:"creatives", data:{ id:"c1", brand:"NeuralCart", type:"Product Launch", platform:"Instagram", accent:"#D8E63C", imageSrc:"" } },
  { id:"c2", type:"creatives", data:{ id:"c2", brand:"PocketPay", type:"Feature Highlight", platform:"Instagram", accent:"#D6B4FC", imageSrc:"" } },
  { id:"c3", type:"creatives", data:{ id:"c3", brand:"TechNova", type:"Brand Awareness", platform:"Instagram", accent:"#D8E63C", imageSrc:"" } },
  { id:"c4", type:"creatives", data:{ id:"c4", brand:"FitSync", type:"Promotion", platform:"Instagram", accent:"#D6B4FC", imageSrc:"" } },
  { id:"c5", type:"creatives", data:{ id:"c5", brand:"UrbanEats", type:"Offer Creative", platform:"Instagram", accent:"#D8E63C", imageSrc:"" } },
  { id:"c6", type:"creatives", data:{ id:"c6", brand:"Maverick Ads", type:"Results Creative", platform:"Instagram", accent:"#D8E63C", imageSrc:"" } },
];

const portfolioReels = [
  { id:"r1", type:"reels", data:{ id:"r1", title:"NeuralCart", category:"AI Web App", metric:"+40%", metricLabel:"Conversion Rate", accent:"#D8E63C", bg:"linear-gradient(160deg,#0a1800 0%,#192b00 50%,#0d1030 100%)", videoSrc:"" } },
  { id:"r2", type:"reels", data:{ id:"r2", title:"PocketPay", category:"FinTech App", metric:"100K+", metricLabel:"Downloads", accent:"#D6B4FC", bg:"linear-gradient(160deg,#0d0921 0%,#1a0f35 50%,#0d0e2e 100%)", videoSrc:"" } },
  { id:"r3", type:"reels", data:{ id:"r3", title:"Maverick AI Ads", category:"Performance Ads", metric:"5× ROAS", metricLabel:"Ad Return", accent:"#D8E63C", bg:"linear-gradient(160deg,#100f00 0%,#1e1c00 50%,#17184B 100%)", videoSrc:"" } },
  { id:"r4", type:"reels", data:{ id:"r4", title:"SalesBot AI", category:"AI Automation", metric:"3× FTE", metricLabel:"Tasks Replaced", accent:"#D6B4FC", bg:"linear-gradient(160deg,#070818 0%,#0d0e35 50%,#17184B 100%)", videoSrc:"" } },
  { id:"r5", type:"reels", data:{ id:"r5", title:"UrbanRealty", category:"SEO & Content", metric:"50K", metricLabel:"Monthly Visitors", accent:"#D8E63C", bg:"linear-gradient(160deg,#001a0d 0%,#00270f 50%,#0d1f30 100%)", videoSrc:"" } },
  { id:"r6", type:"reels", data:{ id:"r6", title:"TechNova Brand", category:"Brand Identity", metric:"#1", metricLabel:"Product Hunt", accent:"#D6B4FC", bg:"linear-gradient(160deg,#0d0921 0%,#1a0f35 50%,#2d1060 100%)", videoSrc:"" } },
  { id:"r7", type:"reels", data:{ id:"r7", title:"LogiFlow SaaS", category:"SaaS Platform", metric:"20h", metricLabel:"Saved / Week", accent:"#D8E63C", bg:"linear-gradient(160deg,#001a1a 0%,#002626 50%,#17184B 100%)", videoSrc:"" } },
];

const updates = [
  { id:"1", data:{ id:"1", title:"COADAL Launches AI Automation Division", description:"We've officially launched our dedicated AI automation practice, helping businesses save 40+ hours per week through intelligent workflow automation.", image:"", tag:"Launch", date:"2025-04-01" }, date:"2025-04-01" },
  { id:"2", data:{ id:"2", title:"50+ Projects Delivered Successfully", description:"A major milestone — we've now delivered over 50 projects across web, mobile, AI, and marketing for startups and enterprises worldwide.", image:"", tag:"Milestone", date:"2025-03-15" }, date:"2025-03-15" },
  { id:"3", data:{ id:"3", title:"New Office Space in Jaipur", description:"We've moved into a bigger office in Jaipur to accommodate our growing team and give clients a world-class space to collaborate.", image:"", tag:"Team", date:"2025-02-20" }, date:"2025-02-20" },
];

const posts = [
  { id:"1", slug:"how-ai-is-transforming-digital-marketing-2025", publishedAt:"2025-03-15", data:{ id:"1", slug:"how-ai-is-transforming-digital-marketing-2025", title:"How AI is Transforming Digital Marketing in 2025", excerpt:"From AI-generated creatives to predictive audience targeting — here's how forward-thinking brands are using AI to cut CAC and multiply ROAS.", content:"<h2>The AI Marketing Revolution</h2><p>Artificial intelligence has moved from boardroom buzzword to mission-critical infrastructure for every growth-focused brand in 2025.</p>", category:"AI & Marketing", tags:["AI","Marketing","Performance Ads"], author:{ name:"Aryan Mehta", role:"Head of AI", initials:"AM" }, coverColor:"#D8E63C", readTime:"6 min read", publishedAt:"2025-03-15", featured:true } },
  { id:"2", slug:"startup-growth-playbook-seed-to-series-a", publishedAt:"2025-03-28", data:{ id:"2", slug:"startup-growth-playbook-seed-to-series-a", title:"The Startup Growth Playbook: From Seed to Series A", excerpt:"Most startups fail not because of bad products, but because of bad growth strategy. Here's the framework we use to take startups from traction to fundraise-ready.", content:"<h2>Why Most Startup Growth Strategies Fail</h2><p>Every week we speak with founders who have strong products and early traction but can't seem to break through to the next level.</p>", category:"Startup Growth", tags:["Startup","Growth","Series A","Fundraising"], author:{ name:"Priya Kapoor", role:"Growth Strategist", initials:"PK" }, coverColor:"#17184B", readTime:"8 min read", publishedAt:"2025-03-28", featured:false } },
  { id:"3", slug:"web-development-trends-2025-what-to-build-with", publishedAt:"2025-04-05", data:{ id:"3", slug:"web-development-trends-2025-what-to-build-with", title:"Web Development Trends 2025: What to Actually Build With", excerpt:"The web development landscape shifted dramatically in 2025. Here's what's genuinely worth your time — and what's hype — from a team that ships production code every day.", content:"<h2>The Signal vs. The Noise</h2><p>Every year brings a new wave of frameworks, tools, and paradigms claiming to revolutionise web development. Most don't. Some do.</p>", category:"Development", tags:["Web Dev","Next.js","React","TypeScript"], author:{ name:"Rahul Singh", role:"Lead Engineer", initials:"RS" }, coverColor:"#D6B4FC", readTime:"7 min read", publishedAt:"2025-04-05", featured:false } },
  { id:"4", slug:"seo-strategy-that-actually-drives-revenue-2025", publishedAt:"2025-04-12", data:{ id:"4", slug:"seo-strategy-that-actually-drives-revenue-2025", title:"The SEO Strategy That Actually Drives Revenue in 2025", excerpt:"Google's algorithm has never been smarter — or more ruthless. Here's how to build an SEO strategy that survives every update and compounds over time.", content:"<h2>SEO in 2025: What Changed, What Didn't</h2><p>The fundamentals of SEO haven't changed: produce content that genuinely serves user intent, earn authoritative backlinks, and make your site technically excellent.</p>", category:"SEO", tags:["SEO","Content Marketing","Google","Organic Traffic"], author:{ name:"Neha Sharma", role:"SEO Lead", initials:"NS" }, coverColor:"#D8E63C", readTime:"9 min read", publishedAt:"2025-04-12", featured:false } },
  { id:"5", slug:"ai-automation-workflows-that-save-40-hours-per-week", publishedAt:"2025-04-20", data:{ id:"5", slug:"ai-automation-workflows-that-save-40-hours-per-week", title:"AI Automation Workflows That Save 40+ Hours Per Week", excerpt:"Stop doing manually what a well-configured AI workflow can do in seconds. We've mapped out the highest-impact automation opportunities for growing businesses.", content:"<h2>The Automation Opportunity Most Businesses Miss</h2><p>When founders and operators think about AI automation, they typically think about chatbots and email responders.</p>", category:"AI & Marketing", tags:["AI","Automation","Productivity","Workflows"], author:{ name:"Aryan Mehta", role:"Head of AI", initials:"AM" }, coverColor:"#17184B", readTime:"7 min read", publishedAt:"2025-04-20", featured:false } },
  { id:"6", slug:"performance-marketing-playbook-reduce-cac-scale-roas", publishedAt:"2025-05-01", data:{ id:"6", slug:"performance-marketing-playbook-reduce-cac-scale-roas", title:"Performance Marketing Playbook: Reduce CAC, Scale ROAS", excerpt:"The paid advertising game has changed. Here's the framework we use to profitably scale Meta, Google, and programmatic campaigns for our clients.", content:"<h2>Why Most Paid Campaigns Underperform</h2><p>The paid advertising ecosystem in 2025 is simultaneously more powerful and more competitive than it has ever been.</p>", category:"Performance Ads", tags:["Performance Marketing","Meta Ads","Google Ads","ROAS","CAC"], author:{ name:"Priya Kapoor", role:"Growth Strategist", initials:"PK" }, coverColor:"#D6B4FC", readTime:"10 min read", publishedAt:"2025-05-01", featured:false } },
];

export async function GET() {
  try {
    const sql = await getDB();
    let inserted = 0;

    // Portfolio
    for (const item of [...portfolioWebsites, ...portfolioApps, ...portfolioCreatives, ...portfolioReels]) {
      await sql`
        INSERT INTO portfolio_items (id, type, data)
        VALUES (${item.id}, ${item.type}, ${JSON.stringify(item.data)})
        ON CONFLICT (id) DO NOTHING
      `;
      inserted++;
    }

    // Updates
    for (const u of updates) {
      await sql`
        INSERT INTO updates (id, data, date)
        VALUES (${u.id}, ${JSON.stringify(u.data)}, ${u.date})
        ON CONFLICT (id) DO NOTHING
      `;
      inserted++;
    }

    // Posts
    for (const p of posts) {
      await sql`
        INSERT INTO posts (id, slug, data, published_at)
        VALUES (${p.id}, ${p.slug}, ${JSON.stringify(p.data)}, ${p.publishedAt})
        ON CONFLICT (id) DO NOTHING
      `;
      inserted++;
    }

    return Response.json({
      success: true,
      message: `Migration complete. Processed ${inserted} records.`,
    });
  } catch (err) {
    console.error("Migration error:", err);
    return Response.json({ error: "Migration failed", detail: String(err) }, { status: 500 });
  }
}
