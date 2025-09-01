"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Image from "next/image";
import {
  Award,
  Battery,
  Car,
  Cog,
  Crown,
  Linkedin,
  Mail,
  Settings,
  User,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Kevin",
      role: "Captain",
      photo: "/team/Kevin pic.jpg",
      icon: Crown,
      gradient: "from-[#E4572E] to-[#E74D24]",
      accent: "text-[#E4572E]",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      description: "Leading the team with vision and innovation",
    },
    {
      name: "Aravind Krishna V",
      role: "Vice Captain BSVC",
      photo: "/team/3065 - Aravind Krishna.jpg",
      icon: Award,
      gradient: "from-purple-500 to-indigo-600",
      accent: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      description: "Leading BSVC team with strategic vision",
    },
    {
      name: "Anagha Sanal",
      role: "Manager BSVC",
      photo: "/team/Anagha-Sanal.jpg",
      icon: Users,
      gradient: "from-emerald-500 to-teal-600",
      accent: "text-emerald-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      description: "Managing BSVC operations and coordination",
    },
    {
      name: "Harinadh",
      role: "Vice-Captain",
      photo: "/team/Harinadh_Sadish_Photo.jpg",
      icon: Award,
      gradient: "from-purple-500 to-indigo-600",
      accent: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      description: "Strategic planning and team coordination",
    },
    {
      name: "Sidharth",
      role: "Treasurer",
      photo: "/team/sidarth.jpg",
      icon: Users,
      gradient: "from-emerald-500 to-teal-600",
      accent: "text-emerald-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      description: "Managing finances and resource allocation",
    },
    {
      name: "Abhishikth",
      role: "Rollcage",
      photo: "/team/Abhishikth_Photo.jpg",
      icon: Settings,
      gradient: "from-blue-500 to-cyan-600",
      accent: "text-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      description: "Safety systems and structural design",
    },
    {
      name: "Jeff",
      role: "Steering",
      photo: "/team/Jeff_John_Photo.JPG",
      icon: Car,
      gradient: "from-orange-500 to-red-600",
      accent: "text-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      description: "Precision control and handling systems",
    },
    {
      name: "Isaac",
      role: "Suspension",
      photo: "/team/Isaac_AntonyFrancis_Photo.jpg",
      icon: Cog,
      gradient: "from-pink-500 to-rose-600",
      accent: "text-pink-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      description: "Smooth ride and stability engineering",
    },
    {
      name: "Ashwin",
      role: "Brake",
      photo: "/team/Ashwin_P.A_Photo.jpg",
      icon: Wrench,
      gradient: "from-yellow-500 to-orange-600",
      accent: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      description: "Safety and stopping power optimization",
    },
    {
      name: "Kelwin",
      role: "Powertrain",
      photo: "/team/kelwin.jpg",
      icon: Zap,
      gradient: "from-green-500 to-emerald-600",
      accent: "text-green-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      description: "Power delivery and performance tuning",
    },
    {
      name: "Akshay Krishna",
      role: "Motor",
      photo: "/team/Akshay_Krishna_Photo.jpeg",
      icon: Battery,
      gradient: "from-violet-500 to-purple-600",
      accent: "text-violet-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      description: "Electric motor systems and efficiency",
    },
    {
      name: "Gokul",
      role: "Electrical",
      photo: "/team/Gokul_S_Photo.jpg",
      icon: Zap,
      gradient: "from-indigo-500 to-blue-600",
      accent: "text-indigo-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      description: "Circuit design and electrical systems",
    },
  ];

  return (
    <section
      id="team"
      className="min-h-screen bg-gray-300 flex items-center justify-center py-20"
    >
      <ScrollProgress className="z-50" />
      <div className="container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <div className="w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-4xl mx-auto">
            Meet the brilliant minds behind Astron Endurance. Our diverse team
            of engineers, designers, and innovators work together to create the
            future of sustainable mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 hover:cursor-pointer group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <BorderBeam
                  size={150}
                  duration={10}
                  delay={0}
                  borderWidth={3}
                  initialOffset={0}
                  reverse={false}
                  colorFrom={member.gradient.includes("orange")
                    ? "#E4572E"
                    : member.gradient.includes("purple")
                    ? "#9333ea"
                    : member.gradient.includes("emerald")
                    ? "#10b981"
                    : member.gradient.includes("blue")
                    ? "#3b82f6"
                    : member.gradient.includes("pink")
                    ? "#ec4899"
                    : member.gradient.includes("yellow")
                    ? "#eab308"
                    : member.gradient.includes("green")
                    ? "#22c55e"
                    : member.gradient.includes("violet")
                    ? "#8b5cf6"
                    : member.gradient.includes("indigo")
                    ? "#6366f1"
                    : "#E4572E"}
                  colorTo={member.gradient.includes("orange")
                    ? "#E74D24"
                    : member.gradient.includes("purple")
                    ? "#6366f1"
                    : member.gradient.includes("emerald")
                    ? "#059669"
                    : member.gradient.includes("blue")
                    ? "#0ea5e9"
                    : member.gradient.includes("pink")
                    ? "#be185d"
                    : member.gradient.includes("yellow")
                    ? "#ea580c"
                    : member.gradient.includes("green")
                    ? "#16a34a"
                    : member.gradient.includes("violet")
                    ? "#7c3aed"
                    : member.gradient.includes("indigo")
                    ? "#3b82f6"
                    : "#E74D24"}
                  className="opacity-100 group-hover:opacity-100"
                />
                <BorderBeam
                  size={150}
                  duration={10}
                  delay={0}
                  borderWidth={3}
                  initialOffset={50}
                  colorFrom={member.gradient.includes("orange")
                    ? "#E4572E"
                    : member.gradient.includes("purple")
                    ? "#9333ea"
                    : member.gradient.includes("emerald")
                    ? "#10b981"
                    : member.gradient.includes("blue")
                    ? "#3b82f6"
                    : member.gradient.includes("pink")
                    ? "#ec4899"
                    : member.gradient.includes("yellow")
                    ? "#eab308"
                    : member.gradient.includes("green")
                    ? "#22c55e"
                    : member.gradient.includes("violet")
                    ? "#8b5cf6"
                    : member.gradient.includes("indigo")
                    ? "#6366f1"
                    : "#E4572E"}
                  colorTo={member.gradient.includes("orange")
                    ? "#E74D24"
                    : member.gradient.includes("purple")
                    ? "#6366f1"
                    : member.gradient.includes("emerald")
                    ? "#059669"
                    : member.gradient.includes("blue")
                    ? "#0ea5e9"
                    : member.gradient.includes("pink")
                    ? "#be185d"
                    : member.gradient.includes("yellow")
                    ? "#ea580c"
                    : member.gradient.includes("green")
                    ? "#16a34a"
                    : member.gradient.includes("violet")
                    ? "#7c3aed"
                    : member.gradient.includes("indigo")
                    ? "#3b82f6"
                    : "#E74D24"}
                  className="opacity-100 group-hover:opacity-100"
                />
                <div className={`h-2 bg-gradient-to-r ${member.gradient}`} />

                <CardHeader className="text-center pb-4 pt-6 relative">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 shadow group-hover:shadow-lg transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}
                    />
                    {member.photo.endsWith(".pdf")
                      ? (
                        <div
                          className={`w-full h-full ${member.bgColor} flex items-center justify-center`}
                        >
                          <User size={48} className={member.accent} />
                        </div>
                      )
                      : (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      )}
                    <div
                      className={`w-full h-full ${member.bgColor} flex items-center justify-center`}
                      style={{ display: "none" }}
                    >
                      <User size={48} className={member.accent} />
                    </div>
                  </div>

                  <div className="flex justify-center mb-3">
                    <Badge
                      variant="secondary"
                      className={`px-3 py-1 bg-gradient-to-r ${member.gradient} text-white border-0 hover:shadow-lg transition-all duration-300`}
                    >
                      <member.icon size={14} className="mr-1" />
                      {member.role}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-airstrike-bold text-white mb-2 group-hover:text-[#E4572E] transition-colors duration-300">
                    {member.name}
                  </h3>
                </CardHeader>

                <CardContent className="text-center pb-6 px-6">
                  <p className="text-sm font-orbitron-semi text-gray-300 mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-3 mt-4">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#E4572E] transition-all duration-300 hover:cursor-pointer border border-gray-300 hover:border-gray-400 hover:scale-110 active:scale-95">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#E4572E] transition-all duration-300 hover:cursor-pointer border border-gray-300 hover:border-gray-400 hover:scale-110 active:scale-95">
                      <Linkedin size={16} />
                    </button>
                  </div>

                  <div
                    className={`w-12 h-0.5 bg-gradient-to-r ${member.gradient} mx-auto mt-4 group-hover:w-16 transition-all duration-300 rounded-full`}
                  />
                </CardContent>

              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Card className="relative max-w-2xl mx-auto bg-gray-900/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden hover:bg-gray-800/90 transition-colors duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-airstrike-bold text-white mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg font-orbitron-semi text-gray-300 mb-6">
                We're always looking for passionate individuals to help drive
                the future of sustainable mobility.
              </p>
              <button className="px-8 py-4 bg-[#E4572E] text-white font-airstrike-bold rounded-full hover:bg-[#E74D24] transition-all duration-300 hover:cursor-pointer shadow-lg text-lg hover:scale-105 active:scale-95">
                Join Our Team
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
