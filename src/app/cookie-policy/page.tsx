import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cookie Policy — COADAL" };

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Legal"
      lastUpdated="January 1, 2025"
      sections={[
        {
          heading: "1. What Are Cookies?",
          body: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used.",
        },
        {
          heading: "2. How We Use Cookies",
          body: [
            "Essential cookies: Required for the website to function properly (session management, security)",
            "Analytics cookies: Help us understand how visitors interact with our website (Google Analytics)",
            "Preference cookies: Remember your settings and preferences for future visits",
            "Marketing cookies: Used to deliver relevant advertisements and track campaign performance",
          ],
        },
        {
          heading: "3. Types of Cookies We Use",
          body: [
            "Session cookies: Temporary cookies that expire when you close your browser",
            "Persistent cookies: Remain on your device for a set period or until you delete them",
            "First-party cookies: Set directly by COADAL's website",
            "Third-party cookies: Set by our partners such as Google Analytics, Meta Pixel, and LinkedIn Insight Tag",
          ],
        },
        {
          heading: "4. Third-Party Cookies",
          body: "We use the following third-party services that may set cookies on your device: Google Analytics (website traffic analysis), Google Ads (conversion tracking), Meta Pixel (Facebook/Instagram advertising), and LinkedIn Insight Tag (professional audience tracking). Each third party has their own privacy and cookie policy.",
        },
        {
          heading: "5. Managing Cookies",
          body: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set. Please note that disabling certain cookies may affect the functionality of our website. Consult your browser's help section for instructions on managing cookies.",
        },
        {
          heading: "6. Cookie Consent",
          body: "By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by clearing cookies in your browser or adjusting your browser settings. For analytics and marketing cookies, you can also opt out directly through the respective third-party tools.",
        },
        {
          heading: "7. Updates to This Policy",
          body: "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we update this policy, we will revise the 'Last Updated' date. We encourage you to review this policy periodically.",
        },
      ]}
    />
  );
}
