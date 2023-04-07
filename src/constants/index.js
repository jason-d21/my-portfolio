import {
    backend,
    qa,
    lifebooster,
    ubc,
    mablab,
    streaming,
    deepformants,
    python,
    java,
    powershell,
    matlab,
    git,
    jira,
    azure,
    linux,
    intellij,
    vscode,
    cosmosdb,
    mysql,
    locust,
    junit,
    pytorch,
    javafx,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "QA Engineer",
      icon: qa,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "powershell",
      icon: powershell,
    },
    {
      name: "matlab",
      icon: matlab,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "jira",
      icon: jira,
    },
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "intellij",
      icon: intellij,
    },
    {
      name: "vscode",
      icon: vscode,
    },
    {
      name: "cosmosdb",
      icon: cosmosdb,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "locust",
      icon: locust,
    },
    {
      name: "junit",
      icon: junit,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "javafx",
      icon: javafx,
    },
  ];
  
  const experiences = [
    {
      title: "System Validation Developer",
      company_name: "LifeBooster",
      icon: lifebooster,
      iconBg: "#383E56",
      date: "May 2021 - Dec 2021",
      points: [
        "Designed and documented system to validate performance of Azure cloud app with IoT sensor interactions at scale",
        "Implemented testing framework in Python to do functional end-to-end testing for the most common use cases by monitoring events from micro-services, retrieving data and storing results in Cosmos DB database",
        "Wrote test cases and tested new front end features and bugs using Azure Test Plans to support the QA team",
        "Incorporated Locust framework to perform load testing on key services",
      ],
    },
    {
      title: "Undergraduate Academic Assistant",
      company_name: "The University of British Columbia",
      icon: ubc,
      iconBg: "#FFFFFF",
      date: "Jun 2020 - Dec 2020",
      points: [
        "Self-researched and self-developed Unity labs in C# to illustrate cognitive systems and intelligence design concepts",
        "Helped design project for training a game AI with reinforcement learning",
        "Product provided remote learning option for the university course as an alternative to in-person Arduino labs",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "UBC Motion Analysis and Biofeedback Lab",
      icon: mablab,
      iconBg: "#383E56",
      date: "Jan 2020 - Aug 2020",
      points: [
        "Developed MATLAB app to read foot pressure data, segment foot regions, and generate summary and graphical data",
        "Designed Java app with JavaFX GUI to generate graphs from Excel data and guide research question generation",
        "Automated lab procedures and application forms in Excel VBA",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Self-Hosted Streaming",
      description:
        "A video, audio, and text streaming service hosted on a local server. Core service uses Jellyfin, with customized scripts to maintain server and content.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "jellyfin",
          color: "pink-text-gradient",
        },
      ],
      image: streaming,
      source_code_link: "https://github.com/jason-d21/jellyfin-scripts",
    },
    {
      name: "DeepFormants Migration",
      description:
        "Migrated DeepFormants package, used to measure formants using machine learning, to Python 3 and PyTorch as a tool for UBC's Origins of Patterns in Speech Lab. The tool is used to compare audio formant calculations between a machine learning approach vs a traditional one.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "linux",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "pink-text-gradient",
        },
      ],
      image: deepformants,
      source_code_link: "https://github.com/jason-d21/DeepFormants/tree/jason-dev",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };