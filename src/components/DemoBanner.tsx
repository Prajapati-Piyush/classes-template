"use client";

import React, { useState } from "react";
import { X, MessageCircle } from "@/components/Icons";
import { BRAND_INFO } from "@/data/content";

export default function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Client Demo Presentation
          </span>
          <span className="hidden sm:inline text-slate-400">
            Official agency concept for <strong className="text-white">Shree Classes</strong>. Editable placeholders marked in brackets.
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto text-xs">
          <a
            href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Shree Classes, I would like to enquire about your coaching courses.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp: {BRAND_INFO.whatsappDemo}</span>
          </a>
          <span className="hidden md:inline text-slate-700">|</span>
          <a
            href="#contact"
            className="text-amber-300 hover:text-amber-200 font-medium underline underline-offset-2 transition-colors"
          >
            Admissions Desk
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-slate-200 p-0.5 ml-2 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
