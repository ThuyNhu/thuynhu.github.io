/* eslint-disable @next/next/no-img-element,jsx-a11y/alt-text */
// noinspection HtmlRequiredAltAttribute

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
    className: "md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2",
    href: "/",
    background: <img src="/me.png" className="saturate-400"/>,
  },
  {
    Icon: GraduationCapIcon,
    name: "MSc in Computer Science",
    description: "I obtained my Master's degree in Computer Science from the University of Twente, following my Bachelor's degree in Computer Science from Ho Chi Minh City University of Technology (HCMUT).",
    href: "https://www.utwente.nl/en/education/master/programmes/computer-science/",
    background: "https://1348661504.rsc.cdn77.org/.wh/ea/uc/f921ce86f01024b315d00e6d03304d2bd9837a8cf2bb300/cubicus.jpg",
    className: "md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5",
  },
  {
    Icon: DraftingCompassIcon,
    name: "Software Engineer",
    description: "For the past 2.5 years, I've been a backend-focused software engineer in the banking world, where I also enjoy pitching in with frontend work and actively exploring DevOps. My goal is to help deliver reliable applications and keep growing my skills along the way!",
    href: "/",
    className: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3",
    background: "https://img.freepik.com/free-photo/cute-little-dog-impersonating-business-person_23-2148985935.jpg?t=st=1746991008~exp=1746994608~hmac=463f24d39d5fa584a4a50478a7a57653fbe558c663728ecce42f91c608b34524&w=996",
  },
  {
    Icon: HandshakeIcon,
    name: "Get in touch",
    description: "You can find me on LinkedIn. Feel free to reach out!",
    href: "https://www.linkedin.com/in/thuyngnhu/",
    cta: "My LinkedIn",
    className: "md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5",
    background: <img
      src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="object-[center_70%] contrast-125 brightness-90"/>,
  },
  {
    Icon: SparklesIcon,
    name: "The real me",
    description:
      "My open-mindedness and flexibility in adopting new technologies and tasks, combined with a proactive problem-solving approach, fuels my continuous learning and growth.",
    href: "/",
    className: "md:col-start-3 md:col-end-3 md:row-start-3 md:row-end-5",
    background: "https://img.freepik.com/free-photo/frame-concept-with-dog_23-2147787342.jpg?t=st=1746991963~exp=1746995563~hmac=bef7a6e9c7169245bca4b7a833243ed62034f594b880271d85d9d160d71d3a34&w=740",
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
    className: "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "Location & Languages",
    description:
      "I'm a proud Vietnamese based in the Netherlands. I can speak Vietnamese, English, and picking up Dutch.",
    href: "/",
    className: "md:col-start-2 md:col-end-4 md:row-start-5 md:row-end-5",
    // background: "https://images.unsplash.com/photo-1618835843776-0cdf8c5d93f1?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    background: <img
      src="https://img.freepik.com/free-photo/close-up-traveler-with-cute-dog-map_23-2149009141.jpg?t=st=1746990008~exp=1746993608~hmac=7f9ef701d328ac87bd23f84448f1f1bf6e6a042cb456311faa805034aa8b991f&w=996"
      className="contrast-125"/>,
  },
  {
    Icon: QuoteIcon,
    name: "To the world, you may be one person, but to one person, you may be the world.",
    description: "That's my favorite quote",
    href: "/",
    className: "md:col-start-1 md:col-end-3 md:row-start-6 md:row-end-7",
    background: <img
      src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="contrast-120"/>,
  },
  {
    Icon: ChefHatIcon,
    name: "Still cooking...",
    description:
      "If I weren't a software engineer, I'd be a cook. I love everything about food – cooking it, eating it. And there's something really great about knowing my food makes people happy.",
    href: "/",
    background: <img
      src="https://images.unsplash.com/photo-1634898635164-fbe5425b9d86?q=80&w=3297&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="object-bottom"/>,
    className: "md:col-start-1 md:col-end-2 md:row-start-5 md:row-end-6",
  },
  {
    Icon: ShapesIcon,
    name: "Hobbies",
    description:
      "Outside of the kitchen, I also enjoy exploring new places through travel and diving into the world of video games and board games.",
    href: "/",
    background: "https://img.freepik.com/free-photo/cute-beagle-dog-sitting-basket-while-wearing-goggles-pathway-nature-trees_181624-46010.jpg?t=st=1746990461~exp=1746994061~hmac=12f571670fa55bbbaf0b0ce7a1c2c4d37c4fd5d3589883eaea735ca531aac12d&w=740",
    className: "md:col-start-3 md:col-end-4 md:row-start-6 md:row-end-6",
  },
];