import React from "react";
import { CheckCircle2, Sparkles, BookOpen, Users, Award, ShieldCheck } from "@/components/Icons";
import { BRAND_INFO } from "@/data/content";

export default function About() {
  const pillars = [
    {
      title: "Concept Clarity Over Rote Learning",
      description:
        "We unpack complex principles, mathematical derivations, and technical systems step-by-step so students understand the underlying 'why' rather than memorizing formulas.",
    },
    {
      title: "Consistent & Structured Learning",
      description:
        "A disciplined weekly progression of lectures, practice assignments, and regular revisions that prevents last-minute exam pressure and builds steady academic momentum.",
    },
    {
      title: "Comprehensive Academic Support",
      description:
        "Accessible mentors, responsive doubt resolution sessions, and targeted study resources ensure no student feels left behind on difficult topics.",
    },
    {
      title: "Student Development & Confidence",
      description:
        "Beyond exam scores, we cultivate analytical thinking, disciplined study habits, and the intellectual confidence needed for lifelong academic success.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Classroom Environment Representation */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8 text-white shadow-xl overflow-hidden border border-slate-800">
              {/* Subtle background graphic */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Classroom Structure Mockup */}
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Academic Facility
                    </span>
                  </div>
                  <span className="text-xs text-amber-400 font-medium">Shree Classes</span>
                </div>

                {/* Visual Representation of Classroom Layout */}
                <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800 space-y-4">
                  {/* Classroom Setting Illustration */}
                  <div className="rounded-lg bg-slate-900 border border-slate-800/80 p-3 flex justify-center">
                    <svg
                      viewBox="0 0 280 110"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full max-w-[260px] h-auto drop-shadow-sm"
                      aria-label="Modern coaching classroom environment"
                    >
                      {/* Classroom Wall & Lighting */}
                      <rect x="10" y="8" width="260" height="94" rx="6" fill="#0B132B" stroke="#1E293B" strokeWidth="1.5" />
                      {/* Overhead Focus Light Beams */}
                      <path d="M50 10L30 45H70L50 10Z" fill="#FBBF24" fillOpacity="0.08" />
                      <circle cx="50" cy="10" r="3" fill="#FBBF24" />
                      <path d="M140 10L115 45H165L140 10Z" fill="#60A5FA" fillOpacity="0.08" />
                      <circle cx="140" cy="10" r="3" fill="#60A5FA" />
                      <path d="M230 10L210 45H250L230 10Z" fill="#FBBF24" fillOpacity="0.08" />
                      <circle cx="230" cy="10" r="3" fill="#FBBF24" />

                      {/* Main Concept Smartboard */}
                      <rect x="75" y="18" width="130" height="42" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                      <path d="M85 45Q105 25 125 32T155 26" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="125" cy="32" r="2.5" fill="#F59E0B" />
                      <text x="145" y="45" fill="#94A3B8" fontSize="7" fontFamily="monospace">ΔE = m·c²</text>
                      <text x="85" y="54" fill="#FDE68A" fontSize="6.5" fontFamily="monospace">∫ V dt = Q/C</text>

                      {/* Instructor Lectern */}
                      <path d="M45 42H65L62 68H48L45 42Z" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                      <rect x="42" y="38" width="26" height="5" rx="1.5" fill="#3B82F6" />

                      {/* Classroom Study Desks (Small Batch Configuration) */}
                      {/* Row 1 Desk Left */}
                      <rect x="35" y="75" width="60" height="14" rx="2.5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                      <rect x="45" y="72" width="14" height="6" rx="1" fill="#F8FAFC" />
                      <line x1="52" y1="72" x2="52" y2="78" stroke="#94A3B8" strokeWidth="0.8" />
                      {/* Chair 1 */}
                      <rect x="58" y="91" width="14" height="8" rx="2" fill="#334155" />

                      {/* Row 1 Desk Center */}
                      <rect x="110" y="75" width="60" height="14" rx="2.5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                      <rect x="120" y="72" width="14" height="6" rx="1" fill="#F8FAFC" />
                      <line x1="127" y1="72" x2="127" y2="78" stroke="#94A3B8" strokeWidth="0.8" />
                      {/* Chair 2 */}
                      <rect x="133" y="91" width="14" height="8" rx="2" fill="#334155" />

                      {/* Row 1 Desk Right */}
                      <rect x="185" y="75" width="60" height="14" rx="2.5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                      <rect x="195" y="72" width="14" height="6" rx="1" fill="#F8FAFC" />
                      <line x1="202" y1="72" x2="202" y2="78" stroke="#94A3B8" strokeWidth="0.8" />
                      {/* Chair 3 */}
                      <rect x="208" y="91" width="14" height="8" rx="2" fill="#334155" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Interactive Concept Board</h4>
                      <p className="text-xs text-slate-400">Step-by-step problem deconstruction</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="block text-xs font-bold text-amber-400">Small</span>
                      <span className="text-[11px] text-slate-400">Batch Size</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="block text-xs font-bold text-blue-400">Daily</span>
                      <span className="text-[11px] text-slate-400">Doubt Window</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
                      <span className="block text-xs font-bold text-emerald-400">100%</span>
                      <span className="text-[11px] text-slate-400">Syllabus Depth</span>
                    </div>
                  </div>
                </div>

                {/* Institute Values */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Academic Commitment</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Designed to give every student immediate access to their instructor for questions, derivations, and exam strategy.
                  </p>
                </div>
              </div>

              {/* Required Small Callout: "Focused Learning Environment" */}
              <div className="mt-6 p-4 rounded-xl bg-amber-400 text-slate-950 font-medium shadow-lg flex items-start gap-3">
                <div className="p-1 rounded-md bg-slate-950/10 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide">
                    Focused Learning Environment
                  </h4>
                  <p className="text-xs text-slate-900 mt-0.5 leading-snug">
                    Quiet, distraction-free classrooms with small batch sizes, interactive mentoring, and immediate doubt clearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Core Pillars */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                About Shree Classes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Learning That Builds Strong Foundations
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Shree Classes</strong>, we believe academic excellence begins with genuine conceptual clarity rather than mechanical memorization. When students understand the fundamental logic behind formulas and theories, complex problems become straightforward challenges they can solve with confidence.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Our academic framework is structured around consistent learning, continuous practice, and compassionate mentorship. Whether preparing for high-stakes technical diplomas, engineering examinations, or foundational subjects, we provide the dedicated guidance each student needs to bridge knowledge gaps and realize their full potential.
            </p>

            {/* Core Academic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote attribution */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="italic">
                “{BRAND_INFO.tagline}”
              </span>
              <span className="font-semibold text-slate-700">
                The Shree Classes Commitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
