function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "C#", ".NET", "PHP", "Laravel"],
    },
    {
      title: "Bases de données",
      skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server", "MongoDB"],
    },
    {
      title: "Outils",
      skills: ["Git", "GitHub", "Docker", "Linux"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 sm:scroll-mt-0 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
          Compétences
        </h2>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-slate-900 sm:text-xl">
                {group.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-slate-100 px-3 py-1.5 font-sans text-xs font-medium text-slate-700 sm:text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
