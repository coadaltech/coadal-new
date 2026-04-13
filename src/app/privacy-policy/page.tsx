import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy — COADAL" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Legal"
      lastUpdated="January 1, 2025"
      sections={[
        {
          heading: "1. Introduction",
          body: "COADAL Technologies Pvt. Ltd. ('COADAL', 'we', 'us', or 'our') is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website coadal.com or engage our services.",
        },
        {
          heading: "2. Information We Collect",
          body: [
            "Personal identification information (name, email address, phone number, company name)",
            "Project requirements and business information you voluntarily provide via contact or quotation forms",
            "Technical data including IP address, browser type, operating system, and pages visited",
            "Cookies and usage data to improve website performance and user experience",
            "Payment information processed securely through third-party payment processors (we do not store card details)",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          body: [
            "To respond to your enquiries and provide the services you requested",
            "To send project updates, proposals, and service-related communications",
            "To improve our website, services, and client experience",
            "To send marketing communications where you have given us permission to do so",
            "To comply with legal obligations and resolve any disputes",
            "To prevent fraud and ensure the security of our services",
          ],
        },
        {
          heading: "4. Sharing Your Information",
          body: "We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist in operating our website or conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights.",
        },
        {
          heading: "5. Data Retention",
          body: "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Client project data is retained for a minimum of 3 years for contractual and legal purposes. You may request deletion of your data at any time by contacting us.",
        },
        {
          heading: "6. Your Rights",
          body: [
            "Right to access: Request a copy of the personal data we hold about you",
            "Right to rectification: Request correction of inaccurate or incomplete data",
            "Right to erasure: Request deletion of your personal data ('right to be forgotten')",
            "Right to data portability: Receive your data in a structured, machine-readable format",
            "Right to object: Object to our processing of your personal data for marketing purposes",
            "Right to withdraw consent: Withdraw consent at any time where processing is based on consent",
          ],
        },
        {
          heading: "7. Security",
          body: "We implement industry-standard security measures including SSL/TLS encryption, secure servers, and access controls to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "8. Third-Party Links",
          body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policy of every website you visit.",
        },
        {
          heading: "9. Changes to This Policy",
          body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated 'Last Updated' date. We encourage you to review this policy periodically.",
        },
      ]}
    />
  );
}
