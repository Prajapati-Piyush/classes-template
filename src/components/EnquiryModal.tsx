"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2 } from "@/components/Icons";
import { COURSES_DATA } from "@/data/content";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  preSelectedCourse = "",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    phoneNumber: "",
    courseSubject: preSelectedCourse,
    message: "",
  });

  const [prevPreSelectedCourse, setPrevPreSelectedCourse] = useState(preSelectedCourse);
  if (preSelectedCourse !== prevPreSelectedCourse) {
    setPrevPreSelectedCourse(preSelectedCourse);
    setFormData((prev) => ({ ...prev, courseSubject: preSelectedCourse }));
  }

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Please enter student name";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter phone number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    if (!formData.courseSubject) {
      newErrors.courseSubject = "Please select a course";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      phoneNumber: "",
      courseSubject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest block mb-1">
            Admissions Desk
          </span>
          <h3 id="enquiry-modal-title" className="text-xl sm:text-2xl font-bold text-white">
            Enquire at Shree Classes
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Leave your contact details. Our team will assist with course syllabus and schedules.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.studentName}</strong>. Our counselors will reach out to <strong>{formData.phoneNumber}</strong> regarding <strong>{formData.courseSubject}</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Student Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  placeholder="e.g. Priya Patel"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.studentName
                      ? "border-rose-400 bg-rose-50/20 focus:ring-rose-400"
                      : "border-slate-300 focus:ring-blue-600 focus:border-blue-600"
                  }`}
                />
                {errors.studentName && (
                  <p className="mt-1 text-xs text-rose-600">{errors.studentName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.phoneNumber
                      ? "border-rose-400 bg-rose-50/20 focus:ring-rose-400"
                      : "border-slate-300 focus:ring-blue-600 focus:border-blue-600"
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-rose-600">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Course / Subject <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.courseSubject}
                  onChange={(e) =>
                    setFormData({ ...formData, courseSubject: e.target.value })
                  }
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.courseSubject
                      ? "border-rose-400 bg-rose-50/20 focus:ring-rose-400"
                      : "border-slate-300 focus:ring-blue-600 focus:border-blue-600"
                  }`}
                >
                  <option value="">Select a Course or Program...</option>
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="Weekday Batches">Weekday Batches</option>
                  <option value="Weekend Batches">Weekend Batches</option>
                  <option value="Personalized Academic Guidance">
                    Personalized Academic Guidance
                  </option>
                  <option value="General Academic Counseling">
                    General Academic Counseling
                  </option>
                </select>
                {errors.courseSubject && (
                  <p className="mt-1 text-xs text-rose-600">{errors.courseSubject}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message / Questions{" "}
                  <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Any specific syllabus questions or timings..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
