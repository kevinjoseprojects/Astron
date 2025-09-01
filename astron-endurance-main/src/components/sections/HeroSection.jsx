"use client";

import React, { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Play,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

const HeroSection = () => {
  const achievements = [
    {
      label: "Kerala Rank",
      value: "#1",
      icon: Trophy,
      color: "from-yellow-500 to-amber-600",
    },
    {
      label: "All India Rank",
      value: "#9",
      icon: Star,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Team Members",
      value: "50+",
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 bg-slate-300 flex items-center justify-center overflow-hidden"
    >
      <ScrollProgress className="z-50" />
      <div className="absolute inset-0 z-10 overflow-hidden">
        <picture className="w-full h-full block">
          <source
            srcSet="/images/astron_images/image-9.jpeg"
            media="(min-width: 1024px)"
          />
          <img
            src="/images/astron_images/image-12.jpeg"
            alt="Team background"
            className="w-full h-full object-cover scale-110 lg:scale-100 transition-transform duration-[1500ms] ease-out"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-black/55 lg:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="leading-none mb-4">
            <span className="block font-airstrike-bold tracking-tight text-[clamp(3.5rem,14vw,13rem)] text-[#E4572E] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
              ASTRON
            </span>
            <span className="block font-orbitron-semi tracking-wide text-[clamp(1.9rem,5vw,15rem)] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
              ENDURANCE
            </span>
          </h1>
        </div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Engineering Tomorrow's Mobility
          </h2>

          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-lg">
            <span className="text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              <Zap size={20} />
              Electric
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              <Target size={20} />
              Innovative
            </span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="text-[#E4572E] flex items-center gap-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              <Award size={20} />
              Sustainable
            </span>
          </div>
        </motion.div>

        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 text-gray-200 leading-relaxed px-4 md:bg-transparent rounded-xl md:rounded-none py-4 md:py-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          From solar-powered innovation to electric excellence - we're building
          the future of sustainable mobility, one competition at a time.
        </motion.p>

        <motion.div
          className="flex justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-[#E4572E] hover:bg-[#E74D24] text-white px-8 py-6 text-lg rounded-full shadow hover:shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              <span>Explore Our Journey</span>
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
