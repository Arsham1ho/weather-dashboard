import { ArrowLeft, Users, Target, Heart, Zap, Globe, Award, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "User First",
      description: "Every decision we make starts with one question: how does this benefit our users?"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Simplicity",
      description: "Crypto shouldn't be complicated. We strip away complexity to deliver intuitive experiences."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trust",
      description: "We build trust through transparency, security, and unwavering commitment to your privacy."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible in web3, always staying ahead of the curve."
    }
  ];

  const milestones = [
    { year: "2023", title: "Founded", description: "Suprik was born with a vision to make crypto accessible to everyone" },
    { year: "2023", title: "Beta Launch", description: "Released our first public beta to early adopters" },
    { year: "2024", title: "Public Release", description: "Launched on iOS, Android, and browser extensions" },
    { year: "2024", title: "500K+ Users", description: "Reached half a million active users worldwide" },
    { year: "2025", title: "DeFi Integration", description: "Full Jupiter swap integration and staking features" }
  ];

  const team = [
    { name: "Building in Stealth", role: "Our team consists of engineers and designers from leading tech and crypto companies" }
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
      <div className="absolute top-40 right-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
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
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img
                src="/suprik-logo.png"
                alt="Suprik"
                className="w-24 h-24"
                style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}
              />
            </motion.div>
            <h1 className="text-4xl md:text-6xl text-white mb-6 font-bold">
              About Suprik
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make cryptocurrency accessible, secure, and delightful for everyone.
              Suprik is the friendly wallet that puts you in control of your digital assets.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl text-white font-bold">Our Mission</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To democratize access to decentralized finance by creating the most user-friendly,
                secure, and powerful self-custody wallet on Solana. We believe everyone deserves
                financial sovereignty, and we're building the tools to make it happen.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl text-white font-bold">Our Vision</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                A world where managing crypto is as simple as using your favorite apps.
                Where security doesn't come at the cost of usability. Where everyone,
                from beginners to power users, feels at home in web3.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl text-white font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: 'rgba(15, 10, 26, 0.6)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-400"
                    style={{
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-lg text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl text-white font-bold text-center mb-8">Our Journey</h2>
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(15, 10, 26, 0.6)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                      }}
                    >
                      {milestone.year.slice(2)}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl text-white font-semibold">{milestone.title}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "500K+", label: "Active Users" },
              { value: "$2B+", label: "Assets Secured" },
              { value: "4.9", label: "App Store Rating" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: 'rgba(15, 10, 26, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl p-8 md:p-12 text-center mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl text-white font-bold mb-4">Built by Experts</h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our team brings together decades of experience from leading technology and cryptocurrency companies.
              We've built products used by millions of people and are passionate about bringing the same level
              of quality and innovation to the Solana ecosystem.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl text-white font-bold mb-4">Join the Suprik Community</h2>
            <p className="text-slate-400 mb-8">Be part of the future of crypto wallets</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a
                href="mailto:hello@suprik.com"
                className="px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all hover:scale-105"
                style={{
                  background: 'rgba(15, 10, 26, 0.8)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
