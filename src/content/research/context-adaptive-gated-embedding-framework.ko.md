---
title: "고도화된 임상 의사결정을 위한 문맥 적응형 게이트 임베딩 프레임워크"
year: 2026
venue: "Mathematics (투고 중)"
type: "저널 논문"
bibtex: |
  @article{kim2026cage,
    title={A Context-Adaptive Gated Embedding Framework for Advanced Clinical Decision-Making},
    author={Donghyeon Kim and Daeho Kim and Okran Jeong},
    journal={Mathematics},
    year={2026},
    note={{Submitted / under review}}
  }
abstract: "ICU 임상 의사결정 지원을 위해, 부분 라벨 기반 자동 ICD 코딩으로 추정한 진단 문맥을 불규칙 시계열과 결합하고, 문맥 적응형 게이팅을 통해 기계환기 전이 사건을 예측하는 계층형 프레임워크를 제안한 연구이다. 진단 문맥을 하위 시계열 해석에 재주입함으로써 희귀 전이 이벤트 탐지 성능을 크게 높였다."
tags:
  - "임상 의사결정지원시스템"
  - "자동 ICD 코딩"
  - "ICU 시계열"
  - "기계환기 예측"
  - "부분 라벨 학습"
  - "극단 다중분류"
  - "TCN"
  - "게이팅"
  - "희귀 이벤트 탐지"
linkedProjects: []
---

## 요약

본 연구는 ICU 환경에서 진단 정보와 시계열 생체신호를 분리된 예측 문제로 다루지 않고, 상위 수준의 진단 문맥이 하위 수준의 시계열 해석을 조건부로 조절하도록 설계한 통합형 CDSS 프레임워크를 제안한다. 특히 자동 ICD 코딩을 최종 출력이 아니라 다운스트림 중재 예측을 위한 문맥 표현 학습 단계로 재정의한 점이 핵심이다.

## 왜 중요한가

ICU 전자건강기록은 변수별 측정 주기가 다르고 결측이 구조적으로 발생하며, 진단 기록 또한 자유서술과 약어, 불완전한 ICD 코딩 등으로 인해 직접 활용이 어렵다. 자동 ICD 코딩은 수천 개 이상의 장꼬리 분포 클래스를 갖는 극단 다중분류 문제이고, 기계환기 예측 역시 ONSET나 WEAN 같은 임상적으로 중요한 전이 이벤트가 드물어 심한 클래스 불균형을 보인다. 기존 접근은 대체로 시계열 패턴만 보거나 ICD 코딩 정확도 자체에 집중했기 때문에, 진단 문맥과 중재 예측을 유기적으로 연결하는 구조가 부족했다.

## 기여

제안한 CAGE 프레임워크는 ICU stay 단위 샘플을 기반으로 VAL/MSK/DELTA 3채널 시계열 표현을 구성하고, 부분 라벨 학습 기반 자동 ICD 코딩 모듈로부터 진단 확률분포와 문맥 임베딩을 추정한다. 이후 이 문맥을 TCN 기반 시계열 표현에 문맥 적응형 게이트로 재주입해 ONSET, WEAN, STAY ON, STAY OFF의 4분류 전이를 예측한다. 실험 결과 자동 ICD 코딩에서 hit@1 0.4863, hit@3 0.7302, hit@5 0.8063, hit@10 0.8801을 기록했고, 중재 예측에서는 Macro-AUC 98.2, Macro-AUPRC 77.4, F1-score 79.4를 달성해 희귀 전이 이벤트 탐지 성능을 크게 높였다.
