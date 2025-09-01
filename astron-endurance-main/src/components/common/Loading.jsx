"use client";

import React from "react";
import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex";
import { ScrollProgress } from "../ui/scroll-progress";
import Image from "next/image";

const Loading = () => {
  return (
  <div
      className="fixed inset-0 w-screen h-screen z-50 overflow-hidden"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        width: "100vw",
        height: "100vh",
      }}
    >
      <style jsx>
        {`
        ::-webkit-scrollbar {
          display: none;
        }
        html, body {
          overflow: hidden;
        }
      `}
      </style>

  <ScrollProgress className="z-[60]" />
  <Vortex
        backgroundColor="#000000"
        rangeY={400}
        particleCount={250}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        baseRadius={0.5}
        rangeRadius={3}
        baseHue={120}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="relative mb-4">
              <motion.h1
                className="text-6xl md:text-8xl font-airstrike-bold text-white tracking-wider drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ASTRON
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl font-orbitron-semi text-[#E4572E] tracking-[0.3em] mt-2 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ENDURANCE
              </motion.div>
            </div>

            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-[#E4572E] to-transparent mx-auto shadow-lg shadow-[#E4572E]/50"
              initial={{ width: 0 }}
              animate={{ width: "300px" }}
              transition={{ duration: 2.5, delay: 0.6 }}
            />
          </motion.div>

          <div className="w-80 mx-auto mb-8">
            <div className="relative">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E4572E] to-[#FFD700]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </div>

              <motion.div
                className="absolute -top-1 h-3 w-6 bg-[#E4572E] blur-md opacity-70"
                animate={{
                  x: [0, 320, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.p
                className="text-white/70 font-orbitron-semi text-sm tracking-wide"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                POWERED BY NATURE
              </motion.p>
            </motion.div>
          </div>

          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              className="absolute inset-0 border border-[#E4572E]/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-[#E4572E] rounded-full transform -translate-x-1/2" />
            </motion.div>

            <motion.div
              className="absolute inset-4 border border-[#FFD700]/40 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full transform -translate-x-1/2" />
            </motion.div>

            <motion.div
              className="absolute inset-8 border border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="absolute -top-0.5 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-[#E4572E] to-[#FFD700] rounded-full shadow-lg shadow-[#E4572E]/50" />
            </motion.div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#E4572E] rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-white/50 font-orbitron-semi text-xs tracking-widest">
              ENGINEERING A SOLAR FUTURE
            </p>
          </motion.div>
        </div>
      </Vortex>
    </div>
  );
};

const SimpleLoading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-center select-none">
      <ScrollProgress className="z-[60]" />
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-0"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl">
          <Image
            src="/astron_logo_icon.svg"
            alt="Astron Endurance Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Text Stack */}
      <div className="flex flex-col items-center">
        <motion.span
          className="font-airstrike-bold text-[clamp(2.8rem,10vw,6rem)] leading-none text-white tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ letterSpacing: "0.05em" }}
        >
          ASTRON
        </motion.span>
        <motion.span
          className="font-orbitron-semi text-[clamp(1.1rem,3.2vw,2.4rem)] text-gray-200 tracking-[0.35em] mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          ENDURANCE
        </motion.span>
      </div>

      {/* Three Dots Loader */}
      <div
        className="mt-10 flex items-center justify-center gap-3"
        aria-label="Loading"
        role="status"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full bg-[#E4572E] shadow-[0_0_6px_-1px_rgba(228,87,46,0.8)]"
            initial={{ scale: 0.6, opacity: 0.3 }}
            animate={{ scale: [0.6, 1, 0.6], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.22,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// export default Loading;
export default SimpleLoading;
