---
title: "Notes from the MODUPOP talk on evaluating Korean language models"
publishedAt: "2024.04"
type: event
summary: "An event note on Korean LLM evaluation, benchmark design, CoT, regional variance, and the practical question of how to motivate open-source team members."
context: "Event"
tags:
  - Evaluation
  - Korean LLM
  - HAERAE
  - Meetup
---
Yesterday I attended a MODUPOP event hosted by MODULabs on the topic of "evaluating Korean language models well." It had been about two years since I last heard speaker Gyujin Son present, and it was meaningful to listen again with a slightly different perspective shaped by my more recent interests in evaluation and systems.

Even though I had already heard a related version of the topic at another event, this session gave me a deeper understanding of the HAERAE team's benchmark work. The talk introduced several benchmark efforts, including HAERAE Benchmark, HAERAE Benchmark 2, CSATQA, and the context that eventually led to KMMLU. One interesting point was the confidence the team gained from seeing that existing global benchmarks also rely on scalable educational test material.

The talk also shared insights from developing KMMLU. Among the evaluation settings discussed was Chain of Thought, which the speaker framed in a practical way: whether a model can genuinely understand and generate in Korean. What stood out to me was that among the models evaluated, HyperCLOVA X was the only Korean model that clearly benefited from CoT over direct prompting on Korean benchmark data.

That discussion extended into regional variance and the research direction around QARV, a QA benchmark where answers can differ depending on region. A particularly memorable point was that, without a CoT process, prompting alone often struggles to resolve region-specific response tendencies. That observation made evaluation feel less like a leaderboard exercise and more like a question of linguistic and social grounding.

The Q&A and networking sessions were also rewarding. One answer I keep thinking about was the speaker's response to a question about motivating team members as a team lead. His answer was simple but sharp: help turn the work into meaningful career capital. That resonated with me because I have often struggled with the same question while leading study groups or projects without strong financial incentives.

This was my third visit to the MODULabs Gangnam campus, and each visit has left me with a rare mix of knowledge and lived perspective. It also made me think again that I would like to become a speaker at events like this one someday.
