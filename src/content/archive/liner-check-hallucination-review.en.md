---
title: "Liner Check Hallucination"
publishedAt: "2024.03"
type: note
summary: "A short note on trying Liner’s hallucination-checking feature and guessing that it combines retrieval with sentence-level verification."
context: "Tool note"
tags:
  - LLM
  - Fact Checking
  - Hallucination
  - Liner
---
When using ChatGPT, I had noticed a “Check Hallucination” button appear below the response and assumed it was simply a newly added feature. When I finally tried it, I realized that it was actually provided by Liner.

From the way it behaved, it seemed to extract keywords from the response, search for relevant material, and then perform something like sentence similarity or NLI-based verification. The performance felt better than I expected, to the point that I could imagine using it often even with limits on both usage count and the number of verifiable items.
