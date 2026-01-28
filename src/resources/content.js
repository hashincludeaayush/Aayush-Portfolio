import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Aayush",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer and Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "aayushsinghx0709@gmail.com",
  location: "Asia/Kolkata", // IANA time zone for Ghaziabad, India
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about data analysis, application development, and
      cloud technologies, sharing insights from my professional experiences.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hashincludeaayush", // Assumed from previous context
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aayushsingh07",
  },
  {
    name: "X",
    icon: "x",
    link: "", // No X/Twitter link provided
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer & Data Analyst</>,
  featured: {
    display: false, // Set to false as no specific featured project is highlighted
    title: <></>,
    href: "/",
  },
  subline: (
    <>
      I&apos;m Aayush, a Software Engineer at HCLTech working as a Data Analyst for
      the client - MRC Global.
      <br />I specialize in developing BI dashboards, automation solutions, and
      ETL pipelines.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // No calendar link provided in resume
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aayush Singh is a Software Engineer at HCLTech working as a Data
        Analyst/Consultant for the client - MRC Global, with over four years of
        professional experience. He specializes in data analysis and application
        development, utilizing a range of technologies including Power BI, Power
        Automate, Snowflake, Informatica, and Oracle BIP to create dashboards,
        reports, and ETL pipelines.
        <br />
        <br />
        Throughout his career, Aayush has demonstrated a significant impact on
        productivity and value creation. He has generated over $750,000 in value
        for HCLTech by implementing power automations and developing Power Apps.
        While assigned to the client - Chevron, he received an award for
        automations that resulted in over $160,000 in value. His technical
        expertise also includes SharePoint support and migration, where he
        resolved over 2,000 support tickets and handled complex data migrations
        using tools like Metalogix Content Matrix.
        <br />
        <br />
        Aayush holds multiple industry certifications, including AWS Certified
        Developer – Associate and Microsoft Azure Cloud Developer. He is
        currently pursuing a Bachelor of Science in Design and Computing from
        the Birla Institute of Technology and Science, Pilani.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "MRC Global (Via HCLTech)",
        timeframe: "Jun 2024 - Present",
        role: "Data Analyst / Consultant",
        achievements: [
          <>
            Spearheaded the end-to-end development of a high-impact{" "}
            <strong>Intune Data Warehouse Power BI dashboard</strong>, which
            received high-level client commendation for its modern UI and
            actionable insights. Engineered a complex data pipeline using{" "}
            <strong>
              Power Automate to pull raw data from Intune Portal APIs
            </strong>
            , staging it as CSVs on SharePoint Online before utilizing{" "}
            <strong>Dataflows</strong> to ingest and model the data within{" "}
            <strong>Microsoft Fabric</strong>. Managed extensive data cleansing
            and transformation phases to convert highly fragmented raw API
            outputs into structured data models optimized for global
            infrastructure monitoring.
          </>,

          <>
            Successfully architected and maintained complex data pipelines for{" "}
            <strong>Oracle-to-Snowflake migration</strong>. Key technical
            contributions include building robust{" "}
            <strong>ETL workflows in Informatica and SQL</strong> to ensure zero
            data loss. Developed advanced data models and views in{" "}
            <strong>Snowflake and Oracle Fusion (ERP/FDI)</strong> to mirror
            legacy Sales Support Representatives i.e., SSR dashboards,
            significantly improving reporting accessibility. Additionally,
            engineered specialized <strong>Prisma Cloud dashboards</strong> in
            Power BI for the Palo Alto and Virtual Mahcine ie., VM / Security
            reporting teams to track remediated vulnerabilities.
          </>,

          <>
            Led the technical automations for{" "}
            <strong>
              Environmental, Social, and Governance (ESG) initiatives
            </strong>
            , specifically tracking{" "}
            <strong>Electricity, Gas, and Water consumption</strong> across MRC
            Global’s international sites. Developed sophisticated Power Automate
            flows to archive environmental consumption data, implement
            error-handling requirements, and automate ESG reporting bugs,
            ensuring accurate sustainability tracking and compliance for the
            business.
          </>,

          <>
            Played a pivotal role in the end-to-end setup and development of the{" "}
            <strong>Pulse App</strong>, a centralized{" "}
            <strong>Power BI / Fabric app</strong> which consists of many
            dashboards and reports related to MRC global day-to-day operations.
            To ensure enterprise-grade development standards, designed and
            implemented a{" "}
            <strong>GitHub versioning system for Fabric Workspaces</strong>,
            enabling seamless code management, <strong>CI/CD</strong>, and
            collaborative development for the Pulse App ecosystem.
          </>,

          <>
            Engineered a suite of high-impact Power BI reports, including{" "}
            <strong>Microsoft Defender security dashboards</strong> and CIO,
            ITSM and ServiceNow Dashboards. Leveraged Power Automate and{" "}
            <strong>Azure</strong> to integrate APIs and automate scheduled data
            refreshes, eliminating manual reporting overhead. Modernized
            existing interfaces using UI/UX standards like{" "}
            <strong>Neumorphism and Glassmorphism</strong>, implementing various
            functional changes and operational improvements.
          </>,

          <>
            Managed high-priority technical support for the MRC Global account,
            resolving over{" "}
            <strong>240+ tickets (Incidents and SC Tasks)</strong> with a{" "}
            <strong>100% SLA adherence rate</strong> and zero breaches. Actively
            monitored daily ETL job health, troubleshooting{" "}
            <strong>Informatica and SQL Server</strong> issues to maintain
            system integrity. Developed and documented new{" "}
            <strong>Standard Operating Procedures (SOPs)</strong> to facilitate
            seamless Knowledge Transfer (KT).
          </>,
        ],
        images: [],
      },
      {
        company: "Chevron ITC (Via HCLTech)",
        timeframe: "Feb 2023 - Jun 2024",
        role: "Software Developer (Australian Business Unit)",
        achievements: [
          <>
            Awarded by business/client i.e., Chevron for implementing{" "}
            <strong>automations in ABU</strong> which generated over{" "}
            <strong>$160,000</strong> in{" "}
            <strong>HCLTech&apos;s Value Creation Portal</strong>.
          </>,
          <>
            Successfully designed and deployed multiple automations by building
            sophisticated <strong>Power Automate flows</strong> to drive
            efficiency. Key automations includes integrating the{" "}
            <strong>ServiceNow Platform</strong> using{" "}
            <strong>ServiceNow APIs</strong>, <strong>PowerShell</strong> and{" "}
            <strong>Azure APIs</strong> to automate ticket creation, bridging
            separate platforms and eliminating manual work. Additional
            automations were created for critical{" "}
            <strong>SharePoint Online governance</strong> tasks, such as a flow
            to restore deleted documents from multiple stages of SharePoint
            Online sites, a system for sending automated SharePoint cleanup
            notifications for sites and a process for automatically applying
            data retention labels to sites.
          </>,
          <>
            Developed new business applications from scratch using{" "}
            <strong>Power Apps</strong>, including a{" "}
            <strong>Customer Feedback tool</strong> and a centralized{" "}
            <strong>Apps and Dashboards Launcher</strong>. Modernized existing
            Power Apps by overhauling outdated user interfaces / UI/UX to modern
            standards i.e., <strong>Neumorphism</strong>,{" "}
            <strong>Glassmorphism</strong>, etc and implementing various
            functional changes & operational improvements in those applications.
          </>,
          <>
            Performed comprehensive administrative tasks, including a complete
            audit and update of the <strong>ABU Site Register</strong> to ensure
            data accuracy. Configured essential SharePoint structures like{" "}
            <strong>Security Pages</strong> and <strong>content types</strong>{" "}
            to enforce proper governance and usability across the environment.
          </>,
          <>
            Apart from successful migration of over 2.5 terabytes of data into
            SharePoint Online sites, also successfully delivered{" "}
            <strong>Mailbox Migration</strong> and{" "}
            <strong>O:Drive Migrations</strong> in ABU. These complex process
            involved meticulous data preparation, including cleansing thousands
            of file names to ensure success, and utilizing industry-standard
            migration tools like{" "}
            <strong>Metalogix Content Matrix Public Folder Edition</strong>.
          </>,
        ],
        images: [
          {
            src: "/images/projects/certchev.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/certchev2.jpg",
            alt: "Project image",
            width: 17,
            height: 11,
          },
        ],
      },
      {
        company: "HCLTech",
        timeframe: "Nov 2021 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed sophisticated <strong>Power Apps and Power Automate flows</strong>
            across major business units (Chevron ABU & MRC Global), generating
            over <strong>$750,000 in HCLTech’s Value Creation Portal</strong>. This includes
            building a centralized <strong>Pulse App (Power BI/Fabric)</strong> for global
            operations and automated ESG tracking for international site
            consumption.
          </>,
          <>
            As a SharePoint Enterprise Engineer and Analyst, resolved over
            <strong>2,000 support tickets with 100+ positive CSATs</strong> and a <strong>100% SLA
            adherence rate</strong>. Successfully delivered complex <strong>migrations of
            2.5+ terabytes of data</strong> and implemented <strong>GitHub versioning for
            Fabric Workspaces</strong> to ensure enterprise-grade CI/CD and
            collaborative development.
          </>,
          <>
            Engineered advanced data pipelines and automated workflows using
            <strong>PowerShell, Informatica, and SQL</strong> to facilitate
            <strong>Oracle-to-Snowflake migrations</strong> and <strong>Intune Portal API
            integrations</strong>. Modernized legacy reporting by developing
            high-impact <strong>Power BI dashboards</strong> with modern UI/UX standards like
            <strong>Neumorphism and Glassmorphism</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Shobbr India Private Limited",
        timeframe: "Oct 2020 - Oct 2021",
        role: "Chief Technology Officer & Founder",
        achievements: [
          <>
            Defined and executed the <strong>technical strategy and architecture</strong> for
            the startup&apos;s entire digital ecosystem, encompassing the development
            of multiple high-performance <strong>websites and mobile applications</strong>
            for Shobbr’s primary domains and sub-domains.
          </>,
          <>
            Directed the full technical department and <strong>led cross-functional
            teams and interns</strong>, overseeing recruitment, mentorship, and project
            allocation to ensure high-quality software delivery and operational
            efficiency.
          </>,
          <>
            Managed all <strong>core tech operations</strong>, including server
            infrastructure and cloud deployment strategies, while bridging the
            gap between business requirements and technical implementation to
            drive startup growth.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Birla Institute of Technology and Science, Pilani",
        description: (
          <>
            B.Sc. in Design and Computing, Information Technology (2022 - 2026)
          </>
        ),
      },
      {
        name: "HCLTech",
        description: <>Techbee - HCL&apos;s Early Career Program (2020 - 2021)</>,
      },
      {
        name: "Key Certifications",
        description: (
          <>
            AWS Certified Developer – Associate, Microsoft Azure Cloud
            Developer, AWS Certified Cloud Practitioner.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Data & Analytics",
        description: (
          <>
            Power BI, Informatica, Snowflake, Oracle BIP, SQL, Data Fabric, Data
            Warehousing.
          </>
        ),
        images: [],
      },
      {
        title: "Cloud & App Development",
        description: (
          <>
            Azure Cloud, AWS, Power Apps, Power Automate, SharePoint,
            PowerShell, .NET, C#.
          </>
        ),
        images: [],
      },
      {
        title: "Web Technologies",
        description: <>HTML5, CSS, JavaScript, ASP.NET MVC, ASP.NET Web API.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data, cloud, and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [], // Cleared as no images are available from the resume
};

export { person, social, newsletter, home, about, blog, work, gallery };
