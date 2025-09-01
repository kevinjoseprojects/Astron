"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { ScrollProgress } from "../ui/scroll-progress";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigationItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Competitions", href: "#competitions", id: "competitions" },
    { name: "Sponsor", href: "#sponsor", id: "sponsor" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = navigationItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#2f2d68] border-b border-[#2f2d68] shadow"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Logo
            size="default"
            showText={true}
            className="cursor-pointer"
          />

          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-orbitron-semi transition-colors duration-300 hover:cursor-pointer ${
                  activeSection === item.id
                    ? "text-[#E4572E]"
                    : "text-white hover:text-[#E4572E]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E4572E] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeSection === item.id ? 1 : 0,
                    opacity: activeSection === item.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    type: "tween",
                  }}
                />
              </motion.button>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="hidden md:block bg-[#E4572E] hover:bg-[#E74D24] text-white font-airstrike-regular transition-all duration-300 hover:cursor-pointer"
              onClick={() => scrollToSection("sponsor")}
            >
              Support Us
            </Button>
          </motion.div>

          <motion.button
            className="md:hidden p-2 text-white hover:text-[#E4572E] transition-colors duration-200 relative z-50 hover:cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="md:hidden fixed z-40 flex flex-col bg-[#2f2d68]"
            style={{
              position: "fixed",
              top: "64px",
              left: "0",
              right: "0",
              bottom: "0",
              width: "100vw",
              height: "calc(100vh - 64px)",
              zIndex: 40,
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="flex-1 flex flex-col justify-center px-6 py-8"
            >
              <div className="flex flex-col space-y-3 max-w-sm mx-auto w-full">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-center px-6 py-4 rounded-xl font-orbitron-semi text-lg transition-all duration-200 hover:cursor-pointer border ${
                      activeSection === item.id
                        ? "text-[#E4572E] bg-[#E4572E]/20 border-[#E4572E]/40"
                        : "text-white hover:text-[#E4572E] hover:bg-[#E4572E]/10 border-transparent"
                    }`}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.3,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{
                  delay: navigationItems.length * 0.08 + 0.3,
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="w-full max-w-sm mx-auto mt-6 mb-4 h-px bg-white/20"
              />

              <div className="px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    delay: navigationItems.length * 0.08 + 0.4,
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="max-w-sm mx-auto"
                >
                  <Button
                    className="w-full py-4 text-lg bg-[#E4572E] hover:bg-[#E74D24] text-white font-airstrike-regular rounded-xl shadow border border-[#E4572E]/40 hover:cursor-pointer"
                    onClick={() => scrollToSection("sponsor")}
                  >
                    Support Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollProgress className="z-50" />
    </motion.nav>
  );
};

export default Navigation;
