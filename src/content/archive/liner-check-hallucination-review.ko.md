---
title: "Liner Check Hallucination 메모"
publishedAt: "2024.03"
type: note
summary: "ChatGPT 하단에서 보인 Liner의 hallucination 검증 기능을 써보며, 검색 기반 사실 확인과 문장 수준 판별 흐름을 추정해본 짧은 메모입니다."
context: "도구 리뷰"
tags:
  - LLM
  - Fact Checking
  - Hallucination
  - Liner
---
평소에 ChatGPT를 사용하다 보면 아래에 'Check Hallucination' 버튼이 뜨기에 '새로운 기능이 업데이트되었구나' 생각했는데요. 오늘 사용해보니 Liner에서 제공하는 기능이었습니다.

작동하는 모습을 보았을 때, response에 있는 내용에서 키워드를 뽑고, 해당 내용들을 검색하여 Sentence Similarity 내지는 NLI 작업을 수행하는 것으로 보였습니다. 생각보다 성능이 좋아 횟수 제한과 확인 가능 개수 제한을 가지고 있음에도 많이 사용할 기능이 될 것 같습니다!
