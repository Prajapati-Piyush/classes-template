"use client";

import React from "react";
import { UserCheck, Sparkles, Brain, Target, GraduationCap } from "@/components/Icons";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* Outer Card Frame with subtle glow */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/95 via-slate-900/95 to-slate-950 border border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider ml-2">
              Classroom &amp; Mentoring Hub
            </span>
          </div>
          <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            Live Mentorship
          </span>
        </div>

        {/* Visual: Teacher / Student Academic Mentoring Scene */}
        <div className="relative rounded-xl bg-slate-950/80 border border-slate-800 p-4 sm:p-5 overflow-hidden">
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Teacher-Student Guidance Visual Vector Scene */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            {/* SVG Illustration of Teacher & Student at Board */}
            <div className="w-full sm:w-1/2 flex justify-center">
              <svg
                viewBox="0 0 240 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[210px] h-auto drop-shadow-md"
                aria-label="Teacher guiding student through technical concepts"
              >
                {/* Chalkboard / Concept Screen */}
                <rect x="20" y="15" width="200" height="90" rx="8" fill="#0B132B" stroke="#1E293B" strokeWidth="2" />
                <rect x="26" y="21" width="188" height="78" rx="5" fill="#0F172A" />
                
                {/* Board Content: Graph & Engineering Derivations */}
                {/* Axes */}
                <path d="M40 85V35M40 85H110" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
                {/* Analytical Curve */}
                <path d="M42 80Q60 40 85 45T110 32" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
                {/* Tangent line */}
                <path d="M65 65L95 35" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Formulas & Notation */}
                <text x="122" y="42" fill="#93C5FD" fontSize="8" fontFamily="monospace" fontWeight="600">dy/dx = lim Δx→0</text>
                <text x="122" y="56" fill="#FDE68A" fontSize="8" fontFamily="monospace">∫ F · ds = W</text>
                <text x="122" y="70" fill="#94A3B8" fontSize="7" fontFamily="monospace">Mechanics &amp; Math</text>

                {/* Teacher Figure (Left of podium/desk) */}
                {/* Body & Coat */}
                <path d="M55 125L65 155H35L45 125" fill="#1E3A8A" />
                <rect x="42" y="112" width="20" height="26" rx="4" fill="#2563EB" />
                {/* Head */}
                <circle cx="52" cy="100" r="10" fill="#FBBF24" />
                <path d="M44 95C44 90 60 90 60 95" stroke="#1E293B" strokeWidth="2" />
                {/* Gesturing Hand to the board */}
                <path d="M60 118L78 102" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />

                {/* Desk */}
                <rect x="75" y="130" width="90" height="8" rx="2" fill="#334155" />
                <rect x="85" y="138" width="6" height="18" fill="#1E293B" />
                <rect x="149" y="138" width="6" height="18" fill="#1E293B" />

                {/* Open Notebook & Pen on Desk */}
                <rect x="95" y="125" width="22" height="12" rx="2" fill="#F8FAFC" />
                <line x1="106" y1="125" x2="106" y2="137" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="97" y1="128" x2="103" y2="128" stroke="#64748B" strokeWidth="1" />
                <line x1="97" y1="131" x2="104" y2="131" stroke="#64748B" strokeWidth="1" />
                <line x1="109" y1="128" x2="115" y2="128" stroke="#64748B" strokeWidth="1" />
                <line x1="109" y1="131" x2="114" y2="131" stroke="#64748B" strokeWidth="1" />

                {/* Student Figure (Seated right) */}
                <circle cx="165" cy="108" r="9" fill="#FCD34D" />
                <path d="M158 103C158 98 172 98 172 103" stroke="#1E293B" strokeWidth="2" />
                <rect x="156" y="118" width="18" height="24" rx="4" fill="#0D9488" />
                {/* Arm taking notes */}
                <path d="M156 124L120 128" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M165 142L175 156H155L158 142" fill="#0F766E" />
              </svg>
            </div>

            {/* Live Session Status */}
            <div className="w-full sm:w-1/2 space-y-2 text-left">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Interactive Session</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                One-on-One Concept Breakdown
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step-by-step deconstruction of engineering math, mechanics, and core fundamentals.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-900/50 text-blue-200 border border-blue-700/40">
                  Concept First
                </span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-900/40 text-amber-200 border border-amber-700/40">
                  Direct Doubts
                </span>
              </div>
            </div>
          </div>

          {/* Academic Progression Pillars */}
          <div className="mt-4 pt-3 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Foundational Theory &amp; Derivations</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">Stage 1</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Graded Numerical Practice</span>
              </div>
              <span className="text-[11px] text-amber-400 font-mono">Stage 2</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Exam Simulation &amp; Review</span>
              </div>
              <span className="text-[11px] text-blue-400 font-mono">Stage 3</span>
            </div>
          </div>
        </div>

        {/* Tagline footer in frame */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
          <span className="italic text-slate-300 text-[11px]">
            “Learn Better. Perform Better. Achieve More.”
          </span>
          <span className="text-amber-400 text-[11px] font-semibold">
            Academic Excellence
          </span>
        </div>
      </div>

      {/* Floating Card Required by Prompt:
          "Personalized Learning: Focused guidance for every student." */}
      <div className="sm:absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 mt-4 sm:mt-0 p-4 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center gap-3.5 max-w-xs transition-transform hover:scale-105 duration-200 z-20">
        <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
          <UserCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white tracking-tight">
            Personalized Learning
          </h4>
          <p className="text-xs text-slate-300 mt-0.5 leading-snug">
            Focused guidance for every student.
          </p>
        </div>
      </div>

      {/* Secondary Floating Badge: Concept Focus */}
      <div className="hidden sm:flex absolute -top-4 -right-3 p-2.5 rounded-lg bg-slate-900/95 border border-blue-500/30 shadow-lg items-center gap-2 z-20">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-semibold text-blue-200">
          Concept First Methodology
        </span>
      </div>
    </div>
  );
}
