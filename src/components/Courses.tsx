"use client";

import React, { useState } from "react";
import {
  Compass,
  BookOpenCheck,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
} from "@/components/Icons";
import { COURSES_DATA, CourseItem } from "@/data/content";
import CourseModal from "@/components/CourseModal";

interface CoursesProps {
  onSelectCourseForEnquiry: (courseTitle: string) => void;
}

export default function Courses({ onSelectCourseForEnquiry }: CoursesProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-6 h-6 text-blue-600" />;
      case "BookOpenCheck":
        return <BookOpenCheck className="w-6 h-6 text-amber-600" />;
      case "Award":
        return <Award className="w-6 h-6 text-blue-600" />;
      case "Users":
        return <Users className="w-6 h-6 text-amber-600" />;
      default:
        return <Compass className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Courses &amp; Academic Support
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Structured academic tracks designed to develop deep conceptual clarity, practical problem-solving ability, and confident exam performance.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 shadow-xs group-hover:scale-105 group-hover:bg-blue-50/50 transition-all">
                    {getIcon(course.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                  {course.shortDesc}
                </p>

                {/* Target Audience tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <span className="text-slate-400 font-normal">Audience:</span>
                  <span>{course.audience}</span>
                </div>

                {/* Core Highlights */}
                <div className="mt-4 space-y-2">
                  {course.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Learn More -> and Direct Enquiry */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCourse(course)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectCourseForEnquiry(course.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 transition-all"
                >
                  <span>Enquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-12 rounded-xl bg-white border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Need assistance selecting the right subject or batch?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Our academic counselors are available to review your curriculum and recommend the optimal schedule.
            </p>
          </div>
          <button
            onClick={() => onSelectCourseForEnquiry("General Academic Counseling")}
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Speak with a Counselor
          </button>
        </div>
      </div>

      {/* Modal Detail View */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnquire={onSelectCourseForEnquiry}
      />
    </section>
  );
}
