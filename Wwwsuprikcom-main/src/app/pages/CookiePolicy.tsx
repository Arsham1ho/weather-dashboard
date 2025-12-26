import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function CookiePolicy() {
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: December 24, 2024</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                This Cookie Policy explains how Suprik ("we," "us," or "our") uses cookies and similar tracking technologies when you use our wallet application and website. By using Suprik, you consent to the use of cookies as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. What Are Cookies?</h2>
              <p className="leading-relaxed mb-4">
                Cookies are small text files stored on your device when you visit a website or use an application. They help us recognize your device and remember certain information about your preferences and usage.
              </p>
              <p className="leading-relaxed">
                Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain on your device for a set period or until manually deleted).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl text-purple-300 mb-3">3.1 Essential Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>Purpose:</strong> These cookies are necessary for the basic functionality of Suprik.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing</li>
                    <li>Wallet state preservation</li>
                  </ul>
                  <p className="leading-relaxed mt-3 text-sm text-gray-400">
                    These cookies cannot be disabled as they are critical for the Service to function.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl text-purple-300 mb-3">3.2 Functional Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>Purpose:</strong> Enable enhanced functionality and personalization.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme settings (dark/light mode)</li>
                    <li>Currency display preferences</li>
                    <li>Recently viewed tokens or NFTs</li>
                  </ul>
                  <p className="leading-relaxed mt-3 text-sm text-gray-400">
                    You can disable these cookies, but it may affect your user experience.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl text-purple-300 mb-3">3.3 Analytics Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>Purpose:</strong> Help us understand how users interact with Suprik.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pages visited and features used</li>
                    <li>Time spent in the app</li>
                    <li>Error tracking and debugging</li>
                    <li>Performance monitoring</li>
                  </ul>
                  <p className="leading-relaxed mt-3 text-sm text-gray-400">
                    We use tools like Google Analytics. Data is anonymized and aggregated.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl text-purple-300 mb-3">3.4 Marketing and Advertising Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    <strong>Purpose:</strong> Deliver relevant content and measure campaign effectiveness.
                  </p>
                  <p className="leading-relaxed mb-3">
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Retargeting and remarketing</li>
                    <li>Social media integration</li>
                    <li>Personalized promotions</li>
                    <li>Campaign tracking</li>
                  </ul>
                  <p className="leading-relaxed mt-3 text-sm text-gray-400">
                    These cookies are used only with your consent and can be disabled.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. Third-Party Cookies</h2>
              <p className="leading-relaxed mb-4">
                We may allow third-party services to set cookies on your device for the following purposes:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-purple-300 mb-2">Google Analytics</h3>
                  <p className="leading-relaxed text-sm">
                    Used for usage analytics and performance monitoring.
                    <br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-purple-300 mb-2">Sentry</h3>
                  <p className="leading-relaxed text-sm">
                    Used for error tracking and debugging.
                    <br />
                    <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      Sentry Privacy Policy
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-purple-300 mb-2">Social Media Platforms</h3>
                  <p className="leading-relaxed text-sm">
                    Cookies from platforms like Twitter, Discord, and Telegram for social sharing and authentication.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Local Storage and Similar Technologies</h2>
              <p className="leading-relaxed mb-4">
                In addition to cookies, we use other storage technologies:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-purple-300">Local Storage:</strong> Stores wallet preferences and settings locally on your device</li>
                <li><strong className="text-purple-300">Session Storage:</strong> Temporarily stores session data</li>
                <li><strong className="text-purple-300">IndexedDB:</strong> Stores encrypted wallet data locally</li>
                <li><strong className="text-purple-300">Cache:</strong> Improves app performance by storing frequently accessed data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Your Cookie Choices</h2>
              <p className="leading-relaxed mb-4">
                You have several options to manage cookies:
              </p>

              <div className="space-y-4">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-lg text-purple-300 mb-3">Cookie Settings in Suprik</h3>
                  <p className="leading-relaxed">
                    You can manage your cookie preferences in the app settings under "Privacy & Security" → "Cookie Preferences".
                  </p>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-lg text-purple-300 mb-3">Browser Settings</h3>
                  <p className="leading-relaxed mb-3">
                    Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all third-party cookies</li>
                    <li>Clear all cookies when you close the browser</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-lg text-purple-300 mb-3">Opt-Out Links</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        Google Analytics Opt-Out
                      </a>
                    </li>
                    <li>
                      <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        NAI Opt-Out
                      </a>
                    </li>
                    <li>
                      <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                        DAA Opt-Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="leading-relaxed mt-4 text-yellow-400">
                <strong>Note:</strong> Disabling certain cookies may impact the functionality of Suprik.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Do Not Track Signals</h2>
              <p className="leading-relaxed">
                Some browsers have a "Do Not Track" (DNT) feature that signals websites not to track you. Currently, there is no industry standard for responding to DNT signals. We do not currently respond to DNT signals, but we respect your privacy choices through our cookie settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Mobile Applications</h2>
              <p className="leading-relaxed mb-4">
                Our mobile apps may use mobile identifiers and similar technologies:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-purple-300">Device IDs:</strong> Anonymous identifiers for analytics</li>
                <li><strong className="text-purple-300">Push Notifications:</strong> Tokens for sending notifications</li>
                <li><strong className="text-purple-300">App Analytics:</strong> Usage and crash reporting</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can manage these through your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Security and Wallet Data</h2>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <p className="leading-relaxed mb-4">
                  <strong className="text-green-400">Important Security Notice:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your private keys and seed phrase are NEVER stored in cookies</li>
                  <li>Sensitive wallet data is encrypted locally on your device</li>
                  <li>Cookies do not contain cryptocurrency addresses or balances</li>
                  <li>We cannot access your funds through cookies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time. Changes will be posted in the app and on our website. Your continued use after changes indicates acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">11. Regional Compliance</h2>
              <p className="leading-relaxed mb-4">
                We comply with regional privacy regulations:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-purple-300">GDPR (EU):</strong> Explicit consent for non-essential cookies</li>
                <li><strong className="text-purple-300">CCPA (California):</strong> Right to opt-out of cookie tracking</li>
                <li><strong className="text-purple-300">ePrivacy Directive:</strong> Cookie consent requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">12. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <p className="mb-2"><strong>Email:</strong> privacy@suprik.com</p>
                <p className="mb-2"><strong>Cookie Settings:</strong> Available in app under Settings → Privacy</p>
                <p><strong>Support:</strong> support@suprik.com</p>
              </div>
            </section>

            <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl text-white mb-3">Cookie Consent</h3>
              <p className="leading-relaxed">
                When you first use Suprik, you'll see a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences. You can change these settings at any time through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
