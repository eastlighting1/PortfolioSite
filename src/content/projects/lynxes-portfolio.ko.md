---
title: "Lynxes: 그래프 분석 엔진 프로젝트"
year: 2026
role: "ML 엔지니어"
roles:
  - "ML 엔지니어"
  - "라이브러리 개발자"
type: "그래프 시스템 엔진 프로젝트"
summary: "Apache Arrow 기반의 그래프 분석 엔진 Lynxes를 직접 설계하고 구현했으며, CSR 인덱스와 lazy execution을 중심으로 고성능 그래프 처리 경험을 만드는 데 집중했습니다."
portfolioProblem: "기존 Python 그래프 라이브러리나 범용 데이터프레임 래퍼만으로는 대규모 그래프 분석에서 필요한 메모리 효율, 탐색 성능, 그리고 지연 실행 기반의 질의 최적화를 함께 만족시키기 어려웠습니다."
portfolioApproach: "Arrow RecordBatch를 직접 소유하는 GraphFrame 구조와 CSR 기반 인접성 인덱스를 설계하고, LogicalPlan 중심의 lazy query pipeline과 Rust 구현의 그래프 알고리즘, Python 바인딩까지 일관된 아키텍처로 구축하는 데 집중했습니다."
portfolioOutcome: "Lynxes는 Arrow의 컬럼 지향 메모리 모델과 그래프 네이티브 탐색 구조를 결합한 실험적 엔진으로 자리잡았고, 빠른 로딩, O(degree) 이웃 탐색, lazy collect 기반 실행 흐름을 갖춘 그래프 분석 환경의 기반을 마련했습니다."
evidence:
  primaryTheme: data-graph
  secondaryThemes:
    - aidlc-mlops
  dataSurfaces:
    - structured
    - graph
    - hybrid
  workflowStages:
    - data
    - experiment
    - evaluation
  evidenceLevel: Implemented
  disclosureLevel: Public
  businessSignal: "그래프 데이터를 1급 실행 모델로 다루는 시스템 설계와 구현 역량을 보여줍니다."
  subtypes:
    - Graph Engine
    - Graph Pipeline
    - Graph-native Execution
portfolio:
  thesis: "Arrow 기반 컬럼 메모리와 그래프 네이티브 탐색 구조를 결합해 Python에서 사용할 수 있는 고성능 그래프 분석 엔진을 설계한 프로젝트입니다."
  value: "그래프를 데이터프레임의 부속물이 아니라 1급 실행 모델로 다루는 시스템 설계 경험을 보여줍니다."
  problem: "기존 Python 그래프 라이브러리나 범용 데이터프레임 래퍼만으로는 메모리 효율, 탐색 성능, 지연 실행 기반 최적화를 함께 만족시키기 어려웠습니다."
  constraints:
    - "노드와 엣지 데이터를 컬럼 지향 구조로 다뤄야 했습니다."
    - "이웃 탐색은 선형 스캔이 아니라 그래프 구조에 맞는 복잡도를 가져야 했습니다."
    - "Rust 엔진과 Python 사용성 사이의 경계를 안정적으로 설계해야 했습니다."
  decisions:
    - label: "Arrow-owned GraphFrame"
      description: "GraphFrame이 Arrow RecordBatch를 직접 소유하도록 설계했습니다."
      rationale: "컬럼 지향 메모리 효율과 Python 분석 생태계와의 연결 가능성을 함께 얻기 위해서입니다."
    - label: "CSR adjacency index"
      description: "EdgeFrame에 CSR 기반 인접성 인덱스를 결합해 이웃 조회를 O(degree)로 만들었습니다."
      rationale: "그래프 탐색을 범용 테이블 스캔이 아니라 그래프 네이티브 연산으로 다루기 위해서입니다."
    - label: "Lazy logical plan"
      description: "질의 연결은 LogicalPlan으로 누적하고 실제 계산은 `.collect()`에서 수행하도록 설계했습니다."
      rationale: "분석 파이프라인을 최적화 가능한 실행 흐름으로 유지하기 위해서입니다."
  architecture:
    summary: "Arrow RecordBatch, CSR 인덱스, lazy logical plan, Rust 알고리즘, Python 바인딩을 결합한 그래프 분석 엔진 구조입니다."
    nodes:
      - id: "recordbatch"
        label: "Arrow RecordBatch"
        kind: "data"
        description: "노드와 엣지를 담는 컬럼 지향 메모리 구조"
      - id: "graphframe"
        label: "GraphFrame"
        kind: "service"
        description: "그래프 데이터를 소유하는 핵심 객체"
      - id: "csr-index"
        label: "CSR Index"
        kind: "storage"
        description: "O(degree) 이웃 탐색을 위한 인접성 구조"
      - id: "logical-plan"
        label: "LogicalPlan"
        kind: "service"
        description: "lazy query pipeline"
      - id: "python-bindings"
        label: "Python Bindings"
        kind: "interface"
        description: "PyO3 기반 사용자 표면"
    links:
      - from: "recordbatch"
        to: "graphframe"
        label: "owned columns"
      - from: "graphframe"
        to: "csr-index"
        label: "edge adjacency"
      - from: "graphframe"
        to: "logical-plan"
        label: "lazy query"
      - from: "logical-plan"
        to: "python-bindings"
        label: "collect"
  process:
    - label: "메모리 모델"
      description: "Arrow RecordBatch 기반으로 노드와 엣지 저장 구조를 먼저 정의했습니다."
    - label: "탐색 인덱스"
      description: "EdgeFrame에 CSR 인덱스를 결합해 이웃 탐색 복잡도를 낮췄습니다."
    - label: "실행 표면"
      description: "Rust 엔진과 Python 바인딩을 연결해 사용 가능한 분석 경험으로 묶었습니다."
  outcome: "Arrow 컬럼 메모리 모델과 CSR 기반 그래프 탐색, lazy collect 실행 흐름을 갖춘 그래프 분석 엔진의 기반을 마련했습니다."
  metrics:
    - label: "Neighbor lookup"
      value: "O(degree)"
      context: "CSR 기반 인접성 인덱스"
    - label: "Memory model"
      value: "Arrow"
      context: "RecordBatch 기반 컬럼 지향 저장"
    - label: "Execution"
      value: "Lazy collect"
      context: "LogicalPlan 중심 실행 흐름"
  reflection: "시스템 성능은 알고리즘만이 아니라 데이터 소유권, 메모리 레이아웃, 사용자 API가 함께 맞물릴 때 설득력을 갖는다는 점을 확인했습니다."
resume:
  include: true
  priority: 30
featured: false
tags:
  - "Graph Analytics"
  - "Apache Arrow"
  - "CSR"
  - "Rust"
  - "Lazy Execution"
  - "PyO3"
metrics:
  - "그래프 엔진 아키텍처 설계"
  - "CSR 탐색 구조 구현"
  - "Python 연동 레이어 구축"
---

## 배경

Lynxes는 대규모 그래프 데이터를 더 빠르고 구조적으로 다루기 위해 직접 설계한 그래프 분석 엔진 프로젝트입니다. 저는 이 프로젝트에서 단순히 기존 라이브러리를 감싸는 방식이 아니라, Apache Arrow 기반 컬럼 저장과 그래프 전용 인덱스를 처음부터 결합한 엔진을 Rust로 구현하는 데 집중했습니다.

## 문제

기존 그래프 도구들은 사용성은 좋지만 내부적으로 범용 자료구조나 래퍼 계층에 의존하는 경우가 많아, 그래프 탐색 성능과 메모리 효율, 그리고 분석 파이프라인의 지연 실행을 동시에 만족시키기 어려웠습니다. 특히 이웃 탐색이 그래프 구조의 핵심인데도 선형 스캔이나 느슨한 추상화에 기대는 경우가 많아, 그래프를 진짜 1급 구조로 다루는 엔진이 필요했습니다.

## 구현

저는 Lynxes의 핵심 데이터 레이아웃부터 직접 설계했습니다. 노드와 엣지는 Arrow `RecordBatch` 기반으로 보관하고, `EdgeFrame`에는 CSR 기반 인접성 인덱스를 결합해 이웃 조회가 O(degree)로 이뤄지도록 구성했습니다. 실행 모델 역시 eager 방식이 아니라 lazy execution을 기본으로 두어, 사용자가 질의를 연결해 `LogicalPlan`을 만들고 실제 계산은 `.collect()` 시점에만 수행되도록 설계했습니다. 여기에 Rust로 그래프 알고리즘과 실행 엔진을 구현하고, Python 사용성을 위해 PyO3 바인딩과 입출력 계층까지 함께 구축했습니다.

## 결과

Lynxes는 Arrow의 zero-copy 지향 메모리 구조와 CSR 기반 그래프 탐색을 결합한 그래프 네이티브 엔진으로 발전했습니다. 이를 통해 단순 데이터프레임 래핑이 아닌, 그래프 구조 자체를 중심에 둔 분석 환경의 기반을 마련했고, 고성능 Rust 엔진과 Python 인터페이스를 함께 설계하며 제품형 그래프 시스템을 끝단까지 만드는 경험을 축적했습니다.
