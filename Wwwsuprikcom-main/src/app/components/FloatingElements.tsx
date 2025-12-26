import { motion } from 'motion/react';

// Floating crypto icons/shapes for visual interest
const floatingItems = [
  { icon: '◎', color: '#9945FF', size: 40, x: '10%', y: '20%', delay: 0 },
  { icon: '♦', color: '#627EEA', size: 30, x: '85%', y: '15%', delay: 0.5 },
  { icon: '₿', color: '#F7931A', size: 35, x: '5%', y: '70%', delay: 1 },
  { icon: '◈', color: '#00D395', size: 28, x: '90%', y: '60%', delay: 1.5 },
  { icon: '⬡', color: '#8b5cf6', size: 45, x: '15%', y: '85%', delay: 0.3 },
  { icon: '◇', color: '#3b82f6', size: 25, x: '80%', y: '80%', delay: 0.8 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute flex items-center justify-center rounded-xl"
          style={{
            left: item.x,
            top: item.y,
            width: item.size,
            height: item.size,
            background: `${item.color}15`,
            border: `1px solid ${item.color}30`,
            color: item.color,
            fontSize: item.size * 0.5,
            boxShadow: `0 0 20px ${item.color}20`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            delay: item.delay,
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          left: '50%',
          top: '30%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          left: '20%',
          top: '60%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: [50, -50, 50],
          y: [30, -30, 30],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
