import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = {
  sudoku: {
    title: 'Sudoku Solver',
    category: 'Projet personnel',
    status: 'En cours',
    description:
      'Application permettant de résoudre automatiquement des grilles de Sudoku avec différentes techniques de résolution.',
    motivation:
      "Passionné par le Sudoku, j'ai voulu transformer les méthodes de résolution que j'utilise mentalement en algorithmes capables de résoudre automatiquement une grille. L'objectif est également d'étudier différentes techniques de résolution et de voir jusqu'où il est possible d'automatiser leur application.",
    state:
      'Le solveur permet actuellement de résoudre les grilles de niveau facile et moyen. Le développement se poursuit pour prendre en charge les grilles difficiles et expertes, qui nécessitent des techniques de résolution plus avancées.',
    features: [
      'Résolution automatique',
      'Différentes techniques de résolution',
      'Gestion des candidats',
      'Interface interactive',
    ],
    technologies: ['Java', 'React', 'TypeScript'],
    difficulty:
      "La principale difficulté consiste à traduire des techniques de résolution plus complexes utilisées par un joueur expérimenté en règles et algorithmes exploitables par le programme. Je travaille actuellement sur l'implémentation de nouvelles méthodes afin d'étendre progressivement les capacités du solveur aux niveaux difficile puis expert.",
    github: 'https://github.com/vallinah/sudoku_solver',
  },
  enquete: {
    title: "Digitalisation du processus d'enquête",
    category: 'Projet professionnel',
    status: 'Terminé',
    description:
      "Application destinée à digitaliser et faciliter le processus d'enquête d'un poste de gendarmerie.",
    motivation:
      "Le projet est né du besoin de moderniser et de faciliter le travail lié aux enquêtes. L'objectif était de centraliser les informations, simplifier la gestion des différentes étapes d'une enquête et faciliter la génération des documents nécessaires.",
    state:
      'Le projet a été réalisé et les principales fonctionnalités ont été développées, notamment la gestion des enquêtes, des personnes impliquées, des interrogatoires et des documents associés.',
    features: [
      'Gestion des événements et enquêtes',
      'Gestion des interrogatoires et personnes impliquées',
      'Gestion des réquisitions et convocations',
      'Génération de documents officiels en PDF',
      'Transcription des interrogatoires audio en texte',
      'Statistiques sur les événements et enquêtes',
    ],
    technologies: [
      'Spring Boot',
      'PostgreSQL',
      'React',
      'Python',
      'Whisper AI',
    ],
    difficulty:
      'Une des principales difficultés du projet a été la transcription des interrogatoires audio en texte, notamment avec la nécessité de pouvoir traiter les échanges en temps réel. Plusieurs solutions ont été étudiées avant de retenir Whisper AI pour répondre à ce besoin.',
    github: null,
  },
  erpnext: {
    title: 'Intégration RH ERPNext',
    category: 'Projet académique',
    status: 'Terminé',
    description:
      'Application intégrée au module RH de ERPNext permettant de gérer et consulter différentes informations liées aux employés et aux salaires.',
    motivation:
      "Ce projet avait pour objectif de travailler avec une application existante et de comprendre comment développer une solution capable de s'intégrer à celle-ci. Il m'a notamment permis de travailler avec l'API d'ERPNext et d'exploiter ses données dans une application dédiée.",
    state:
      "L'application a été développée avec plusieurs fonctionnalités permettant d'importer, consulter, rechercher et exploiter des données liées aux employés et aux salaires.",
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
    difficulty:
      "La principale difficulté du projet était de s'adapter à un système existant et à ses règles de fonctionnement. Certaines opérations, notamment la suppression de données, utilisaient des mécanismes que je ne connaissais pas au départ. J'ai dû comprendre le fonctionnement du projet existant et adapter ma manière de développer aux contraintes déjà présentes.",
    github: null,
  },
  cryptomonnaie: {
    title: 'Application de cryptomonnaie',
    category: 'Projet académique',
    status: 'Terminé',
    description:
      "Application permettant aux utilisateurs de gérer un portefeuille et d'effectuer différentes opérations liées aux cryptomonnaies.",
    motivation:
      "Ce projet avait pour objectif de concevoir une application permettant aux utilisateurs de gérer leurs cryptomonnaies et leurs transactions, tout en travaillant sur différents aspects d'une application web et mobile.",
    state:
      "Le projet a été réalisé en groupe et comprenait une partie web ainsi qu'une application mobile. Plusieurs fonctionnalités liées à la gestion du portefeuille, aux transactions et à l'authentification ont été développées.",
    features: [
      'Gestion du portefeuille client',
      'Inscription et connexion avec validation par email',
      'Authentification à deux facteurs',
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
    difficulty:
      "La partie mobile a représenté une difficulté importante, notamment pour adapter l'application afin qu'elle fonctionne correctement sur mobile. Le projet m'a également permis de travailler avec Firebase et de mettre en place une authentification à deux facteurs ainsi qu'une validation par email.",
    github: null,
  },
  framework_java: {
    title: 'Framework Java personnalisé',
    category: 'Projet académique',
    status: 'Terminé',
    description:
      "Framework Java personnalisé inspiré de Spring MVC, conçu pour simplifier le développement d'applications web.",
    motivation:
      "L'objectif de ce projet était de comprendre le fonctionnement interne d'un framework MVC en concevant notre propre framework Java et en reproduisant certaines fonctionnalités essentielles.",
    state:
      'Le framework a été développé progressivement par sprints. Le projet nécessitait également de versionner régulièrement le travail et de le partager via Git.',
    features: [
      'Routing basé sur des annotations',
      'Validation automatique des formulaires',
      "Système d'authentification",
      'Gestion des rôles et permissions',
      'Contrôle des accès au niveau des contrôleurs et méthodes',
    ],
    technologies: ['Java'],
    difficulty:
      "Le développement par sprints m'a permis de découvrir et de mieux comprendre Git ainsi que le fonctionnement d'un projet versionné dans le temps. Le fait de devoir développer et livrer régulièrement des fonctionnalités m'a également appris à organiser progressivement le développement du framework.",
    github: 'https://github.com/vallinah/sprint-2380',
  },
  taches_menageres: {
    title: 'Gestion des tâches ménagères',
    category: 'Projet personnel',
    status: 'En cours',
    description:
      "Application destinée à organiser les tâches ménagères et à suivre leur réalisation au sein d'un foyer.",
    motivation:
      "L'idée est née d'un besoin concret : faciliter l'organisation des tâches au sein du foyer, notamment pour savoir quelles tâches ont été réalisées, par qui et à quel moment. Le projet prend également en compte la gestion des dépenses et leur suivi par rapport à un budget établi.",
    state:
      "Le projet est actuellement au stade de l'étude et de l'initialisation. Les premières bases de l'application ont été mises en place, mais le développement des fonctionnalités principales reste à poursuivre.",
    features: [
      'Création et gestion des tâches',
      'Attribution des tâches aux membres du foyer',
      'Suivi de la réalisation des tâches',
      'Gestion des tâches récurrentes',
      'Suivi des dépenses du foyer',
      "Gestion d'un budget",
    ],
    technologies: ['Laravel 12', 'React', 'Vite', 'Tailwind CSS', 'MySQL'],
    difficulty:
      "Le projet étant encore au début de son développement, les choix techniques et l'architecture sont encore en cours de réflexion. L'objectif est de construire progressivement une solution adaptée aux besoins réels du foyer.",
    github: 'https://github.com/vallinah/Gestion-de-t-che',
  },
};

function ProjectDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const project = projects[slug as keyof typeof projects];

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
            Projet introuvable
          </h1>

          <button
            type="button"
            onClick={goToProjects}
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft size={17} />
            Retour aux projets
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={goToProjects}
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          <ArrowLeft size={17} />
          Retour aux projets
        </button>

        <div className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-sans text-sm font-medium text-blue-600 dark:text-blue-400">
                {project.category}
              </p>

              <h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                {project.title}
              </h1>
            </div>

            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                project.status === 'En cours'
                  ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
              }`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-6 font-sans text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-10 grid gap-8">
            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                Motivation
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {project.motivation}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                État du projet
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {project.state}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">
                Fonctionnalités
              </h2>

              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
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
                Technologies
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
                Difficulté technique
              </h2>

              <p className="mt-3 font-sans leading-7 text-slate-600 dark:text-slate-400">
                {project.difficulty}
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
                Voir le code sur GitHub
                <ExternalLink size={17} />
              </a>
            )}

            <button
              type="button"
              onClick={goToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 font-sans text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              <ArrowLeft size={17} />
              Retour aux projets
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
