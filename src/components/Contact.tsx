"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "@/components/Icons";
import { BRAND_INFO, COURSES_DATA } from "@/data/content";

interface ContactProps {
  initialCourse?: string;
}

export default function Contact({ initialCourse = "" }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phoneNumber: "",
    courseSubject: initialCourse || "",
    message: "",
  });

  const [prevInitialCourse, setPrevInitialCourse] = useState(initialCourse);
  if (initialCourse !== prevInitialCourse) {
    setPrevInitialCourse(initialCourse);
    setFormData((prev) => ({ ...prev, courseSubject: initialCourse }));
  }

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Please enter student's full name";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Please enter contact phone number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number (8-15 digits)";
    }

    if (!formData.courseSubject) {
      newErrors.courseSubject = "Please select a course or subject";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      parentName: "",
      phoneNumber: "",
      courseSubject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            <Mail className="w-3.5 h-3.5" />
            <span>Admissions &amp; Consultation Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With Shree Classes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Reach out directly or submit your learning requirements below. Our counseling team will reach out with course details and batch schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Academy Contact Info & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
                Institute Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Academy Address
                    </h4>
                    <p className="text-base font-semibold text-slate-900 mt-0.5">
                      📍 {BRAND_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">
                      {BRAND_INFO.addressDetail}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone Number
                    </h4>
                    <p className="text-base font-semibold text-slate-900 mt-0.5">
                      📞 {BRAND_INFO.phone}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Direct voice inquiries &amp; admissions assistance
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      WhatsApp Number
                    </h4>
                    <p className="text-base font-semibold text-slate-900 mt-0.5">
                      💬 {BRAND_INFO.whatsapp}
                    </p>
                    <a
                      href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Shree Classes, I would like to enquire about courses.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 mt-1"
                    >
                      <span>Click to chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </h4>
                    <p className="text-base font-semibold text-slate-900 mt-0.5">
                      ✉️ {BRAND_INFO.email}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Official correspondence &amp; admissions inquiry
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Demo */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Visiting Hours: {BRAND_INFO.hoursDemo}</span>
              </div>
            </div>

            {/* Quick Demo Note */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
              <span className="font-semibold block mb-0.5">Agency Demo Note:</span>
              Contact numbers, physical address, and official email will be configured with the academy's verified communication channels prior to official publication.
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm relative">
              {/* If Form Submitted: Clean Success State */}
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Thank you for contacting <strong>Shree Classes</strong>. We have registered your enquiry for <strong>{formData.courseSubject || "our academic programs"}</strong>. Our counseling advisor will contact <strong>{formData.studentName}</strong> at <strong>{formData.phoneNumber}</strong> shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-600">
                    <div className="font-semibold text-slate-900 mb-1">
                      Submitted Summary:
                    </div>
                    <div>• Student: {formData.studentName}</div>
                    {formData.parentName && <div>• Parent/Guardian: {formData.parentName}</div>}
                    <div>• Phone: {formData.phoneNumber}</div>
                    <div>• Course/Subject: {formData.courseSubject}</div>
                    {formData.message && <div>• Message: {formData.message}</div>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      Enquire for Admission
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the details below to receive program syllabus, schedule, and counseling support.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Student Name */}
                    <div>
                      <label
                        htmlFor="studentName"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Student Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.studentName
                            ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400"
                            : "border-slate-300 bg-white focus:ring-blue-600 focus:border-blue-600"
                        }`}
                      />
                      {errors.studentName && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Parent/Guardian Name */}
                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Parent / Guardian Name{" "}
                        <span className="text-slate-400 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={(e) =>
                          setFormData({ ...formData, parentName: e.target.value })
                        }
                        placeholder="e.g. Mr. Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400"
                            : "border-slate-300 bg-white focus:ring-blue-600 focus:border-blue-600"
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Course / Subject */}
                    <div>
                      <label
                        htmlFor="courseSubject"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Course / Subject <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="courseSubject"
                        value={formData.courseSubject}
                        onChange={(e) =>
                          setFormData({ ...formData, courseSubject: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.courseSubject
                            ? "border-rose-400 bg-rose-50/30 focus:ring-rose-400"
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
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.courseSubject}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Message / Specific Requirements{" "}
                      <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your current college/school semester, specific subjects, or any specific academic goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2.5">
                      Your information is protected. We use it solely to respond to your academic inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
