---
title: "EMR 기반 간호감시 자동 ICD 코딩 시스템"
year: 2025
role: "대학원 연구원"
roles:
  - "대학원 연구원"
  - "AI 엔지니어"
  - "데이터 사이언티스트"
type: "의료 AI 연구"
summary: "복부수술 환자의 간호감시를 지원하기 위해 핵심 EMR 데이터만으로 자동 ICD 코딩 모델을 구축했다."
portfolioProblem: "간호감시에 필요한 진단 관련 신호가 검사 데이터, 환자정보, 간호기록 등 이질적인 EMR 소스에 분산되어 있었다."
portfolioApproach: "구조화 데이터와 간호 텍스트를 통합하고, 이중 KM-BERT와 PCA, XGBoost를 결합한 스태킹 구조로 ICD 예측을 설계했다."
portfolioOutcome: "최종 모델은 사후 문서 없이도 희소 클래스 재현율까지 고려한 실용적 분류 성능을 보였다."
evidence:
  primaryTheme: nlp-llm
  secondaryThemes:
    - data-graph
  dataSurfaces:
    - structured
    - text
    - hybrid
  workflowStages:
    - data
    - training
    - evaluation
  evidenceLevel: Published
  disclosureLevel: Public Summary Only
  businessSignal: "이질적인 구조화 EMR과 한국어 임상 텍스트를 평가 가능한 NLP 파이프라인으로 결합한 작업입니다."
  proofSentence: "NLP/LLM 모델링과 평가 판단이 실제 기능 구현으로 이어지는 방식을 확인할 수 있습니다."
  priority:
    global: 50
    home: 40
    portfolio: 40
    projects: 30
    resume: 10
    print: 40
    role:
      data-graph: 35
      aidlc-mlops: 80
      nlp-llm: 10
  reviewerIntents:
    recruiter: primary
    technical-reviewer: supporting
    data-systems-reviewer: supporting
    mlops-reviewer: related
    nlp-llm-reviewer: primary
    research-reviewer: primary
  roleSignals:
    data-graph:
      weight: supporting
      rank: 35
      signal: "Data Systems 관점을 보조하는 관련 프로젝트입니다."
      reviewerReason: "이질적인 구조화 EMR과 한국어 임상 텍스트를 평가 가능한 NLP 파이프라인으로 결합한 작업입니다."
    aidlc-mlops:
      weight: related
      rank: 80
      signal: "AI-DLC / MLOps 관점에서는 배경 맥락으로 참고할 수 있습니다."
      reviewerReason: "이질적인 구조화 EMR과 한국어 임상 텍스트를 평가 가능한 NLP 파이프라인으로 결합한 작업입니다."
    nlp-llm:
      weight: primary
      rank: 10
      signal: "NLP / LLM 관점에서 가장 먼저 확인할 핵심 프로젝트입니다."
      reviewerReason: "이질적인 구조화 EMR과 한국어 임상 텍스트를 평가 가능한 NLP 파이프라인으로 결합한 작업입니다."
  subtypes:
    - NLP Evaluation
    - Domain Application
    - Structured + Text Pipeline
portfolio:
  thesis: "간호 현장에서 바로 접근 가능한 핵심 EMR만으로도 진단 관련 분류를 실용적으로 지원할 수 있음을 검증한 의료 AI 연구입니다."
  value: "사후 문서 없이 간호감시 맥락에서 사용할 수 있는 자동 ICD 코딩 근거를 만들었습니다."
  problem: "간호감시에 필요한 진단 관련 신호가 검사 데이터, 환자정보, 간호기록 등 이질적인 EMR 소스에 분산되어 있었습니다."
  constraints:
    - "의사 판독문이나 퇴원기록 같은 사후 문서에 의존하지 않아야 했습니다."
    - "희소 클래스에서도 실무적으로 의미 있는 재현율을 확보해야 했습니다."
    - "구조화 데이터와 한국어 임상 텍스트를 함께 다뤄야 했습니다."
  decisions:
    - label: "이중 KM-BERT 표현"
      description: "간호 텍스트를 두 개의 KM-BERT 모델로 독립 학습하고 raw logits를 평균해 텍스트 표현의 안정성을 높였습니다."
      rationale: "임상 텍스트 신호의 변동성을 줄이고 앙상블 효과를 얻기 위해서입니다."
    - label: "PCA와 XGBoost 스태킹"
      description: "BERT 기반 표현을 PCA로 축소한 뒤 XGBoost를 메타 분류기로 사용했습니다."
      rationale: "고차원 임베딩과 구조화 EMR 피처를 함께 다루면서 과적합 위험을 낮추기 위해서입니다."
  architecture:
    summary: "구조화 EMR과 간호 텍스트를 병렬로 처리한 뒤 스태킹 분류기로 결합하는 의료 AI 파이프라인입니다."
    nodes:
      - id: "structured-emr"
        label: "Structured EMR"
        kind: "data"
        description: "검사, IO, BST, 활력징후, 환자정보 등 핵심 EMR 피처"
      - id: "nursing-text"
        label: "Nursing Text"
        kind: "data"
        description: "간호기록과 회복실 기록"
      - id: "dual-kmbert"
        label: "Dual KM-BERT"
        kind: "model"
        description: "한국어 임상 텍스트 표현 추출"
      - id: "stacking-classifier"
        label: "PCA + XGBoost"
        kind: "model"
        description: "차원 축소와 최종 ICD 예측"
      - id: "evaluation"
        label: "Rare-class Evaluation"
        kind: "evaluation"
        description: "전체 성능, 클래스 균형, 희소 클래스 재현율 평가"
    links:
      - from: "structured-emr"
        to: "stacking-classifier"
        label: "scaled features"
      - from: "nursing-text"
        to: "dual-kmbert"
        label: "tokenized notes"
      - from: "dual-kmbert"
        to: "stacking-classifier"
        label: "logit ensemble"
      - from: "stacking-classifier"
        to: "evaluation"
        label: "ICD predictions"
  process:
    - label: "데이터 통합"
      description: "8,587명 복부수술 환자의 이질적 EMR 소스를 환자 ID 기준으로 결합했습니다."
    - label: "표현 학습"
      description: "구조화 피처와 한국어 간호 텍스트를 각각 모델링 가능한 형태로 변환했습니다."
    - label: "스태킹 평가"
      description: "PCA, XGBoost, class imbalance 대응을 결합해 성능과 희소 클래스 재현율을 검증했습니다."
  outcome: "최종 모델은 단순 전체 점수보다 희소 클래스 재현율과 실무 사용 가능성을 함께 확인할 수 있는 결과를 보였습니다."
  metrics:
    - label: "Evaluation Scope"
      value: "Balanced"
      context: "전체 성능과 희소 클래스 재현율을 함께 검토"
    - label: "Available Data"
      value: "Core EMR"
      context: "사후 문서 없이 간호 실무 중 접근 가능한 데이터 중심"
    - label: "Rare-class Recall"
      value: "High"
      context: "희소 클래스에서도 실용적인 재현율 확보"
  artifacts:
    - label: "Published paper"
      href: "https://doi.org/10.9708/jksci.2025.30.05.021"
      kind: "paper"
  reflection: "의료 AI에서는 단순 최고 점수보다 어떤 문서와 피처를 언제 사용할 수 있는지가 실제 적용 가능성을 좌우한다는 점을 배웠습니다."
  relatedResearch:
    - "deep-learning-icd-coding"
resume:
  include: true
  priority: 10
featured: true
tags:
  - "의료 AI"
  - "간호감시"
  - "EMR"
  - "자동 ICD 코딩"
  - "KM-BERT"
  - "XGBoost"
  - "앙상블"
metrics:
  - "전체 성능과 희소 클래스 재현율 동시 검토"
  - "사후 문서 없이 핵심 EMR 기반 분류"
  - "희소 클래스 높은 재현율"
paperUrl: "https://doi.org/10.9708/jksci.2025.30.05.021"
---

## 배경

이 프로젝트는 복부수술 환자의 간호감시를 지원하기 위한 자동 ICD 코딩 문제를 다뤘다. 의사 판독문이나 퇴원기록처럼 나중에 작성되는 문서가 아니라, 간호 실무 중 바로 접근 가능한 핵심 EMR 데이터만으로 환자 상태를 분류할 수 있는지를 확인하는 것이 핵심 목표였다.

## 문제

간호사는 환자를 지속적으로 관찰하며 위험을 식별해야 하지만, 실제 현장에서는 검사결과, IO, BST, 활력징후, 환자정보, 간호기록, 회복실 기록이 서로 다른 형식으로 흩어져 있어 이를 실시간으로 종합해 판단하기 어렵다. 기존 자동 ICD 코딩 연구도 의사 중심 텍스트나 추가 자원에 의존하는 경우가 많아, 간호감시 지원에 바로 연결되기에는 한계가 있었다.

## 구현

복부수술 환자 8,587명의 EMR을 환자 ID 기준으로 통합하고, 수치형 데이터는 표준화 또는 Min-Max scaling으로 정리했으며 텍스트 데이터는 KM-BERT 입력으로 구성했다. 이후 두 개의 KM-BERT를 독립적으로 학습해 얻은 raw logits를 평균하여 앙상블 효과를 만들고, PCA로 차원을 축소한 뒤 XGBoost를 메타 분류기로 사용하는 스태킹 구조를 적용했다. 또한 stratified split과 WeightedRandomSampler를 사용해 클래스 불균형 문제도 함께 다뤘다.

## 결과

최종 제안 모델인 Double KM-BERT + XGBoost + PCA는 단일 모델 및 단순 앙상블보다 더 안정적인 분류 성능을 보였고, 희소 클래스에서도 의미 있는 재현율을 확보했다. 이를 통해 간호 현장에서 바로 활용 가능한 EMR 핵심 데이터만으로도 자동 진단명 분류를 실용적으로 검토할 수 있음을 확인했다.

