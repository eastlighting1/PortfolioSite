---
title: "Contexta: 로컬 퍼스트 ML Observability 프로젝트"
year: 2026
role: "ML 엔지니어"
roles:
  - "ML 엔지니어"
  - "Python 라이브러리 개발자"
type: "개인 주도형 ML 플랫폼 프로젝트"
summary: "로컬 환경에서 머신러닝 실험과 실행 기록을 일관되게 수집, 저장, 조회, 비교, 복구할 수 있도록 설계한 Contexta 프로젝트를 개발했으며, canonical contract와 workspace 중심의 ML observability 구조 구현에 집중했습니다."
portfolioProblem: "머신러닝 실험과 배포 과정에서는 메타데이터, 레코드, 아티팩트가 여러 도구에 흩어지기 쉽고, 로컬 환경에서 재현 가능한 observability 흐름을 일관되게 유지하기 어렵다는 문제가 있었습니다."
portfolioApproach: "Contexta를 로컬 퍼스트 ML observability 라이브러리로 설계하고, 단일 import root, 단일 CLI, canonical workspace, schema-first contract를 중심으로 메타데이터 저장소, 레코드 저장소, 아티팩트 저장소, 조회·비교·복구 기능을 통합하는 데 집중했습니다."
portfolioOutcome: "ML 시스템의 실행 이력과 산출물을 로컬에서 일관되게 관리하고 조사할 수 있는 observability 기반을 구현했으며, 실험 추적, 비교 리포트, 복구 워크플로까지 연결되는 제품형 Python 라이브러리 경험을 축적했습니다."
evidence:
  primaryTheme: aidlc-mlops
  secondaryThemes:
    - data-graph
  dataSurfaces:
    - structured
    - hybrid
  workflowStages:
    - data
    - experiment
    - evaluation
    - observability
    - feedback-recovery
  evidenceLevel: Implemented
  disclosureLevel: Public
  businessSignal: "AI 실행 기록과 산출물을 추적, 비교, 복구할 수 있는 운영형 observability 설계 역량을 보여줍니다."
  proofSentence: "실험, 평가, 산출물 관리가 구현 흐름으로 이어지는 방식을 확인할 수 있습니다."
  priority:
    global: 30
    home: 20
    portfolio: 20
    projects: 20
    resume: 20
    print: 20
    role:
      data-graph: 35
      aidlc-mlops: 10
      nlp-llm: 90
  reviewerIntents:
    recruiter: primary
    technical-reviewer: primary
    data-systems-reviewer: supporting
    mlops-reviewer: primary
    nlp-llm-reviewer: related
  roleSignals:
    data-graph:
      weight: supporting
      rank: 35
      signal: "Data Systems 관점을 보조하는 관련 프로젝트입니다."
      reviewerReason: "AI 실행 기록과 산출물을 추적, 비교, 복구할 수 있는 운영형 observability 설계 역량을 보여줍니다."
    aidlc-mlops:
      weight: primary
      rank: 10
      signal: "AI-DLC / MLOps 관점에서 가장 먼저 확인할 핵심 프로젝트입니다."
      reviewerReason: "AI 실행 기록과 산출물을 추적, 비교, 복구할 수 있는 운영형 observability 설계 역량을 보여줍니다."
    nlp-llm:
      weight: related
      rank: 90
      signal: "NLP / LLM 관점에서는 배경 맥락으로 참고할 수 있습니다."
      reviewerReason: "AI 실행 기록과 산출물을 추적, 비교, 복구할 수 있는 운영형 observability 설계 역량을 보여줍니다."
  subtypes:
    - ML Observability
    - Experiment Tracking
    - Recovery Workflow
portfolio:
  thesis: "로컬 환경에서도 ML 실행 이력과 산출물을 일관된 contract로 추적, 비교, 복구할 수 있게 만든 observability 라이브러리 프로젝트입니다."
  value: "실험 코드와 운영 흔적 사이에 비어 있던 로컬 추적 계층을 Python 패키지와 CLI 경험으로 연결했습니다."
  problem: "머신러닝 실험과 배포 과정에서는 메타데이터, 레코드, 아티팩트가 여러 도구에 흩어지기 쉽고, 재현 가능한 observability 흐름을 유지하기 어렵습니다."
  constraints:
    - "외부 백엔드 없이 로컬 workspace만으로 동작해야 했습니다."
    - "라이브러리 API와 CLI가 같은 contract를 공유해야 했습니다."
    - "실행 기록, 아티팩트, 비교 리포트, 복구 흐름을 하나의 경험으로 묶어야 했습니다."
  decisions:
    - label: "Canonical workspace"
      description: "`.contexta/` workspace를 기준으로 메타데이터, 레코드, 아티팩트를 분리 저장했습니다."
      rationale: "사용자가 로컬 파일 시스템에서도 실행 이력을 신뢰할 수 있게 하기 위해서입니다."
    - label: "Schema-first contract"
      description: "캡처, 조회, 비교, 복구 기능이 동일한 데이터 계약을 따르도록 설계했습니다."
      rationale: "기능이 늘어나도 데이터 의미가 흩어지지 않게 하기 위해서입니다."
  architecture:
    summary: "Python facade, CLI, workspace storage, report/recovery 흐름이 같은 contract를 공유하는 로컬 퍼스트 ML observability 구조입니다."
    nodes:
      - id: "python-api"
        label: "Python API"
        kind: "interface"
        description: "사용자가 실험 코드에서 호출하는 facade"
      - id: "cli"
        label: "CLI"
        kind: "interface"
        description: "조회, 비교, 복구 명령 표면"
      - id: "contract"
        label: "Canonical Contract"
        kind: "service"
        description: "metadata, records, artifacts의 스키마 기준"
      - id: "workspace"
        label: "Local Workspace"
        kind: "storage"
        description: "로컬 실행 기록과 산출물 저장소"
      - id: "reports"
        label: "Reports & Recovery"
        kind: "evaluation"
        description: "비교 리포트, replay, backup, restore"
    links:
      - from: "python-api"
        to: "contract"
        label: "capture"
      - from: "cli"
        to: "contract"
        label: "query"
      - from: "contract"
        to: "workspace"
        label: "persist"
      - from: "workspace"
        to: "reports"
        label: "inspect"
  process:
    - label: "표면 정리"
      description: "단일 import root와 CLI 명령 표면을 먼저 정리했습니다."
    - label: "저장 계층 설계"
      description: "metadata, records, artifacts를 분리된 truth plane으로 구성했습니다."
    - label: "운영 흐름 연결"
      description: "snapshot, diff, replay, backup, restore를 하나의 로컬 workflow로 연결했습니다."
  outcome: "ML 시스템의 실행 이력과 산출물을 로컬에서 일관되게 관리하고 조사할 수 있는 observability 기반을 구현했습니다."
  metrics:
    - label: "Architecture"
      value: "Local-first"
      context: "외부 백엔드 없이 workspace 중심으로 작동"
    - label: "Contract"
      value: "Schema-first"
      context: "API와 CLI가 동일한 데이터 의미를 공유"
    - label: "Workflow"
      value: "Trace / Compare / Recover"
      context: "실험 추적부터 복구까지 연결"
  reflection: "ML 도구는 모델 성능뿐 아니라 실행 흔적을 얼마나 다시 설명할 수 있는지가 제품성을 좌우한다는 점을 확인했습니다."
resume:
  include: true
  priority: 20
featured: false
tags:
  - "ML Observability"
  - "Local-first"
  - "Python"
  - "DuckDB"
  - "Experiment Tracking"
  - "MLOps"
metrics:
  - "로컬 퍼스트 observability 구조 설계"
  - "canonical contract 및 workspace 구현"
  - "조회·비교·복구 흐름 통합"
---

## 배경

Contexta는 머신러닝 시스템을 위한 로컬 퍼스트 observability 라이브러리 프로젝트입니다. 저는 이 프로젝트에서 클라우드 의존 없이도 실험과 실행 데이터를 일관된 구조로 다룰 수 있도록, Python 라이브러리와 CLI, workspace 구조를 중심으로 제품 형태의 기반을 만드는 데 집중했습니다.

## 문제

머신러닝 프로젝트를 진행하다 보면 메트릭, 실행 로그, 아티팩트, 환경 정보가 여러 파일과 도구에 분산되기 쉽습니다. 이런 구조에서는 실행 이력을 다시 추적하거나 결과를 비교하고, 장애 이후 상태를 복구하는 과정이 번거로워집니다. 특히 로컬 환경이나 에이전트 기반 개발 흐름에서는 외부 백엔드 없이도 일관된 contract와 저장 구조를 갖춘 observability 계층이 필요했습니다.

## 구현

저는 Contexta를 단일 진입점과 일관된 데이터 계약을 가진 ML observability 라이브러리로 설계했습니다. `Contexta` facade, `contexta.config`, `contexta.contract`, `contexta.capture` 같은 표면을 정리하고, 메타데이터 저장소, 레코드 저장소, 아티팩트 저장소를 분리된 truth plane으로 구성해 기록과 조회 흐름을 명확히 했습니다. 또한 로컬 `.contexta/` workspace를 기준으로 실행 데이터 저장, 스냅샷 조회, 비교 리포트 생성, replay·backup·restore 같은 recovery 워크플로를 연결해 실험 추적부터 운영 대응까지 이어지는 구조를 구현했습니다.

## 결과

프로젝트는 ML 실행 데이터를 로컬에서 안정적으로 수집, 저장, 비교, 복구할 수 있는 observability 기반을 갖추게 되었습니다. 개인적으로는 단순 실험 코드 수준을 넘어, Python 패키징, CLI, 문서화, 예제, 저장 구조 설계까지 포함한 제품형 ML 도구를 구축하면서 MLOps와 observability 관점의 설계 경험을 깊게 쌓을 수 있었습니다.

