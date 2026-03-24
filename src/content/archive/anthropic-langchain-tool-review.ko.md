---
title: "Anthropic x LangChain 메모"
publishedAt: "2024.04"
type: note
summary: "Anthropic의 LangChain 결합 지원 발표를 보며, LLM 애플리케이션 통합 계층이 왜 중요한지 다시 정리한 짧은 기록입니다."
context: "도구 리뷰"
tags:
  - Anthropic
  - LangChain
  - LLM
  - SDK
---
Anthropic AI 팀에서 Langchain과의 결합을 지원하는 툴을 발표했습니다.

Langchain은 LLM과 어플리케이션 간의 통합을 지원해주는 SDK입니다. 사실, AI 서비스를 추가할 때 고려해야 할 사항이 참 많습니다. 단순히 데이터로 무엇을 쓸 것이냐부터 시작해서 학습 속도는 어떻게 해야할지, 최적화를 위한 파라미터 값을 어떻게 할 것인지, 한번에 학습하는 크기는 얼마로 둘 것인지, 결과물은 어디에 저장해놓을지 등이 있고 만약 GenAI를 쓴다면 프롬프트로는 무얼 쓸 건지에 대해서도 고민해야 하죠.

일반적으로 이를 해결하기 위해 외부 도구를 쓰게 됩니다만, 이를 관리하는 것은 상당히 귀찮은 일입니다. AWS에서야 SageMaker의 기능이나 Lambda로 어떻게 해결해버린다지만, 필요한 서비스들을 다 지원하면서 가격도 좋은 리전 찾아 삼만리를 한다고 생각하거나 Cloud의 Managed Service를 사용하기 어려운 환경이라면 이마저도 녹록지 않습니다.

이럴 때 Chain과 같이 시스템을 묶어서 관리를 해주겠다는 것이 바로 Langchain입니다. OpenAI의 ChatGPT API Key, HuggingFace에 올라오는 모델들의 액세스 키, 그리고 이번에 추가된 Anthropic도 API Key만 있으면 접근이 가능합니다.

Langchain에서는 개인사용자 상대로 무료로 제공하고 있으며, 현재 Anthropic에 대해서도 documentation과 video를 제공하고 있으니 참고하시면 좋을 것 같습니다!

Docs : https://lnkd.in/gbGiwm72  
Video : youtu.be/cVEJaWgiudU
