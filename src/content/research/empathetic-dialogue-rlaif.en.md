---
title: "Empathetic Dialogue Generation Model Using Reinforcement Learning with AI-Based Feedback"
year: 2025
venue: "Korea Computer Congress (KCC)"
type: "Conference Paper"
bibtex: |
  @inproceedings{joo2025empathetic,
    title={Empathetic Dialogue Generation Model Using Reinforcement Learning with AI-Based Feedback},
    author={Yongwan Joo, Donghyun Lim, Donghyeon Kim, Seungyeon Sun, Okran Jeong},
    booktitle={Proceedings of the Korea Computer Congress 2025},
    pages={2410--2412},
    year={2025}
  }
abstract: "This study proposes an empathetic dialogue generation model using reinforcement learning with AI-based feedback (RLAIF) to address limited diversity and reliance on human feedback. By leveraging an LLM as a reward evaluator and integrating it into EmpRL, the model generates more diverse empathetic responses."
tags:
  - "Empathetic Dialogue"
  - "Reinforcement Learning"
  - "RLAIF"
  - "RLHF Alternative"
  - "LLM"
  - "Dialogue Generation"
  - "NLP"
  - "AI Feedback"
---

## Summary

Empathetic dialogue generation is a key task in emotion-aware conversational AI. Traditional approaches rely on MLE or RLHF, both of which have limitations in scalability and cost. EmpRL improves empathy alignment but still depends on human feedback. This study explores a transition toward AI-based feedback using RLAIF.

## Why It Matters

While existing models achieve fluency and contextual relevance, they fail to match user-expected empathy levels and lack expressive diversity. EmpRL introduces empathy alignment but still relies on predefined human feedback and classification schemes, leading to scalability issues and constrained response diversity.

## Contribution

The proposed pipeline integrates RLAIF into the EmpRL framework. A T5 model fine-tuned on EmpatheticDialogues generates initial responses, and a Llama 3.2-1B model serves as an evaluator that assigns empathy-based reward scores. These rewards are used to optimize the policy via PPO, with penalty terms helping preserve fluency and relevance. The resulting model improved response diversity with Distinct-1 of 5.8% and Distinct-2 of 30.2%, demonstrating that AI-based feedback can replace human feedback while enabling more diverse empathy-aware dialogue generation.
