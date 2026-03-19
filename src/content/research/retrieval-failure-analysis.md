---
title: "Failure Slice Analysis for Support Retrieval Systems"
year: 2024
venue: "Applied ML Workshop"
type: "Workshop Paper"
abstract: "Explores how slice-based benchmark construction can reveal failure patterns in technical support retrieval systems that aggregate metrics hide."
tags:
  - "Retrieval"
  - "Failure Analysis"
  - "Benchmarking"
pdfUrl: "https://example.com/research/failure-slice-analysis.pdf"
repoUrl: "https://github.com/eastlighting/retrieval-failure-analysis"
linkedProjects:
  - "retrieval-eval-bench"
---

## Overview

This paper examines retrieval failures through structured benchmark slices such as policy lookups, ambiguous troubleshooting, and freshness-sensitive product changes.

## Contributions

The work demonstrates that a hybrid retrieval stack may look acceptable in aggregate while repeatedly underperforming on high-friction support categories. Slice design creates a clearer path for iterative quality gains.

## Methods

We constructed evaluation cohorts, paired them with human relevance judgments, and tracked performance changes across retriever variants. The emphasis was on diagnostic value rather than leaderboard optimization.

## Results

Slice-based analysis surfaced where embedding-heavy approaches needed lexical support and where dataset freshness constrained deployment choices.
