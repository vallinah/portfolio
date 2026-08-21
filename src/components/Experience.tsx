import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();

  const experiences = [
    'july2026',
    'may2026',
    'internship2025',
    'personal',
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:scroll-mt-0 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl">
            {t('experience.title')}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-base">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          {/* Ligne de la timeline uniquement sur tablette et desktop */}
          <div className="absolute top-0 bottom-0 left-3 hidden w-px bg-slate-200 dark:bg-slate-700 sm:block" />

          <div className="space-y-5 sm:space-y-8">
            {experiences.map((experience) => {
              const technologies = t(
                `experience.items.${experience}.technologies`,
                {
                  returnObjects: true,
                },
              ) as string[];

              return (
                <article
                  key={experience}
                  className="relative sm:pl-10"
                >
                  {/* Point de la timeline */}
                  <div className="absolute top-7 left-0 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 dark:border-slate-950 sm:flex" />

                  <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-heading text-lg font-semibold leading-6 text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">
                          {t(`experience.items.${experience}.title`)}
                        </h3>

                        <p className="mt-1 font-sans text-sm font-medium text-blue-600 dark:text-blue-400">
                          {t(`experience.items.${experience}.company`)}
                        </p>
                      </div>

                      <span className="shrink-0 font-sans text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t(`experience.items.${experience}.period`)}
                      </span>
                    </div>

                    <p className="mt-4 font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-base sm:leading-7">
                      {t(`experience.items.${experience}.description`)}
                    </p>

                    {technologies.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-slate-100 px-2.5 py-1.5 font-sans text-xs font-medium text-slate-700 transition-colors duration-300 dark:bg-slate-800 dark:text-slate-300 sm:px-3"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;