---
title: "AWSKRUG Data Meetup"
publishedAt: "2024.03"
type: event
summary: "A first AWSKRUG small-group meetup note on data lakehouse concepts and MeiliSearch, both of which expanded how I think about data and search systems."
context: "AWSKRUG Data"
tags:
  - Data Lakehouse
  - MeiliSearch
  - Elasticsearch
  - Data Platform
  - AWS
---
Yesterday I attended an AWS Korea User Group data meetup. The sessions that day were about Data Lakehouse and MeiliSearch.

The first session, on Data Lakehouse, was genuinely eye-opening for me. I had only understood the rough characteristics of databases and data warehouses, so the idea of a “data lakehouse” felt surprisingly fresh. A data lakehouse combines the strengths of a data lake and a data warehouse while aiming to become an integrated platform for storing, managing, and analyzing data. It also supports more than the relational structures we are used to, extending toward hierarchical or network-like forms of organization. I was especially struck by the idea that modern data warehouses can become more flexible and scalable when combined with a data lake. Since I had previously struggled with how to think about data warehouses in a project, this felt especially attractive. The session also covered how open table formats such as Delta Lake, Iceberg, and Hudi can be applied on top of tools like Hadoop or Spark. Hearing that they can support ACID transactions, concurrency, and versioning made them feel even more compelling. I was also glad to hear that AWS services such as Athena and Glue can be used to explore open tables and lakehouse-style workflows.

The second session, on MeiliSearch, took place around dinner time, and the point that stayed with me most was its possible role as a partial alternative to Elasticsearch. I have taken training related to the ELK stack, but I have also felt that the preparatory work needed to use Elastic effectively for monitoring can be fairly demanding. MeiliSearch sounded attractive precisely because it offers SDKs and a comparatively simple way to connect. The speaker explained that this difference comes from the fact that Elasticsearch is built for large-scale backend search and text analysis, while MeiliSearch was designed more directly for front-facing search experiences. That distinction made a lot of sense. I left thinking that I should become more fluent with both systems. Features such as sub-50 millisecond responses, prefix search with updated results on each keystroke, typo tolerance, broad language support, and faceted search all sounded especially appealing.

Since this was my first AWSKRUG small-group meetup, I was a little nervous at first. But the care and energy in the speakers’ presentations made that feeling disappear by the end, and I found myself wanting to hear even more. I hope to keep attending these gatherings and gradually become a more active part of AWSKRUG.
