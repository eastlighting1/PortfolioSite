---
title: "EMR-Based Nursing Surveillance Decision Support System"
year: 2025
role: "Graduate Researcher"
roles:
  - "Graduate Researcher"
  - "AI Engineer"
  - "Data Scientist"
type: "Clinical AI Research"
summary: "Built an EMR-based AI workflow for nursing surveillance and diagnostic prediction."
portfolioProblem: "Key nursing surveillance signals were split across structured records and nursing notes."
portfolioApproach: "I combined clinical text analysis with KM-BERT ensembles and XGBoost to support both interpretation and prediction."
portfolioOutcome: "Delivered interpretable clinical analysis with over 92 percent diagnostic accuracy."
featured: true
tags:
  - "Clinical AI"
  - "EMR"
  - "KM-BERT"
  - "XGBoost"
  - "Interpretability"
metrics:
  - "92%+"
  - "Web"
  - "Interpretability"
paperUrl: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12124468"
---

## Context

This research project focused on building a clinical decision support workflow for abdominal surgery patients using EMR data. The work had to support not only prediction performance, but also interpretable analysis outputs that collaborating nursing researchers could understand and use.

## Problem

Signals relevant to nursing surveillance were distributed across nursing notes, examination data, and diagnosis-related records. The challenge was to design a workflow that could extract meaningful information from this heterogeneous data while remaining useful to domain experts outside the modeling team.

## Implementation

I led preprocessing and modeling work across both text and structured data. For clinical text understanding, I used Mecab-based keyword refinement and SpaCy-based dependency parsing, then extended the workflow into topic modeling and network-style similarity analysis. For diagnostic prediction, I combined KM-BERT ensembles and XGBoost to address an extreme multi-class classification setting centered on current disease code inference.

## Outcome

The resulting system supported interpretable analysis delivery for collaborator review and produced a high-performing diagnostic classification model with over 92 percent accuracy. More importantly, the project showed that clinical AI work could balance predictive performance with outputs that were easier to explain and discuss with domain partners.
