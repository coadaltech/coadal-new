import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms of Service — COADAL" };

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="Legal"
      lastUpdated="January 1, 2025"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using COADAL's website (coadal.com) or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        },
        {
          heading: "2. Services",
          body: "COADAL Technologies Pvt. Ltd. provides digital services including web development, mobile application development, AI integration, performance marketing, SEO, content strategy, and brand identity design. The specific scope of services for each client engagement is defined in a separate Statement of Work (SOW) or project proposal.",
        },
        {
          heading: "3. Client Obligations",
          body: [
            "Provide accurate and complete information required for project execution",
            "Respond to requests for feedback and approvals within agreed timelines",
            "Make payments as per the agreed schedule in the project contract",
            "Ensure you have rights to any content, assets, or materials provided to us",
            "Not use our services for any unlawful or prohibited purpose",
          ],
        },
        {
          heading: "4. Intellectual Property",
          body: "Upon full payment of all fees, COADAL transfers ownership of custom deliverables (code, designs, content) to the client. COADAL retains the right to use the project in our portfolio unless a separate NDA specifies otherwise. Third-party components, frameworks, and libraries remain subject to their respective open-source licenses.",
        },
        {
          heading: "5. Payment Terms",
          body: [
            "Projects typically require 50% upfront and 50% upon delivery, unless otherwise agreed",
            "Retainer services are billed monthly in advance",
            "Late payments beyond 15 days may incur a 2% monthly interest charge",
            "COADAL reserves the right to pause or terminate work on accounts with outstanding invoices",
            "All prices are exclusive of applicable taxes (GST) unless stated otherwise",
          ],
        },
        {
          heading: "6. Confidentiality",
          body: "Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. COADAL will not disclose client information to third parties without consent, except as required by law. Clients may request a separate NDA for additional protection.",
        },
        {
          heading: "7. Limitation of Liability",
          body: "COADAL's total liability for any claim arising from our services shall not exceed the total fees paid by the client in the preceding three months. We are not liable for indirect, incidental, or consequential damages including loss of data, revenue, or business opportunities.",
        },
        {
          heading: "8. Warranty & Support",
          body: "COADAL provides a 30-day bug-fix warranty on all development deliverables after final delivery. This covers defects in the agreed deliverables and does not cover new feature requests, third-party service failures, or issues arising from client modifications. Ongoing support is available through separate retainer agreements.",
        },
        {
          heading: "9. Termination",
          body: "Either party may terminate a project engagement with 30 days written notice. Upon termination, the client is liable for payment of all work completed to date. COADAL will deliver all completed work assets upon receipt of outstanding payments.",
        },
        {
          heading: "10. Governing Law",
          body: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.",
        },
      ]}
    />
  );
}
