function Experience() {
  const experiences = [
    {
      title: "Développeur Web",
      company: "Projet professionnel",
      period: "Juillet 2026",
      description:
        "Analyse et amélioration d'un projet web existant à travers des revues de code, l'identification d'issues Git et la proposition d'améliorations. Coordination et accompagnement d'une équipe durant le projet.",
      technologies: ["Git", "GitHub", "Code Review"],
    },
    {
      title: "Développeur Web",
      company: "Projet professionnel",
      period: "Mai 2026",
      description:
        "Conception et développement d'une landing page pour un site web.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Développeur Web — Stage",
      company: "Expérience professionnelle",
      period: "2025",
      description:
        "Participation au développement et à l'intégration de fonctionnalités web dans un environnement professionnel.",
      technologies: [
        "Java",
        "Spring Boot",
        "JavaScript",
        "React",
        "PostgreSQL",
      ],
    },
    {
      title: "Projets personnels",
      company: "Développement personnel",
      period: "2024 — Aujourd'hui",
      description:
        "Conception et développement de plusieurs applications web et projets logiciels afin de mettre en pratique mes compétences en développement frontend et backend.",
      technologies: ["Java", "React", "TypeScript", "Laravel"],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 sm:scroll-mt-0 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Expériences
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 sm:text-base">
            Mon parcours et mes expériences dans le développement web.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          {/* Ligne de la timeline uniquement sur tablette et desktop */}
          <div className="absolute top-0 bottom-0 left-3 hidden w-px bg-slate-200 sm:block" />

          <div className="space-y-5 sm:space-y-8">
            {experiences.map((experience) => (
              <article
                key={`${experience.title}-${experience.period}`}
                className="relative sm:pl-10"
              >
                {/* Point de la timeline */}
                <div className="absolute top-7 left-0 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 sm:flex" />

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-semibold leading-6 text-slate-900 sm:text-xl">
                        {experience.title}
                      </h3>

                      <p className="mt-1 font-sans text-sm font-medium text-blue-600">
                        {experience.company}
                      </p>
                    </div>

                    <span className="shrink-0 font-sans text-sm font-medium text-slate-500">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-4 font-sans text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-slate-100 px-2.5 py-1.5 font-sans text-xs font-medium text-slate-700 sm:px-3"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
