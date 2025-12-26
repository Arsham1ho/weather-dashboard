import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PhoneMockup from './components/PhoneMockup';
import FloatingElements from './components/FloatingElements';
import {
  Shield,
  Zap,
  Lock,
  ArrowRight,
  Check,
  Menu,
  X,
  Download,
  Smartphone,
  Globe,
  RefreshCw,
  Users,
  ArrowUpRight,
  Sparkles,
  Chrome,
  Twitter,
  Github,
  Youtube,
  Send,
  QrCode,
  Repeat,
  Star,
  Quote,
  Wallet,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user came from a feature page link (send, swap, receive, etc.)
  const isFeaturePage = ['/send', '/receive', '/swap', '/stake', '/nfts', '/activity'].includes(location.pathname);

  // If on a feature page, redirect to home after showing message
  useEffect(() => {
    if (isFeaturePage) {
      navigate('/', { replace: true });
    }
  }, [isFeaturePage, navigate]);

  // Feature cards with different colors
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Self-Custody Security",
      description: "Your keys, your crypto. Full control over your assets with military-grade encryption.",
      color: "#8b5cf6", // Purple
      badge: null
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built on Solana for instant transactions with near-zero fees.",
      color: "#3b82f6", // Blue
      badge: null
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Bank-Grade Protection",
      description: "Multi-layer security with biometric authentication and hardware wallet support.",
      color: "#22c55e", // Green
      badge: "New"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Simple & Intuitive",
      description: "Designed for everyone. Managing your crypto has never been easier.",
      color: "#ec4899", // Pink
      badge: null
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "DeFi Ready",
      description: "Swap, stake, and access DeFi protocols directly from your wallet.",
      color: "#f97316", // Orange
      badge: "Popular"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Multi-Platform",
      description: "Available on iOS, Android, Chrome extension, and desktop apps.",
      color: "#06b6d4", // Cyan
      badge: null
    }
  ];

  const benefits = [
    "No custodial risk - you own your keys",
    "Support for all Solana tokens and NFTs",
    "Seamless DeFi integration",
    "Built-in staking and rewards",
    "Cross-device sync with encryption",
    "24/7 customer support"
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Crypto Trader",
      avatar: "A",
      quote: "Best self-custody wallet I've used. The speed on Solana is incredible, and the UI is so clean!",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      role: "NFT Collector",
      avatar: "S",
      quote: "Managing my NFT collection has never been easier. Love the gallery view and quick transfers.",
      rating: 5
    },
    {
      name: "David Park",
      role: "DeFi Power User",
      avatar: "D",
      quote: "Seamless swaps and staking. This is my go-to wallet for all things Solana. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Beginner",
      avatar: "E",
      quote: "Finally a wallet that's easy to understand! Perfect for someone just getting into crypto.",
      rating: 5
    }
  ];

  // Partner/Integration logos (using text for now)
  const partners = [
    { name: "Solana", icon: "◎" },
    { name: "Jupiter", icon: "♃" },
    { name: "Raydium", icon: "☢" },
    { name: "Magic Eden", icon: "✦" },
    { name: "Marinade", icon: "◈" }
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

      {/* Features Mega Menu Overlay */}
      {featuresOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          style={{
            background: 'linear-gradient(180deg, #050510 0%, #0f0a1a 50%, #050510 100%)',
          }}
        >
          {/* Background gradient orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }}
          />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }}
          />

          {/* Close button */}
          <button
            onClick={() => setFeaturesOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-8 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Logo in corner */}
          <div className="absolute top-4 left-4 md:top-6 md:left-8 flex items-center gap-2 z-10">
            <img
              src="/suprik-logo.png"
              alt="Suprik"
              className="w-10 h-10"
              style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}
            />
            <span
              className="text-2xl font-semibold"
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Suprik
            </span>
          </div>

          {/* Mega Menu Content */}
          <div className="h-full flex relative z-10">
            {/* Feature Cards Grid */}
            <div className="flex-1 pt-24 pb-8 px-4 md:px-8 lg:px-16 overflow-y-auto">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {/* Send Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(249, 115, 22, 0.15)',
                      border: '1px solid rgba(249, 115, 22, 0.3)',
                      boxShadow: '0 4px 20px rgba(249, 115, 22, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(249, 115, 22, 0.2)', border: '1px solid rgba(249, 115, 22, 0.3)' }}
                    >
                      <Send className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">Send</h3>
                      <p className="text-slate-400">Transfer tokens to any wallet instantly</p>
                    </div>
                  </button>

                  {/* Receive Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      boxShadow: '0 4px 20px rgba(168, 85, 247, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(168, 85, 247, 0.2)', border: '1px solid rgba(168, 85, 247, 0.3)' }}
                    >
                      <QrCode className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">Receive</h3>
                      <p className="text-slate-400">Get your wallet address & QR code</p>
                    </div>
                  </button>

                  {/* Swap Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      boxShadow: '0 4px 20px rgba(34, 197, 94, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
                    >
                      <Repeat className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">Swap</h3>
                      <p className="text-slate-400">Exchange tokens seamlessly</p>
                    </div>
                  </button>

                  {/* Stake Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(59, 130, 246, 0.15)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
                    >
                      <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">Stake</h3>
                      <p className="text-slate-400">Earn rewards on your holdings</p>
                    </div>
                  </button>

                  {/* NFTs Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(236, 72, 153, 0.15)',
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      boxShadow: '0 4px 20px rgba(236, 72, 153, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(236, 72, 153, 0.2)', border: '1px solid rgba(236, 72, 153, 0.3)' }}
                    >
                      <Sparkles className="w-8 h-8 text-pink-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">NFTs</h3>
                      <p className="text-slate-400">View & manage your collection</p>
                    </div>
                  </button>

                  {/* Activity Card */}
                  <button
                    onClick={() => {
                      setFeaturesOpen(false);
                      document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative rounded-3xl p-6 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl text-left"
                    style={{
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.1)',
                    }}
                  >
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.3)' }}
                    >
                      <RefreshCw className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="mt-20">
                      <h3 className="text-3xl font-bold text-white mb-2">Activity</h3>
                      <p className="text-slate-400">Track your transaction history</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Explore More */}
            <div
              className="hidden lg:block w-72 pt-24 pb-8 px-6"
              style={{ borderLeft: '1px solid rgba(139, 92, 246, 0.2)' }}
            >
              <div className="mb-8">
                <h4 className="text-sm font-medium text-purple-400 mb-4">Explore More</h4>
                <ul className="space-y-3">
                  <li><a href="/platforms" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Platforms</a></li>
                  <li><Link to="/security" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Security</Link></li>
                  <li><a href="/tokens" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Supported Tokens</a></li>
                  <li><a href="/blog" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-purple-400 mb-4">About Suprik</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">About Us</Link></li>
                  <li><a href="/support" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Support</a></li>
                  <li><a href="/careers" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Careers</a></li>
                  <li><a href="/docs" className="text-lg text-slate-300 hover:text-purple-400 transition-colors">Documentation</a></li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <h4 className="text-sm font-medium text-purple-400 mb-4">Follow</h4>
                <div className="flex gap-3">
                  {[
                    { icon: <Twitter className="w-5 h-5" />, href: "#" },
                    { icon: <MessageCircle className="w-5 h-5" />, href: "#" },
                    { icon: <Github className="w-5 h-5" />, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all"
                      style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40" style={{
        background: 'rgba(5, 5, 16, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 -m-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.img
                  src="/suprik-logo.png"
                  alt="Suprik"
                  className="w-10 h-10 relative z-10"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <span
                className="text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Suprik
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-400 hover:text-white transition-colors"
                  style={{ background: 'rgba(139, 92, 246, 0.1)' }}
                >
                  Features
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About</Link>
              <Link to="/security" className="text-slate-400 hover:text-white transition-colors">Security</Link>
              <a href="/download" className="text-slate-400 hover:text-white transition-colors">Download</a>

              <button
                className="px-6 py-2.5 rounded-xl font-medium text-white transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-2"
              style={{
                borderTop: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              {/* Mobile Features Dropdown */}
              <div>
                <button
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="w-full flex items-center justify-between py-2 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Features</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileFeaturesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-4 pb-2 space-y-1"
                  >
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileFeaturesOpen(false);
                        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-3 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Send className="w-4 h-4" /> Send
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileFeaturesOpen(false);
                        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-3 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <QrCode className="w-4 h-4" /> Receive
                    </button>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileFeaturesOpen(false);
                        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-3 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Repeat className="w-4 h-4" /> Swap
                    </button>
                  </motion.div>
                )}
              </div>

              <Link to="/about" className="block text-slate-400 hover:text-white transition-colors py-2">About</Link>
              <Link to="/security" className="block text-slate-400 hover:text-white transition-colors py-2">Security</Link>
              <button
                className="w-full py-3 mt-2 rounded-xl font-medium text-white transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                }}
              >
                Get Started
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating animated elements */}
        <FloatingElements />

        {/* Background gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Powered by Solana</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold leading-tight">
                Your Keys,
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Your Freedom
                </span>
              </h1>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                The friendly crypto wallet. Buy, store, send and swap tokens with complete security and simplicity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all"
                  style={{
                    background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)',
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Create Wallet
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all"
                  style={{
                    background: 'rgba(15, 10, 26, 0.8)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                  }}
                >
                  <Lock className="w-5 h-5" />
                  I have a wallet
                </motion.button>
              </div>
            </motion.div>

            {/* Hero - Animated Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgba(15, 10, 26, 0.6)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* App Store Rating */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">4.9</div>
                <div className="text-slate-400 text-sm">App Store Rating</div>
              </div>

              {/* User Count */}
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter value={500} suffix="K+" />
                </div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </div>

              {/* Assets Secured */}
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter value={2} prefix="$" suffix="B+" />
                </div>
                <div className="text-slate-400 text-sm">Assets Secured</div>
              </div>

              {/* Uptime */}
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  99.9%
                </div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="border-t border-slate-800 pt-6">
              <p className="text-center text-slate-500 text-sm mb-4">Integrated with</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="text-2xl">{partner.icon}</span>
                    <span className="font-medium">{partner.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
              Why Choose Suprik?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built for security, designed for simplicity. Everything you need to manage your Solana assets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl transition-all duration-300 h-full relative overflow-hidden group"
                style={{
                  background: 'rgba(15, 10, 26, 0.6)',
                  border: `1px solid ${feature.color}40`,
                  boxShadow: `0 4px 20px ${feature.color}15`,
                }}
              >
                {/* Badge */}
                {feature.badge && (
                  <div
                    className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ background: feature.color }}
                  >
                    {feature.badge}
                  </div>
                )}

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative z-10"
                  style={{
                    background: `${feature.color}20`,
                    border: `1px solid ${feature.color}40`,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white mb-3 font-semibold relative z-10">{feature.title}</h3>
                <p className="text-slate-400 relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">
                The Friendly
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Crypto Wallet
                </span>
              </h2>
              <p className="text-xl text-slate-400 mb-6 leading-relaxed">
                Suprik was built with one goal in mind: make crypto accessible to everyone. Whether you're a seasoned trader or just starting out, our wallet provides the perfect balance of security and simplicity.
              </p>
              <p className="text-lg text-slate-500 mb-8">
                Powered by Solana's lightning-fast blockchain, Suprik delivers sub-second transactions with near-zero fees. No more waiting, no more expensive gas fees.
              </p>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all"
                  style={{
                    background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                  }}
                >
                  Learn Our Story
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Wallet className="w-8 h-8" />, title: "Self-Custody", desc: "You control your keys" },
                { icon: <Zap className="w-8 h-8" />, title: "Fast", desc: "Sub-second transactions" },
                { icon: <Shield className="w-8 h-8" />, title: "Secure", desc: "Military-grade encryption" },
                { icon: <Users className="w-8 h-8" />, title: "Community", desc: "500K+ happy users" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: 'rgba(15, 10, 26, 0.6)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                  }}
                >
                  <div className="text-purple-400 mb-3 flex justify-center">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              {/* Security visualization */}
              <div className="relative flex items-center justify-center py-12">
                <motion.div
                  className="absolute w-72 h-72 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div
                  className="relative w-48 h-48 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(15, 10, 26, 0.8)',
                    border: '2px solid rgba(139, 92, 246, 0.4)',
                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)',
                  }}
                >
                  <Shield className="w-20 h-20 text-purple-400" />
                </div>

                {/* Orbiting icons */}
                <motion.div
                  className="absolute w-64 h-64"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full"
                    style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <Lock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 rounded-full"
                    style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full"
                    style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <RefreshCw className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-3 rounded-full"
                    style={{ background: 'rgba(139, 92, 246, 0.2)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">
                Security You Can Trust
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Your assets deserve the highest level of protection. Suprik combines cutting-edge security with uncompromising user experience.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl transition-colors"
                    style={{
                      background: 'rgba(139, 92, 246, 0.05)',
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                      }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                }}
              >
                Learn More About Security
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Setting up your self-custody wallet has never been easier.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Download & Install",
                description: "Get Suprik on your preferred platform. Available for iOS, Android, Chrome, and desktop."
              },
              {
                step: "02",
                title: "Create Your Wallet",
                description: "Set up your wallet in seconds. Secure your seed phrase and enable biometric authentication."
              },
              {
                step: "03",
                title: "Start Transacting",
                description: "Send, receive, stake, and explore the Solana ecosystem with complete confidence."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 rounded-2xl h-full relative overflow-hidden"
                style={{
                  background: 'rgba(15, 10, 26, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.1)',
                }}
              >
                {/* Large step number in background */}
                <div
                  className="absolute top-4 right-4 text-8xl font-bold opacity-5"
                  style={{ color: '#8b5cf6' }}
                >
                  {item.step}
                </div>

                <div className="relative">
                  <div
                    className="text-5xl font-bold mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-2xl text-white mb-3 font-semibold">{item.title}</h3>
                  <p className="text-slate-400 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
              Loved by Users
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See what our community is saying about Suprik.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl h-full flex flex-col"
                style={{
                  background: 'rgba(15, 10, 26, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-purple-500/30 mb-4" />

                {/* Quote */}
                <p className="text-slate-300 mb-6 flex-grow">"{testimonial.quote}"</p>

                {/* User info */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}
            >
              <Lock className="w-5 h-5" />
              I already have a wallet
            </button>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)' }}
            />

            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                  Download Suprik Today
                </h2>
                <p className="text-xl text-slate-400 mb-8">
                  Available on all your favorite platforms. Choose the one that works best for you.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Smartphone className="w-5 h-5" />, label: "Download for", platform: "iOS & Android", badge: "New" },
                    { icon: <Chrome className="w-5 h-5" />, label: "Install", platform: "Browser Extension", badge: "Popular" },
                    { icon: <Download className="w-5 h-5" />, label: "Download for", platform: "Windows & Mac", badge: null },
                    { icon: <Download className="w-5 h-5" />, label: "Download for", platform: "Linux", badge: null },
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-3 p-4 rounded-xl text-left transition-all relative"
                      style={{
                        background: 'rgba(15, 10, 26, 0.8)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                      }}
                    >
                      {item.badge && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium text-white bg-purple-500">
                          {item.badge}
                        </div>
                      )}
                      <div className="text-purple-400">{item.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                        <div className="text-white font-medium">{item.platform}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="hidden lg:flex justify-center"
              >
                <motion.img
                  src="/suprik-logo.png"
                  alt="Suprik Wallet"
                  className="w-48 h-48"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))',
                  }}
                  animate={{
                    rotate: 360,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join hundreds of thousands of users who trust Suprik with their digital assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)',
                }}
              >
                <Sparkles className="w-5 h-5" />
                Create Wallet
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium text-white text-lg transition-all"
                style={{
                  background: 'rgba(15, 10, 26, 0.8)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }}
              >
                Sign In
              </motion.button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Check className="w-5 h-5 text-purple-400" />
              <span className="text-slate-400">Trusted by thousands worldwide</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'rgba(5, 5, 16, 0.9)',
          borderTop: '1px solid rgba(139, 92, 246, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.img
                  src="/suprik-logo.png"
                  alt="Suprik"
                  className="w-10 h-10"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))' }}
                />
                <span
                  className="text-2xl font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Suprik
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                The friendly crypto wallet on Solana.
              </p>
              {/* Social Links in Footer Brand Section */}
              <div className="flex gap-3">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <MessageCircle className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all"
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-purple-400 transition-colors">Features</a></li>
                <li><Link to="/security" className="text-slate-400 hover:text-purple-400 transition-colors">Security</Link></li>
                <li><a href="#download" className="text-slate-400 hover:text-purple-400 transition-colors">Download</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-purple-400 transition-colors">About</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Discord</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                <li><a href="#" className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2"><Youtube className="w-4 h-4" /> YouTube</a></li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}
          >
            <p className="text-slate-500">© 2024 Suprik. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-purple-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-slate-400 hover:text-purple-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
