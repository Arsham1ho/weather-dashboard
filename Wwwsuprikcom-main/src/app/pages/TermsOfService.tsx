import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last Updated: December 24, 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using Suprik ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">
                Suprik is a self-custody cryptocurrency wallet built on the Solana blockchain. The Service provides:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Wallet creation and management</li>
                <li>Cryptocurrency storage and transactions</li>
                <li>Integration with Solana decentralized applications (dApps)</li>
                <li>Staking and DeFi access</li>
                <li>NFT storage and management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. Self-Custody Wallet</h2>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-4">
                <p className="leading-relaxed mb-4">
                  <strong className="text-red-400">IMPORTANT - READ CAREFULLY:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Suprik is a NON-CUSTODIAL wallet. We do NOT control, access, or store your private keys</li>
                  <li>You are SOLELY RESPONSIBLE for securing your seed phrase and private keys</li>
                  <li>We CANNOT recover your wallet if you lose your seed phrase</li>
                  <li>We CANNOT reverse, cancel, or refund transactions</li>
                  <li>Loss of private keys means PERMANENT loss of access to your funds</li>
                </ul>
              </div>
              <p className="leading-relaxed text-yellow-400">
                By using Suprik, you acknowledge that you understand and accept the risks associated with self-custody wallets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Securely store your seed phrase offline</li>
                <li>Not share your private keys with anyone, including Suprik employees</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to hack, reverse engineer, or compromise the Service</li>
                <li>Report any unauthorized access or security breaches immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Prohibited Activities</h2>
              <p className="leading-relaxed mb-4">You may NOT use Suprik to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Engage in money laundering or terrorist financing</li>
                <li>Violate any laws, regulations, or sanctions</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malware, viruses, or harmful code</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Manipulate or disrupt the Service</li>
                <li>Use automated systems (bots) without authorization</li>
                <li>Engage in market manipulation or fraudulent activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Fees and Payments</h2>
              <p className="leading-relaxed mb-4">
                Suprik is free to download and use. However, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Blockchain network fees (gas fees) for transactions</li>
                <li>Third-party service fees (exchanges, DeFi protocols)</li>
                <li>Any future premium features we may introduce</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to introduce fees for certain features with prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Risks and Disclaimers</h2>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-4">
                <p className="leading-relaxed mb-4">
                  <strong className="text-yellow-400">Cryptocurrency Risks:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cryptocurrency values are highly volatile and can change rapidly</li>
                  <li>You may lose some or all of your investment</li>
                  <li>Transactions are irreversible once confirmed on the blockchain</li>
                  <li>Smart contracts may contain bugs or vulnerabilities</li>
                  <li>Regulatory changes may impact cryptocurrency usage</li>
                  <li>Network congestion may delay transactions or increase fees</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Suprik is provided "AS IS" without warranties of any kind</li>
                <li>We are NOT liable for any loss of funds, data, or profits</li>
                <li>We are NOT responsible for third-party services, dApps, or protocols</li>
                <li>We are NOT liable for network failures, bugs, or security breaches</li>
                <li>Our total liability shall not exceed $100 USD</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless Suprik, its officers, directors, employees, and agents from any claims, losses, damages, or expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Third-Party Services</h2>
              <p className="leading-relaxed">
                Suprik may integrate with third-party services, dApps, exchanges, and DeFi protocols. We do not control these services and are not responsible for their content, policies, or actions. Use of third-party services is at your own risk and subject to their terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">11. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content, trademarks, and intellectual property related to Suprik are owned by us or our licensors. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Copy, modify, or distribute our software without permission</li>
                <li>Use our trademarks without authorization</li>
                <li>Create derivative works based on our Service</li>
                <li>Remove or alter copyright notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">12. Privacy and Data</h2>
              <p className="leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. By using Suprik, you consent to the collection and use of information as described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">13. Account Termination</h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Suspend or terminate your account for violation of these Terms</li>
                <li>Refuse service to anyone for any reason</li>
                <li>Modify or discontinue the Service at any time</li>
              </ul>
              <p className="leading-relaxed mt-4 text-yellow-400">
                <strong>Important:</strong> Since Suprik is self-custody, your funds remain on the blockchain even if your account is terminated. You can always access your funds using your seed phrase in another compatible wallet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">14. Governing Law and Dispute Resolution</h2>
              <p className="leading-relaxed mb-4">
                These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Good faith negotiations</li>
                <li>Binding arbitration (if negotiations fail)</li>
                <li>Jurisdiction in [Your Courts]</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You waive the right to participate in class action lawsuits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">15. Compliance and KYC</h2>
              <p className="leading-relaxed">
                We may require identity verification (Know Your Customer - KYC) to comply with anti-money laundering (AML) regulations. Failure to provide required information may result in limited access to certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">16. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">17. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Suprik regarding the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">18. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> legal@suprik.com</p>
                <p className="mb-2"><strong>Address:</strong> Suprik Legal Team, [Your Address]</p>
                <p><strong>Support:</strong> support@suprik.com</p>
              </div>
            </section>

            <div className="bg-purple-900/30 border border-purple-500/40 rounded-lg p-6 mt-8">
              <p className="leading-relaxed">
                By clicking "I Accept" or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
