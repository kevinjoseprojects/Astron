"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Lightbulb, Target, Trophy, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Kerala Rank 1",
      description: "Top position in ESVC 2025",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Award,
      title: "AIR 9",
      description: "All India Rank in ESVC 2025",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "50+ Members",
      description: "Diverse team of engineers",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lightbulb,
      title: "Founded 2024",
      description: "Latest addition to SOE CUSAT",
      color: "from-purple-500 to-violet-600",
    },
  ];

  const stats = [
    { number: "1000+", label: "Hours of R&D", delay: 0.2 },
    { number: "50+", label: "Team Members", delay: 0.4 },
    { number: "2", label: "Major Competitions", delay: 0.6 },
    { number: "1", label: "Kerala Rank", delay: 0.8 },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-300 flex items-center justify-center py-20 border-y-[0.05px] border-gray-400"
    >
      <ScrollProgress className="z-50" />
      <div className="container mx-auto px-6 sm:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6">
            About Astron Endurance
          </h2>
          <div className="w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-4xl mx-auto">
            Founded in 2024 by SOE CUSAT students, Astron Endurance is driven by
            a vision of solar-powered mobility. We compete in national
            competitions with innovative electric vehicles, pushing the
            boundaries of sustainable transportation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto h-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-airstrike-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-orbitron-semi text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group h-full"
            >
              <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 hover:cursor-pointer group-hover:-translate-y-2 group-hover:scale-[1.02] h-full flex flex-col">
                <div className="h-2 bg-[#E4572E]" />

                <CardContent className="p-6 text-center flex flex-col flex-1">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E4572E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-airstrike-bold text-white mb-3 group-hover:text-[#E4572E] transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-sm font-orbitron-semi text-gray-300 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  <div className="mt-auto" />
                  <div className="w-12 h-0.5 bg-[#E4572E] mx-auto mt-4 group-hover:w-16 transition-all duration-300 rounded-full" />
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Card className="relative max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden hover:bg-gray-800/90 transition-colors duration-500">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Target size={48} className="text-[#E4572E] mr-4" />
                <h3 className="text-2xl md:text-3xl font-airstrike-bold text-white">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg font-orbitron-semi text-gray-300 leading-relaxed">
                To revolutionize sustainable mobility through innovative
                engineering solutions, inspiring the next generation of
                eco-conscious transportation while competing at the highest
                levels of national and international competitions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
