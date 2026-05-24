---
title: "Lynxes: Graph Analytics Engine"
year: 2026
role: "ML Engineer"
roles:
  - "ML Engineer"
  - "Library Developer"
type: "Graph Systems Engine Project"
summary: "Designed and implemented Lynxes, an Apache Arrow-based graph analytics engine focused on CSR indexing, lazy execution, and a high-performance graph processing experience."
portfolioProblem: "Existing Python graph libraries and generic dataframe wrappers often struggle to combine memory efficiency, traversal performance, and lazy query optimization for large graph analytics."
portfolioApproach: "I focused on a GraphFrame structure that owns Arrow RecordBatches, CSR-based adjacency indexing, a LogicalPlan-centered lazy query pipeline, Rust graph algorithms, and Python bindings."
portfolioOutcome: "Lynxes established the foundation for a graph-native analytics engine with Arrow columnar memory, O(degree) neighbor traversal, and lazy collect execution."
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
  businessSignal: "Shows system design and implementation depth for treating graph data as a first-class execution model."
  proofSentence: "Evidence for inspecting data structure and graph-native judgment first."
  priority:
    global: 20
    home: 10
    portfolio: 10
    projects: 10
    resume: 30
    print: 10
    role:
      data-graph: 10
      aidlc-mlops: 45
      nlp-llm: 90
  reviewerIntents:
    recruiter: supporting
    technical-reviewer: primary
    data-systems-reviewer: primary
    mlops-reviewer: supporting
    nlp-llm-reviewer: related
  roleSignals:
    data-graph:
      weight: primary
      rank: 10
      signal: "Primary evidence for Data Systems review."
      reviewerReason: "Shows system design and implementation depth for treating graph data as a first-class execution model."
    aidlc-mlops:
      weight: supporting
      rank: 45
      signal: "Supporting evidence for AI-DLC / MLOps review."
      reviewerReason: "Shows system design and implementation depth for treating graph data as a first-class execution model."
    nlp-llm:
      weight: related
      rank: 90
      signal: "Related background evidence for NLP / LLM review."
      reviewerReason: "Shows system design and implementation depth for treating graph data as a first-class execution model."
  subtypes:
    - Graph Engine
    - Graph Pipeline
    - Graph-native Execution
portfolio:
  thesis: "A high-performance graph analytics engine that combines Arrow columnar memory with graph-native traversal structures for Python users."
  value: "Shows system design work where graphs are treated as a first-class execution model, not as an accessory to a dataframe."
  problem: "Existing Python graph libraries and generic dataframe wrappers often struggle to combine memory efficiency, traversal performance, and lazy query optimization for large graph analytics."
  constraints:
    - "Node and edge data needed a column-oriented memory layout."
    - "Neighbor traversal had to avoid linear scans."
    - "The Rust engine and Python usability layer needed a stable boundary."
  decisions:
    - label: "Arrow-owned GraphFrame"
      description: "Designed GraphFrame to own Arrow RecordBatches directly."
      rationale: "This combines columnar memory efficiency with compatibility potential for Python analytics workflows."
    - label: "CSR adjacency index"
      description: "Added CSR-based adjacency indexing to EdgeFrame so neighbor lookup becomes O(degree)."
      rationale: "Traversal should behave like a graph-native operation rather than a generic table scan."
    - label: "Lazy logical plan"
      description: "Accumulated queries into a LogicalPlan and deferred execution until `.collect()`."
      rationale: "This keeps the analysis pipeline optimizable."
  architecture:
    summary: "A graph analytics engine combining Arrow RecordBatch storage, CSR indexing, lazy logical plans, Rust algorithms, and Python bindings."
    nodes:
      - id: "recordbatch"
        label: "Arrow RecordBatch"
        kind: "data"
        description: "Columnar memory for nodes and edges"
      - id: "graphframe"
        label: "GraphFrame"
        kind: "service"
        description: "Core graph object owning graph data"
      - id: "csr-index"
        label: "CSR Index"
        kind: "storage"
        description: "Adjacency structure for O(degree) neighbor traversal"
      - id: "logical-plan"
        label: "LogicalPlan"
        kind: "service"
        description: "Lazy query pipeline"
      - id: "python-bindings"
        label: "Python Bindings"
        kind: "interface"
        description: "PyO3-based user surface"
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
    - label: "Memory model"
      description: "Defined node and edge storage around Arrow RecordBatches."
    - label: "Traversal index"
      description: "Integrated a CSR index into EdgeFrame to reduce neighbor traversal complexity."
    - label: "Execution surface"
      description: "Connected the Rust engine and Python bindings into a usable graph analytics experience."
  outcome: "Established the foundation for a graph analytics engine with Arrow columnar memory, CSR-based traversal, and lazy collect execution."
  metrics:
    - label: "Neighbor lookup"
      value: "O(degree)"
      context: "CSR adjacency index"
    - label: "Memory model"
      value: "Arrow"
      context: "RecordBatch-based columnar storage"
    - label: "Execution"
      value: "Lazy collect"
      context: "LogicalPlan-centered execution flow"
  reflection: "The project clarified that system performance becomes convincing when data ownership, memory layout, and user API design work together."
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
