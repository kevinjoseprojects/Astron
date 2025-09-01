"use client";

import React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Award, Crown, Instagram, Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
  const teamContacts = [
    {
      name: "Prof BIJU N",
      role: "FACULTY ADVISOR",
      phone: "+91 94962 15993",
      icon: Crown,
      gradient: "from-purple-500 to-indigo-600",
      accent: "text-purple-400",
    },
    {
      name: "KEVIN JOSE",
      role: "TEAM CAPTAIN",
      phone: "+91 94000 32200",
      icon: Award,
      gradient: "from-[#E4572E] to-[#E74D24]",
      accent: "text-[#E4572E]",
    },
    {
      name: "HARINADH SADISH",
      role: "VICE CAPTAIN",
      phone: "+91 97468 53013",
      icon: User,
      gradient: "from-emerald-500 to-teal-600",
      accent: "text-emerald-400",
    },
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@astron.aperta",
      icon: Instagram,
      url: "https://instagram.com/astron.aperta",
      gradient: "from-pink-500 to-purple-600",
      bgGlow: "shadow-pink-500/25",
    },
    {
      platform: "Email",
      handle: "astronendurance@gmail.com",
      icon: Mail,
      url: "mailto:astronendurance@gmail.com",
      gradient: "from-blue-500 to-cyan-600",
      bgGlow: "shadow-blue-500/25",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-300 flex items-center justify-center py-20"
    >
      <ScrollProgress className="z-50" />
      <div className="container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-airstrike-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-[#E4572E] mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl font-orbitron-semi text-gray-700 max-w-3xl mx-auto">
            Drive innovation forward. Partner with Astron Endurance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-orbitron-semi text-gray-900 text-center mb-12">
              Leadership Team
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 border-0 hover:bg-gray-800/95 transition-all duration-500 group hover:shadow-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#E4572E] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="text-xl font-orbitron-semi text-white mb-2">
                      {contact.name}
                    </h4>

                    <p className="text-[#E4572E] font-orbitron-semi text-sm mb-4 tracking-wide">
                      {contact.role}
                    </p>

                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-orbitron-semi transition-colors duration-300 hover:cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-orbitron-semi text-gray-900 mb-12">
              Connect With Us
            </h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.platform === "Instagram" ? "_blank" : "_self"}
                  rel={link.platform === "Instagram"
                    ? "noopener noreferrer"
                    : ""}
                  className="flex text-sm  lg:text-base items-center gap-4 w-full bg-gray-900/95 backdrop-blur-sm rounded-xl p-4 border-0 hover:bg-gray-800/95 transition-all duration-500 group hover:shadow-xl min-w-[280px] hover:cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#E4572E] rounded-full flex items-center justify-center transition-transform duration-300">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-left">
                    <p className="text-[#E4572E] font-orbitron-semi text-sm">
                      {link.platform}
                    </p>
                    <p className="text-white font-orbitron-semi">
                      {link.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 p-8 bg-gray-900/95 backdrop-blur-sm rounded-2xl border-0">
            <p className="text-gray-300 font-orbitron-semi text-lg mb-6">
              Ready to join our journey towards sustainable mobility?
            </p>
            <a
              href="mailto:astronendurance@gmail.com"
              className="inline-flex items-center gap-3 bg-[#E4572E] hover:bg-[#E74D24] text-white font-orbitron-semi px-8 py-4 rounded-full transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
