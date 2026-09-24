"use client";

import React from "react";
import {
  BrandEmblem,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
} from "@/components/Icons";
import { BRAND_INFO, COURSES_DATA } from "@/data/content";

export default function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Batches", href: "#batches" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <BrandEmblem className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  {BRAND_INFO.name}
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  Academic Coaching Institute
                </span>
              </div>
            </div>

            <p className="text-base text-slate-300 italic font-medium">
              “{BRAND_INFO.tagline}”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated coaching institute empowering students through concept clarity, disciplined study schedules, and focused academic mentoring.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Shree Classes, I would like to connect.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-800/60 text-emerald-400 hover:bg-emerald-900/60 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-slate-600 text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses & Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="text-slate-400 hover:text-white transition-colors block text-xs leading-relaxed"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#batches"
                  className="text-amber-400/90 hover:text-amber-300 text-xs font-medium inline-flex items-center gap-1"
                >
                  <span>Weekday &amp; Weekend Batches</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>📍 {BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>📞 {BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>💬 {BRAND_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>✉️ {BRAND_INFO.email}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900">
              <span className="text-[11px] text-slate-500 block">
                Office Hours: Monday – Saturday
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {BRAND_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-600">Client Demo Presentation</span>
            <span className="text-slate-700">•</span>
            <a href="#home" className="hover:text-slate-300 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
