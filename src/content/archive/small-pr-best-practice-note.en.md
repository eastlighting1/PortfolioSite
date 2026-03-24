---
title: "A Note on Small PRs"
publishedAt: "2024.02"
type: note
summary: "A short note on why smaller pull requests matter, and on ideas like trunk-based development, stacked PRs, and virtual branches."
context: "Engineering practice note"
tags:
  - PR Review
  - Trunk Based Development
  - Stacked PR
  - Git
---
Did you know that some people argue the ideal pull request is around 50 lines long? In the same way that commits are often recommended to stay small enough to revert safely when something goes wrong, pull requests are also easier to review when they stay within a manageable scope. Of course, in real implementation work it is easy to forget to stop and break a large change into smaller PRs. While thinking about that over the course of a few days, I found several concepts that seem designed to help.

One of the most commonly mentioned ideas is trunk-based development. Strictly speaking, it is not a PR methodology in itself, but it affects PR size indirectly. In Git Flow or GitHub Flow, changes can move through longer pipelines such as feature -> dev -> release -> main, which often causes pull requests to grow larger over time. In trunk-based development, because changes are merged more directly into trunk or main, the unit of change often stays smaller.

I also came across the idea of stacked PRs, or stacked diffs, as proposed by tools like graphite.dev. The idea is to manage integration at the level of change units rather than waiting for one large PR at a time. One appealing aspect is that you do not always have to wait for someone else’s PR to merge before continuing your own work. It also seems to be fairly well established in organizations that use systems like Phabricator internally.

The last concept that stood out to me was GitButler’s Virtual Branches. In this approach, you can group local changes into multiple virtual branches and choose which ones to publish. That seemed especially convenient because it lets you work more freely first and then divide your changes afterward into cleaner reviewable units.

Reference: https://graphite.com/blog/the-ideal-pr-is-50-lines-long
