import type { Metadata } from "next";

// I need your help to write a simple privacy policy for my website. Here is some context:
//   - Website: https://anyvoice.app
//   - Name: AnyVoice
// - Description: AI voice cloning tool
// - User data collected: Email and payment information
// - Non-personal data collected: web cookies
// - Purpose of data collection: Order processing
// - Data sharing: No data is shared with third parties
// - Children's privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: hi@anyvoice.app
//
// Please write a simple privacy policy for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata: Metadata = {
  title: `Privacy Policy - AnyVoice`,
  alternates: {
    canonical: "https://anyvoice.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <h1 className="text-xl font-bold">Privacy Policy</h1>
      <pre
        className="leading-relaxed whitespace-pre-wrap"
        style={{ fontFamily: "sans-serif" }}
      >
        {`
Last updated: November 25, 2024

1. Introduction
Welcome to AnyVoice ("we," "our," or "us"). This Privacy Policy explains how we collect, use, and protect your information when you use our AI voice cloning service at https://anyvoice.app.

2. Information We Collect
We collect the following types of information:

2.1. Personal Information
- Email address
- Payment information

2.2. Non-Personal Information
- Web cookies and usage data

3. How We Use Your Information
We collect and use your information solely for:
- Processing your orders
- Communicating with you about your service
- Maintaining and improving our website
- Sending important updates about our service

4. Cookie Policy
Our website uses cookies to enhance your browsing experience. These cookies help us understand how you interact with our website and allow us to improve our services.

5. Data Sharing and Disclosure
We do not share, sell, or disclose your personal information with third parties. Your information remains confidential and is only used for the purposes stated in this policy.

6. Data Security
We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.

7. Children's Privacy
We do not knowingly collect or maintain information from persons under 13 years of age. If we learn that personal information of persons under 13 has been collected, we will take appropriate steps to delete this information.

8. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. We will notify you of any changes by sending you an email and posting the new Privacy Policy on this page.

9. Contact Information
If you have any questions about this Privacy Policy, please contact us at:
Email: hi@anyvoice.app

10. Your Rights
You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Withdraw consent for data collection

By using our website, you agree to this Privacy Policy`}
      </pre>
    </div>
  );
}
