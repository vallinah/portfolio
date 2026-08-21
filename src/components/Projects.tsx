import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'enquete',
      slug: 'enquete',
      category: t('projects.categories.professional'),
      status: t('projects.statuses.completed'),
      statusKey: 'completed',
      technologies: [
        'Spring Boot',
        'PostgreSQL',
        'React',
        'Python',
        'Whisper AI',
      ],
    },
    {
      key: 'sudoku',
      slug: 'sudoku',
      category: t('projects.categories.personal'),
      status: t('projects.statuses.inProgress'),
      statusKey: 'inProgress',
      technologies: ['Java', 'React', 'TypeScript'],
    },
    {
      key: 'tachesMenageres',
      slug: 'taches_menageres',
      category: t('projects.categories.personal'),
      status: t('projects.statuses.inProgress'),
      statusKey: 'inProgress',
      technologies: ['Laravel 12', 'React', 'Vite', 'Tailwind CSS', 'MySQL'],
    },
    {
      key: 'erpnext',
      slug: 'erpnext',
      category: t('projects.categories.academic'),
      status: t('projects.statuses.completed'),
      statusKey: 'completed',
      technologies: ['ASP.NET MVC'],
    },
    {
      key: 'cryptomonnaie',
      slug: 'cryptomonnaie',
      category: t('projects.categories.academic'),
      status: t('projects.statuses.completed'),
      statusKey: 'completed',
      technologies: [
        'Laravel',
        'ASP.NET',
        'PostgreSQL',
        'React Native',
        'Firebase',
      ],
    },
    {
      key: 'frameworkJava',
      slug: 'framework_java',
      category: t('projects.categories.academic'),
      status: t('projects.statuses.completed'),
      statusKey: 'completed',
      technologies: ['Java'],
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white px-4 py-16 transition-colors duration-300 dark:bg-slate-900 sm:scroll-mt-0 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl">
            {t('projects.title')}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-base">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="min-w-0 font-heading text-lg font-semibold leading-6 text-slate-900 transition-colors duration-300 dark:text-white sm:text-xl">
                  {t(`projects.items.${project.key}.title`)}
                </h3>

                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                    project.statusKey === 'inProgress'
                      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-2 font-sans text-sm font-medium text-blue-600 dark:text-blue-400">
                {project.category}
              </p>

              <p className="mt-4 flex-1 font-sans text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                {t(`projects.items.${project.key}.description`)}
              </p>

              {project.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-50 px-2.5 py-1.5 font-sans text-xs font-medium text-blue-700 transition-colors duration-300 dark:bg-blue-950 dark:text-blue-300 sm:px-3"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              <Link
                to={`/projects/${project.slug}`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 font-sans text-sm font-medium text-blue-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-blue-800 dark:text-blue-400 dark:hover:border-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-300"
              >
                {t('projects.viewProject')}
                <ArrowUpRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;