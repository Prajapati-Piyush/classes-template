"use client";

import React from "react";
import { Sparkles, Info } from "@/components/Icons";
import { TESTIMONIALS_DATA } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Feedback Placeholder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Experiences &amp; Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real student feedback and course reviews will be published here upon live deployment.
          </p>
        </div>

        {/* Testimonials Grid with clearly identifiable placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm shadow-xl hover:border-amber-400/40 transition-all duration-300"
            >
              <div>
                {/* Reserved Badge & Index */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-slate-700/60 text-amber-300 border border-slate-600/50">
                    Slot 0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{item.tag}</span>
                </div>

                {/* Decorative Quotation Mark */}
                <div className="text-4xl text-amber-400/40 font-serif leading-none select-none mb-2">
                  “
                </div>

                {/* Testimonial Placeholder Quote */}
                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Student Meta Placeholder */}
              <div className="mt-8 pt-5 border-t border-slate-700/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-amber-500/80 flex items-center justify-center text-xs font-bold text-white shrink-0 border border-slate-600">
                  SC
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    {item.studentPlaceholder}
                  </h3>
                  <p className="text-xs text-slate-400">{item.coursePlaceholder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/70 border border-slate-700 text-xs text-slate-300">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Client Presentation Note:</strong> To maintain strict academic integrity, no fabricated testimonials, marks, or rankings are displayed in this demo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
