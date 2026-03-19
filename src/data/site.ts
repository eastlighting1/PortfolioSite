export const siteConfig = {
  name: "Donghyeon Kim",
  shortName: "Donghyeon",
  title: "Donghyeon Kim | Data Specialist",
  description:
    "Multipage portfolio for a data specialist focused on dependable ML systems, applied research, and production data platforms.",
  primaryRole: "Data Specialist",
  secondaryRoles: ["AI Researcher", "Data Engineer", "MLOps Engineer"],
  location: "Incheon, South Korea",
  email: "eastlighting1@gachon.ac.kr",
  siteUrl: "https://eastlighting.github.io",
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects/", label: "Projects" },
    { href: "/research/", label: "Research" },
    { href: "/resume/", label: "Resume" },
    { href: "/portfolio/", label: "Portfolio" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" }
  ]
};

export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
