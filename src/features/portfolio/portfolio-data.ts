import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Locale } from "../../lib/i18n";

const chunk = <T,>(items: T[], size: number): T[][] => {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
};

const resolvePhotoSource = () => {
  const photoCandidates = [
    { file: path.resolve(process.cwd(), "src/assets/profile-photo.jpg"), mime: "image/jpeg" },
    { file: path.resolve(process.cwd(), "src/assets/profile-photo.jpeg"), mime: "image/jpeg" },
    { file: path.resolve(process.cwd(), "src/assets/profile-photo.png"), mime: "image/png" },
    { file: path.resolve(process.cwd(), "src/assets/profile-photo.webp"), mime: "image/webp" }
  ];

  const found = photoCandidates.find((candidate) => existsSync(candidate.file));
  if (!found) return null;

  const buffer = readFileSync(found.file);
  return `data:${found.mime};base64,${buffer.toString("base64")}`;
};

export function buildPortfolioViewModel({
  locale,
  profile,
  siteConfig,
  links,
  experiences,
  education,
  portfolioPage,
  allProjects,
  allResearch
}: {
  locale: Locale;
  profile: any;
  siteConfig: any;
  links: any;
  experiences: any[];
  education: any[];
  portfolioPage: any;
  allProjects: any[];
  allResearch: any[];
}) {
  const { cover, overview, recognition, selection, web } = portfolioPage.data;
  const webPages = web.pages;
  const educationStudyPage = webPages.find((page: any) => page.kind === "educationStudy");
  const recognitionPage = webPages.find((page: any) => page.kind === "recognition");
  const selectedProjectSlugs = selection.selectedProjectSlugs;

  const projects =
    selectedProjectSlugs.length > 0
      ? selectedProjectSlugs
          .map((slug: string) => allProjects.find((project) => project.slug === slug))
          .filter(Boolean)
      : allProjects.slice(0, selection.projectCount);

  const webProjects =
    selectedProjectSlugs.length > 0
      ? selectedProjectSlugs
          .map((slug: string) => allProjects.find((project) => project.slug === slug))
          .filter(Boolean)
      : allProjects.slice(0, Math.max(selection.projectCount, selection.caseStudyCount));

  const research = allResearch.slice(0, selection.researchCount);
  const initials = profile.name.slice(-2);
  const contactItems = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ...links.externalProfiles.slice(0, 2).map((item: any) => ({
      label: item.label,
      value: item.href.replace(/^https?:\/\//, ""),
      href: item.href
    }))
  ];

  const webExperiences = experiences.slice(0, selection.experienceCount);
  const webProjectsSummary = webProjects.slice(0, selection.projectCount);
  const webCaseStudyProjects = webProjects.slice(0, selection.caseStudyCount);
  const webEducation = education.slice(0, selection.educationCount);
  const webStudyItems = educationStudyPage?.kind === "educationStudy" ? educationStudyPage.studyItems.slice(0, selection.studyCount) : [];
  const webCertificates = recognition.certificates.slice(0, selection.certificateCount);
  const webAwards = recognition.awards.slice(0, selection.awardCount);
  const recognitionEntries = [
    ...webCertificates.map((item: any) => ({ kind: "certificate" as const, item })),
    ...webAwards.map((item: any) => ({ kind: "award" as const, item }))
  ];
  const printRecognitionEntries = [
    ...recognition.certificates.map((item: any) => ({ kind: "certificate" as const, item })),
    ...recognition.awards.map((item: any) => ({ kind: "award" as const, item }))
  ];

  const topExperiences = experiences;
  const topProjects = allProjects;
  const topEducation = education;
  const topStudyItems = educationStudyPage?.kind === "educationStudy" ? educationStudyPage.studyItems : [];
  const topCapabilities = profile.capabilityGroups;
  const topResearch = allResearch;
  const printKeywords = [siteConfig.primaryRole, ...topCapabilities.map((group: any) => group.title)].slice(0, 5);
  const certificatePlaceholder =
    locale === "ko" ? "수료한 프로그램과 자격증은 이 영역에 정리됩니다." : "Certificates and completed programs will appear in this section.";
  const awardPlaceholder =
    locale === "ko" ? "수상과 인정 이력은 이 영역에 정리됩니다." : "Awards and recognitions will appear in this section.";
  const skillSeparator = " · ";
  const labels = {
    location: locale === "ko" ? "위치" : "Location",
    locationWithPeriod: locale === "ko" ? "위치." : "Location.",
    keywords: locale === "ko" ? "핵심 태그" : "Keywords",
    links: locale === "ko" ? "관련 링크" : "Links",
    experience: locale === "ko" ? "경력." : "Experience.",
    selectedProjects: locale === "ko" ? "프로젝트." : "Projects.",
    education: locale === "ko" ? "학력." : "Education.",
    study: locale === "ko" ? "스터디." : "Study.",
    capability: locale === "ko" ? "핵심 역량." : "Core Domain.",
    research: locale === "ko" ? "연구." : "Research.",
    certificate: locale === "ko" ? "수료 및 자격." : "Certificate.",
    award: locale === "ko" ? "수상." : "Award."
  };

  return {
    cover,
    overview,
    recognition,
    selection,
    webPages,
    recognitionPage,
    projects,
    webProjects,
    research,
    initials,
    contactItems,
    webExperiences,
    webProjectsSummary,
    webCaseStudyProjects,
    webEducation,
    webStudyItems,
    webCertificates,
    webAwards,
    recognitionEntries,
    printRecognitionEntries,
    recognitionPages: chunk(recognitionEntries, 2),
    printRecognitionPages: chunk(printRecognitionEntries, 4),
    topExperiences,
    topProjects,
    topEducation,
    topStudyItems,
    topCapabilities,
    topResearch,
    printKeywords,
    certificatePlaceholder,
    awardPlaceholder,
    skillSeparator,
    labels,
    photoSource: resolvePhotoSource()
  };
}
