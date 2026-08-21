import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  const education = [
    'licence',
    'baccalaureat',
  ];

  return (
    <section
      id="education"
      className="scroll-mt-20 bg-white px-6 py-20 transition-colors duration-300 dark:bg-slate-900 sm:scroll-mt-0"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl">
            {t('education.title')}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-slate-600 transition-colors duration-300 dark:text-slate-400">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <article
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-950"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
                    {t(`education.items.${item}.title`)}
                  </h3>

                  <p className="mt-1 font-sans font-medium text-blue-600 dark:text-blue-400">
                    {t(`education.items.${item}.institution`)}
                  </p>
                </div>

                {t(`education.items.${item}.period`) && (
                  <span className="font-sans text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t(`education.items.${item}.period`)}
                  </span>
                )}
              </div>

              {t(`education.items.${item}.description`) && (
                <p className="mt-4 font-sans leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                  {t(`education.items.${item}.description`)}
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