export const personalInfo = {
  name: "Lucas Zubiarrain",
  location: "Canada, Montreal",
  email: "zubiarrainlucas@gmail.com",
  github: "https://github.com/lucaszub",
  linkedin: "https://www.linkedin.com/in/lucas-zubiarrain/",
};

export const workExperience = [
  {
    company: "Silamir",
    location: "France, Nantes",
    position: "Data Engineer – BI & Workflow Automation",
    period: "September 2023 - March 2025",
    achievements: [
      "Contributed to the implementation and maintenance of complex data workflows in the banking sector using Alteryx for ETL processes and Oracle databases for data storage.",
      "Developed automated Power BI reports to monitor the status of approximately 30 workflows per week, enabling proactive issue detection and operational transparency.",
      "Optimized data pipelines to improve performance and reliability, ensuring timely and accurate data delivery for business analytics.",
      "Collaborated with cross-functional teams to align data solutions with business needs, ensuring compliance and data governance.",
      "Supported troubleshooting and enhancement of existing workflows to adapt to evolving requirements and improve scalability.",
    ],
    detailPage: "https://www.silamir.com/",
  },

  {
    company: "Silamir",
    location: "France, Nantes",
    position: "Cloud Data Engineer – Snowflake, Azure & Python",
    period: "Sept 2023 - August 2024",
    achievements: [
      "Designed and developed a Snowflake-based SQL query generator platform using Python, FastAPI, and Streamlit, enabling business users to build complex SQL queries from JSON inputs tailored to specific business needs.",
      "Created a user-friendly Streamlit interface allowing selection of time periods, attributes, and filters, which dynamically generated JSON payloads translated into optimized SQL queries executed on Snowflake.",
      "Implemented automated workflows for exporting query results as CSV files directly to Azure Blob Storage, improving data accessibility and integration with downstream processes.",
      "Leveraged Snowflake's performance and scalability to efficiently handle large datasets, ensuring fast query execution and reliable data delivery.",
      "Deployed and hosted the entire solution on Azure, utilizing Azure Web Apps and Azure Functions to ensure scalability, security, and seamless cloud integration.",
      "Collaborated with cross-functional teams to align platform capabilities with business requirements, enhancing reporting automation and reducing manual query writing.",
    ],
    detailPage: "https://www.silamir.com",
  },
];

export const education = [
  {
    institution: "Wild Code School",
    location: "France (Remote / Alternance)",
    degree: "Data Engineer Training (Apprenticeship)",
    period: "September 2023 - August 2024",
    achievements: [
      "Hands-on experience with data modeling and ELT processes using dbt",
      "Development and deployment of data pipelines on AWS (S3, EC2, RDS)",
      "Use of BigQuery and Snowflake for large-scale data warehousing",
      "Workflow orchestration with Apache Airflow",
      "Containerization and environment management using Docker",
      "Data storage and versioning using S3 buckets",
      "Collaboration on real-world projects in an alternating work-study program",
    ],
  },

  {
    institution: "Wild Code School",
    location: "Nantes, France",
    degree: "Data Analysis",
    period: "February 2024 - July 2024",
    achievements: [
      "Learned Python programming for data manipulation",
      "SQL queries and database management",
      "Power BI dashboard creation and data visualization",
      "Basics of machine learning concepts",
      "Development of interactive reports and dashboards",
    ],
  },
  {
    institution: "MBbway",
    location: "France",
    degree: "MBA in Marketing & Business Development",
    period: "2020 - 2022",
    achievements: [
      "Basic marketing strategies focused on social media",
      "Understanding of agri-food sector dynamics",
      "Fundamentals of management and team coordination",
      "Introduction to business operations and strategy",
    ],
  },
];
export const skills = {
  programmingLanguages: ["Python", "SQL", "DAX"],
  backendDevelopment: ["FastAPI"],
  databaseAndStorage: [
    "Snowflake",
    "Azure SQL Database",
    "SQL Server",
    "Oracle",
    "Azure Blob Storage",
  ],
  cloudAndDevOps: ["Azure", "GitHub Actions", "Docker"],
  dataEngineeringAndAnalytics: [
    "dbt",
    "Power BI",
    "Alteryx",
    "Make (ex-Integromat)",
  ],
  frontendDevelopment: ["React.js", "Streamlit", "Tailwind CSS", "HTML", "CSS"],

  toolsAndServices: ["LangChain", "SQLAlchemy", "VS Code", "Git"],
};

export const projects = [
  {
    title: "Nantes Mobility - Urban Bike Data Platform",
    github: "https://github.com/lucaszub/nantes-mobility-dbt",
    description: [
      "Automated data ingestion using Python and GitHub Actions for live Bicloo station data.",
      "Data storage and transformation with Snowflake and dbt for scalable and maintainable pipelines.",
      "Power BI dashboards for visualization of key urban mobility KPIs and trends.",
      "Focus on cost-efficiency by optimizing data storage and pipeline orchestration.",
      "Designed to provide actionable insights for urban planners and mobility analysts.",
    ],
  },

  {
    title: "Natural Language SQL Assistant",
    github: "https://github.com/lucaszub/",
    description: [
      "An AI-powered assistant that translates natural language questions into SQL queries using LangChain and OpenAI models.",
      "Connects to relational databases (SQL Server in MVP), detects schema and relationships automatically, and returns query results in real time.",
      "Supports exporting query results in CSV or JSON to Azure Blob Storage.",
      "Built with Python, LangChain, SQLAlchemy, and FastAPI for the backend; Streamlit for the UI.",
      "Deployment on Azure using Azure Container Registry (ACR), Web App for Containers.",
      "MVP focused on SQL Server, with plans to expand to BigQuery, Snowflake, and other DBMS in future versions.",
    ],
  },
];

export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  },
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];

export const detailedExperiences = [
  {
    slug: "bank-experience",
    title: "Détail de l'expérience – Silamir",
    cover: "/images/banque.jpg",
    sections: [
      {
        heading: "Contexte & Problématique",
        content: `Mission en régie dans une grande banque française via Silamir, en tant que Data Engineer spécialisé dans l'automatisation de workflows et la BI. Le client devait assurer la fiabilité et la traçabilité de dizaines de traitements de données critiques, réalisés quotidiennement dans un environnement Oracle, tout en améliorant la visibilité pour les équipes métier.`,
      },
      {
        heading: "Objectifs",
        content: `
- Industrialiser la création et le suivi des workflows de traitement de données
- Assurer un monitoring centralisé et efficace
- Réduire les erreurs humaines dans les chaînes de traitement
- Améliorer la réactivité des équipes grâce à des visualisations claires
        `,
      },
      {
        heading: "Solutions & Réalisations",
        content: `
- **Développement de 30+ workflows Alteryx** pour charger, nettoyer et transformer des fichiers CSV vers des bases Oracle, en tenant compte de la qualité et des contrôles métiers.
- **Mise en place de dashboards Power BI** pour monitorer en temps réel l’état des workflows (succès/échecs, durées, volumes), facilitant la supervision des flux par les équipes internes.
- **Optimisation des performances** des pipelines : refactorisation de workflows lents, meilleure gestion des exceptions, documentation des cas limites.
- **Collaboration étroite** avec des Product Owners, ingénieurs métier et DBA, pour assurer une compréhension mutuelle des besoins et contraintes techniques.
- **Support technique** régulier pour analyser les erreurs, mettre en place des correctifs, et former les utilisateurs aux outils déployés.
        `,
      },
      {
        heading: "Résultats",
        content: `
- Réduction significative des incidents liés aux workflows (~50 %)
- Gain de temps pour les équipes grâce à une supervision visuelle centralisée
- Plus grande transparence dans les traitements, facilitant les audits internes
        `,
      },
    ],
  },
];
