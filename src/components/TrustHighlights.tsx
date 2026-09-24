import React from "react";
import { Brain, UserCheck, Target, Sparkles } from "@/components/Icons";
import { TRUST_HIGHLIGHTS } from "@/data/content";

export default function TrustHighlights() {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-blue-600" />,
    UserCheck: <UserCheck className="w-6 h-6 text-amber-600" />,
    Target: <Target className="w-6 h-6 text-blue-700" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
  };

  return (
    <section aria-label="Trust Highlights" className="relative -mt-6 sm:-mt-8 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {TRUST_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 ${
                idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0 shadow-sm">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-blue-600" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
