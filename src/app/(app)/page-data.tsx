import {
  BookUserIcon,
  BuildingIcon,
  GlobeIcon,
  LucideLaugh,
  SendIcon,
  TextQuoteIcon,
  UniversityIcon,
  WorkflowIcon,
} from "lucide-react";
import {BellIcon} from "@radix-ui/react-icons";
import {IconCloud} from "@/components/ui/icon-cloud";

const slugs = [
  "python",
  "fastapi",
  "java",
  "springboot",
  "react",
  "typescript",
  "javascript",
  "tailwindcss",
  "nextdotjs",
  "vitest",
  "k6",
  "npm",
  "docker",
  "openshift",
  "kubernetes",
  "git",
  "github",
  "gitlab",
  "jetbrains",
  "figma",
];

export const features = [
  {
    Icon: LucideLaugh,
    name: "Hi, I'm Thuy",
    description: "Welcome to my corner of the internet. Thanks for stopping by!",
    background: <img alt="My image" className="absolute -right-20 -top-20 opacity-60"/>,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
    hasCta: false,
    href: "/",
    cta: "",
  },
  {
    Icon: UniversityIcon,
    name: "MSc in Computer Science",
    description: "I obtained my Master's degree in Computer Science from the University of Twente, following my Bachelor's degree in Computer Science from Ho Chi Minh City University of Technology (HCMUT).",
    href: "https://www.utwente.nl/en/education/master/programmes/computer-science/",
    cta: "Learn more",
    // background: <img alt="My image" className="absolute -right-20 -top-20 opacity-60"/>,
    background: <img
      src="https://1348661504.rsc.cdn77.org/.wh/ea/uc/f921ce86f01024b315d00e6d03304d2bd9837a8cf2bb300/cubicus.jpg"
      alt="My image" className="absolute opacity-20 w-full h-full object-cover"/>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    hasCta: true,
  },
  {
    Icon: BuildingIcon,
    name: "Software Engineer",
    description: "For the past 2.5 years, I've been a backend-focused software engineer in the banking world, where I also enjoy pitching in with frontend work and actively exploring DevOps. My goal is to help deliver reliable applications and keep growing my skills along the way!",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    hasCta: false,
  },
  {
    Icon: SendIcon,
    name: "Reach me",
    description: "You can find me on LinkedIn. Feel free to reach out!",
    href: "https://www.linkedin.com/in/thuyngnhu/",
    cta: "My LinkedIn",
    background: <></>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    hasCta: true,
  },
  {
    Icon: BookUserIcon,
    name: "Open-minded, Flexible, and Proactive",
    description:
      "My open-mindedness and flexibility in adopting new technologies and tasks, combined with a proactive problem-solving approach, fuels my continuous learning and growth.\n" +
      "\n",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    hasCta: false,
  },
  {
    Icon: WorkflowIcon,
    name: "Tech Stack",
    description:
      "For the backend, I often reach for Python and FastAPI for its speed and flexibility or dive into the power of Java with Spring Boot. On the front end, TypeScript, Next.js and Tailwind CSS are my go-to. And when it comes to getting everything live, I use Azure DevOps, OpenShift, and Kubernetes to deploy my applications.",
    href: "/",
    cta: "Learn more",
    background: <div className="flex items-center justify-center">
      <IconCloud images={slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
      )}/>
    </div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
    hasCta: false,
  },
  {
    Icon: GlobeIcon,
    name: "Location & Languages",
    description:
      "I'm a proud Vietnamese based in the Netherlands. I can speak Vietnamese, English, and picking up Dutch.",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-4",
    hasCta: false,
  },
  {
    Icon: TextQuoteIcon,
    name: "My favorite quote",
    description:
      "To the world, you may be one person, but to one person, you may be the world.",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-4",
    hasCta: false,
  },
  {
    Icon: TextQuoteIcon,
    name: "If I weren't a software engineer ...",
    description:
      "I'd be a cook. I love everything about food – cooking it, eating it. And there's something really great about knowing my food makes people happy.",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-5",
    hasCta: false,
  },
  {
    Icon: TextQuoteIcon,
    name: "Hobbies",
    description:
      "Outside of the kitchen, I also enjoy exploring new places through travel and diving into the world of video games and board games.",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-5",
    hasCta: false,
  },
];