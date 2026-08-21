import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-4 py-16 transition-colors duration-300 dark:bg-slate-900 sm:scroll-mt-0 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl">
          {t('about.title')}
        </h2>

        <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-lg sm:leading-7">
            {t('about.paragraph1')}
          </p>

          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-lg sm:leading-7">
            {t('about.paragraph2')}
          </p>

          <p className="indent-6 font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-lg sm:leading-7">
            {t('about.paragraph3')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;