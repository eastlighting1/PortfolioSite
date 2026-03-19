---
title: "Clinical Risk Scoring Pipeline with Scheduled Validation"
year: 2023
role: "Data Engineer"
roles:
  - "Data Engineer"
  - "MLOps Engineer"
type: "Healthcare ML Delivery"
summary: "Moved a research-origin risk model into a scheduled validation and deployment pipeline with reproducible training artifacts."
portfolioProblem: "A clinically promising model existed mainly in notebooks and ad hoc scripts, which made validation, traceability, and internal review difficult."
portfolioApproach: "Rebuilt the workflow as a scheduled pipeline with parameterized training, data validation, evaluation artifacts, and tracked model outputs for every run."
portfolioOutcome: "Gave the research team a reliable handoff path into operations, shortened retraining cycles, and improved the audit readiness of model refreshes."
featured: false
tags:
  - "Healthcare"
  - "Airflow"
  - "Validation"
  - "MLflow"
metrics:
  - "Weekly validated runs"
  - "30% faster retraining cycle"
  - "Audit-ready artifacts"
repoUrl: "https://github.com/eastlighting/clinical-risk-pipeline"
slidesUrl: "https://example.com/slides/clinical-risk-pipeline"
---

## Context

The starting point was a promising clinical risk model that existed mostly in notebooks and local scripts. Teams needed a delivery path that preserved reproducibility and traceability without overcomplicating the deployment footprint.

## Problem

Clinical environments demand disciplined validation and documentation. Ad hoc workflows made it difficult to verify whether a model run used the expected cohort definitions, preprocessing logic, and calibration settings.

## Implementation

I built scheduled data validation, parameterized training, and artifact tracking into a weekly pipeline. Each run emitted cohort summaries, evaluation tables, and versioned models so reviewers could compare runs without relying on memory.

## Outcome

The resulting pipeline gave the research team a repeatable handoff path and reduced the friction of preparing evidence for internal review and compliance discussions.
