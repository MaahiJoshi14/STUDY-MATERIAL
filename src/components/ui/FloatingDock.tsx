import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, BookOpen, Trophy } from 'lucide-react';

export default function FloatingDock() {
  const location = useLocation();
  const activePath = location.pathname;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: BookOpen, label: 'Library' },
    { path: '/quiz', icon: Trophy, label: 'Quiz' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-3 bg-white border-3 border-[#1E1E1E] rounded-full px-4 py-2.5 shadow-[4px_4px_0px_0px_#1E1E1E] backdrop-blur-md"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative p-3 rounded-full group cursor-pointer"
            >
              {isActive && (
                <motion.span
                  layoutId="activeDockBubble"
                  className="absolute inset-0 bg-[#FFB236] border-2 border-[#1E1E1E] rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex items-center justify-center"
              >
                <Icon 
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? 'text-[#1E1E1E]' : 'text-slate-500 group-hover:text-[#1E1E1E]'
                  }`} 
                />
              </motion.div>
              
              {/* Tooltip on Hover */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-[#1E1E1E] text-white text-[10px] font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap neo-shadow-sm border-2 border-white">
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
