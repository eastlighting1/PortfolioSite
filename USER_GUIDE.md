# Portfolio Site Edit Guide

이 문서는 이 사이트에서 어떤 내용을 어디서 수정해야 하는지 빠르게 찾기 위한 가이드다.

현재 구조의 핵심 원칙은 아래와 같다.

- 페이지별 문구, 섹션 순서, 노출 여부, 개수: `src/content/pages/*.yaml`
- 이름, 이메일, 링크, 프로필, 경력, 학력: `src/content/globals/*.yaml`
- 공통 UI 라벨과 버튼 문구: `src/content/ui/*.yaml`
- 프로젝트/리서치 본문: `src/content/projects/*.md`, `src/content/research/*.md`
- 실제 레이아웃/렌더링/스타일 변경: `src/pages/`, `src/components/`, `src/layouts/`, `src/styles/`

내용만 수정하고 싶다면, 먼저 `src/content/`를 본다.

---

## 1. 가장 자주 하는 수정

### 홈 화면 문구를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`

여기서 바꿀 수 있는 것:

- hero eyebrow
- hero summary
- 버튼 라벨과 링크
- focus card 문구
- 섹션 순서
- Featured Projects 개수
- Research Preview 개수
- Experience Snapshot 개수
- Documents 카드 문구

### Resume 페이지 문구나 섹션 제목을 바꾸고 싶다

- 수정 파일: `src/content/pages/resume.yaml`

### Portfolio 페이지 문구나 선택 프로젝트를 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`

### Projects / Research / About / Contact / 404 문구를 바꾸고 싶다

- 수정 파일:
  - `src/content/pages/projects.yaml`
  - `src/content/pages/research.yaml`
  - `src/content/pages/about.yaml`
  - `src/content/pages/contact.yaml`
  - `src/content/pages/not-found.yaml`

### 이름, 이메일, 소개, 경력, 학력을 바꾸고 싶다

- 수정 파일:
  - `src/content/globals/site.yaml`
  - `src/content/globals/profile.yaml`
  - `src/content/globals/links.yaml`
  - `src/content/globals/experience.yaml`
  - `src/content/globals/education.yaml`

### 공통 버튼/라벨 문구를 바꾸고 싶다

- 수정 파일: `src/content/ui/labels.yaml`

예:

- `Resume`
- `Back to Projects`
- `Quick Preview`
- `Open Detail`
- `Print`
- `Abstract`
- `Project Detail`
- `Research Detail`

---

## 2. 폴더별 역할

### `src/content/pages/*.yaml`

페이지별 편집 설정 파일이다.

이 파일에는 아래 같은 내용이 들어 있다.

- 페이지 제목
- 소개 문구
- 버튼 라벨
- 버튼 링크
- 섹션 제목
- 섹션 설명
- 섹션 표시 여부
- 섹션 순서
- 일부 목록 개수

현재 파일:

- `src/content/pages/home.yaml`
- `src/content/pages/resume.yaml`
- `src/content/pages/portfolio.yaml`
- `src/content/pages/projects.yaml`
- `src/content/pages/research.yaml`
- `src/content/pages/about.yaml`
- `src/content/pages/contact.yaml`
- `src/content/pages/not-found.yaml`

### `src/content/globals/*.yaml`

사이트 전체에서 재사용되는 전역 콘텐츠 데이터다.

현재 파일:

- `src/content/globals/site.yaml`
- `src/content/globals/profile.yaml`
- `src/content/globals/links.yaml`
- `src/content/globals/experience.yaml`
- `src/content/globals/education.yaml`

### `src/content/ui/*.yaml`

공통 UI 라벨 파일이다.

현재 파일:

- `src/content/ui/labels.yaml`

### `src/content/projects/*.md`

프로젝트 상세 페이지 원본이다.

여기서 바꿀 수 있는 것:

- 제목
- 연도
- 역할
- 타입
- 요약
- 태그
- 메트릭
- 외부 링크
- portfolio problem / approach / outcome
- 본문

### `src/content/research/*.md`

리서치 상세 페이지 원본이다.

여기서 바꿀 수 있는 것:

- 제목
- 연도
- venue
- type
- abstract
- tags
- 외부 링크
- linkedProjects
- 본문

### `src/data/*.ts`

이제 `src/data/*.ts`는 대부분 콘텐츠가 아니라 코드 헬퍼다.

예:

- `src/data/site.ts`
- `src/data/content.ts`

내용 수정 목적이라면 보통 여기서는 수정하지 않는다.

---

## 3. 전역 정보 수정 가이드

### 사이트 이름, 브라우저 제목, 기본 설명, 내비게이션을 바꾸고 싶다

- 수정 파일: `src/content/globals/site.yaml`

주요 필드:

- `name`
- `shortName`
- `title`
- `description`
- `primaryRole`
- `secondaryRoles`
- `location`
- `email`
- `siteUrl`
- `nav`

### GitHub, LinkedIn, Google Scholar 링크를 바꾸고 싶다

- 수정 파일: `src/content/globals/links.yaml`

### 프로필 요약, 헤드라인, 철학, capability map, pipeline을 바꾸고 싶다

- 수정 파일: `src/content/globals/profile.yaml`

주요 필드:

- `headline`
- `intro`
- `summary`
- `philosophy`
- `capabilityGroups`
- `pipeline`

### 경력 내용을 바꾸고 싶다

- 수정 파일: `src/content/globals/experience.yaml`

### 학력 내용을 바꾸고 싶다

- 수정 파일: `src/content/globals/education.yaml`

---

## 4. Home(`/`) 수정 가이드

### Home hero 문구를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `hero`

### Home 버튼 이름이나 링크를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `hero.actions`

### Home 섹션 순서를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `sectionOrder`

사용 가능한 섹션 id:

- `hero`
- `pipeline`
- `featuredProjects`
- `researchPreview`
- `experienceSnapshot`
- `capabilityMap`
- `documents`

### Home에서 특정 섹션을 숨기고 싶다

- 수정 파일: `src/content/pages/home.yaml`

각 섹션의 `enabled`를 수정하면 된다.

### Featured Projects 개수를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `featuredProjects.count`

주의:

- 실제 featured 여부는 각 프로젝트 Markdown의 `featured: true`로 정한다.
- Home은 그중 몇 개를 보여줄지만 정한다.

### Research Preview 개수를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `researchPreview.count`

### Experience Snapshot 개수를 바꾸고 싶다

- 수정 파일: `src/content/pages/home.yaml`
- 키: `experienceSnapshot.count`

### Home capability 내용 자체를 바꾸고 싶다

- 수정 파일: `src/content/globals/profile.yaml`
- 키: `capabilityGroups`

### Home pipeline 단계 문구를 바꾸고 싶다

- 수정 파일: `src/content/globals/profile.yaml`
- 키: `pipeline`

---

## 5. Projects(`/projects/`) 수정 가이드

### Projects 목록 페이지 제목/설명을 바꾸고 싶다

- 수정 파일: `src/content/pages/projects.yaml`

### 프로젝트 카드/상세 내용 자체를 바꾸고 싶다

- 수정 파일: `src/content/projects/*.md`

자주 수정하는 frontmatter:

- `title`
- `year`
- `role`
- `roles`
- `type`
- `summary`
- `featured`
- `tags`
- `metrics`
- `repoUrl`
- `demoUrl`
- `paperUrl`
- `slidesUrl`
- `portfolioProblem`
- `portfolioApproach`
- `portfolioOutcome`

### 새 프로젝트를 추가하고 싶다

1. `src/content/projects/`에 새 `.md` 파일 생성
2. 기존 프로젝트 frontmatter 형식 복사
3. 제목/요약/링크/본문 작성

### 특정 프로젝트를 Home Featured로 보이게 하고 싶다

- 수정 파일: `src/content/projects/*.md`
- 키: `featured: true`

---

## 6. Research(`/research/`) 수정 가이드

### Research 목록 페이지 제목/설명을 바꾸고 싶다

- 수정 파일: `src/content/pages/research.yaml`

### 리서치 카드/상세 내용 자체를 바꾸고 싶다

- 수정 파일: `src/content/research/*.md`

자주 수정하는 frontmatter:

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

### 새 리서치를 추가하고 싶다

1. `src/content/research/`에 새 `.md` 파일 생성
2. 기존 frontmatter 형식 복사
3. abstract와 본문 작성

### linkedProjects를 연결하고 싶다

- 수정 파일: `src/content/research/*.md`
- 키: `linkedProjects`

예시:

```yaml
linkedProjects:
  - feature-store-quality
```

값은 프로젝트 slug 기준이다.

---

## 7. Resume(`/resume/`) 수정 가이드

### Resume 문서 제목/설명/toolbar 문구를 바꾸고 싶다

- 수정 파일: `src/content/pages/resume.yaml`

### Resume 섹션 순서를 바꾸고 싶다

- 수정 파일: `src/content/pages/resume.yaml`
- 키:
  - `layout.leftColumn`
  - `layout.rightColumn`

사용 가능한 섹션 id:

- `summary`
- `experience`
- `projects`
- `skills`
- `research`
- `education`

### Resume에서 특정 섹션을 숨기고 싶다

- 수정 파일: `src/content/pages/resume.yaml`
- 각 섹션의 `enabled`

### Resume에서 경력/프로젝트/리서치 개수를 바꾸고 싶다

- 수정 파일: `src/content/pages/resume.yaml`

주요 키:

- `sections.experience.count`
- `sections.projects.count`
- `sections.research.count`

### Resume 헤더 이름/이메일/링크를 바꾸고 싶다

- 수정 파일:
  - `src/content/globals/profile.yaml`
  - `src/content/globals/site.yaml`
  - `src/content/globals/links.yaml`

---

## 8. Portfolio(`/portfolio/`) 수정 가이드

### Portfolio 제목/설명/toolbar 문구를 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`

### Portfolio cover 제목을 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`
- 키: `cover`

### Portfolio overview 제목과 설명을 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`
- 키: `overview`

### Portfolio에서 보여줄 프로젝트 수를 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`
- 키: `selection.projectCount`

### Portfolio에서 특정 프로젝트만 고정해서 보여주고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`
- 키: `selection.selectedProjectSlugs`

### Portfolio에서 보여줄 리서치 수를 바꾸고 싶다

- 수정 파일: `src/content/pages/portfolio.yaml`
- 키: `selection.researchCount`

### Portfolio case study 내용 자체를 바꾸고 싶다

- 수정 파일: `src/content/projects/*.md`

---

## 9. About / Contact / 404 수정 가이드

### About hero와 섹션 제목을 바꾸고 싶다

- 수정 파일: `src/content/pages/about.yaml`

### About의 요약과 철학 내용을 바꾸고 싶다

- 수정 파일: `src/content/globals/profile.yaml`

### Contact hero 문구를 바꾸고 싶다

- 수정 파일: `src/content/pages/contact.yaml`

### 이메일 주소를 바꾸고 싶다

- 수정 파일: `src/content/globals/site.yaml`
- 키: `email`

### 외부 프로필 링크를 바꾸고 싶다

- 수정 파일: `src/content/globals/links.yaml`

### 404 제목, 설명, 버튼을 바꾸고 싶다

- 수정 파일: `src/content/pages/not-found.yaml`

---

## 10. 공통 UI 라벨 수정 가이드

### 공통 버튼/상세 라벨을 바꾸고 싶다

- 수정 파일: `src/content/ui/labels.yaml`

여기서 바꿀 수 있는 것:

- 헤더 상단 Resume 버튼
- 헤더 모바일 토글 라벨
- 푸터 요약 문구
- 문서 페이지 상단 masthead 링크
- Print toolbar 기본 문구와 버튼 라벨
- Project Detail / Research Detail 같은 eyebrow
- Type / Year / Venue / Roles 같은 필드 라벨
- Quick Preview / Open Case Study / Open Detail / Back to ... 같은 버튼 문구
- Abstract / Related Projects / Read Full Case Study 같은 공통 라벨

---

## 11. 구조를 바꾸고 싶을 때

### 페이지 조합 방식을 바꾸고 싶다

- 수정 파일: `src/pages/**/*.astro`

### 재사용 컴포넌트 구조를 바꾸고 싶다

- 수정 파일: `src/components/**/*.astro`

### 공통 레이아웃을 바꾸고 싶다

- 수정 파일:
  - `src/layouts/BaseLayout.astro`
  - `src/layouts/DetailLayout.astro`
  - `src/layouts/DocumentLayout.astro`

### 스타일을 바꾸고 싶다

- 수정 파일:
  - `src/styles/global.css`
  - `src/styles/components.css`
  - `src/styles/motion.css`
  - `src/styles/print.css`

---

## 12. 마지막 체크

가장 많이 수정하는 파일만 다시 요약하면 아래와 같다.

- 페이지별 문구: `src/content/pages/*.yaml`
- 전역 사이트 정보: `src/content/globals/site.yaml`
- 외부 링크: `src/content/globals/links.yaml`
- 프로필/철학/capability/pipeline: `src/content/globals/profile.yaml`
- 경력: `src/content/globals/experience.yaml`
- 학력: `src/content/globals/education.yaml`
- 공통 UI 문구: `src/content/ui/labels.yaml`
- 프로젝트 내용: `src/content/projects/*.md`
- 리서치 내용: `src/content/research/*.md`

이 기준만 기억하면, 대부분의 내용 수정은 `astro`나 `ts`를 직접 열지 않고도 처리할 수 있다.
