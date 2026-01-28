import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import NavigationProgress from "@/components/NavigationProgress";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Viewport should be exported separately in Next.js 14/15
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yashai.me"),
  title: {
    default: "Yash Thesiya | Full-Stack Developer & React/Next.js Enthusiast",
    template: "%s | Yash Thesiya",
  },
  description:
    "Portfolio of Yash Thesiya, Software Engineer at Openmalo. Specializing in modern web applications with React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Software Engineer", "Yash Thesiya", "Openmalo", "Full Stack Developer",
    "Next.js Developer", "React Developer", "TypeScript", "Node.js", 
    "AI Integration", "Three.js", "Framer Motion"
  ],
  authors: [{ name: "Yash Thesiya", url: "https://www.yashai.me" }],
  creator: "Yash Thesiya",
  alternates: {
    canonical: "https://www.yashai.me",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png", // Recommended for mobile SEO
  },
  verification: {
    google: "59Qt7CkU9CW8DyVumPAz1rAoAWNVs83Vnq2LJEdN-vA",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yashai.me/",
    title: "Yash Thesiya | Software Engineer",
    description: "Building modern, animated, and performant web applications.",
    siteName: "Yash Thesiya Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you have a 1200x630px image at public/og-image.png
        width: 1200,
        height: 630,
        alt: "Yash Thesiya Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Thesiya | Software Engineer",
    description: "Building modern, animated, and performant web applications.",
    creator: "@yashthesiya",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yash Thesiya",
    "url": "https://www.yashai.me",
    "image": "https://www.yashai.me/icon.png",
    "sameAs": [
      "https://github.com/Yashthesiya1", // Update with your actual handles
      "http://linkedin.com/in/yash-thesiya/",
      "https://twitter.com/yashthesiya"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Openmalo Technologies"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <NavigationProgress />
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}