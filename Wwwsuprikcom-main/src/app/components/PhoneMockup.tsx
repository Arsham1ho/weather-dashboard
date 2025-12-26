import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  QrCode,
  ArrowUpRight,
  ArrowDownLeft,
  Repeat,
  Wallet,
  TrendingUp,
  Bell,
  Settings,
  Home,
  Search,
  BarChart3,
  ChevronRight,
  Check
} from 'lucide-react';

// Simulated token data
const tokens = [
  { symbol: 'SOL', name: 'Solana', balance: '12.847', value: '$2,456.32', change: '+5.2%', color: '#9945FF', icon: '◎' },
  { symbol: 'USDC', name: 'USD Coin', balance: '1,250.00', value: '$1,250.00', change: '0.0%', color: '#2775CA', icon: '$' },
  { symbol: 'RAY', name: 'Raydium', balance: '156.23', value: '$312.46', change: '+12.4%', color: '#6F5ACD', icon: '☢' },
  { symbol: 'JUP', name: 'Jupiter', balance: '89.50', value: '$178.11', change: '+8.7%', color: '#3AB77F', icon: '♃' },
];

// Screen components
function HomeScreen() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <span className="text-white text-sm font-medium">Main Wallet</span>
          </div>
          <div className="flex gap-2">
            <Bell className="w-5 h-5 text-slate-400" />
            <Settings className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Balance */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-4"
        >
          <p className="text-slate-400 text-xs mb-1">Total Balance</p>
          <motion.p
            className="text-3xl font-bold text-white"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            $4,196.89
          </motion.p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs">+$156.32 (3.87%)</span>
          </div>
        </motion.div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 py-3">
          {[
            { icon: <ArrowUpRight className="w-4 h-4" />, label: 'Send', color: 'from-orange-500 to-orange-600' },
            { icon: <ArrowDownLeft className="w-4 h-4" />, label: 'Receive', color: 'from-purple-500 to-purple-600' },
            { icon: <Repeat className="w-4 h-4" />, label: 'Swap', color: 'from-green-500 to-green-600' },
          ].map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-1"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white`}>
                {action.icon}
              </div>
              <span className="text-[10px] text-slate-400">{action.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Token list */}
      <div className="flex-1 px-4 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-xs">Tokens</span>
          <span className="text-purple-400 text-xs">See all</span>
        </div>
        <div className="space-y-2">
          {tokens.map((token, i) => (
            <motion.div
              key={token.symbol}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center justify-between p-2 rounded-xl"
              style={{ background: 'rgba(139, 92, 246, 0.1)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: token.color }}
                >
                  {token.icon}
                </div>
                <div>
                  <p className="text-white text-xs font-medium">{token.symbol}</p>
                  <p className="text-slate-500 text-[10px]">{token.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white text-xs font-medium">{token.balance}</p>
                <p className={`text-[10px] ${token.change.startsWith('+') ? 'text-green-400' : 'text-slate-500'}`}>
                  {token.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="px-4 py-2 flex justify-around border-t border-slate-800">
        {[
          { icon: <Home className="w-4 h-4" />, active: true },
          { icon: <Search className="w-4 h-4" />, active: false },
          { icon: <Repeat className="w-4 h-4" />, active: false },
          { icon: <BarChart3 className="w-4 h-4" />, active: false },
        ].map((item, i) => (
          <div key={i} className={item.active ? 'text-purple-400' : 'text-slate-600'}>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function SendScreen() {
  const [amount, setAmount] = useState('0');

  useEffect(() => {
    const timer = setTimeout(() => setAmount('25'), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <ChevronRight className="w-5 h-5 text-slate-400 rotate-180" />
        <span className="text-white text-sm font-medium">Send SOL</span>
        <div className="w-5" />
      </div>

      {/* Amount input */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-4xl font-bold text-white">{amount}</span>
            <span className="text-xl text-slate-400">SOL</span>
          </div>
          <p className="text-slate-500 text-xs mt-1">≈ $4,782.50</p>
        </motion.div>

        {/* Recipient */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full p-3 rounded-xl mb-4"
          style={{ background: 'rgba(139, 92, 246, 0.1)' }}
        >
          <p className="text-slate-500 text-[10px] mb-1">To</p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
              A
            </div>
            <span className="text-white text-xs">alex.sol</span>
          </div>
        </motion.div>

        {/* Fee */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full flex justify-between text-xs mb-4"
        >
          <span className="text-slate-500">Network fee</span>
          <span className="text-slate-400">~0.000005 SOL</span>
        </motion.div>

        {/* Send button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full py-3 rounded-xl font-medium text-white text-sm"
          style={{ background: 'linear-gradient(90deg, #f97316 0%, #ea580c 100%)' }}
        >
          Send 25 SOL
        </motion.button>
      </div>
    </div>
  );
}

function SwapScreen() {
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSwapping(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <ChevronRight className="w-5 h-5 text-slate-400 rotate-180" />
        <span className="text-white text-sm font-medium">Swap</span>
        <Settings className="w-5 h-5 text-slate-400" />
      </div>

      {/* Swap interface */}
      <div className="flex-1 px-4 py-4">
        {/* From */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-3 rounded-xl mb-2"
          style={{ background: 'rgba(139, 92, 246, 0.1)' }}
        >
          <p className="text-slate-500 text-[10px] mb-2">You pay</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">1.5</span>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: 'rgba(153, 69, 255, 0.2)' }}>
              <div className="w-5 h-5 rounded-full bg-[#9945FF] flex items-center justify-center text-white text-[10px]">◎</div>
              <span className="text-white text-xs">SOL</span>
            </div>
          </div>
          <p className="text-slate-500 text-[10px] mt-1">≈ $287.25</p>
        </motion.div>

        {/* Swap icon */}
        <motion.div
          className="flex justify-center -my-1 relative z-10"
          animate={{ rotate: swapping ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <Repeat className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        {/* To */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="p-3 rounded-xl"
          style={{ background: 'rgba(139, 92, 246, 0.1)' }}
        >
          <p className="text-slate-500 text-[10px] mb-2">You receive</p>
          <div className="flex items-center justify-between">
            <motion.span
              className="text-2xl font-bold text-white"
              animate={{ opacity: swapping ? 1 : 0.5 }}
            >
              {swapping ? '287.12' : '---'}
            </motion.span>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: 'rgba(39, 117, 202, 0.2)' }}>
              <div className="w-5 h-5 rounded-full bg-[#2775CA] flex items-center justify-center text-white text-[10px]">$</div>
              <span className="text-white text-xs">USDC</span>
            </div>
          </div>
          <p className="text-slate-500 text-[10px] mt-1">≈ $287.12</p>
        </motion.div>

        {/* Rate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between text-[10px] mt-3 px-1"
        >
          <span className="text-slate-500">Rate</span>
          <span className="text-slate-400">1 SOL = 191.41 USDC</span>
        </motion.div>

        {/* Swap button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full py-3 rounded-xl font-medium text-white text-sm mt-4"
          style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)' }}
        >
          {swapping ? 'Swap Now' : 'Finding best rate...'}
        </motion.button>
      </div>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mb-4"
      >
        <Check className="w-8 h-8 text-white" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white text-lg font-semibold mb-1"
      >
        Transaction Successful!
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-slate-400 text-xs text-center"
      >
        Your swap of 1.5 SOL to 287.12 USDC has been completed.
      </motion.p>
    </div>
  );
}

const screens = [
  { id: 'home', component: HomeScreen },
  { id: 'send', component: SendScreen },
  { id: 'swap', component: SwapScreen },
  { id: 'success', component: SuccessScreen },
];

export default function PhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentScreenComponent = screens[currentScreen].component;

  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 -m-8 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Phone frame */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-[220px] h-[450px] rounded-[40px] p-2"
        style={{
          background: 'linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 100%)',
          boxShadow: '0 25px 80px -20px rgba(139, 92, 246, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.2), inset 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

        {/* Screen */}
        <div
          className="relative w-full h-full rounded-[32px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0a0a14 0%, #0f0a1a 100%)',
          }}
        >
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-5 pt-1 z-10">
            <span className="text-white text-[10px] font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-[3px] h-[10px] bg-white rounded-sm" style={{ opacity: i <= 3 ? 1 : 0.3 }} />
                ))}
              </div>
              <Wallet className="w-3 h-3 text-white ml-1" />
            </div>
          </div>

          {/* Screen content */}
          <div className="pt-8 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <CurrentScreenComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
      </motion.div>

      {/* Screen indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {screens.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentScreen ? 'bg-purple-500 w-6' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
