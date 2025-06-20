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
  dataEngineering: [
    "Azure Data Factory",
    "Azure Databricks",
    "dbt",
    "Alteryx",
    "Azure Synapse Analytics",
  ],
  cloudAndDevOps: [
    "Azure",
    "Azure Container Registry",
    "Azure Web App",
    "GitHub Actions",
    "Docker",
  ],
  databaseAndStorage: [
    "Snowflake",
    "Azure SQL Database",
    "Oracle",
    "Azure Data Lake Gen2",
    "Azure Blob Storage",
  ],
  businessIntelligence: ["Power BI"],
};

export const projects = [
  {
    title: "Tokyo Olympics Analytics - Azure Data Engineering Pipeline",
    github:
      "https://www.linkedin.com/feed/update/urn:li:activity:7338555290172223489/",
    description: [
      "End-to-end data pipeline built on Azure for learning and DP-900 certification.",
      "Data ingestion orchestrated with Azure Data Factory, pulling Olympic datasets from GitHub.",
      "Centralized, low-cost storage of raw and processed data using Azure Data Lake Gen2.",
      "Data transformation at scale with Azure Databricks (Spark), enabling advanced cleaning and enrichment.",
      "Analytical modeling and ELT processing using Azure Synapse Analytics for flexible, high-performance querying.",
      "Interactive dashboards and business insights delivered via Power BI, connected directly to Synapse.",
      "Project demonstrates the modularity and synergy of Azure services for modern, scalable analytics architectures.",
      "Key learning: for simple ELT, Data Lake + Synapse is cost-efficient; Databricks is leveraged for big data and complex transformations.",
    ],
  },
  {
    title: "Azure Docker Deployment Guide - FastAPI CI/CD Pipeline",
    github: "https://github.com/lucaszub/azure-docker-deployment-guide",
    description: [
      "Automated deployment of a FastAPI application on Azure using Docker, Azure CLI, and GitHub Actions.",
      "Use of Azure Container Registry (ACR) to securely and scalably store and manage Docker images.",
      "Continuous deployment on Azure Web App, ensuring application availability and scalability.",
      "Complete CI/CD pipeline with GitHub Actions: build, push the Docker image to ACR, and then automatic deployment on Azure.",
      "Configuration of secrets and secure authentication between GitHub and Azure for deployments without manual intervention.",
      "Step-by-step guide to creating Azure resources, configuring workflows, and managing the application lifecycle.",
      "Ideal project to understand DevOps integration on Azure and the automation of containerized application deployments.",
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
