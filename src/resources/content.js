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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data analysis, application development, and cloud technologies, sharing insights from my professional experiences.
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
      I'm Aayush, a Software Engineer at HCLTech working as a Data Analyst for the client - MRC Global.
      <br />I specialize in developing BI dashboards, automation solutions, and ETL pipelines.
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
    Aayush Singh is a Software Engineer at HCLTech working as a Data Analyst/Consultant for the client - MRC Global, with over four years of professional experience. He specializes in data analysis and application development, utilizing a range of technologies including Power BI, Power Automate, Snowflake, Informatica, and Oracle BIP to create dashboards, reports, and ETL pipelines.
    <br />
    <br />
    Throughout his career, Aayush has demonstrated a significant impact on productivity and value creation. He has generated over $750,000 in value for HCLTech by implementing power automations and developing Power Apps. While assigned to the client - Chevron, he received an award for automations that resulted in over $160,000 in value. His technical expertise also includes SharePoint support and migration, where he resolved over 2,000 support tickets and handled complex data migrations using tools like Metalogix Content Matrix.
    <br />
    <br />
    Aayush holds multiple industry certifications, including AWS Certified Developer – Associate and Microsoft Azure Cloud Developer. He is currently pursuing a Bachelor of Science in Design and Computing from the Birla Institute of Technology and Science, Pilani.
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
          <>Creating Power BI dashboards, Power Automations, and ETL pipelines using Informatica, Power Automate, Oracle BIP and Snowflake.</>,
        ],
        images: [],
      },
      {
        company: "Chevron ITC (Via HCLTech)",
        timeframe: "Feb 2023 - Jun 2024",
        role: "Software Developer (Australian Business Unit)",
        achievements: [
          <>Awarded by business/client i.e., Chevron for implementing automations in ABU which generated over $160,000 in HCLTech's Value Creation Portal.</>,
          <>Successfully designed and deployed multiple automations by building sophisticated Power Automate flows to drive efficiency. Key automations includes integrating the ServiceNow Platform using ServiceNow APIs, PowerShell and Azure APIs to automate ticket creation, bridging separate platforms and eliminating manual work. Additional automations were created for critical SharePoint Online governance tasks, such as a flow to restore deleted documents from multiple stages of SharePoint Online sites, a system for sending automated SharePoint cleanup notifications for sites and a process for automatically applying data retention labels to sites.</>,
          <>Developed new business applications from scratch using Power Apps, including a Customer Feedback tool and a centralized Apps and Dashboards Launcher. Modernized existing Power Apps by overhauling outdated user interfaces / UI/UX to modern standards i.e., Neumorphism, Glassmorphism, etc and implementing various functional changes & operational improvements in those applications.</>,
          <>Performed comprehensive administrative tasks, including a complete audit and update of the ABU Site Register to ensure data accuracy. Configured essential SharePoint structures like Security Pages and content types to enforce proper governance and usability across the environment.</>,
          <>Apart from successful migration of over 2.5 terabytes of data into SharePoint Online sites, also successfully delivered Mailbox Migration and O:Drive Migrations in ABU. These complex process involved meticulous data preparation, including cleansing thousands of file names to ensure success, and utilizing industry-standard migration tools like Metalogix Content Matrix Public Folder Edition.</>,
        ],
        images: [{
                        src: '/images/projects/certchev.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                  {
                        src: '/images/projects/certchev2.jpg',
                        alt: 'Project image',
                        width: 17,
                        height: 11
                    }],
      },
      {
        company: "HCLTech",
        timeframe: "Nov 2021 - Present",
        role: "Software Engineer",
        achievements: [
          <>Developed Power Apps and Power Automate flows, generating over $750,000 in value.</>,
          <>As a SharePoint Enterprise Engineer, resolved over 2,000 support tickets with 100+ positive CSATs.</>,
          <>Implemented PowerShell scripts to automate business tasks in SharePoint Online.</>,
        ],
        images: [],
      },
      {
        company: "Shobbr India Private Limited",
        timeframe: "Oct 2020 - Oct 2021",
        role: "Chief Technology Officer & Founder",
        achievements: [
          <>Led the technical strategy and development for the startup.</>,
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
        description: <>B.Sc. in Design and Computing, Information Technology (2022 - 2026)</>,
      },
      {
        name: "HCLTech",
        description: <>Techbee - HCL's Early Career Program (2020 - 2021)</>,
      },
      {
        name: "Key Certifications",
        description: <>AWS Certified Developer – Associate, Microsoft Azure Cloud Developer, AWS Certified Cloud Practitioner.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Data & Analytics",
        description: <>Power BI, Informatica, Snowflake, Oracle BIP, SQL, Data Fabric, Data Warehousing.</>,
        images: [],
      },
      {
        title: "Cloud & App Development",
        description: <>Azure Cloud, AWS, Power Apps, Power Automate, SharePoint, PowerShell, .NET, C#.</>,
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
