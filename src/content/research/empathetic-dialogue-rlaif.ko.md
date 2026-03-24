---
title: "AI 피드백 기반 강화학습을 이용한 공감 대화 생성 모델"
year: 2025
venue: "한국컴퓨터종합학술대회"
type: "학회 논문"
bibtex: |
  @inproceedings{joo2025empathetic,
    title={Empathetic Dialogue Generation Model Using Reinforcement Learning with AI-Based Feedback},
    author={Yongwan Joo, Donghyun Lim, Donghyeon Kim, Seungyeon Sun, Okran Jeong},
    booktitle={Proceedings of the Korea Computer Congress 2025},
    pages={2410--2412},
    year={2025}
  }
abstract: "기존 공감 대화 생성 모델의 낮은 다양성과 인간 피드백 의존 문제를 해결하기 위해, AI 기반 피드백(RLAIF)을 활용한 강화학습 공감 대화 생성 모델을 제안한 연구이다. LLM을 평가자로 활용하여 보상을 구성하고, EmpRL 구조에 통합함으로써 더 다양한 공감 응답 생성을 달성했다."
tags:
  - "공감 대화"
  - "강화학습"
  - "RLAIF"
  - "RLHF 대체"
  - "LLM"
  - "대화 생성"
  - "자연어처리"
  - "AI 피드백"
---

## 요약

공감 대화 생성 연구는 감정 인식 기반 대화 시스템의 핵심 과제로, 기존에는 MLE 기반 생성 또는 RLHF 기반 정렬 방식이 주로 사용되었다. 그러나 RLHF는 비용이 높고 확장성이 낮으며, EmpRL 또한 인간 피드백 기반 공감 분류기에 의존한다는 한계를 가진다. 본 연구는 이러한 흐름에서 AI 피드백 기반 강화학습으로의 전환 가능성을 탐색한다.

## 왜 중요한가

기존 공감 대화 모델은 문법적 유창성과 문맥 적합성은 확보했지만, 실제 사용자 기대 수준에 부합하는 공감 표현의 깊이와 다양성은 부족했다. EmpRL은 공감 수준 정렬을 도입했지만, 여전히 인간이 사전 정의한 공감 분류 및 피드백에 의존하기 때문에 비용 문제와 표현 다양성 제한이 발생한다. 특히 공감 수준 평가가 고정된 분류 체계에 묶이면서 다양한 응답 생성이 어렵다는 문제가 존재한다.

## 기여

본 연구는 EmpRL 구조에 RLAIF를 결합한 파이프라인을 설계했다. EmpatheticDialogues로 SFT한 T5가 초기 응답을 생성하고, Llama 3.2-1B 기반 LLM 평가자가 공감 수준에 따른 보상을 산출하며, PPO 기반 강화학습이 이를 바탕으로 정책을 업데이트한다. 실험 결과 제안 모델은 Distinct-1 5.8%, Distinct-2 30.2%를 기록해 기존 EmpRL 대비 응답 다양성을 높였고, 인간 피드백 없이도 공감 수준을 반영한 대화 생성이 가능함을 보여주었다.
