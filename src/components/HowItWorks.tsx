"use client";

import React from "react";
import { ArrowRight, BookOpen, MessageCircle, GraduationCap, CheckCircle2 } from "@/components/Icons";
import { HOW_IT_WORKS_DATA } from "@/data/content";

interface HowItWorksProps {
  onOpenEnquiryModal: () => void;
}

export default function HowItWorks({ onOpenEnquiryModal }: HowItWorksProps) {
  const stepIcons = [
    <BookOpen key="01" className="w-6 h-6 text-blue-600" />,
    <MessageCircle key="02" className="w-6 h-6 text-amber-600" />,
    <GraduationCap key="03" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Simple &amp; Structured Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A seamless journey from initial consultation to focused, goal-oriented classroom learning.
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="relative">
          {/* Desktop Connecting Line behind cards */}
          <div
            className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] -translate-y-8 h-0.5 bg-gradient-to-r from-blue-300 via-amber-300 to-emerald-300 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {HOW_IT_WORKS_DATA.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white font-mono font-bold text-lg shadow-sm group-hover:bg-blue-600 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 shadow-xs">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-1 uppercase tracking-wide">
                    {step.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-features */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>
                    {idx === 0
                      ? "Engineering, diploma, or modular tracks"
                      : idx === 1
                      ? "Personalized syllabus consultation"
                      : "Immediate study support and doubt sessions"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Finish with clear enquiry CTA as required */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 sm:p-2 sm:pr-4 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-xl mx-auto">
            <span className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-full">
              Ready to begin your academic preparation?
            </span>
            <button
              onClick={onOpenEnquiryModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
            >
              <span>Enquire for Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
