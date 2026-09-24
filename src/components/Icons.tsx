import React from "react";
import {
  Brain,
  UserCheck,
  Target,
  Sparkles,
  Compass,
  BookOpenCheck,
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Sparkle,
  Send,
  Check,
  AlertCircle,
  Info,
} from "lucide-react";

export {
  Brain,
  UserCheck,
  Target,
  Sparkles,
  Compass,
  BookOpenCheck,
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Sparkle,
  Send,
  Check,
  AlertCircle,
  Info,
};

// Custom Brand Emblem for Shree Classes
export function BrandEmblem({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-800/40 shadow-sm text-amber-400 font-bold ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1.5"
      >
        <path
          d="M20 4L4 12L20 20L36 12L20 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15V27C10 32 20 36 20 36C20 36 30 32 30 27V15"
          stroke="#93C5FD"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
