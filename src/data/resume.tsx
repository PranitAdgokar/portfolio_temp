import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pranit Adgokar",
  initials: "PA",
  url: "https://pranitadgokar.tech",
  location: "Amravati, Maharashtra, India",
  locationLink:
    "https://www.google.com/maps/place/Amravati,+Maharashtra,+India",
  description:
    "Passionate Fullstack Developer with a strong background in computer science and web development.",
  summary:
    "A passionate Fullstack Developer with a Master's in Computer Science. I’m currently working as a Fullstack Developer intern at a startup, where I specialize in building dynamic, high-performance web applications using cutting-edge technologies. My tech stack includes TypeScript, JavaScript, HTML, CSS, Prisma, and Postgres, and I’m currently honing my skills in modern frameworks like Next.js.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS",
    "Node.js",
    "Postgres",
    "Prisma",
    "Docker",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pranit.adgokar@gmail.com",
    tel: "+917620532483",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/pranit-adgokar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/pranit-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/pranit-twitter",
        icon: Icons.x,

        navbar: true,
      },
      instagram: {
        name: "Instagram",
        url: "https://dub.sh/pranit-instagram",
        icon: Icons.instagram,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "pranit.adgokar@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PPS Energy Solutions Pvt. Ltd.",
      href: "https://https://www.ppsenergy.in/",
      badges: [],
      location: "Pune, Maharashtra, India",
      title: "Software Developer Intern",
      logoUrl: "/PPS-Logo.png",
      start: "May 2024",
      end: "Present",
      description:
        "At PPS Energy Solutions Pvt. Ltd., I developed a functional admin dashboard for the Bharat GPX project and created an e-commerce platform for solar equipment. My role as a Junior Frontend Developer focuses on building user-friendly, scalable web solutions.",
    },
  ],
  education: [
    {
      school: "Mahatma Jyotiba Fule Mahavidyalaya - Amravati",
      href: "https://mjfamt.org/",
      degree: "Master's Degree of Computer Science (MSC)",
      logoUrl: "/mjfamt.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Govt. Vidarbha Institute of Science and Humanities Amravati",
      href: "https://gvishamt.org/",
      degree: "Bachelor's Degree of Computer Science (BSC)",
      logoUrl: "/vmv-logo.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Ramkrushna Junior College - Darapur",
      href: "https://rmvdar.co.in/",
      degree: "Higher Secondary School Certificate (HSC)",
      logoUrl: "/rkjc.jpg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Bharat GPX",
      href: "https://gpx.co.in/",

      active: true,
      description:
        "Developed a fully functional admin dashboard for efficient project management in the renewable energy sector.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gpx.co.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/gpx.png",
      video: "",
    },
    //image name changes
    {
      title: "Authenticating system",
      href: "https://magicui.design",
      active: true,
      description:
        "Developed a secure authentication system featuring user login, registration, and token-based access using JWT.",
      technologies: [
        "React.js",
        "Javascript",
        "JWT",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/PranitAdgokar/Authentication-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/auth.png",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  // hackathons: [
  //   //   {
  //   //     title: "Hack Western 5",
  //   //     dates: "November 23rd - 25th, 2018",
  //   //     location: "London, Ontario",
  //   //     description:
  //   //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //   //     image:
  //   //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //   //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //   //     links: [],
  //   //   },
  // ],
} as const;
