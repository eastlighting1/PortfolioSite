---
title: "Build with AI in Songdo"
publishedAt: "2024.04"
type: event
summary: "GDG Incheon & Songdo의 Build with AI in Songdo에서 Mamba, 한국어 LLM 평가, LLM 보안, RAG 핸즈온까지 폭넓게 접하며 LLM의 이론과 응용을 함께 돌아본 행사였습니다."
context: "GDG Incheon & Songdo"
tags:
  - LLM
  - Mamba
  - Evaluation
  - RAG
  - Security
---
어제, GDG Incheon & Songdo에서 개최한 Build With AI in Songdo에 다녀왔습니다! 오랜만에 연수구로 가는 길이기도 하고, 이번 행사가 이루어진 인천 스타트업 파크 INSTAR I 건물은 지하철과 연결되어 있어 편하게 갔다 온 행사였습니다.

이번 행사는 주로 LLM에 대한 주제를 다루었는데요. 단순히 LLM 기초에 대해 배우는 것을 넘어 LLM을 어떻게 응용할 수 있는지, 한계점을 어떻게 극복할 수 있을지, 또 평가는 어떻게 해야할지 등의 다양한 것들을 들을 수 있었습니다. 또한, Mamba 아키텍처에 대해 배우는 세션도 존재했습니다. 저는 분야 특성 상 LLM의 실무적 특성보다는 이론적인 부분에 관심이 많아서 Tech Session에서 진행되는 '트랜스포머는 대체될 수 있는가? (feat. Mamba)', 'HAERAE : LLM의 한국어 능력을 어떻게 평가할 수 있는가?', 'LLM Safety & Security'와 Hands-on Session에서 진행되는 'RAG로 더 똑똑한 Gemini 사용해보기' 등을 들었습니다.

Mamba 세션에서는 Transformer 모델의 한계와 그로 인해서 등장한 SSM 기반 모델들에 대한 내용을 들었습니다. Transformer는 훌륭한 성능을 가지고 있지만, 메모리 사용량이나 연산 비용, 그리고 Long Term Dependency 같은 문제점에서 한계점을 가지고 있다고 합니다. 이를 해결하기 위하여 Flash-Attention이나 State Space Model 등이 제안되었는데요. 이 발표에서는 SSM에 집중했습니다. 딥러닝에서 SSM를 사용하기 위해서는 이산화를 해야 한다고 하는데요. Euler 방식, Bilinear 방식, ZOH 방식 등 다양한 이산화 방법들을 들을 수 있었습니다. 그 외에도 SSM이 가지는 Kernel, Linear Time Invariant나 Griffin의 Linear Scan, Mamba가 가지는 특성과 아직 Mamba가 Transformer 모델에 비해 부족한 복사, 검색, 문맥 내 언어 학습 등에 대한 내용도 들었습니다.

LLM 평가 세션에서는 HAERAE 팀의 결성 계기와 함께 Evaluation을 위한 새로운 데이터셋 개발을 하게 된 타임라인을 소개해주셨습니다. MMLU와 같은 다양한 분야의 성능을 측정하는 벤치마크는 이미 존재하지만, 이러한 벤치마크를 단순히 한국어로 번역해서 사용하는 데에는 무리가 있습니다. 한국어를 기반으로 하는 환경에서 제대로 평가할 수 있는 벤치마크를 만들기 위해서 HAERAE 팀은 상식부터 전문지식에 이르기까지 다양한 데이터를 탐구하며 어떤 것이 가장 적합할지 고민했다고 합니다. 그리고 그 과정을 통해 KMMLU, HAERAE Benchmark 등 다양한 벤치마크를 만들어낼 수 있었다고 합니다.

그 외에도 Retrieval Augmented Generation(RAG)의 개념을 배우고 Gemini와 LangChain을 통해 실제로 구현해보는 Hands-on 시간이나, 기존 ML부터 이어지던 보안 이슈부터 시작하여 LLM에서 새롭게 생겨나는 보안 관련 사항들은 알아보았던 세션까지 다양한 지식을 쌓을 수 있었습니다. 재미있게 참여했던 행사라 다음에 참여할 만한 행사가 있다면 다시 오고 싶습니다!
