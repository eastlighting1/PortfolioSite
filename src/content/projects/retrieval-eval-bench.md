---
title: "Retrieval Evaluation Bench for Technical Support Search"
year: 2024
role: "AI Researcher"
roles:
  - "AI Researcher"
  - "Data Specialist"
type: "Applied Research System"
summary: "Built an evaluation bench for support search retrieval quality with slice-based diagnostics, benchmark sets, and deployment notes."
portfolioProblem: "Search quality decisions were being made from anecdotal complaints and aggregate metrics, leaving the team without a reliable way to understand where retrieval actually failed."
portfolioApproach: "Built a benchmark set with failure slices, compared sparse, dense, and hybrid retrievers, and packaged the findings in a review surface that product and QA teams could use."
portfolioOutcome: "Created a repeatable retrieval evaluation workflow, improved ranking quality on the most valuable support slices, and gave non-research stakeholders a concrete artifact for search reviews."
featured: true
tags:
  - "Retrieval"
  - "Evaluation"
  - "Benchmarking"
  - "Search"
metrics:
  - "27% nDCG improvement"
  - "6 benchmark slices"
  - "1 review surface for PM and QA"
repoUrl: "https://github.com/eastlighting/retrieval-eval-bench"
paperUrl: "https://example.com/papers/retrieval-eval-bench"
---

## Executive Summary

This project created a stable evaluation surface for a support search stack that had been optimized mainly through anecdotal feedback. The deliverable combined benchmark construction, retrieval experiments, and reporting that non-research stakeholders could use.

## Problem

Search quality work was blocked by inconsistent labels and vague success criteria. Teams could feel when results were poor, but could not agree on where the system was improving or regressing.

## System

I created a benchmark set with issue-type slices, freshness-sensitive queries, and policy-heavy edge cases. The evaluation harness compared sparse, dense, and hybrid retrieval variants while preserving interpretable failure analysis.

## Results

The final hybrid retriever increased ranking quality across the most commercially important slices, especially documentation troubleshooting queries. The bench also gave product managers a concrete review artifact during model refreshes.

## Technical Notes

The most valuable decision was investing in label quality and review ergonomics before tuning retrieval models. Better evaluation discipline made future iteration much faster than changing embeddings alone.
