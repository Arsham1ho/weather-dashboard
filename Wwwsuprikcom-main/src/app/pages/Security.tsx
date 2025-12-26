import { ArrowLeft, Shield, Lock, Eye, Key, Fingerprint, Server, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export default function Security() {
  const securityFeatures = [
    {
      icon: <Key className="w-6 h-6" />,
      title: "Self-Custody",
      description: "Your private keys never leave your device. We never have access to your funds or seed phrase."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All sensitive data is encrypted using AES-256, the same standard used by governments and banks."
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Authentication",
      description: "Secure your wallet with Face ID, Touch ID, or fingerprint authentication for quick and secure access."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Privacy First",
      description: "We don't track your transactions or share your data with third parties. Your activity is yours alone."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Decentralized Infrastructure",
      description: "Connect directly to the Solana blockchain. No intermediaries, no single points of failure."
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Scam Protection",
      description: "Built-in warnings for suspicious transactions and malicious contracts to keep you safe."
    }
  ];

  const securityPractices = [
    "Regular third-party security audits",
    "Open-source code for transparency",
    "Bug bounty program for security researchers",
    "24/7 security monitoring",
    "Secure development lifecycle (SDL)",
    "No collection of seed phrases or private keys"
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(180deg, #050510 0%, #0f0a1a 50%, #050510 100%)',
      }}
    >
      {/* Grain Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-purple-300 hover:text-white hover:bg-purple-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              <Shield className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl text-white mb-6 font-bold">
              Security You Can Trust
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Your assets deserve the highest level of protection. Suprik is built from the ground up with security as the foundation.
            </p>
          </motion.div>

          {/* Security Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(15, 10, 26, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-purple-400"
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Self-Custody Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-8 md:p-12 mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <h2 className="text-3xl text-white font-bold mb-6">What is Self-Custody?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Self-custody means you have complete control over your cryptocurrency. Unlike centralized exchanges where a company holds your assets, Suprik ensures that <strong className="text-purple-300">only you</strong> have access to your private keys.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Your seed phrase is generated and stored locally on your device. We never see it, never store it, and never have access to it. This is the gold standard of crypto security.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg text-white font-semibold mb-4">This means:</h4>
                {[
                  "No one can freeze your funds",
                  "No one can block your transactions",
                  "No company bankruptcy can affect your assets",
                  "Complete financial sovereignty",
                  "True ownership of your crypto"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-8 md:p-12 mb-16"
            style={{
              background: 'rgba(15, 10, 26, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            }}
          >
            <h2 className="text-3xl text-white font-bold mb-8">Our Security Practices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {securityPractices.map((practice, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: 'rgba(139, 92, 246, 0.05)' }}>
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-slate-300">{practice}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: 'rgba(15, 10, 26, 0.6)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl text-white font-bold mb-2">Stay Safe: Best Practices</h2>
                <p className="text-slate-400">Follow these guidelines to keep your assets secure</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-300">
              <div className="p-4 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.05)' }}>
                <strong className="text-orange-300">Never share your seed phrase.</strong> Suprik will never ask for it. Anyone who asks is trying to scam you.
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.05)' }}>
                <strong className="text-orange-300">Write down your seed phrase</strong> and store it in a safe, offline location. Never store it digitally.
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.05)' }}>
                <strong className="text-orange-300">Enable biometric authentication</strong> for an extra layer of security on your device.
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'rgba(249, 115, 22, 0.05)' }}>
                <strong className="text-orange-300">Verify transaction details</strong> carefully before signing any transaction.
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/#download">
              <button
                className="px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)',
                }}
              >
                Download Suprik
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
