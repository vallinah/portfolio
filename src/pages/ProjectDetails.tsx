import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = {
  sudoku: {
    slug: 'sudoku',
    technologies: ['Java', 'React', 'TypeScript'],
    github: 'https://github.com/vallinah/sudoku_solver',
  },

  enquete: {
    slug: 'enquete',
    technologies: [
      'Spring Boot',
      'PostgreSQL',
      'React',
      'Python',
      'Whisper AI',
    ],
    github: null,
  },

  erpnext: {
    slug: 'erpnext',
    technologies: ['ASP.NET MVC'],
    github: null,
  },

  cryptomonnaie: {
    slug: 'cryptomonnaie',
    technologies: [
      'Laravel',
      'ASP.NET',
      'PostgreSQL',
      'React Native',
      'Firebase',
    ],
    github: null,
  },

  framework_java: {
    slug: 'framework_java',
    technologies: ['Java'],
    github: 'https://github.com/vallinah/sprint-2380',
  },

  taches_menageres: {
    slug: 'taches_menageres',
    technologies: ['Laravel 12', 'React', 'Vite', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/vallinah/Gestion-de-t-che',
  },
};

function ProjectDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t } = useTranslation();

  const project =
    projects[slug as keyof typeof projects];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [slug]);

  const goToProjects = () => {
    navigate('/');

    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  };

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 transition-colors duration-300 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">
            {t('projectDetails.notFound')}
          </h1>

          <button
            type="button"
            onClick={goToProjects}
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft size={17} />
            {t('projectDetails.backToProjects')}
          </button>
        </div>
      </main>
    );
  }

  const translationKey = `projectDetails.items.${project.slug}`;

  const features = t(`${translationKey}.features`, {
    returnObjects: true,
  }) as string[];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={goToProjects}
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <ArrowLeft size={17} />
          {t('projectDetails.backToProjects')}
        </button>

        <div className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-sans text-sm font-medium text-blue-600 dark:text-blue-400">
                {t(`${translationKey}.category`)}
              </p>

              <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                {t(`${translationKey}.title`)}
              </h1>
            </div>

            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                t(`${translationKey}.status`) ===
                t('projectDetails.items.sudoku.status')
                  ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
              }`}
            >
              {t(`${translationKey}.status`)}
            </span>
          </div>

          <p className="mt-6 font-sans text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            {t(`${translationKey}.description`)}
          </p>

          <div className="mt-10 grid gap-8">
            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                {t('projectDetails.motivation')}
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {t(`${translationKey}.motivation`)}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                {t('projectDetails.state')}
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {t(`${translationKey}.state`)}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                {t('projectDetails.features')}
              </h2>

              <ul className="mt-3 space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="font-sans leading-7 text-slate-600 dark:text-slate-400"
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                {t('projectDetails.technologies')}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-blue-50 px-3 py-1.5 font-sans text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                {t('projectDetails.difficulty')}
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {t(`${translationKey}.difficulty`)}
              </p>
            </section>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                {t('projectDetails.github')}
                <ExternalLink size={17} />
              </a>
            )}

            <button
              type="button"
              onClick={goToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-sans text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <ArrowLeft size={17} />
              {t('projectDetails.backToProjects')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;