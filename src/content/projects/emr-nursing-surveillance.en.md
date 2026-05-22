---
title: "EMR-Based Nursing Surveillance for Automatic ICD Coding"
year: 2025
role: "Graduate Researcher"
roles:
  - "Graduate Researcher"
  - "AI Engineer"
  - "Data Scientist"
type: "Clinical AI Research"
summary: "Built an automatic ICD coding pipeline for nursing surveillance of abdominal surgery patients using core EMR data."
portfolioProblem: "Nursing surveillance required diagnosis-related classification, but key clinical signals were fragmented across heterogeneous EMR sources."
portfolioApproach: "I integrated structured EMR features and nursing text, then used a dual KM-BERT, PCA, and XGBoost stacking architecture for ICD prediction."
portfolioOutcome: "The final model achieved 0.9245 accuracy and strong rare-class recall without depending on physician-centered post-hoc documents."
evidence:
  primaryTheme: nlp-llm
  secondaryThemes:
    - data-graph
  dataSurfaces:
    - structured
    - text
    - hybrid
  workflowStages:
    - data
    - training
    - evaluation
  evidenceLevel: Published
  disclosureLevel: Public Summary Only
  businessSignal: "Combines heterogeneous structured EMR and Korean clinical text into an evaluable NLP pipeline."
  subtypes:
    - NLP Evaluation
    - Domain Application
    - Structured + Text Pipeline
portfolio:
  thesis: "A clinical AI study showing that core EMR data available during nursing work can support practical diagnosis-related classification."
  value: "Built evidence for automatic ICD coding without depending on physician-centered post-hoc documents."
  problem: "Nursing surveillance required diagnosis-related classification, but key clinical signals were fragmented across heterogeneous EMR sources."
  constraints:
    - "The model could not depend on discharge summaries or other post-event documents."
    - "Rare classes still needed practically meaningful recall."
    - "The pipeline had to combine structured EMR features with Korean clinical text."
  decisions:
    - label: "Dual KM-BERT representation"
      description: "Trained two KM-BERT models independently and averaged raw logits to stabilize text representation."
      rationale: "The ensemble reduced volatility in clinical text signals."
    - label: "PCA and XGBoost stacking"
      description: "Reduced BERT-derived representations with PCA and used XGBoost as the final ICD classifier."
      rationale: "This made high-dimensional text signals and structured EMR features easier to combine."
  architecture:
    summary: "A clinical AI pipeline that processes structured EMR and nursing text in parallel before stacking them for ICD prediction."
    nodes:
      - id: "structured-emr"
        label: "Structured EMR"
        kind: "data"
        description: "Laboratory results, IO, BST, vital signs, and patient information"
      - id: "nursing-text"
        label: "Nursing Text"
        kind: "data"
        description: "Nursing notes and PACU records"
      - id: "dual-kmbert"
        label: "Dual KM-BERT"
        kind: "model"
        description: "Korean clinical text representation"
      - id: "stacking-classifier"
        label: "PCA + XGBoost"
        kind: "model"
        description: "Dimensionality reduction and final ICD prediction"
      - id: "evaluation"
        label: "Rare-class Evaluation"
        kind: "evaluation"
        description: "Accuracy, weighted F1, and rare-class recall"
    links:
      - from: "structured-emr"
        to: "stacking-classifier"
        label: "scaled features"
      - from: "nursing-text"
        to: "dual-kmbert"
        label: "tokenized notes"
      - from: "dual-kmbert"
        to: "stacking-classifier"
        label: "logit ensemble"
      - from: "stacking-classifier"
        to: "evaluation"
        label: "ICD predictions"
  process:
    - label: "Data integration"
      description: "Joined heterogeneous EMR sources for 8,587 abdominal surgery patients by patient ID."
    - label: "Representation learning"
      description: "Converted structured signals and Korean nursing text into model-ready representations."
    - label: "Stacked evaluation"
      description: "Combined PCA, XGBoost, and imbalance handling to validate overall and rare-class performance."
  outcome: "The final model achieved 0.9245 accuracy and 0.9157 weighted F1-score while retaining strong rare-class recall."
  metrics:
    - label: "Accuracy"
      value: "0.9245"
      context: "Final Double KM-BERT + XGBoost + PCA model"
    - label: "Weighted F1-score"
      value: "0.9157"
      context: "Weighted F1 across classes"
    - label: "Rare-class Recall"
      value: "High"
      context: "Practical recall on sparse classes"
  artifacts:
    - label: "Published paper"
      href: "https://doi.org/10.9708/jksci.2025.30.05.021"
      kind: "paper"
  reflection: "The work clarified that clinical AI value depends not only on performance, but on which documents and signals are realistically available at the time of use."
  relatedResearch:
    - "deep-learning-icd-coding"
resume:
  include: true
  priority: 10
featured: true
tags:
  - "Medical AI"
  - "Nursing Surveillance"
  - "EMR"
  - "Automatic ICD Coding"
  - "KM-BERT"
  - "XGBoost"
  - "Ensemble"
metrics:
  - "0.9245 Accuracy"
  - "0.9157 Weighted F1"
  - "Strong Rare-class Recall"
paperUrl: "https://doi.org/10.9708/jksci.2025.30.05.021"
---

## Context

This project focused on supporting nursing surveillance for abdominal surgery patients through automatic ICD code prediction. Instead of relying on physician narratives or discharge summaries that become available later, the work centered on core EMR data that nurses can access during routine care.

## Problem

Nurses continuously monitor patients and identify risks, but the signals needed for diagnosis-related classification are scattered across laboratory results, IO, BST, vital signs, patient information, nursing notes, and PACU records. Existing automatic ICD coding approaches often depend on physician-centered documents or extra resources, which makes them less suitable for direct nursing surveillance support.

## Implementation

I worked on integrating heterogeneous EMR sources for 8,587 abdominal surgery patients and structuring them into a usable modeling pipeline. The approach combined two independently trained KM-BERT models, averaged their raw logits for an ensemble effect, reduced the representation with PCA, and used XGBoost as a stacking meta-classifier for the final ICD prediction task. The workflow also addressed class imbalance through stratified splitting and weighted sampling.

## Outcome

The final Double KM-BERT + XGBoost + PCA model achieved the best overall performance with 0.9245 accuracy, 0.9107 weighted precision, and 0.9157 weighted F1-score. It also showed strong recall on rare classes, suggesting that meaningful nursing-surveillance-oriented diagnosis classification is possible using only core EMR data available in practice.
