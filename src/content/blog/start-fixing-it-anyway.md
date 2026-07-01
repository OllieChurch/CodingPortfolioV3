---
title: "Don't understand the system? Start fixing it anyway."
date: 2026-04-01
description: "Nearly 1,000 faults. No monitoring. No useful documentation. Understanding the system wasn't the first step. It was a byproduct of fixing it."
tags: ["monitroring", "microservices", "architecture", "devops"]
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gf8fgcc77dnjydsbl4dr.png"
published: true
devtoUrl: "https://dev.to/olliechurch/dont-understand-the-system-start-fixing-it-anyway-3ka2"
---

My first professional engineering job dropped me into a sizeable microservices platform carrying significant technical debt. Nearly 1,000 user applications were stuck in a catch-all "fault" status. The faults were caused by bugs across different services, but the status didn't distinguish between them. You couldn't tell whether you were looking at a one-off edge case or a symptom of something affecting hundreds of users. From the outside, the system was impenetrable.

The engineering department was split into multiple teams, each owning a handful of services with deep knowledge of their slice. That created silos. Problems that spanned services fell between the cracks, and communication across team boundaries was slow. It puts me in mind of Conway's Law: the observation that a system's architecture tends to reflect the communication structure of the organisation that built it (Melvin Conway, 1967).

The team was overwhelmed. Customer support tickets were flooding in, and developers were handling them one at a time. Everyone knew the system had deep-rooted problems. But investigating root causes takes time and headspace, and both were consumed by the immediate backlog. Without any way to distinguish between faults, you couldn't even prioritise where a deep dive would have the most impact.

The instinct when you land in a situation like this is to try and understand the whole system first. Read the docs. Trace the architecture. Build a complete mental model. But the docs were written by people with deep context at a specific point in time, not kept up to date, and lacking the detail that someone coming to it fresh would need. That's not a criticism. It's one of the most common problems in software engineering. Monitoring was basically nonexistent. And I was a junior engineer on my first professional job with no existing knowledge to fall back on.

So I didn't try to understand the whole system. I asked a smaller question: how can I break up this fault status into something useful?

The first thing I built was a simple alert: how many applications went into fault in the last 24 hours. That number was significantly higher than the number of customers getting in touch. For the first time, we had a true picture of the scale of the problem, and that made it far easier to build the case for investing time in root cause work.

From there, it was about finding patterns. I built a spreadsheet and asked developers to add context to their tickets as they closed them for me to review and correlate. It was a necessary short-term step to give us an initial direction, but it added friction to an already overwhelming workload, and resistance was understandable. Once I had enough to identify initial targets, I started encoding what I'd found into alerts: database queries that detected known data patterns and surfaced them in Slack. If a new problem emerged that didn't match any existing alert, it would still land in the generic fault bucket, and that bucket becoming noisy again was its own signal that something new needed investigating.

Some patterns were simple. Others required tracing back through a user's history, cross-referencing changes made across services and reconstructing what the user had done on the front end, then figuring out how to recognise that in the data. Some of those investigations had real conspiracy-board energy: pinning fragments together until a shape emerged. And a pattern didn't always map to one root cause. Sometimes it turned out to be two or three distinct problems, which got fed back into the alerting to split the bucket further. It was a constant feedback loop: detect, investigate, refine.

The biggest buckets got investigated first. I built workaround documentation as a stopgap: quick, repeatable steps that any developer could follow to resolve a known issue at an individual level, getting that application back on track before the customer even noticed. That kept the backlog from growing while the longer work of root cause fixes played out, and for the first time in a long while, freed up developer time for new feature work.

The first root causes we resolved cut the backlog by half almost immediately. Within a couple of months, it had dropped by 98.8% and stayed down.

None of that started with understanding every microservice in the platform. It started with building observability in focused areas: one pattern, one alert, one bucket at a time. The deep system knowledge came as a byproduct of the fixing, not as a prerequisite for it. The low-hanging fruit taught me individual services. The harder problems taught me how they connected. That is systems thinking: stepping back from individual problems and building the layer that turns chaos into something you can reason about.

This all happened before AI coding tools existed. The pattern recognition was entirely manual. I'd be curious to see what a problem like this looks like with today's tools. The systems thinking still needs a human: knowing what to look for, what matters, how to structure the problem. But the grunt work of finding patterns in data feels like exactly the kind of thing that could be dramatically accelerated.

If you're staring at a messy, opaque system, don't wait until you understand everything. Pick one thing. Build visibility on that one thing. The rest follows.

---

## References

- Martin Fowler, [Conway's Law](https://martinfowler.com/bliki/ConwaysLaw.html)