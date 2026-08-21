const en = {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        education: 'Education',
        contact: 'Contact',
        lightTheme: 'Enable light theme',
        darkTheme: 'Enable dark theme',
        closeMenu: 'Close menu',
        openMenu: 'Open menu',
      },
  
      hero: {
        greeting: 'Hello, I am',
        role: 'Full-Stack Developer',
        description:
          'From idea to implementation, I help you with the planning, design, and development of your digital solutions.',
        projectsButton: 'View my projects',
        cvButton: 'Download my CV',
        contactButton: 'Contact me',
      },
  
      about: {
        title: 'About me',
        paragraph1:
          'I am a web developer passionate about designing and developing modern applications.',
        paragraph2:
          'I particularly enjoy working on full-stack projects, developing both the backend and the frontend.',
        paragraph3:
          'I am constantly looking to improve my skills and discover new technologies in order to build efficient and maintainable solutions.',
      },

      skills: {
        title: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        tools: 'Tools',
      },

      projects: {
        title: 'My Projects',
        subtitle: 'Discover some of the projects I have worked on.',
        viewProject: 'View project',
      
        categories: {
          professional: 'Professional Project',
          personal: 'Personal Project',
          academic: 'Academic Project',
        },
      
        statuses: {
          completed: 'Completed',
          inProgress: 'In Progress',
        },
      
        items: {
          enquete: {
            title: 'Investigation Process Digitalization',
            description:
              'Application designed to digitalize and facilitate the investigation process of a police station.',
            objective:
              'Facilitate investigations, centralize information, and quickly generate the required documents.',
            role:
              'Analysis of the existing system and requirements, technology selection, application design and development.',
            features: [
              'Event and investigation management',
              'Interrogation and involved-person management',
              'Requests and summons management',
              'Official PDF document generation',
              'Automatic transcription of audio interrogations',
              'Event and investigation statistics',
            ],
          },
      
          sudoku: {
            title: 'Sudoku Solver',
            description:
              'Application that automatically solves Sudoku grids using different solving techniques.',
            objective:
              'Automate the solving of Sudoku grids using different solving techniques.',
            role:
              'Application design and development of solving algorithms and the user interface.',
            features: [
              'Automatic solving',
              'Different solving techniques',
              'Candidate management',
              'Interactive interface',
            ],
          },
      
          tachesMenageres: {
            title: 'Household Chore Management',
            description:
              'Application designed to organize and distribute household chores within a household.',
            objective:
              'Facilitate the organization of daily chores and their distribution among household members.',
            role: 'Application design and development.',
            features: [],
          },
      
          erpnext: {
            title: 'ERPNext HR Integration',
            description:
              'Application integrated with the ERPNext HR module to manage and view various employee and salary-related information.',
            objective:
              'Facilitate the use of HR data coming from ERPNext.',
            role:
              'Application design and development, including integration with ERPNext through its API.',
            features: [
              'CSV data import',
              'Employee list',
              'Multi-criteria search',
              'Payslip viewing and downloading',
              'Salary component statistics',
              'Salary generation between two periods',
              'Base salary modification',
            ],
          },
      
          cryptomonnaie: {
            title: 'Cryptocurrency Application',
            description:
              'Application allowing users to manage a wallet and perform cryptocurrency-related operations.',
            objective:
              'Allow users to manage their cryptocurrencies and various transactions.',
            role:
              'Design and development of wallet and transaction management features.',
            features: [
              'Customer wallet management',
              'Registration and login with email verification',
              'Cryptocurrency buying and selling',
              'Deposits and withdrawals',
              'Transaction validation',
              'Purchase and sales history',
              'Cryptocurrency performance charts',
            ],
          },
      
          frameworkJava: {
            title: 'Custom Java Framework',
            description:
              'Custom Java framework inspired by Spring MVC, designed to simplify web application development.',
            objective:
              'Understand the internal workings of an MVC framework and reproduce some of its essential features.',
            role: 'Framework design and development.',
            features: [
              'Annotation-based routing',
              'Automatic form validation',
              'Authentication system',
              'Role and permission management',
              'Access control at controller and method level',
            ],
          },
        },
      },

      projectDetails: {
        notFound: 'Project not found',
        backToProjects: 'Back to projects',
        motivation: 'Motivation',
        state: 'Project status',
        features: 'Features',
        technologies: 'Technologies',
        difficulty: 'Technical challenge',
        github: 'View code on GitHub',
      
        items: {
          sudoku: {
            title: 'Sudoku Solver',
            category: 'Personal Project',
            status: 'In Progress',
            description:
              'Application that automatically solves Sudoku grids using different solving techniques.',
            motivation:
              'As a Sudoku enthusiast, I wanted to transform the solving methods I use mentally into algorithms capable of automatically solving a grid. The goal is also to study different solving techniques and explore how far their application can be automated.',
            state:
              'The solver can currently solve easy and medium-level grids. Development is continuing to support difficult and expert grids, which require more advanced solving techniques.',
            features: [
              'Automatic solving',
              'Different solving techniques',
              'Candidate management',
              'Interactive interface',
            ],
            difficulty:
              'The main challenge is translating more complex solving techniques used by experienced players into rules and algorithms that can be processed by the program. I am currently implementing new methods to gradually extend the solver capabilities to difficult and expert levels.',
          },
      
          enquete: {
            title: 'Investigation Process Digitalization',
            category: 'Professional Project',
            status: 'Completed',
            description:
              'Application designed to digitalize and facilitate the investigation process of a police station.',
            motivation:
              'The project was created to modernize and facilitate investigation-related work. The goal was to centralize information, simplify the management of the different investigation steps, and facilitate the generation of the required documents.',
            state:
              'The project was completed and the main features were developed, including investigation management, involved-person management, interrogations, and associated documents.',
            features: [
              'Event and investigation management',
              'Interrogation and involved-person management',
              'Requests and summons management',
              'Official PDF document generation',
              'Audio interrogation transcription',
              'Event and investigation statistics',
            ],
            difficulty:
              'One of the main challenges was transcribing audio interrogations into text, particularly with the need to process conversations in real time. Several solutions were studied before choosing Whisper AI for this requirement.',
          },
      
          erpnext: {
            title: 'ERPNext HR Integration',
            category: 'Academic Project',
            status: 'Completed',
            description:
              'Application integrated with the ERPNext HR module to manage and view various employee and salary-related information.',
            motivation:
              'The goal of this project was to work with an existing application and understand how to develop a solution capable of integrating with it. It allowed me to work with the ERPNext API and use its data within a dedicated application.',
            state:
              'The application was developed with several features for importing, viewing, searching, and using employee and salary-related data.',
            features: [
              'CSV data import',
              'Employee list',
              'Multi-criteria search',
              'Payslip viewing and downloading',
              'Salary component statistics',
              'Salary generation between two periods',
              'Base salary modification',
            ],
            difficulty:
              'The main challenge was adapting to an existing system and its operating rules. Some operations, particularly data deletion, used mechanisms that I was not initially familiar with. I had to understand the existing project and adapt my development approach to its constraints.',
          },
      
          cryptomonnaie: {
            title: 'Cryptocurrency Application',
            category: 'Academic Project',
            status: 'Completed',
            description:
              'Application allowing users to manage a wallet and perform various cryptocurrency-related operations.',
            motivation:
              'The goal of this project was to design an application allowing users to manage their cryptocurrencies and transactions while working on different aspects of a web and mobile application.',
            state:
              'The project was developed as a team and included both a web application and a mobile application. Several features related to wallet management, transactions, and authentication were developed.',
            features: [
              'Customer wallet management',
              'Registration and login with email verification',
              'Two-factor authentication',
              'Cryptocurrency buying and selling',
              'Deposits and withdrawals',
              'Transaction validation',
              'Purchase and sales history',
              'Cryptocurrency performance charts',
            ],
            difficulty:
              'The mobile part was a significant challenge, particularly in adapting the application to work properly on mobile devices. The project also allowed me to work with Firebase and implement two-factor authentication and email verification.',
          },
      
          framework_java: {
            title: 'Custom Java Framework',
            category: 'Academic Project',
            status: 'Completed',
            description:
              'Custom Java framework inspired by Spring MVC, designed to simplify web application development.',
            motivation:
              'The goal of this project was to understand the internal workings of an MVC framework by designing our own Java framework and reproducing some essential features.',
            state:
              'The framework was developed progressively through sprints. The project also required regularly versioning the work and sharing it through Git.',
            features: [
              'Annotation-based routing',
              'Automatic form validation',
              'Authentication system',
              'Role and permission management',
              'Access control at controller and method level',
            ],
            difficulty:
              'Sprint-based development allowed me to discover and better understand Git and how a project evolves through version control. Having to regularly develop and deliver features also taught me how to organize framework development progressively.',
          },
      
          taches_menageres: {
            title: 'Household Chore Management',
            category: 'Personal Project',
            status: 'In Progress',
            description:
              'Application designed to organize household chores and track their completion within a household.',
            motivation:
              'The idea came from a practical need: making it easier to organize household chores, including knowing which tasks have been completed, by whom, and when. The project also includes household expense management and tracking against a defined budget.',
            state:
              'The project is currently in the study and initialization phase. The initial foundations of the application have been implemented, but development of the main features is still ongoing.',
            features: [
              'Task creation and management',
              'Task assignment to household members',
              'Task completion tracking',
              'Recurring task management',
              'Household expense tracking',
              'Budget management',
            ],
            difficulty:
              'Since the project is still in its early development stage, the technical choices and architecture are still being considered. The goal is to progressively build a solution adapted to the household’s actual needs.',
          },
        },
      },

      experience: {
        title: 'Experience',
        subtitle: 'My background and experience in web development.',
        items: {
          july2026: {
            title: 'Web Developer',
            company: 'Professional Project',
            period: 'July 2026',
            description:
              'Analysis and improvement of an existing web project through code reviews, identification and fixing of Git issues, as well as improvement proposals. Coordination and support of a team throughout the project.',
            technologies: ['PHP', 'Git', 'GitHub', 'Code Review'],
          },
      
          may2026: {
            title: 'Web Developer',
            company: 'Professional Project',
            period: 'May 2026',
            description:
              'Design and development of a showcase website to present and market services. Development of the backend for managing quotes and invoices, followed by deployment on Plesk.',
            technologies: ['HTML', 'Laravel', 'PHP', 'Plesk'],
          },
      
          internship2025: {
            title: 'Web Developer — Internship',
            company: 'Professional Experience',
            period: '2025',
            description:
              'Participation in the development and integration of web features in a professional environment.',
            technologies: [
              'Java',
              'Spring Boot',
              'JavaScript',
              'React',
              'PostgreSQL',
            ],
          },
      
          personal: {
            title: 'Personal Projects',
            company: 'Personal Development',
            period: '2024 — Present',
            description:
              'Design and development of several web applications and software projects to put my frontend and backend development skills into practice.',
            technologies: ['Java', 'React', 'TypeScript', 'Laravel'],
          },
        },
      },

      education: {
        title: 'Education',
        subtitle: 'My academic background and education in computer science.',
        items: {
          licence: {
            title: 'Bachelor’s Degree in Computer Science',
            institution: 'IT University — Madagascar',
            period: '2022 — 2026',
            description:
              'Education focused on software development, web development, application design, and databases.',
          },
          baccalaureat: {
            title: 'Baccalaureate',
            institution: 'Lycée Nanisana — Madagascar',
            period: '',
            description: '',
          },
        },
      },

      contact: {
        title: 'Contact',
        subtitle:
          "Do you have a project or an opportunity you'd like to discuss? Feel free to contact me.",
        form: {
          name: {
            label: 'Name',
            placeholder: 'Your name',
            required: 'Please enter your name.',
          },
          email: {
            label: 'Email',
            placeholder: 'your@email.com',
            required: 'Please enter your email address.',
            invalid: 'Please enter a valid email address.',
          },
          message: {
            label: 'Message',
            placeholder: 'Your message...',
            required: 'Please enter your message.',
          },
          submit: 'Send message',
        },
        success:
          'If your message was successfully sent, it will be taken into account. Thank you!',
        email: 'Email',
        whatsapp: 'WhatsApp',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },

      footer: {
        rights: 'All rights reserved.',
      },

      notFound: {
        title: 'Page not found',
        description:
          'Sorry, the page you are looking for does not exist or has been moved.',
        backHome: 'Back to home',
      },

      seo: {
        title: 'Otisoa Vallinah Andriamasinoro — Portfolio',
        description:
          'Portfolio of Otisoa Vallinah Andriamasinoro — Full-Stack Developer.',
      },
    },
  };
  
  export default en;