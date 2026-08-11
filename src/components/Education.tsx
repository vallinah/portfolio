function Education() {
  const education = [
    {
      title: 'Licence en Informatique',
      institution: 'IT University — Madagascar',
      period: '2022 — 2026',
      description:
        "Formation orientée développement logiciel, développement web, conception d'applications et bases de données.",
    },
    {
      title: 'Baccalauréat',
      institution: 'Lycée Nanisana — Madagascar',
      period: '',
      description: '',
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-20 sm:scroll-mt-0 bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Formation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-slate-600">
            Mon parcours académique et ma formation en informatique.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-sans font-medium text-blue-600">
                    {item.institution}
                  </p>
                </div>

                {item.period && (
                  <span className="font-sans text-sm font-medium text-slate-500">
                    {item.period}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-4 font-sans leading-7 text-slate-600">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
