/*const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
     <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;*/

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const blobs = [
  { top: "10%", left: "20%", size: 120 },
  { top: "60%", left: "70%", size: 160 },
  { top: "30%", left: "50%", size: 100 },
];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-12 overflow-hidden rounded-xl">
      
      {blobs.map((blob, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-20 blur-2xl"
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6 + idx, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
          }}
        />
      ))}

      
      <div className="relative z-10 max-w-md text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-white/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
