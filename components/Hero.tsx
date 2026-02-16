export default function Hero() {
  return (
    <section className="space-y-8 pt-12 sm:pt-16">
      {/* Status badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
        Software Engineer at Openmalo
        <span className="text-gray-400 dark:text-neutral-500">&middot; 1 yr 5 mos</span>
      </div>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
          Hi, I&apos;m Yash Thesiya.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-gray-600 dark:text-neutral-400">
          I build modern and performant web applications with React, Next.js,
          Node.js, and Nest.js &mdash; from smooth frontends to reliable backends.
          I have worked on SaaS projects where I implemented Gen AI and other
          cutting-edge technologies to create intelligent, scalable solutions.
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-gray-500 dark:text-neutral-500">
          Right now I&apos;m working at{" "}
          <span className="font-semibold text-black dark:text-white">Openmalo</span>, shipping
          production features, collaborating with teams, and turning real product
          problems into clean, maintainable code.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://pcyyqgfzqitlgdbjkyyv.supabase.co/storage/v1/object/public/portfolio-assest/Yash-Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Resume / CV
        </a>
        <a
          href="https://www.linkedin.com/in/yash-thesiya/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.33 2.4 4.33 5.52v6.23zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/yashthesiya1"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.12.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.25 1.84 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}
