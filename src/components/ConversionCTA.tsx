"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "@/components/Icons";
import { BRAND_INFO } from "@/data/content";

interface ConversionCTAProps {
  onOpenEnquiryModal: () => void;
}

export default function ConversionCTA({ onOpenEnquiryModal }: ConversionCTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white py-20 lg:py-24 border-b border-slate-800">
      {/* Background Architectural Subtle Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-200 border border-blue-700/50">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Admissions Guidance &amp; Counseling</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
          Ready to Take the Next Step?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Have questions about courses, batches, or admissions? Get in touch with Shree Classes today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenEnquiryModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Send an Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Shree Classes, I would like to enquire about courses and admissions.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Guarantee notes */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Faculty Mentorship</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Flexible Batch Options</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Individual Doubt Resolution</span>
          </div>
        </div>
      </div>
    </section>
  );
}
