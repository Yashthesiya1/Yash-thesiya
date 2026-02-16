const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Advanced Software Engineering & Application Development",
    institution: "LDRP Institute of Technology and Research",
    period: "2025 - Present",
    description:
      "Currently in Semester 2. Specializing in advanced web technologies, cloud computing, and enterprise application architecture.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science Fundamentals",
    institution: "Saurashtra University",
    period: "2023 - 2025",
    description:
      "Built a strong foundation in programming, database management, and software development lifecycles. Graduated with honors.",
  },
];

export default function Education() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
          Education
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          My educational background and learning journey.
        </p>
      </div>

      <div className="relative space-y-8 border-l-2 border-gray-200 pl-6">
        {education.map((edu, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gray-300 bg-white" />

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-black">{edu.degree}</h3>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-700">{edu.field}</p>
              <p className="text-sm text-gray-500">{edu.institution}</p>
              <p className="text-sm leading-relaxed text-gray-600">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
