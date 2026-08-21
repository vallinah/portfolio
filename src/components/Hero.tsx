import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="accueil"
      className="flex min-h-screen scroll-mt-20 items-center bg-slate-50 px-4 pt-24 transition-colors duration-300 dark:bg-slate-950 sm:scroll-mt-0 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="font-sans text-base font-medium text-blue-600 sm:text-lg">
          {t('hero.greeting')}
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl font-heading text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-5xl lg:text-6xl">
          Otisoa Vallinah Andriamasinoro
        </h1>

        <h2 className="mt-4 font-heading text-xl font-semibold text-slate-700 transition-colors duration-300 dark:text-slate-300 sm:text-3xl">
          {t('hero.role')}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:mt-6 sm:text-lg sm:leading-7">
          {t('hero.description')}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-blue-700 sm:w-auto"
          >
            {t('hero.projectsButton')}
          </a>

          <a
            href="/cv.pdf"
            download
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-blue-600 bg-white px-6 py-3 font-sans font-medium text-blue-600 transition-colors duration-200 hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-800 sm:w-auto"
          >
            {t('hero.cvButton')}
          </a>

          <a
            href="#contact"
            className="inline-flex w-full max-w-xs items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 font-sans font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto"
          >
            {t('hero.contactButton')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;