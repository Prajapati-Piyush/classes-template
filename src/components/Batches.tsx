"use client";

import React from "react";
import { Clock, Calendar, Users, CheckCircle2, ArrowRight, Info } from "@/components/Icons";
import { BATCHES_DATA, BatchItem } from "@/data/content";

interface BatchesProps {
  onOpenEnquiryModal: () => void;
}

export default function Batches({ onOpenEnquiryModal }: BatchesProps) {
  const getBatchIcon = (id: string) => {
    switch (id) {
      case "weekday-batches":
        return <Clock className="w-6 h-6 text-blue-600" />;
      case "weekend-batches":
        return <Calendar className="w-6 h-6 text-amber-600" />;
      case "personalized-support":
        return <Users className="w-6 h-6 text-emerald-600" />;
      default:
        return <Clock className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="batches" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            <span>Adaptive Study Schedules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Flexible Learning Options
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you require steady weekday progression or intensive weekend coursework, our cohorts are designed to complement college timetables.
          </p>
        </div>

        {/* 3 Batch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BATCHES_DATA.map((batch: BatchItem) => (
            <div
              key={batch.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-300"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    {getBatchIcon(batch.id)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/60 text-slate-700">
                    {batch.badge}
                  </span>
                </div>

                {/* Subtitle / Type */}
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  {batch.type}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {batch.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {batch.description}
                </p>

                {/* Key Features */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-200/60">
                  {batch.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Demo Note & Action */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 space-y-4">
                <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-100/80 border border-slate-200/80 text-[11px] text-slate-500 leading-normal">
                  <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{batch.note}</span>
                </div>

                <button
                  type="button"
                  onClick={onOpenEnquiryModal}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-amber-400 hover:text-slate-950 border border-slate-200 hover:border-amber-400 transition-all shadow-xs"
                >
                  <span>Enquire Batch Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Integrity Clarification Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-600">
          <p>
            <strong className="text-slate-800">Please Note:</strong> Shree Classes finalizes batch schedules and student-instructor ratios during personal enrollment counseling to maintain optimal teaching quality.
          </p>
        </div>
      </div>
    </section>
  );
}
