"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const weddingDate = new Date("2026-08-16T17:00:00+05:30").getTime();

function getTimeLeft() {
  const remaining = Math.max(0, weddingDate - Date.now());
  return {
    Days: Math.floor(remaining / 86_400_000),
    Hours: Math.floor((remaining / 3_600_000) % 24),
    Minutes: Math.floor((remaining / 60_000) % 60),
    Seconds: Math.floor((remaining / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto mt-6" aria-label="Countdown to the engagement celebration">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div 
          className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border border-[#C9A24B]/40 bg-gradient-to-b from-[#3A1015]/80 via-[#2D0B10]/80 to-[#1F070A]/90 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(201,162,75,0.3)] transition-all hover:border-[#C9A24B]" 
          key={label}
        >
          <div className="overflow-hidden h-9 sm:h-12 flex items-center justify-center">
            <motion.span
              key={value}
              initial={{ opacity: 0.2, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-serif font-bold text-[#FFF0D4] leading-none"
              style={{ textShadow: "0 2px 10px rgba(212, 175, 55, 0.4)", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {String(value).padStart(2, "0")}
            </motion.span>
          </div>
          <span className="mt-1.5 text-[0.65rem] sm:text-xs tracking-[0.2em] font-semibold text-[#D4AF37] uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
