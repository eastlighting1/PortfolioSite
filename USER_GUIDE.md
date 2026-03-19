# Portfolio Site Edit Guide

이 문서는 "무엇을 바꾸고 싶을 때 어느 파일을 수정해야 하는지" 빠르게 찾기 위한 가이드입니다.

기본 원칙:
- 텍스트/콘텐츠 수정: `src/content/` 또는 `src/data/`
- 화면 구조 수정: `src/pages/`, `src/components/`, `src/layouts/`
- 화면 스타일 수정: `src/styles/components.css`, `src/styles/global.css`
- 출력(PDF/Print) 수정: `src/styles/print.css`

---

## 1. 사이트 기본 정보 바꾸기

### 사이트 이름, 브라우저 제목, 설명, 네비게이션 메뉴를 바꾸고 싶으면
- 수정 파일: `src/data/site.ts`

이 파일에서 바꿀 수 있는 것:
- 사이트 이름
- 브라우저 제목
- 설명
- primary role / secondary roles
- 메뉴 이름과 순서
- 이메일 / 위치

### GitHub, LinkedIn, Scholar 링크를 바꾸고 싶으면
- 수정 파일: `src/data/links.ts`

---

## 2. Home(`/`) 수정 가이드

### 홈 전체 구성 순서를 바꾸고 싶으면
- 수정 파일: `src/pages/index.astro`

### 홈 히어로 문구, 버튼, 역할 칩을 바꾸고 싶으면
- 수정 파일: `src/components/home/HeroBlock.astro`

### 홈 히어로의 역할 칩/버튼 간격, 버튼 모양, 반응형 배치를 바꾸고 싶으면
- 수정 파일: `src/styles/components.css`

관련 클래스:
- `.chip-row`
- `.role-chip`
- `.hero-actions`
- `.button-link`
- `.button-link-secondary`

### 홈의 시스템 파이프라인(Animated Pipeline) 내용 자체를 바꾸고 싶으면
- 수정 파일: `src/data/profile.ts`

수정 대상:
- `pipeline`

### 홈의 시스템 파이프라인 레이아웃을 바꾸고 싶으면
- 수정 파일: `src/components/home/AnimatedPipeline.astro`
- 스타일 수정: `src/styles/components.css`

관련 클래스:
- `.system-grid`
- `.system-stage`

### 홈의 Featured Projects 섹션 제목/구조를 바꾸고 싶으면
- 수정 파일: `src/components/home/FeaturedProjects.astro`

### 홈의 프로젝트 카드 디자인을 바꾸고 싶으면
- 수정 파일: `src/components/projects/ProjectCard.astro`
- 스타일 수정: `src/styles/components.css`

### 홈의 Research Preview 섹션을 바꾸고 싶으면
- 수정 파일: `src/components/home/ResearchPreview.astro`

### 홈의 Experience Snapshot 내용을 바꾸고 싶으면
- 수정 파일: `src/data/experience.ts`

### 홈의 Experience Snapshot 구조를 바꾸고 싶으면
- 수정 파일: `src/components/home/ExperienceSnapshot.astro`

### 홈의 Capability Map 내용을 바꾸고 싶으면
- 수정 파일: `src/data/profile.ts`

수정 대상:
- `capabilityGroups`

### 홈의 Capability Map 카드 구조를 바꾸고 싶으면
- 수정 파일: `src/components/home/CapabilityMap.astro`

### 홈의 Resume / Portfolio CTA 카드를 바꾸고 싶으면
- 수정 파일: `src/components/home/DocumentCTA.astro`

---

## 3. Projects(`/projects/`) 수정 가이드

### 프로젝트 목록 페이지의 제목/설명/메타칩을 바꾸고 싶으면
- 수정 파일: `src/pages/projects/index.astro`

### 프로젝트 카드 배치(그리드)를 바꾸고 싶으면
- 수정 파일: `src/components/projects/ProjectGrid.astro`
- 스타일 수정: `src/styles/components.css`

관련 클래스:
- `.catalog-grid`

### 프로젝트 카드 내부 디자인을 바꾸고 싶으면
- 수정 파일: `src/components/projects/ProjectCard.astro`

수정 가능한 것:
- 제목
- type/year/role 표시 방식
- metric badge
- tag 출력
- 외부 링크 위치
- `Open Case Study` 버튼 위치

### 프로젝트 Quick Preview 모달을 바꾸고 싶으면
- 수정 파일: `src/components/projects/ProjectQuickPreview.astro`
- 스타일 수정: `src/styles/components.css`

관련 클래스:
- `.project-preview-dialog`
- `.project-preview-card`

---

## 4. Project Detail(`/projects/[slug]/`) 수정 가이드

### 프로젝트 상세 페이지의 전체 구조를 바꾸고 싶으면
- 수정 파일: `src/pages/projects/[slug].astro`

### 프로젝트 상세 상단 메타 정보 블록을 바꾸고 싶으면
- 수정 파일: `src/components/projects/ProjectDetailHero.astro`

### 특정 프로젝트의 실제 내용(제목, 요약, 문제/접근/결과, 본문)을 바꾸고 싶으면
- 수정 파일: `src/content/projects/*.md`

예시:
- `src/content/projects/feature-store-quality.md`
- `src/content/projects/retrieval-eval-bench.md`

프로젝트 markdown에서 자주 바꾸는 필드:
- `title`
- `year`
- `role`
- `roles`
- `type`
- `summary`
- `portfolioProblem`
- `portfolioApproach`
- `portfolioOutcome`
- `tags`
- `metrics`
- `repoUrl`
- `demoUrl`
- `paperUrl`
- `slidesUrl`

### 새 프로젝트를 추가하고 싶으면
1. `src/content/projects/` 안에 새 `.md` 파일 생성
2. 기존 프로젝트 파일 frontmatter 형식 복사
3. markdown 본문 작성
4. `npm run build`

---

## 5. Research(`/research/`) 수정 가이드

### Research 페이지 상단 제목/설명/메타칩을 바꾸고 싶으면
- 수정 파일: `src/pages/research/index.astro`

### Research 페이지 hero의 타이포 크기나 설명과 메타칩 간격을 바꾸고 싶으면
- 수정 파일: `src/styles/components.css`

관련 클래스:
- `.page-hero--catalog .section-title`
- `.page-hero--catalog .section-lead`
- `.page-hero--catalog .meta-row`

### Research 카드 전체 구조를 바꾸고 싶으면
- 수정 파일: `src/components/research/ResearchCard.astro`

수정 가능한 것:
- venue/year 표시
- 제목 표시
- abstract preview expander
- type/tag 위치
- detail 버튼 위치

### Research 카드의 정렬이 깨질 때 수정할 곳
- 수정 파일: `src/styles/components.css`

관련 클래스:
- `.research-card`
- `.inline-expander`
- `.inline-expander--compact`
- `.tag-row`
- `.meta-row`

### Research 목록 전체 배치를 바꾸고 싶으면
- 수정 파일: `src/components/research/ResearchList.astro`
- 스타일 수정: `src/styles/components.css`

관련 클래스:
- `.research-list`

---

## 6. Research Detail(`/research/[slug]/`) 수정 가이드

### Research 상세 페이지 전체 구조를 바꾸고 싶으면
- 수정 파일: `src/pages/research/[slug].astro`

### Research 상세 상단 hero를 바꾸고 싶으면
- 수정 파일: `src/components/research/ResearchDetailHero.astro`

### Abstract 블록을 바꾸고 싶으면
- 수정 파일: `src/components/research/AbstractBlock.astro`

### 특정 research 문서의 실제 내용을 바꾸고 싶으면
- 수정 파일: `src/content/research/*.md`

예시:
- `src/content/research/data-centric-eval.md`
- `src/content/research/retrieval-failure-analysis.md`

자주 바꾸는 필드:
- `title`
- `year`
- `venue`
- `type`
- `abstract`
- `tags`
- `pdfUrl`
- `repoUrl`
- `slidesUrl`
- `linkedProjects`

### Research와 Project 연결이 깨졌을 때
- 수정 파일: `src/content/research/*.md`

주의:
- `linkedProjects` 값은 project 파일명과 같아야 함
- 예: `src/content/projects/feature-store-quality.md`
- 그러면 `linkedProjects: ["feature-store-quality"]`

---

## 7. Resume(`/resume/`) 수정 가이드

### Resume에 어떤 경험/프로젝트/리서치를 보여줄지 바꾸고 싶으면
- 수정 파일: `src/pages/resume.astro`

수정 대상:
- `featuredExperience`
- `selectedProjects`
- `selectedResearch`

### Resume 헤더(이름/연락처)를 바꾸고 싶으면
- 수정 파일: `src/components/document/ResumeHeader.astro`
- 데이터 수정: `src/data/site.ts`, `src/data/links.ts`, `src/data/profile.ts`

### Resume 섹션 구조를 바꾸고 싶으면
- 수정 파일: `src/pages/resume.astro`
- 공통 섹션 컴포넌트 수정: `src/components/document/ResumeSection.astro`

### Resume 화면용 스타일을 바꾸고 싶으면
- 수정 파일: `src/styles/components.css`

관련 클래스:
- `.paper-sheet--resume`
- `.resume-compact-grid`
- `.resume-item--tight`
- `.compact-bullets`

### Resume 출력물(PDF/Print) 양식을 바꾸고 싶으면
- 수정 파일: `src/styles/print.css`

가장 중요하게 볼 클래스:
- `.paper-sheet--resume`
- `.resume-compact-grid`
- `.resume-section--summary`
- `.resume-section--experience`
- `.resume-section--projects`
- `.resume-section--skills`
- `.resume-section--research`
- `.resume-section--education`

---

## 8. Portfolio(`/portfolio/`) 수정 가이드

### Portfolio에서 어떤 프로젝트를 보여줄지 바꾸고 싶으면
- 수정 파일: `src/pages/portfolio.astro`

수정 대상:
- `projects`
- `research`

### Portfolio 첫 페이지(Overview page) 구성을 바꾸고 싶으면
- 수정 파일: `src/pages/portfolio.astro`

수정 대상 섹션:
- `Profile Summary`
- `Capability Summary`
- `Research Highlights`

### Portfolio 표지 영역을 바꾸고 싶으면
- 수정 파일: `src/components/document/PortfolioCover.astro`

### 프로젝트별 케이스 스터디 페이지 구조를 바꾸고 싶으면
- 수정 파일: `src/components/document/CaseStudySection.astro`

수정 가능한 것:
- Problem / Approach / Outcome 순서
- metric badge 위치
- tags 위치
- external links 위치
- `Read Full Case Study` 버튼

### 특정 프로젝트의 포트폴리오용 문제/접근/결과 문구를 바꾸고 싶으면
- 수정 파일: `src/content/projects/*.md`

수정 대상:
- `portfolioProblem`
- `portfolioApproach`
- `portfolioOutcome`

### Portfolio 화면용 레이아웃을 바꾸고 싶으면
- 수정 파일: `src/styles/components.css`

관련 클래스:
- `.paper-sheet--portfolio`
- `.portfolio-overview-grid`
- `.portfolio-section`
- `.case-study-grid`
- `.case-study--sheet`

### Portfolio 출력물(PDF/Print) 양식을 바꾸고 싶으면
- 수정 파일: `src/styles/print.css`

가장 중요하게 볼 클래스:
- `.paper-sheet--portfolio`
- `.portfolio-overview-grid`
- `.portfolio-cover`
- `.case-study`
- `.case-study--sheet`
- `.case-study-grid`

---

## 9. About(`/about/`) 수정 가이드

### About 페이지 문구를 바꾸고 싶으면
- 수정 파일: `src/pages/about.astro`
- 데이터 수정: `src/data/profile.ts`

`profile.ts`에서 자주 바꾸는 값:
- `summary`
- `philosophy`

---

## 10. Contact(`/contact/`) 수정 가이드

### Contact 페이지 연락처를 바꾸고 싶으면
- 수정 파일: `src/pages/contact.astro`
- 데이터 수정: `src/data/site.ts`
- 링크 수정: `src/data/links.ts`

---

## 11. 404 페이지 수정 가이드

### 404 페이지 문구/버튼을 바꾸고 싶으면
- 수정 파일: `src/pages/404.astro`

---

## 12. 공통 레이아웃 수정 가이드

### 일반 페이지 공통 구조를 바꾸고 싶으면
- 수정 파일: `src/layouts/BaseLayout.astro`

수정 가능한 것:
- 공통 `<head>`
- 공통 헤더/푸터 포함 방식
- scroll reveal 스크립트

### 프로젝트/리서치 상세페이지 읽기 폭을 바꾸고 싶으면
- 수정 파일: `src/layouts/DetailLayout.astro`
- 스타일 수정: `src/styles/global.css`

관련 클래스:
- `.reading-container`

### Resume / Portfolio 문서 전용 껍데기를 바꾸고 싶으면
- 수정 파일: `src/layouts/DocumentLayout.astro`

수정 가능한 것:
- 문서 전용 masthead
- document wrapper
- document page shell

---

## 13. Header / Footer 수정 가이드

### 상단 네비게이션 메뉴 UI를 바꾸고 싶으면
- 수정 파일: `src/components/common/SiteHeader.astro`
- 스타일 수정: `src/styles/components.css`

관련 클래스:
- `.site-header`
- `.site-nav`
- `.mobile-nav`
- `.mobile-nav__panel`

### 모바일 drawer 메뉴를 바꾸고 싶으면
- 수정 파일: `src/components/common/SiteHeader.astro`
- 스타일 수정: `src/styles/components.css`

### 하단 footer를 바꾸고 싶으면
- 수정 파일: `src/components/common/SiteFooter.astro`

---

## 14. 스타일 수정 가이드

### 폰트, 색상, 전역 간격, 본문 폭을 바꾸고 싶으면
- 수정 파일: `src/styles/global.css`

자주 수정하는 것:
- `:root` 변수
- `.container`
- `.reading-container`
- `.document-container`
- `.section-title`
- `.section-lead`

### 버튼, 카드, 칩, 모달, 페이지별 화면 스타일을 바꾸고 싶으면
- 수정 파일: `src/styles/components.css`

### 애니메이션/스크롤 리빌 스타일을 바꾸고 싶으면
- 수정 파일: `src/styles/motion.css`

스크립트 동작까지 바꾸려면:
- `src/layouts/BaseLayout.astro`

### 출력물(PDF/Print) 레이아웃을 바꾸고 싶으면
- 수정 파일: `src/styles/print.css`

---

## 15. 배포 관련 수정 가이드

### GitHub Pages base path, site URL을 바꾸고 싶으면
- 수정 파일: `astro.config.mjs`

### GitHub Actions 배포 방식을 바꾸고 싶으면
- 수정 파일: `.github/workflows/deploy.yml`

---

## 16. 자주 하는 작업

### 새 프로젝트 추가
1. `src/content/projects/` 안에 `.md` 파일 추가
2. frontmatter 작성
3. 본문 작성
4. `npm run build`

### 새 리서치 추가
1. `src/content/research/` 안에 `.md` 파일 추가
2. frontmatter 작성
3. 본문 작성
4. `npm run build`

### 홈에 보이는 Featured Project 수 바꾸기
- 수정 파일: `src/pages/index.astro`

### Home에 보이는 Featured Project 기준 바꾸기
- 수정 파일: `src/content/projects/*.md`

수정 대상:
- `featured: true`

### Resume 출력물이 깨질 때
- 수정 파일: `src/styles/print.css`

먼저 볼 것:
- `.paper-sheet--resume`
- `.resume-compact-grid`

### Portfolio 출력물이 깨질 때
- 수정 파일: `src/styles/print.css`

먼저 볼 것:
- `.paper-sheet--portfolio`
- `.portfolio-overview-grid`
- `.case-study--sheet`

### Research 카드 정렬이 어색할 때
- 수정 파일: `src/styles/components.css`

먼저 볼 것:
- `.research-card`
- `.inline-expander--compact`
- `.tag-row`

---

## 17. 가장 쉬운 판단법

### 텍스트만 바꾸고 싶다
- `src/content/` 또는 `src/data/`

### 페이지 구조를 바꾸고 싶다
- `src/pages/` 또는 `src/components/`

### 화면에서 보이는 디자인을 바꾸고 싶다
- `src/styles/components.css`

### 출력 PDF/인쇄 모양을 바꾸고 싶다
- `src/styles/print.css`
