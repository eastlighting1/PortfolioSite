---
title: "Deep Learning based Automatic ICD Coding for Nursing Surveillance of Abdominal Surgery Patients"
year: 2025
venue: "Journal of The Korea Society of Computer and Information"
type: "Journal Paper"
bibtex: |
  @article{kim2025deep,
    title={Deep Learning based Automatic ICD Coding for Nursing Surveillance of Abdominal Surgery Patients},
    author={Donghyeon Kim, Daeho Kim, Seyoung Kim, Okran Jeong},
    journal={Journal of The Korea Society of Computer and Information},
    volume={30},
    number={5},
    pages={21--30},
    year={2025},
    publisher={The Korean Society Of Computer And Information}
  }
abstract: "This study proposes an automatic ICD coding model for nursing surveillance of abdominal surgery patients by integrating EMR-based test data, patient information, and nursing notes. A stacking architecture combining dual KM-BERT, XGBoost, and PCA outperformed both a single KM-BERT model and simpler ensemble variants."
tags:
  - "Medical AI"
  - "Nursing Surveillance"
  - "EMR"
  - "Automatic ICD Coding"
  - "Deep Learning"
  - "KM-BERT"
  - "XGBoost"
  - "Ensemble"
  - "Abdominal Surgery"
linkedProjects:
  - "emr-nursing-surveillance"
---

## Summary

This study addresses automatic diagnosis-code classification for nursing surveillance in abdominal surgery patients. It focuses on predicting ICD codes using core EMR data that are directly available during nursing practice, rather than relying on physician narratives or discharge summaries created later in the care process.

## Why It Matters

Nursing surveillance is important for patient safety and clinical outcomes, but the volume and complexity of EMR data make timely diagnosis-related classification difficult. Since many previous ICD coding approaches depended on physician-centered documents or additional records, this work is meaningful because it demonstrates clinically useful performance using only the EMR signals that nurses can access within routine workflows.

## Contribution

The study integrated test results, IO, BST, vital signs, patient information, nursing notes, and PACU records, then built a stacking framework that averages the outputs of two KM-BERT models, applies PCA for dimensionality reduction, and uses XGBoost as a meta-classifier for final ICD prediction. The proposed Double KM-BERT + XGBoost + PCA model achieved the best results with 0.9245 accuracy, 0.9107 weighted precision, and 0.9157 weighted F1-score, while also showing strong recall on rare classes.
