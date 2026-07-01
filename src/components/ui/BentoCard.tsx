import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'coral' | 'blue' | 'yellow' | 'mint' | 'pink' | 'purple' | 'cream';
  onClick?: () => void;
  hoverScale?: boolean;
  delay?: number;
}

export default function BentoCard({
  children,
  className,
  bgColor = 'white',
  onClick,
  hoverScale = true,
  delay = 0,
}: BentoCardProps) {
  const bgColors = {
    white: 'bg-white',
    cream: 'bg-[#F9F5EE]',
    coral: 'bg-[#FF6B6B]',
    blue: 'bg-[#4FA3F7]',
    yellow: 'bg-[#FFB236]',
    mint: 'bg-[#3CD070]',
    pink: 'bg-[#FF7EB9]',
    purple: 'bg-[#B39DDB]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: delay 
      }}
      whileHover={hoverScale ? { 
        y: -4, 
        x: -2,
        boxShadow: '8px 8px 0px 0px #1E1E1E' 
      } : {}}
      whileTap={onClick ? { 
        y: 2, 
        x: 2, 
        boxShadow: '2px 2px 0px 0px #1E1E1E' 
      } : {}}
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-3xl border-3 border-[#1E1E1E] p-6 shadow-[5px_5px_0px_0px_#1E1E1E]',
        bgColors[bgColor],
        onClick ? 'cursor-pointer' : '',
        className
      )}
    >
      {/* Subtle halftone/dots overlay for textured artistic look */}
      <div className="absolute inset-0 opacity-1 pointer-events-none bg-dots" />
      
      {/* Decorative vector star/doodle sometimes */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
