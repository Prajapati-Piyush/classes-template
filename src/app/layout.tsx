import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shree Classes | Concept-Focused Academic Coaching & Guidance",
  description:
    "Personalized coaching, expert guidance, and focused learning designed to help students understand concepts, improve performance, and achieve their academic goals. Learn Better. Perform Better. Achieve More.",
  keywords: [
    "Shree Classes",
    "academic coaching",
    "engineering diploma coaching",
    "concept clarity",
    "personal guidance",
    "exam preparation",
  ],
  openGraph: {
    title: "Shree Classes | Learn Better. Perform Better. Achieve More.",
    description:
      "Concept-focused academic coaching and personalized guidance for students seeking excellence.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
