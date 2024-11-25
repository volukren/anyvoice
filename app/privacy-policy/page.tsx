export const metadata = {
  title: `Privacy Policy | ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto my-10 ">
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
