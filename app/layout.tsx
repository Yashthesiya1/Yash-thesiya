import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
    "AI Integration"
  ],
  authors: [{ name: "Yash Thesiya", url: "https://www.yashai.me" }],
  creator: "Yash Thesiya",
  alternates: {
    canonical: "https://www.yashai.me",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
        url: "/og-image.png",
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

const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yash Thesiya",
    "url": "https://www.yashai.me",
    "image": "https://www.yashai.me/icon.png",
    "sameAs": [
      "https://github.com/Yashthesiya1",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans bg-white text-black dark:bg-[#0a0a0a] dark:text-neutral-200`}>
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
