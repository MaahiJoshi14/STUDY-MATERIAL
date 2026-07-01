import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FolderTabProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  color?: 'yellow' | 'blue' | 'purple' | 'pink' | 'coral' | 'mint' | 'cream';
  children?: ReactNode; // peeking content
  onClick?: () => void;
  className?: string;
}

export default function FolderTab({
  title,
  subtitle,
  emoji,
  color = 'yellow',
  children,
  onClick,
  className
}: FolderTabProps) {
  const folderColors = {
    yellow: {
      back: 'bg-[#E5991A]',
      front: 'bg-[#FFB236]',
    },
    blue: {
      back: 'bg-[#297BCF]',
      front: 'bg-[#4FA3F7]',
    },
    purple: {
      back: 'bg-[#8E6BB8]',
      front: 'bg-[#B39DDB]',
    },
    pink: {
      back: 'bg-[#E05493]',
      front: 'bg-[#FF7EB9]',
    },
    coral: {
      back: 'bg-[#E04B4B]',
      front: 'bg-[#FF6B6B]',
    },
    mint: {
      back: 'bg-[#29B059]',
      front: 'bg-[#3CD070]',
    },
    cream: {
      back: 'bg-[#D6CDB5]',
      front: 'bg-[#FAF6F0]',
    },
  };

  return (
    <motion.div
      onClick={onClick}
      className={cn("group relative w-full h-[220px] cursor-pointer", className)}
      initial="rest"
      whileHover="hover"
      whileTap="press"
    >
      {/* Folder Tab Back Support */}
      <div className={cn(
        "absolute inset-0 rounded-3xl border-3 border-[#1E1E1E] shadow-[4px_4px_0px_0px_#1E1E1E]",
        folderColors[color].back
      )} />

      {/* Manila Folder Tab Lip */}
      <div 
        className={cn(
          "absolute -top-3 left-6 h-4 w-28 border-t-3 border-x-3 border-[#1E1E1E] rounded-t-xl z-10",
          folderColors[color].front
        )} 
      />

      {/* Peeking Inner Contents (Paper Sheets / Books / Images) */}
      <div className="absolute inset-x-4 top-2 bottom-12 overflow-hidden flex justify-center items-end">
        <motion.div
          variants={{
            rest: { y: 20, rotate: -2, scale: 0.95 },
            hover: { y: -15, rotate: 1, scale: 1.02 },
            press: { y: 0, scale: 0.98 }
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-full flex justify-center"
        >
          {children || (
            <div className="w-[85%] h-36 bg-white border-2 border-[#1E1E1E] rounded-xl shadow-[3px_3px_0px_0px_#1E1E1E] rotate-[-2deg] flex flex-col justify-between p-3">
              <div className="flex justify-between items-center">
                <span className="text-xl">{emoji}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E1E]" />
              </div>
              <div className="h-2 w-12 bg-slate-200 rounded" />
              <div className="h-2 w-16 bg-slate-200 rounded" />
            </div>
          )}
        </motion.div>
      </div>

      {/* Folder Front Cover (overlaps peeking contents) */}
      <div className={cn(
        "absolute inset-x-0 bottom-0 top-10 rounded-b-3xl border-t-3 border-[#1E1E1E] flex flex-col justify-between p-5 z-20 transition-transform duration-200 group-hover:translate-y-1",
        folderColors[color].front
      )}>
        {/* Subtle dot overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-dots rounded-b-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{emoji}</span>
            <span className="font-display font-bold text-[#1E1E1E] text-base leading-tight truncate">
              {title}
            </span>
          </div>
          {subtitle && (
            <p className="text-[11px] font-bold text-[#1E1E1E] opacity-75 uppercase tracking-wider">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative z-10 flex justify-between items-center">
          <span className="text-[10px] font-extrabold uppercase bg-white border-2 border-[#1E1E1E] px-2 py-0.5 rounded-full shadow-[2px_2px_0px_0px_#1E1E1E]">
            OPEN FOLDER
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E1E1E]" />
        </div>
      </div>
    </motion.div>
  );
}
