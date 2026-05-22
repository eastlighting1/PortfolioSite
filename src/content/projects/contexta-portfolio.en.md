---
title: "Contexta: Local-First ML Observability"
year: 2026
role: "ML Engineer"
roles:
  - "ML Engineer"
  - "Python Library Developer"
type: "Self-directed ML Platform Project"
summary: "Designed and built Contexta as a local-first ML observability project for collecting, storing, querying, comparing, and recovering machine learning execution records and artifacts."
portfolioProblem: "ML experiments and deployment work often scatter metadata, records, and artifacts across tools, making reproducible local observability hard to maintain."
portfolioApproach: "I designed Contexta around a single import root, one CLI surface, a canonical workspace, and a schema-first contract spanning metadata, records, artifacts, querying, comparison, and recovery."
portfolioOutcome: "The project created a local observability foundation for inspecting ML execution history and artifacts, with product-like Python library experience across tracking, reports, and recovery workflows."
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
  businessSignal: "Shows operational observability design for tracing, comparing, and recovering AI execution records and artifacts."
  subtypes:
    - ML Observability
    - Experiment Tracking
    - Recovery Workflow
portfolio:
  thesis: "A local-first observability library for tracing, comparing, and recovering ML execution history through one consistent contract."
  value: "Connected experimental code and operational traces through a Python package and CLI experience."
  problem: "ML experiments and deployment work often scatter metadata, records, and artifacts across tools, making reproducible local observability hard to maintain."
  constraints:
    - "The system had to work from a local workspace without an external backend."
    - "The library API and CLI needed to share the same contract."
    - "Execution records, artifacts, comparison reports, and recovery flows had to feel like one product."
  decisions:
    - label: "Canonical workspace"
      description: "Used a `.contexta/` workspace as the home for separated metadata, records, and artifact storage."
      rationale: "This made execution history inspectable through ordinary local files."
    - label: "Schema-first contract"
      description: "Made capture, query, compare, and recovery flows share the same data meaning."
      rationale: "The contract keeps future features from drifting into incompatible data shapes."
  architecture:
    summary: "A local-first ML observability structure where the Python facade, CLI, workspace storage, and report/recovery flows share one contract."
    nodes:
      - id: "python-api"
        label: "Python API"
        kind: "interface"
        description: "Facade used from experiment code"
      - id: "cli"
        label: "CLI"
        kind: "interface"
        description: "Command surface for query, compare, and recovery"
      - id: "contract"
        label: "Canonical Contract"
        kind: "service"
        description: "Schema basis for metadata, records, and artifacts"
      - id: "workspace"
        label: "Local Workspace"
        kind: "storage"
        description: "Local store for execution records and outputs"
      - id: "reports"
        label: "Reports & Recovery"
        kind: "evaluation"
        description: "Diff reports, replay, backup, and restore"
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
    - label: "Surface design"
      description: "Clarified the import root and CLI command surface first."
    - label: "Storage design"
      description: "Separated metadata, records, and artifacts into distinct truth planes."
    - label: "Operational workflow"
      description: "Connected snapshots, diffs, replay, backup, and restore into one local workflow."
  outcome: "Implemented a local observability foundation for consistently managing and inspecting ML execution history and artifacts."
  metrics:
    - label: "Architecture"
      value: "Local-first"
      context: "Works around a workspace without an external backend"
    - label: "Contract"
      value: "Schema-first"
      context: "API and CLI share the same data meaning"
    - label: "Workflow"
      value: "Trace / Compare / Recover"
      context: "Links tracking, comparison, and recovery"
  reflection: "This project reinforced that ML tooling becomes product-like when execution traces remain explainable after the run finishes."
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
