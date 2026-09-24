"use client";

import React from "react";
import {
  Brain,
  UserCheck,
  Target,
  Award,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
} from "@/components/Icons";
import { WHY_US_DATA, WhyUsItem } from "@/data/content";

export default function WhyUs() {
  const getIcon = (iconName: WhyUsItem["iconName"]) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case "Brain":
        return <Brain className={`${iconClass} text-blue-600`} />;
      case "UserCheck":
        return <UserCheck className={`${iconClass} text-amber-600`} />;
      case "Target":
        return <Target className={`${iconClass} text-blue-700`} />;
      case "Award":
        return <Award className={`${iconClass} text-amber-600`} />;
      case "HelpCircle":
        return <HelpCircle className={`${iconClass} text-blue-600`} />;
      case "ShieldCheck":
        return <ShieldCheck className={`${iconClass} text-emerald-600`} />;
      default:
        return <Brain className={`${iconClass} text-blue-600`} />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            The Shree Classes Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Students Choose Shree Classes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A disciplined coaching methodology combining foundational conceptual depth, personal attention, and rigorous exam preparation.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_US_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Indicator bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quality Standard</span>
                </span>
                <span className="text-[11px] text-slate-400 group-hover:text-slate-600 transition-colors">
                  Shree Classes
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Educational Philosophy Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Academic Philosophy
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              “Learn Better. Perform Better. Achieve More.”
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Every lecture is designed to build lasting intellectual self-reliance and genuine understanding.
            </p>
          </div>
          <a
            href="#courses"
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
          >
            Explore Academic Tracks
          </a>
        </div>
      </div>
    </section>
  );
}
