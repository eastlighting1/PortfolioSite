---
title: "AWSKRUG Platform Engineering Meetup"
publishedAt: "2024.04"
type: event
summary: "A meetup note on preview deployment, temporary environments, and cloud resource platforms that highlighted practical ideas in platform engineering."
context: "AWSKRUG Platform Engineering"
tags:
  - Platform Engineering
  - Preview Deployment
  - AWS
  - CI/CD
  - Cloud
---
Yesterday I joined a meetup hosted by AWSKRUG Platform Engineering. The theme was how to reduce the operational burden on developers and SRE engineers in deployment environments.

The key theme of the first session was preview deployment. It began with the limitations of beta deployment, and for me it was interesting because I had mostly thought about deployment only in terms of environments. The speaker explained alpha, beta, and real environments as stages in the software deployment lifecycle. Alpha is the first deployment using synthetic or provisional data, beta comes after alpha and includes validation of data consistency, and real is the actual launch after beta. In practice, these felt similar to what we often call QA, staging, and production. Still, the talk made it clear that maintaining beta environments properly in real work is difficult. Questions pile up quickly: how many environments are needed, how long they should exist, how the infrastructure should be provisioned, how management tags should be attached, and how CI/CD pipelines should be created and connected to them.

To address this, the talk described a platform that could create and clean up environments on demand for cases such as QA testing or newly opened merge requests. The point was that these environments could be generated when needed and removed immediately after use. Another interesting idea was that these temporary resources could be used at the project level with lightweight pipeline settings, without provisioning a whole new dedicated infrastructure stack each time. In the example, temporary environments were built per branch using tools such as AWS S3, CloudFront, Lambda@Edge, and GitLab CI. Along the way, concepts such as Subject Alternative Name and Module Federation were also mentioned, which gave me new ideas to explore.

The second session was about a cloud resource platform that allows development teams to manage cloud permissions safely. Since the talk was going to appear later at AWS Summit 2024, it was difficult to describe in public detail, but it still gave me a lot of useful perspective on cloud computing and internal platform design.

This meetup was valuable not only because of the speakers, but also because I learned a lot from the people asking questions. It felt like one of those moments that makes you think, “So this is the level I need to reach.” It left such a good impression that I felt even more strongly that I should keep attending these meetups consistently.
