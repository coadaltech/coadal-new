import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Security — COADAL" };

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      subtitle="Trust & Safety"
      lastUpdated="January 1, 2025"
      sections={[
        {
          heading: "Our Commitment to Security",
          body: "At COADAL, security is not an afterthought — it is built into every layer of our work. We follow industry best practices to protect client data, project assets, and our own infrastructure. This page outlines our security measures and how we handle vulnerabilities.",
        },
        {
          heading: "Data Security",
          body: [
            "All data in transit is encrypted using TLS 1.2 or higher (HTTPS)",
            "Sensitive data at rest is encrypted using AES-256 encryption",
            "Access to client data is restricted on a need-to-know basis",
            "We use role-based access control (RBAC) across all internal systems",
            "Regular security audits and code reviews are part of our development process",
          ],
        },
        {
          heading: "Infrastructure Security",
          body: [
            "Production infrastructure hosted on ISO 27001-certified cloud providers (AWS, Vercel)",
            "Automatic security patching and dependency updates via CI/CD pipelines",
            "DDoS protection and Web Application Firewall (WAF) on all production deployments",
            "Database backups performed daily with 30-day retention",
            "Multi-factor authentication (MFA) enforced on all internal admin accounts",
          ],
        },
        {
          heading: "Application Security",
          body: [
            "OWASP Top 10 vulnerabilities addressed in all web and mobile applications",
            "Input validation and output encoding to prevent XSS and SQL injection",
            "CSRF protection on all state-changing requests",
            "Secure HTTP headers (CSP, HSTS, X-Frame-Options) applied by default",
            "Dependency vulnerability scanning using automated tools in CI pipelines",
          ],
        },
        {
          heading: "Client Project Security",
          body: "All client code repositories are hosted in private version-controlled environments. Access is limited to team members directly working on the project. We sign NDAs on request and handle sensitive business data with the utmost discretion. Client credentials and API keys are stored in encrypted secret managers — never in code.",
        },
        {
          heading: "Payment Security",
          body: "COADAL does not store any payment card details. All transactions are processed through PCI DSS-compliant payment gateways (Razorpay, Stripe). Our website uses SSL/TLS certificates to secure all communication. You should never share your payment credentials with anyone claiming to represent COADAL outside of our official payment portals.",
        },
        {
          heading: "Reporting a Vulnerability",
          body: "If you discover a security vulnerability in our website or any service we have built, we ask that you report it responsibly. Please email us at info@coadal.com with details of the vulnerability. Do not publicly disclose the issue until we have had a chance to investigate and address it. We commit to acknowledging reports within 48 hours and resolving critical issues within 7 days.",
        },
        {
          heading: "Incident Response",
          body: "In the event of a security incident affecting client data, COADAL will notify affected clients within 72 hours of becoming aware of the breach. We maintain an incident response plan and conduct post-incident reviews to prevent recurrence.",
        },
        {
          heading: "Certifications & Compliance",
          body: [
            "GDPR compliant — data processing agreements available on request",
            "NDAs available for all client engagements",
            "All team members receive annual security awareness training",
            "We follow ISO 27001 guidelines as a framework for information security management",
          ],
        },
      ]}
    />
  );
}
