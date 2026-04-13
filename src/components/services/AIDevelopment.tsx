"use client";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import {
  Bot,
  Workflow,
  Database,
  Cpu,
  BarChart3,
  Puzzle,
} from "lucide-react";

const props = {
  badge: "AI Development",
  heroTitle: "AI That Works",
  heroTitleAccent: "For Your Business",
  heroDesc:
    "LLM-powered applications, intelligent agents, and AI automation that give your business an unfair advantage. From GPT integrations to custom-trained models.",
  heroAccentColor: "#D8E63C",
  stats: [
    { n: "3×", l: "FTE Tasks Automated" },
    { n: "60%", l: "Faster Operations" },
    { n: "₹0", l: "Extra Headcount" },
    { n: "30+", l: "AI Systems Built" },
  ],
  services: [
    {
      title: "LLM Application Development",
      desc: "Custom GPT-4, Claude, or open-source LLM integrations. Chatbots, document Q&A, code assistants, and content generators.",
      icon: Bot,
    },
    {
      title: "AI Agents & Automation",
      desc: "Autonomous agents that handle multi-step workflows: lead qualification, CRM updates, report generation, and customer support.",
      icon: Workflow,
    },
    {
      title: "RAG Systems",
      desc: "Retrieval-Augmented Generation pipelines that let your AI answer questions from your own documents, knowledge bases, and databases.",
      icon: Database,
    },
    {
      title: "Custom Model Fine-Tuning",
      desc: "Fine-tune open-source models (LLaMA, Mistral) on your domain-specific data for higher accuracy and lower API costs.",
      icon: Cpu,
    },
    {
      title: "AI-Powered Analytics",
      desc: "Predictive dashboards, anomaly detection, demand forecasting, and natural language querying of your business data.",
      icon: BarChart3,
    },
    {
      title: "AI Integration into Existing Products",
      desc: "Add AI features (smart search, recommendations, summarisation) to your existing web or mobile product.",
      icon: Puzzle,
    },
  ],
  process: [
    {
      step: "01",
      title: "AI Strategy Workshop",
      desc: "We assess your workflows, identify the highest-ROI AI opportunities, and define success metrics.",
    },
    {
      step: "02",
      title: "Proof of Concept",
      desc: "A working PoC in 1–2 weeks to validate the approach before full development investment.",
    },
    {
      step: "03",
      title: "Build & Integrate",
      desc: "Production-grade development with proper prompt engineering, error handling, and safety guardrails.",
    },
    {
      step: "04",
      title: "Monitor & Improve",
      desc: "Post-launch LLM evaluation, cost optimisation, and model improvement with real production data.",
    },
  ],
  techStack: [
    "OpenAI GPT-4o",
    "Claude 3.5",
    "LangChain",
    "LlamaIndex",
    "Python",
    "FastAPI",
    "Pinecone",
    "pgvector",
    "HuggingFace",
    "Ollama",
    "Next.js",
    "TypeScript",
  ],
  results: [
    {
      metric: "3×",
      label: "FTE Tasks Replaced",
      desc: "LLM sales agent that qualifies leads, writes follow-ups, and updates CRM automatically.",
      tag: "Sales AI",
    },
    {
      metric: "80%",
      label: "Support Ticket Reduction",
      desc: "AI customer support agent trained on product docs — resolves 80% of tickets without humans.",
      tag: "Support AI",
    },
    {
      metric: "10×",
      label: "Faster Report Generation",
      desc: "Automated financial reporting pipeline that cut 40 hours/month of manual analyst work.",
      tag: "Analytics AI",
    },
  ],
  faqs: [
    {
      q: "Do I need a large dataset to use AI?",
      a: "Not necessarily. LLMs like GPT-4 require minimal training data. For fine-tuning, we can often work with as few as 500–1000 examples. We'll advise on the best approach for your use case.",
    },
    {
      q: "How do you handle AI hallucinations and accuracy?",
      a: "We implement RAG systems, output validation, and human-in-the-loop checkpoints where accuracy is critical. We also set up eval frameworks to measure and improve accuracy over time.",
    },
    {
      q: "What does AI development cost vs. hiring in-house?",
      a: "A custom AI feature typically costs ₹2–8L to build vs. ₹25–50L/year for a dedicated ML engineer. Most clients see ROI within the first quarter.",
    },
    {
      q: "Is our data safe when using OpenAI / Claude?",
      a: "We use enterprise API tiers with data privacy agreements. For sensitive data, we can deploy open-source models (LLaMA, Mistral) entirely on your own infrastructure with zero third-party data exposure.",
    },
  ],
  pricing: [
    {
      name: "Integration",
      price: "₹80K–₹2L",
      desc: "Add AI to an existing product.",
      features: [
        "LLM integration",
        "Basic chatbot or assistant",
        "Prompt engineering",
        "1 use case",
      ],
      highlighted: false,
    },
    {
      name: "Custom AI App",
      price: "₹2L–₹6L",
      desc: "Full AI application.",
      features: [
        "RAG system",
        "Agent workflows",
        "Custom UI",
        "Monitoring dashboard",
        "30-day support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise AI",
      price: "₹6L+",
      desc: "Complex multi-model systems.",
      features: [
        "Fine-tuning",
        "Private deployment",
        "Dedicated AI team",
        "SLA guarantee",
        "Ongoing optimisation",
      ],
      highlighted: false,
    },
  ],
};

export default function AIDevelopment() {
  return <ServicePageTemplate {...props} />;
}
