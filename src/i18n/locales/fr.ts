const fr = {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        skills: 'Compétences',
        projects: 'Projets',
        experience: 'Expériences',
        education: 'Formation',
        contact: 'Contact',
        lightTheme: 'Activer le thème clair',
        darkTheme: 'Activer le thème sombre',
        closeMenu: 'Fermer le menu',
        openMenu: 'Ouvrir le menu',
      },
  
      hero: {
        greeting: 'Bonjour, je suis',
        role: 'Développeur Full-Stack',
        description:
          'De l’idée à la réalisation, je vous accompagne dans l’étude, la conception et le développement de vos solutions numériques.',
        projectsButton: 'Voir mes projets',
        cvButton: 'Télécharger mon CV',
        contactButton: 'Me contacter',
      },
  
      about: {
        title: 'À propos de moi',
        paragraph1:
          'Je suis un développeur web passionné par la conception et le développement d’applications modernes.',
        paragraph2:
          'J’aime particulièrement travailler sur des projets full-stack, en développant aussi bien le backend que le frontend.',
        paragraph3:
          'Je cherche constamment à améliorer mes compétences et à découvrir de nouvelles technologies afin de construire des solutions efficaces et maintenables.',
      },

      skills: {
        title: 'Compétences',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de données',
        tools: 'Outils',
      },

      projects: {
        title: 'Mes projets',
        subtitle: 'Découvrez quelques-uns des projets sur lesquels j’ai travaillé.',
        viewProject: 'Voir le projet',
      
        categories: {
          professional: 'Projet professionnel',
          personal: 'Projet personnel',
          academic: 'Projet académique',
        },
      
        statuses: {
          completed: 'Terminé',
          inProgress: 'En cours',
        },
      
        items: {
          enquete: {
            title: "Digitalisation du processus d'enquête",
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
          },
      
          sudoku: {
            title: 'Sudoku Solver',
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
          },
      
          tachesMenageres: {
            title: 'Gestion des tâches ménagères',
            description:
              "Application destinée à organiser et répartir les tâches ménagères au sein d'un foyer.",
            objective:
              "Faciliter l'organisation des tâches quotidiennes et leur répartition entre les membres du foyer.",
            role: "Conception et développement de l'application.",
            features: [],
          },
      
          erpnext: {
            title: 'Intégration RH ERPNext',
            description:
              'Application intégrée au module RH de ERPNext permettant de gérer et consulter différentes informations liées aux employés et aux salaires.',
            objective:
              "Faciliter l'exploitation des données RH provenant d'ERPNext.",
            role:
              "Conception et développement de l'application ainsi que de l'intégration avec ERPNext via son API.",
            features: [
              'Importation de données CSV',
              'Liste des employés',
              'Recherche multicritère',
              'Consultation et téléchargement des fiches de paie',
              'Statistiques des éléments salariaux',
              'Génération de salaires entre deux périodes',
              'Modification du salaire de base',
            ],
          },
      
          cryptomonnaie: {
            title: 'Application de cryptomonnaie',
            description:
              "Application permettant aux utilisateurs de gérer un portefeuille et d'effectuer des opérations liées aux cryptomonnaies.",
            objective:
              'Permettre aux utilisateurs de gérer leurs cryptomonnaies et leurs différentes transactions.',
            role:
              'Conception et développement des fonctionnalités de gestion du portefeuille et des transactions.',
            features: [
              'Gestion du portefeuille client',
              'Inscription et connexion avec validation par email',
              'Achat et vente de cryptomonnaies',
              'Dépôt et retrait',
              'Validation des transactions',
              'Historique des achats et ventes',
              'Évolution graphique des cryptomonnaies',
            ],
          },
      
          frameworkJava: {
            title: 'Framework Java personnalisé',
            description:
              "Framework Java personnalisé inspiré de Spring MVC, conçu pour simplifier le développement d'applications web.",
            objective:
              "Comprendre le fonctionnement interne d'un framework MVC et reproduire certaines fonctionnalités essentielles.",
            role: 'Conception et développement du framework.',
            features: [
              'Routing basé sur des annotations',
              "Validation automatique des formulaires",
              "Système d'authentification",
              'Gestion des rôles et permissions',
              'Contrôle des accès au niveau des contrôleurs et méthodes',
            ],
          },
        },
      },

      projectDetails: {
        notFound: 'Projet introuvable',
        backToProjects: 'Retour aux projets',
        motivation: 'Motivation',
        state: 'État du projet',
        features: 'Fonctionnalités',
        technologies: 'Technologies',
        difficulty: 'Difficulté technique',
        github: 'Voir le code sur GitHub',
      
        items: {
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
            difficulty:
              "La principale difficulté consiste à traduire des techniques de résolution plus complexes utilisées par un joueur expérimenté en règles et algorithmes exploitables par le programme. Je travaille actuellement sur l'implémentation de nouvelles méthodes afin d'étendre progressivement les capacités du solveur aux niveaux difficile puis expert.",
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
            difficulty:
              "Une des principales difficultés du projet a été la transcription des interrogatoires audio en texte, notamment avec la nécessité de pouvoir traiter les échanges en temps réel. Plusieurs solutions ont été étudiées avant de retenir Whisper AI pour répondre à ce besoin.",
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
            difficulty:
              "La principale difficulté du projet était de s'adapter à un système existant et à ses règles de fonctionnement. Certaines opérations, notamment la suppression de données, utilisaient des mécanismes que je ne connaissais pas au départ. J'ai dû comprendre le fonctionnement du projet existant et adapter ma manière de développer aux contraintes déjà présentes.",
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
            difficulty:
              "La partie mobile a représenté une difficulté importante, notamment pour adapter l'application afin qu'elle fonctionne correctement sur mobile. Le projet m'a également permis de travailler avec Firebase et de mettre en place une authentification à deux facteurs ainsi qu'une validation par email.",
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
            difficulty:
              "Le développement par sprints m'a permis de découvrir et de mieux comprendre Git ainsi que le fonctionnement d'un projet versionné dans le temps. Le fait de devoir développer et livrer régulièrement des fonctionnalités m'a également appris à organiser progressivement le développement du framework.",
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
            difficulty:
              "Le projet étant encore au début de son développement, les choix techniques et l'architecture sont encore en cours de réflexion. L'objectif est de construire progressivement une solution adaptée aux besoins réels du foyer.",
          },
        },
      },

      experience: {
        title: 'Expériences',
        subtitle: 'Mon parcours et mes expériences dans le développement web.',
        items: {
          july2026: {
            title: 'Développeur Web',
            company: 'Projet professionnel',
            period: 'Juillet 2026',
            description:
              "Analyse et amélioration d'un projet web existant à travers des revues de code, l'identification et la correction d'issues Git, ainsi que la proposition d'améliorations. Coordination et accompagnement d'une équipe durant le projet.",
            technologies: ['PHP', 'Git', 'GitHub', 'Code Review'],
          },
      
          may2026: {
            title: 'Développeur Web',
            company: 'Projet professionnel',
            period: 'Mai 2026',
            description:
              "Conception d’un site vitrine pour présenter et commercialiser des services. Développement du backend de gestion des devis et factures, puis déploiement de la solution sur Plesk.",
            technologies: ['HTML', 'Laravel', 'PHP', 'Plesk'],
          },
      
          internship2025: {
            title: 'Développeur Web — Stage',
            company: 'Expérience professionnelle',
            period: '2025',
            description:
              "Participation au développement et à l'intégration de fonctionnalités web dans un environnement professionnel.",
            technologies: [
              'Java',
              'Spring Boot',
              'JavaScript',
              'React',
              'PostgreSQL',
            ],
          },
      
          personal: {
            title: 'Projets personnels',
            company: 'Développement personnel',
            period: "2024 — Aujourd'hui",
            description:
              'Conception et développement de plusieurs applications web et projets logiciels afin de mettre en pratique mes compétences en développement frontend et backend.',
            technologies: ['Java', 'React', 'TypeScript', 'Laravel'],
          },
        },
      },

      education: {
        title: 'Formation',
        subtitle: 'Mon parcours académique et ma formation en informatique.',
        items: {
          licence: {
            title: 'Licence en Informatique',
            institution: 'IT University — Madagascar',
            period: '2022 — 2026',
            description:
              "Formation orientée développement logiciel, développement web, conception d'applications et bases de données.",
          },
          baccalaureat: {
            title: 'Baccalauréat',
            institution: 'Lycée Nanisana — Madagascar',
            period: '',
            description: '',
          },
        },
      },

      contact: {
        title: 'Contact',
        subtitle:
          "Vous avez un projet ou une opportunité à me proposer ? N'hésitez pas à me contacter.",
        form: {
          name: {
            label: 'Nom',
            placeholder: 'Votre nom',
            required: 'Veuillez renseigner votre nom.',
          },
          email: {
            label: 'Email',
            placeholder: 'votre@email.com',
            required: 'Veuillez renseigner votre adresse email.',
            invalid: 'Veuillez renseigner une adresse email valide.',
          },
          message: {
            label: 'Message',
            placeholder: 'Votre message...',
            required: 'Veuillez renseigner votre message.',
          },
          submit: 'Envoyer le message',
        },
        success:
          'Si votre message a bien été envoyé, il sera pris en compte. Merci !',
        email: 'Email',
        whatsapp: 'WhatsApp',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },

      footer: {
        rights: 'Tous droits réservés.',
      },

      notFound: {
        title: 'Page introuvable',
        description:
          "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
        backHome: "Retour à l'accueil",
      },

      seo: {
        title: 'Otisoa Vallinah Andriamasinoro — Portfolio',
        description:
          'Portfolio de Otisoa Vallinah Andriamasinoro — Développeur Full-Stack.',
      },
    },

  };
  
  export default fr;