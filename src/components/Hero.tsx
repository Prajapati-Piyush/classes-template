"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  UserCheck,
  Brain,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Target,
} from "@/components/Icons";
import { BRAND_INFO } from "@/data/content";
import HeroVisual from "@/components/HeroVisual";

interface HeroProps {
  onOpenEnquiryModal: () => void;
}

export default function Hero({ onOpenEnquiryModal }: HeroProps) {
  const handleScrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const coursesEl = document.getElementById("courses");
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-18 lg:pb-28 border-b border-slate-800/80"
    >
      {/* Background Architectural Grid Pattern (subtle, non-distracting) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Subtle Ambient Light Gradients (restrained deep blue, no neon) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-700/10 blur-[130px] pointer-events-none rounded-full"></div>
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-amber-500/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-900/40 text-blue-200 border border-blue-700/40 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              <span>{BRAND_INFO.eyebrow}</span>
              <span className="text-blue-400/60">•</span>
              <span className="text-amber-300 font-normal">Admissions Open</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Build a Stronger Academic Future with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-amber-200 to-amber-400">
                {BRAND_INFO.name}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {BRAND_INFO.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                onClick={handleScrollToCourses}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <BookOpen className="w-4 h-4 text-blue-300" />
                <span>Explore Courses</span>
              </a>
            </div>

            {/* Academic Credibility Notes */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Small Batch Focus</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Doubts</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Structured Notes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Education Showcase */}
          <div className="lg:col-span-5 relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
