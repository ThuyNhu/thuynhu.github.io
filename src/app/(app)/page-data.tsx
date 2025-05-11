import {
  ChefHatIcon,
  DraftingCompassIcon,
  GlobeIcon,
  GraduationCapIcon,
  HandshakeIcon,
  LaughIcon,
  LayersIcon,
  QuoteIcon,
  ShapesIcon,
  SparklesIcon,
} from "lucide-react";
import {IconCloud} from "@/components/ui/icon-cloud";
import {BentoCardProps} from "@/components/ui/bento-grid";

const techNames = [
  "python",
  "fastapi",
  "java",
  "springboot",
  "react",
  "typescript",
  "javascript",
  "tailwindcss",
  "nextdotjs/gray",
  "vitest",
  "k6",
  "npm",
  "docker",
  "openshift",
  "kubernetes",
  "git",
  "github/gray",
  "gitlab",
  "jetbrains/gray",
  "figma",
];

export const features: BentoCardProps[] = [
  {
    Icon: LaughIcon,
    name: "Hi, I'm Thuy",
    description: "Welcome to my corner of the internet. Thanks for stopping by!",
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
    href: "/",
  },
  {
    Icon: GraduationCapIcon,
    name: "MSc in Computer Science",
    description: "I obtained my Master's degree in Computer Science from the University of Twente, following my Bachelor's degree in Computer Science from Ho Chi Minh City University of Technology (HCMUT).",
    href: "https://www.utwente.nl/en/education/master/programmes/computer-science/",
    background: "https://1348661504.rsc.cdn77.org/.wh/ea/uc/f921ce86f01024b315d00e6d03304d2bd9837a8cf2bb300/cubicus.jpg",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: DraftingCompassIcon,
    name: "Software Engineer",
    description: "For the past 2.5 years, I've been a backend-focused software engineer in the banking world, where I also enjoy pitching in with frontend work and actively exploring DevOps. My goal is to help deliver reliable applications and keep growing my skills along the way!",
    href: "/",
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: HandshakeIcon,
    name: "Get in touch",
    description: "You can find me on LinkedIn. Feel free to reach out!",
    href: "https://www.linkedin.com/in/thuyngnhu/",
    cta: "My LinkedIn",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: SparklesIcon,
    name: "The real me",
    description:
      "My open-mindedness and flexibility in adopting new technologies and tasks, combined with a proactive problem-solving approach, fuels my continuous learning and growth.",
    href: "/",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: LayersIcon,
    name: "Tech stack",
    description:
      "For the backend, I often reach for Python and FastAPI for its speed and flexibility or dive into the power of Java with Spring Boot. On the front end, TypeScript, Next.js and Tailwind CSS are my go-to. And when it comes to getting everything live, I use Azure DevOps, OpenShift, and Kubernetes to deploy my applications.",
    href: "/",
    background: <div className="flex items-center justify-center">
      <IconCloud images={techNames.map(
        (techName) => `https://cdn.simpleicons.org/${techName}`,
      )}/>
    </div>,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
  },
  {
    Icon: GlobeIcon,
    name: "Location & Languages",
    description:
      "I'm a proud Vietnamese based in the Netherlands. I can speak Vietnamese, English, and picking up Dutch.",
    href: "/",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-4",
  },
  {
    Icon: QuoteIcon,
    name: "My favorite quote",
    description:
      "To the world, you may be one person, but to one person, you may be the world.",
    href: "/",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-4 lg:row-end-4",
  },
  {
    Icon: ChefHatIcon,
    name: "Still cooking...",
    description:
      "If I weren't a software engineer, I'd be a cook. I love everything about food – cooking it, eating it. And there's something really great about knowing my food makes people happy.",
    href: "/",
    background: "https://vcdn1-giadinh.vnecdn.net/2024/03/07/7Honthinthnhphm1-1709800144-8583-1709800424.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=yflkT1zyARjnO_PPyQYBoA",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-5 lg:row-end-5",
  },
  {
    Icon: ShapesIcon,
    name: "Hobbies",
    description:
      "Outside of the kitchen, I also enjoy exploring new places through travel and diving into the world of video games and board games.",
    href: "/",
    background: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fec6f7cf8-6dbe-4b56-9972-cbf4fbc76462.jpg?crop=1564%2C880%2C318%2C0&resize=1200",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-5",
  },
];