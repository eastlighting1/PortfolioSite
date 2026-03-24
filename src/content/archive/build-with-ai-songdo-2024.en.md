---
title: "Build with AI in Songdo"
publishedAt: "2024.04"
type: event
summary: "An event note on Build with AI in Songdo, where I explored Mamba, Korean LLM evaluation, LLM security, and a hands-on RAG session in one place."
context: "GDG Incheon & Songdo"
tags:
  - LLM
  - Mamba
  - Evaluation
  - RAG
  - Security
---
Yesterday I attended Build With AI in Songdo hosted by GDG Incheon & Songdo. It was nice to head back to Yeonsu-gu for an event, and the venue at Incheon Startup Park INSTAR I was directly connected to the subway, which made the trip especially convenient.

The event focused mainly on LLMs, but it went beyond a basic introduction. The sessions covered how LLMs can be applied, how their limitations might be addressed, and how they should be evaluated. There was also a session on the Mamba architecture. Because I tend to be more interested in the theoretical side of LLMs than in purely practical usage, I mainly joined tech sessions such as “Can Transformers Be Replaced? (feat. Mamba),” “HAERAE: How Can We Evaluate Korean Ability in LLMs?,” “LLM Safety & Security,” and the hands-on session “Using Gemini More Intelligently with RAG.”

The Mamba session covered the limitations of Transformer models and the SSM-based alternatives that emerged in response. While Transformers achieve excellent performance, they still face issues around memory usage, compute cost, and long-term dependency. To address these limitations, techniques such as Flash-Attention and State Space Models have been proposed, and this talk focused specifically on SSMs. I learned that applying SSMs in deep learning requires discretization, and the speaker introduced several methods such as Euler, bilinear, and ZOH. The session also touched on topics like kernels in SSMs, linear time invariance, Griffin’s linear scan, and areas where Mamba still seems weaker than Transformers, such as copying, retrieval, and in-context language learning.

The LLM evaluation session introduced the motivation behind the HAERAE team and the timeline that led them to develop new evaluation datasets. Benchmarks such as MMLU already exist for measuring performance across many domains, but it is difficult to simply translate those benchmarks into Korean and assume they remain valid. To create a benchmark that works properly in a Korean-centered environment, the HAERAE team explored many kinds of data, from commonsense knowledge to specialized expertise, and carefully considered what would be most suitable. Through that process, they developed benchmarks such as KMMLU and the HAERAE Benchmark.

Beyond that, I also learned about Retrieval Augmented Generation through a hands-on session using Gemini and LangChain, and I joined a session on LLM safety and security that covered both traditional ML security issues and the new security concerns that emerge in LLM settings. It was a genuinely enjoyable event, and I would gladly join again if a similar one is held in the future.
