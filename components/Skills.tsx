import { skillIconMap, skillCategories } from "./skills/skillIconMap";

export default function Skills() {
  const allSkills = Object.entries(skillCategories);

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white">
          Skills
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="space-y-8">
        {allSkills.map(([category, skills]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => {
                const IconComponent = skillIconMap[skill]?.icon;
                const iconColor = skillIconMap[skill]?.color || "text-gray-500";
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-gray-300 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
                  >
                    {IconComponent && (
                      <IconComponent className={`h-3.5 w-3.5 ${iconColor}`} />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
