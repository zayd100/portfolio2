import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon, Coins } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Zaid Shabbir",
  initials: "ZS",
  url: "https://portfolio2-opal-five-74.vercel.app",   //this was causing the redirection issue. 
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
description: `Full Stack Engineer 
Technical Writer & Researcher
Digital Innovation Consultant`,
  summary:
  "I'm a 19-year-old full-stack developer from Pakistan with extensive experience working with US-based entrepreneurs and startups. As a self-taught programmer, I've built a strong foundation in modern web technologies while delivering high-quality solutions for Businesses around the world. My work extends beyond development to include comprehensive research in emerging technologies—particularly blockchain applications, spatial audio systems, and decentralized identity solutions using structured knowledge management systems. Currently freelancing and developing my own projects, I'm passionate about turning innovative ideas into robust digital products through both technical implementation and thorough research. Always open to new opportunities, collaborations, and exciting challenges.",

  avatarUrl: "/hi.png",
  skills: [
    "Next.js",
    "React.js",
    "Git",
    "Typescript",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "GitHub",
    "AWS S3",
    "RestAPI",
    "Express.js",
    "Technical Documentation",
    "Just-in-time Learning(JIT)",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {href:"#donate", icon: Coins, label : "Donate"},
    { href: "/projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "zaidshabbir666@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zayd100",
        icon: Icons.github,

        navbar: true,
      },
    
      X: {
        name: "X",
        url: "https://x.com/sharpzayd",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:zaidshabbir666@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      wikipedia:  {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/User:Corvus12",
        icon: Icons.wikipedia,
        navbar: false,
      },
    },
  },

  // not mine
  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "",
      href: "",
      degree: "",
      logoUrl: "",
      start: "",
      end: "",
    },
       {
      school: "",
      href: "",
      degree: "",
      logoUrl: "",
      start: "",
      end: "",
    },
   
  ],
  projects: [
    {
      title: "Delta",
      href: "",
      active: false,
      description:
        "Delta is a scalable platform for processing, visualizing, and storing data. It ingests CSV files, transforms them into interactive dashboards with React & Recharts, and securely archives raw files in AWS S3 while storing structured data in MongoDB.",
      technologies: [
        "MongoDB",
        "Express.js",
        "AWS S3",
        "CSS",
        "Vite",
        "Git",
        "React",
        "Node",
      ],
      links: [
   
        {
          type: "Source",
          href: "https://github.com/zayd100/delta",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/deltayo.png",
      video: "",
    },
       {
      title: "Zyz Dynamics Intelligence Database",
      href: "https://publish.obsidian.md/zyzd/Welcome",
      active: true,
      description:
        "A structured research hub built in Obsidian, using backlinking and graph view to organize technical documentation, spatial audio research, and blockchain development. Serves as a centralized, searchable database for cross-referencing concepts and accelerating R&D workflows.",
      technologies: [
        "Obsidian",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://publish.obsidian.md/zyzd/Welcome",
          icon: <Icons.globe className="size-3" />,
        },
       
      ],
      image: "/images/zyzd.png",
      video: "",
    },
      
    {
      title: "JetWiki",
      href: "github.com/zayd100/jetwiki",
      active: true,
      description:
        "A full-stack MERN (MongoDB, Express, React, Node.js) application template showcasing historical air combat operations, jets, and defense companies. Perfect for learning full-stack development or as a starting point for your own projects.",
      technologies: [
        "CSS",
        "javascript",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
      links: [
   
        {
          type: "Source",
          href: "https://github.com/zayd100/jetwiki",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "/images/jetwiki.png",
      video:
      "",
    },
        {
      title: "FurniFlex",
      href: "github.com/zayd100/jetwiki",
      active: true,
      description:
        "A modern, lightning-fast furniture rental platform built with React.js and Vite. Browse, filter, and rent furniture items with an intuitive user interface and seamless user experience.",
      technologies: [
        "CSS",
        "javascript",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
      
      links: [
   
        {
          type: "Source",
          href: "https://github.com/zayd100/jetwiki",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "/images/furni.png",
      video:
        "",
    },
       {
      title: "Shandar Safar",
      href: "",
      active: false,
      description:
        "A responsive web application showcasing Pakistan's beautiful destinations with an interactive map and image gallery.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        
      ],
      links: [
   
        {
          type: "Source",
          href: "https://zayd100.github.io/pakistan-tourism-guide/#home",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/tour.png",
      video: "",
    },
  

  ],
  //this is actually my research work so i am not changing the var names, keeping it the same as they were.
  hackathons: [
    {
      title: "BlockChain",
      dates: "Next Round",
      location: "",
      description:
        "Conducted comprehensive blockchain research for Next Round, an innovative Web3 startup that transforms physical drink coasters into gateways for digital art and social connection through QR code integration and community-driven NFT ecosystems. Through an Obsidian-based research library, explored decentralized identity solutions and developed practical blockchain applications featuring automatic wallet creation, monthly coin resets, and mnemonic-based password systems that prioritize social sharing over speculation.",
      image:
        "/images/nxt.png",
      mlh: "",
      links: [],
    },
    {
      title: "Spatial Audio",
      dates: "VisionQuest",
      location: "",
      description:
        "Created an Obsidian-based knowledge system which centralizes and connects research on 6DoF spatial audio environments, including binaural and ambisonic rendering techniques, psychoacoustic modeling, and therapeutic applications like sound frequency modulation, light therapy synchronization, and trance state induction, while maintaining rigorous technical analysis of positional audio parameters and their physiological effects.",
      image:
        "/images/vq.png",
      mlh: "",
      links: [],
    },
        {
      title: "Political Science",
      dates: "WikiPedia",
      location: "",
      description:
        "I have dedicated time to contributing to Wikipedia, where I have honed my research and writing skills by creating and editing articles on a variety of political science topics, ensuring accuracy and depth to enhance the platform's knowledge base",
      image:
        "/images/wiki.png",
      mlh: "",
      links: [],
    },
  
  ],
  testimonials: [
    {
      name: "Steve Kantor",
      image: "/images/steve.png",
      headline:"President at Lifebushido, Author of 'Billon Dollar Agent', Member of GoBundance and PEF.",
      description:
        "I recommend Zaid for his clear English verbal and written communication, intellect, and perseverance. I have known Zaid for 1-2 years as he participated in our global community. He also volunteers to help manage global circles of 10-20 people. He's direct and honest if he does not understand something or needs help. I hope to work with him more. I predict he will be financially successful and socially impact positively hundreds of people around the world in the next decade."
    },
      {
      name: "Clarke Zyz",
      image: "/images/clarke.png",
      headline:"President at ZYZ Dynamics.",
      description:
        "Working with Zaid has been an absolute pleasure, and I can recommend him without reservation. I originally came to him with a simple project and a modest salary. He blew me away with his professionalism, his attention to detail, and the overall quality of work. Since that original hiring I have worked with Zaid on numerous projects ranging from research and copy, to coding and debugging. He is always my first choice when looking for trustworthy help. He easily conceptualizes projects and always provides his feedback taking projects to another level through creativity and enthusiasm for work. What I would say to anyone considering taking on this amazing kid as a work associate is that he exemplifies two qualities so hard to find and hard to vet for, he brings with him infectious enthusiasm, and genuine honesty."
    },
    
    
  ]
} as const;
