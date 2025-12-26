import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-purple-300 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: December 24, 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Suprik ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our self-custody cryptocurrency wallet service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl text-purple-300 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Account information (email address, username)</li>
                <li>Wallet preferences and settings</li>
                <li>Support communications</li>
                <li>Feedback and survey responses</li>
              </ul>

              <h3 className="text-xl text-purple-300 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Device information (type, operating system, browser)</li>
                <li>Usage data (features used, time spent)</li>
                <li>IP address and location data</li>
                <li>Transaction metadata (not transaction content)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. Self-Custody and Data Storage</h2>
              <p className="leading-relaxed mb-4">
                <strong className="text-purple-300">Important:</strong> Suprik is a self-custody wallet. This means:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your private keys are stored locally on your device and encrypted</li>
                <li>We NEVER have access to your private keys or seed phrases</li>
                <li>We cannot recover your funds if you lose your private keys</li>
                <li>Blockchain transactions are public and permanent</li>
                <li>You are solely responsible for the security of your wallet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our wallet service</li>
                <li>To improve user experience and app functionality</li>
                <li>To send important service updates and security alerts</li>
                <li>To provide customer support</li>
                <li>To detect and prevent fraud or security threats</li>
                <li>To comply with legal obligations</li>
                <li>To conduct analytics and research (anonymized data)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-purple-300">Service Providers:</strong> Third-party companies that help us operate our service (e.g., cloud hosting, analytics)</li>
                <li><strong className="text-purple-300">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong className="text-purple-300">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-purple-300">With Your Consent:</strong> When you explicitly authorize us to share information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure data transmission using SSL/TLS</li>
                <li>Regular security audits and penetration testing</li>
                <li>Multi-factor authentication options</li>
                <li>Biometric authentication support</li>
              </ul>
              <p className="leading-relaxed mt-4 text-yellow-400">
                <strong>Note:</strong> No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-purple-300">Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-purple-300">Correction:</strong> Update or correct your information</li>
                <li><strong className="text-purple-300">Deletion:</strong> Request deletion of your account and data</li>
                <li><strong className="text-purple-300">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong className="text-purple-300">Data Portability:</strong> Receive your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Blockchain Considerations</h2>
              <p className="leading-relaxed mb-4">
                Please understand that blockchain transactions are:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Publicly visible and permanent on the Solana blockchain</li>
                <li>Pseudonymous but potentially traceable</li>
                <li>Cannot be deleted or modified once confirmed</li>
                <li>Subject to blockchain network fees and policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Third-Party Services</h2>
              <p className="leading-relaxed">
                Our wallet may integrate with third-party DeFi protocols, exchanges, or services. Each third party has its own privacy policy, and we are not responsible for their practices. We recommend reviewing their policies before using their services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed">
                Suprik is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">11. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">12. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the app. Your continued use of Suprik after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">13. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> privacy@suprik.com</p>
                <p className="mb-2"><strong>Address:</strong> Suprik Privacy Team, [Your Address]</p>
                <p><strong>Support:</strong> support@suprik.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
