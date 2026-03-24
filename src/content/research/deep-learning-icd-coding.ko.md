---
title: "복부수술 환자의 간호감시를 위한 딥러닝 기반 진단명 분류 모델"
year: 2025
venue: "한국컴퓨터정보학회논문지"
type: "저널 논문"
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
abstract: "복부수술 환자의 EMR에서 검사 데이터, 환자정보, 간호기록을 통합하여 간호감시를 지원하기 위한 자동 ICD 코딩 모델을 제안한 연구이다. KM-BERT 이중 앙상블과 XGBoost, PCA를 결합한 스태킹 구조를 통해 기존 단일 모델 및 단순 앙상블보다 더 높은 진단명 분류 성능을 보였다."
tags:
  - "의료 AI"
  - "간호감시"
  - "EMR"
  - "자동 ICD 코딩"
  - "딥러닝"
  - "KM-BERT"
  - "XGBoost"
  - "앙상블"
  - "복부수술"
linkedProjects:
  - "emr-nursing-surveillance"
---

## 요약

본 연구는 복부수술 환자에 대한 간호감시 과정에서 간호사가 환자 상태를 더 빠르고 체계적으로 파악할 수 있도록 지원하는 자동 진단명 분류 문제를 다룬다. 의사 판독문이나 퇴원기록처럼 사후에 생성되는 문서가 아니라, 간호 현장에서 즉시 활용 가능한 EMR 핵심 데이터만으로 ICD 코드를 예측하는 데 초점을 맞췄다.

## 왜 중요한가

간호감시는 환자 안전과 임상 결과 개선에 중요하지만, 실제 의료환경에서는 검사 결과, 활력징후, 간호기록, 회복실 기록이 서로 다른 형식으로 흩어져 있어 이를 실시간으로 종합하기 어렵다. 기존 자동 ICD 코딩 연구가 의사 중심 문서나 추가 자원에 의존하는 경우가 많았던 만큼, 본 연구는 간호 실무에 직접 연결될 수 있는 데이터 범위 안에서 의미 있는 분류 성능을 보여준다는 점에서 실용적 가치가 크다.

## 기여

연구진은 복부수술 환자 8,587명의 EMR을 통합 전처리하고, 두 개의 KM-BERT 출력값을 평균한 뒤 PCA와 XGBoost 메타 분류기를 결합한 스태킹 구조를 설계했다. 그 결과 제안 모델인 Double KM-BERT + XGBoost + PCA는 정확도 0.9245, 가중 정밀도 0.9107, 가중 F1-score 0.9157을 기록해 단일 KM-BERT 및 단순 앙상블 변형보다 가장 높은 성능을 보였고, 희소 클래스에서도 높은 재현율을 나타냈다.
