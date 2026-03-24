---
title: "A Context-Adaptive Gated Embedding Framework for Advanced Clinical Decision-Making"
year: 2026
venue: "Mathematics (submitted)"
type: "Journal Paper"
bibtex: |
  @article{kim2026cage,
    title={A Context-Adaptive Gated Embedding Framework for Advanced Clinical Decision-Making},
    author={Donghyeon Kim and Daeho Kim and Okran Jeong},
    journal={Mathematics},
    year={2026},
    note={{Submitted / under review}}
  }
abstract: "This study proposes a hierarchical clinical decision support framework that estimates diagnostic context via partial-label automated ICD coding and reinjects it into irregular ICU time-series forecasting through context-adaptive gating for mechanical ventilation transition prediction. By conditioning temporal interpretation on diagnostic context, the framework substantially improves rare-event detection."
tags:
  - "Clinical Decision Support System"
  - "Automated ICD Coding"
  - "ICU Time-series"
  - "Mechanical Ventilation Prediction"
  - "Partial-Label Learning"
  - "Extreme Multi-Class Classification"
  - "TCN"
  - "Gating"
  - "Rare Event Detection"
linkedProjects: []
---

## Summary

This study proposes an integrated ICU CDSS framework in which diagnostic information and time-series signals are not treated as separate tasks, but are linked hierarchically so that higher-level diagnostic context conditions lower-level temporal interpretation. A key idea is to redefine automated ICD coding not as a terminal prediction task, but as a representation-learning stage for downstream intervention prediction.

## Why It Matters

ICU EHR data are difficult to exploit directly because measurements are irregularly sampled, missingness is structural, and diagnostic information is often incomplete or weakly coded. Automated ICD coding is an extreme multi-class problem with a long-tailed label space, while mechanical ventilation prediction suffers from severe imbalance because clinically important transitions such as ONSET and WEAN are rare. Prior work has usually focused either on temporal patterns alone or on ICD coding accuracy itself, leaving the linkage between diagnostic context and intervention prediction underexplored.

## Contribution

The proposed CAGE framework first encodes irregular ICU time-series using a three-channel VAL/MSK/DELTA representation and estimates diagnostic context through a partial-label automated ICD coding module. The resulting probability-weighted diagnostic embedding is then reinjected into TCN-based temporal features via context-adaptive gating before four-class prediction of ONSET, WEAN, STAY ON, and STAY OFF transitions. The framework achieved hit@1 0.4863, hit@3 0.7302, hit@5 0.8063, and hit@10 0.8801 in automated ICD coding, and reached Macro-AUC 98.2, Macro-AUPRC 77.4, and F1-score 79.4 for intervention prediction, showing substantial gains in rare-event detection.
