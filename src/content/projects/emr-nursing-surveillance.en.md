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
