---
title: "작은 PR 메모"
publishedAt: "2024.02"
type: note
summary: "작은 PR이 왜 중요한지 찾아보며 Trunk Based Development, stacked PR, Virtual Branch 같은 개념들을 정리한 메모입니다."
context: "개발 방법론 메모"
tags:
  - PR Review
  - Trunk Based Development
  - Stacked PR
  - Git
---
가장 이상적인 PR의 크기가 50줄이라는 사실 알고 계신가요? 커밋을 할 때, 문제가 생겼을 때 되돌리기 쉽도록 최소한의 단위(hunk)로 하는 것을 권장하는 것처럼 PR에 대해서도 리뷰어가 거대한 양을 보고 당황하지 않도록 코드 리뷰를 하기 적당하게 잘라 쓸 것을 권장하고 있는데요. 그런데, 사실 '구현하다 말고 50줄 체크해서 PR 날리기'는 상당히 잊기 쉬운 작업이죠. 그래서 며칠 동안 찾아보니 이를 보조해줄 수 있는 개념들이 많이 나오는 것 같습니다.

기본적으로는 Trunk Based Development가 있다고 합니다. 사실 이건 직접적으로 PR을 다루는 방법론은 아닌데요. Git Flow나 Github Flow에서의 개발이 feature -> dev -> release -> main으로 이어지는 파이프라인으로 인해 뒤로 갈수록 PR이 커지는 반면에, TBD에서는 trunk/main에 바로 PR을 날리기 때문에 하나하나의 길이는 줄어들게 됩니다.

또한, graphite.dev에서는 stacked PR(stacked diff로도 많이 부르죠)라는 개념을 도입해서 변경사항 단위로 integration을 관리하는 기법을 제안했습니다. 일단 다른 사람의 PR이 merge될 때까지 기다리지 않아도 된다는 장점이나 구글에서도 Phabricator이라는 사내 서비스를 통해 사용하는 검증된 기법이라는 이유로 생각보다 많이 사용하시는 것 같습니다.

마지막은 GitButler의 Virtual Branch입니다. Virtual Branch는 사용자가 로컬의 변경사항들을 여러개의 가상 브랜치로 분류한 다음, 원하는 것만 올릴 수 있도록 돕는 방식입니다. 일단 개발은 마음껏 해놓고 나중에 나눠주면 되니 상당히 간편한 방식인 것 같습니다.

참고: https://graphite.com/blog/the-ideal-pr-is-50-lines-long
