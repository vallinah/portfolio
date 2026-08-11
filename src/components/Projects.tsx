import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Digitalisation du processus d'enquête",
      slug: 'enquete',
      category: 'Projet professionnel',
      status: 'Terminé',
      description:
        "Application destinée à digitaliser et faciliter le processus d'enquête d'un poste de gendarmerie.",
      objective:
        'Faciliter les enquêtes, centraliser les informations et permettre de générer rapidement les documents nécessaires.',
      role: "Analyse de l'existant et des besoins, choix des technologies, conception et développement de l'application.",
      features: [
        'Gestion des événements et enquêtes',
        'Gestion des interrogatoires et personnes impliquées',
        'Gestion des réquisitions et convocations',
        'Génération de documents officiels en PDF',
        'Transcription automatique des interrogatoires audio',
        'Statistiques sur les événements et enquêtes',
      ],
      technologies: [
        'Spring Boot',
        'PostgreSQL',
        'React',
        'Python',
        'Whisper AI',
      ],
    },
    {
      title: 'Sudoku Solver',
      slug: 'sudoku',
      category: 'Projet personnel',
      status: 'En cours',
      description:
        'Application permettant de résoudre automatiquement des grilles de Sudoku avec différentes techniques de résolution.',
      objective:
        'Automatiser la résolution de grilles de Sudoku en utilisant différentes techniques de résolution.',
      role: "Conception de l'application et développement des algorithmes de résolution ainsi que de l'interface utilisateur.",
      features: [
        'Résolution automatique',
        'Différentes techniques de résolution',
        'Gestion des candidats',
        'Interface interactive',
      ],
      technologies: ['Java', 'React', 'TypeScript'],
    },
    {
      title: 'Gestion des tâches ménagères',
      slug: 'taches_menageres',
      category: 'Projet personnel',
      status: 'En cours',
      description:
        "Application destinée à organiser et répartir les tâches ménagères au sein d'un foyer.",
      objective:
        "Faciliter l'organisation des tâches quotidiennes et leur répartition entre les membres du foyer.",
      role: "Conception et développement de l'application.",
      features: [],
      technologies: ['Laravel 12', 'React', 'Vite', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Intégration RH ERPNext',
      slug: 'erpnext',
      category: 'Projet académique',
      status: 'Terminé',
      description:
        'Application intégrée au module RH de ERPNext permettant de gérer et consulter différentes informations liées aux employés et aux salaires.',
      objective: "Faciliter l'exploitation des données RH provenant d'ERPNext.",
      role: "Conception et développement de l'application ainsi que de l'intégration avec ERPNext via son API.",
      features: [
        'Importation de données CSV',
        'Liste des employés',
        'Recherche multicritère',
        'Consultation et téléchargement des fiches de paie',
        'Statistiques des éléments salariaux',
        'Génération de salaires entre deux périodes',
        'Modification du salaire de base',
      ],
      technologies: ['ASP.NET MVC'],
    },
    {
      title: 'Application de cryptomonnaie',
      slug: 'cryptomonnaie',
      category: 'Projet académique',
      status: 'Terminé',
      description:
        "Application permettant aux utilisateurs de gérer un portefeuille et d'effectuer des opérations liées aux cryptomonnaies.",
      objective:
        'Permettre aux utilisateurs de gérer leurs cryptomonnaies et leurs différentes transactions.',
      role: 'Conception et développement des fonctionnalités de gestion du portefeuille et des transactions.',
      features: [
        'Gestion du portefeuille client',
        'Inscription et connexion avec validation par email',
        'Achat et vente de cryptomonnaies',
        'Dépôt et retrait',
        'Validation des transactions',
        'Historique des achats et ventes',
        'Évolution graphique des cryptomonnaies',
      ],
      technologies: [
        'Laravel',
        'ASP.NET',
        'PostgreSQL',
        'React Native',
        'Firebase',
      ],
    },
    {
      title: 'Framework Java personnalisé',
      slug: 'framework_java',
      category: 'Projet académique',
      status: 'Terminé',
      description:
        "Framework Java personnalisé inspiré de Spring MVC, conçu pour simplifier le développement d'applications web.",
      objective:
        "Comprendre le fonctionnement interne d'un framework MVC et reproduire certaines fonctionnalités essentielles.",
      role: 'Conception et développement du framework.',
      features: [
        'Routing basé sur des annotations',
        'Validation automatique des formulaires',
        "Système d'authentification",
        'Gestion des rôles et permissions',
        'Contrôle des accès au niveau des contrôleurs et méthodes',
      ],
      technologies: ['Java'],
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-white px-4 py-16 sm:scroll-mt-0 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
            Mes projets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-6 text-slate-600 sm:text-base">
            Découvrez quelques-uns des projets sur lesquels j&apos;ai travaillé.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="min-w-0 font-heading text-lg font-semibold leading-6 text-slate-900 sm:text-xl">
                  {project.title}
                </h3>

                <span
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === 'En cours'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-green-50 text-green-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-2 font-sans text-sm font-medium text-blue-600">
                {project.category}
              </p>

              <p className="mt-4 flex-1 font-sans text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-50 px-2.5 py-1.5 font-sans text-xs font-medium text-blue-700 sm:px-3"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              <Link
                to={`/projects/${project.slug}`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-200 px-4 py-2.5 font-sans text-sm font-medium text-blue-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Voir le projet
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
