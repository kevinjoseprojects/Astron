"use client";

import React, { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle,
  Download,
  Globe,
  Handshake,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const SponsorSection = () => {
  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      price: "₹5,00,000+",
      description: "Maximum visibility and exclusive partnership benefits",
      features: [
        "Logo on vehicle and team apparel",
        "Exclusive branding rights",
        "Media coverage and PR",
        "Technical collaboration opportunities",
        "Campus events participation",
        "Annual report mentions",
      ],
      color: "from-yellow-500 to-amber-600",
      bgGradient: "from-yellow-900/20 to-amber-900/20",
      recommended: true,
      icon: Trophy,
    },
    {
      title: "Major Sponsor",
      price: "₹2,00,000+",
      description: "Significant visibility with strong partnership benefits",
      features: [
        "Logo on vehicle",
        "Team apparel branding",
        "Social media mentions",
        "Competition participation rights",
        "Technical workshops access",
        "Quarterly updates",
      ],
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-900/20 to-indigo-900/20",
      recommended: false,
      icon: Star,
    },
    {
      title: "Supporting Sponsor",
      price: "₹50,000+",
      description: "Basic visibility with partnership recognition",
      features: [
        "Logo on team materials",
        "Website mentions",
        "Social media tags",
        "Event invitations",
        "Progress reports",
        "Alumni network access",
      ],
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-900/20 to-emerald-900/20",
      recommended: false,
      icon: Handshake,
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Brand Visibility",
      description: "National exposure through competitions and media coverage",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Users,
      title: "Talent Pipeline",
      description: "Access to skilled engineering students and graduates",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Innovation Partnership",
      description:
        "Collaborate on cutting-edge sustainable technology projects",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Target,
      title: "CSR Alignment",
      description:
        "Support environmental sustainability and education initiatives",
      color: "from-orange-500 to-red-600",
    },
  ];

  const stats = [
    { number: "10K+", label: "Social Media Reach", icon: Globe },
    { number: "500+", label: "Event Attendees", icon: Users },
    { number: "50+", label: "Media Mentions", icon: Award },
    { number: "5+", label: "University Partners", icon: Building },
  ];

  const brochurePath = "/Sponsorship-Brochure.pdf";
  const [brochureAvailable, setBrochureAvailable] = useState(true);
  const [checkingBrochure, setCheckingBrochure] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch(brochurePath, { method: "HEAD" })
      .then((res) => {
        if (!ignore) {
          setBrochureAvailable(res.ok);
          setCheckingBrochure(false);
        }
      })
      .catch(() => {
        if (!ignore) {
          setBrochureAvailable(false);
          setCheckingBrochure(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, [brochurePath]);

  return (
    <section id="sponsor" className="min-h-screen bg-[#bfc2e4] py-20">
      <ScrollProgress className="z-50" />
      <div className="container mx-auto px-6 sm:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron-semi text-black mb-6">
            Become Our Partner
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-200 via-white to-blue-200 mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl font-orbitron-semi text-black/90 max-w-4xl mx-auto">
            Join us in shaping the future of sustainable mobility. Partner with
            Astron Endurance to drive innovation and create lasting impact in
            electric vehicle technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto items-stretch">
          {stats.map((stat, index) => (
            <div key={index} className="group h-full">
              <Card className="relative h-full overflow-hidden bg-gray-900/95 text-white flex flex-col">
                <CardContent className="p-6 text-center flex flex-col items-center justify-center flex-1">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <stat.icon size={26} className="text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-orbitron-semi text-white mb-2 tracking-wide">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-orbitron-semi text-white/90 leading-snug max-w-[10ch]">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-orbitron-semi text-black text-center mb-12">
            Partnership Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch">
            {benefits.map((benefit, index) => (
              <div key={index} className="group h-full">
                <Card className="relative overflow-hidden bg-gray-900/95 text-white h-full flex flex-col">
                  <CardContent className="p-6 text-center h-full flex flex-col flex-1">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-orbitron-semi text-white mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-sm font-orbitron-semi text-white/80 flex-grow">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>


        {
          /* <div className="mb-16">
          <h3 className="text-3xl font-orbitron-semi text-black text-center mb-12">
            Sponsorship Tiers
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="group relative h-full">
                <Card
                  className={`relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gray-900/95 backdrop-blur-sm hover:bg-gray-800/95 ${
                    tier.recommended ? "ring-2 ring-yellow-400" : ""
                  } group-hover:scale-[1.02] h-full flex flex-col min-h-[520px]`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-orbitron-semi px-4 py-1 pt-4">
                        RECOMMENDED
                      </Badge>
                    </div>
                  )}

                  <div className={`h-3 bg-gradient-to-r ${tier.color}`} />

                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="text-center mb-6">
                      <div
                        className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <tier.icon size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-orbitron-semi text-white mb-2">
                        {tier.title}
                      </h3>
                      <p className="text-gray-300 font-orbitron-semi text-sm">
                        {tier.description}
                      </p>
                    </div>

                    <div className="space-y-3 flex-1">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle
                            size={16}
                            className="text-green-400 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-300 font-orbitron-semi text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`w-full mt-8 px-6 py-3 bg-gradient-to-r ${tier.color} text-white font-orbitron-semi rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:scale-[1.02] active:scale-95`}
                    >
                      <span>Get Started</span>
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>

                    <div
                      className={`w-20 h-0.5 bg-gradient-to-r ${tier.color} mx-auto mt-6 group-hover:w-28 transition-all duration-300 rounded-full`}
                    />
                  </CardContent>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div> */
        }

        <div className="mb-16">
          <h3 className="text-3xl font-orbitron-semi text-black text-center mb-12">
            Our Sponsors
          </h3>
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll space-x-12 w-max">
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-1.jpg"
                  alt="Sponsor 1"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-2.png"
                  alt="Sponsor 2"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-3.png"
                  alt="Sponsor 3"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-4.svg"
                  alt="Sponsor 4"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-1.jpg"
                  alt="Sponsor 1"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-2.png"
                  alt="Sponsor 2"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-3.png"
                  alt="Sponsor 3"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-4.svg"
                  alt="Sponsor 4"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-1.jpg"
                  alt="Sponsor 1"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-2.png"
                  alt="Sponsor 2"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-3.png"
                  alt="Sponsor 3"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-48 h-24">
                <img
                  src="/sponsors/astron-sponsor-4.svg"
                  alt="Sponsor 4"
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Card className="relative max-w-4xl mx-auto bg-gray-900/95 overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <Handshake size={48} className="text-orange-400 mr-4" />
                <h3 className="text-3xl font-orbitron-semi text-white">
                  Ready to Partner?
                </h3>
              </div>
              <p className="text-lg text-white/90 font-orbitron-semi mb-8 max-w-2xl mx-auto">
                Contact us to discuss customized sponsorship packages and
                partnership opportunities that align with your brand values and
                business objectives.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r bg-[#E4572E] hover:bg-[#e04a23] ring-[0.25px] ring-white text-white font-orbitron-semi rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto group hover:scale-105 active:scale-95">
                <span>Contact Us Today</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="relative max-w-3xl mx-auto bg-gray-900/95 backdrop-blur-sm border-0 overflow-hidden shadow-2xl">
            <div className="h-2 bg-[#E4572E]" />
            <CardContent className="p-10">
              <h3 className="text-2xl font-airstrike-bold text-white mb-4 tracking-wide">
                Sponsorship Brochure
              </h3>
              <p className="text-gray-300 font-orbitron-semi mb-8 max-w-2xl mx-auto">
                Get the full details of our impact, visibility metrics,
                deliverables and partnership roadmap in a concise PDF.
              </p>
              {brochureAvailable
                ? (
                  <a
                    href={brochurePath}
                    download
                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#E4572E] hover:bg-[#e04a23] text-white font-orbitron-semi rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group active:scale-95"
                    aria-label="Download sponsorship brochure PDF"
                  >
                    <span className="text-sm md:text-base tracking-wide">
                      Download Brochure
                    </span>
                    <Download
                      size={18}
                      className="group-hover:translate-y-[2px] transition-transform duration-300"
                    />
                  </a>
                )
                : (
                  <div className="inline-flex items-center gap-3 px-10 py-4 bg-gray-700/50 text-gray-400 font-orbitron-semi rounded-full border border-gray-600">
                    <span className="text-sm md:text-base tracking-wide">
                      Brochure Unavailable
                    </span>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
