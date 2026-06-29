---
title: "The biggest AI productivity hack? Doing what we should have done all along"
date: 2026-03-16
description: "The practices we're adopting to make AI productive are the same ones that always made humans productive, we just never committed to them."
tags: ["ai", "productivity", "process", "discuss"]
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tt2ulgmlcwqgic0cezci.png"
published: true
---

Everyone's optimising for AI right now. Writing clearer requirements. Documenting features properly. Structuring code cleanly. Maintaining READMEs. Breaking work into small, well-defined tasks. Keeping track of technical debt.

It's all good stuff. It genuinely helps AI produce better output. But here's what's nagging at me: we already knew all of this was worthwhile. We knew it before AI showed up. We just never had enough reason to do it consistently.

These are the practices that every engineering team has preached for years. Understand the requirements before you start coding. Do some upfront design. Write things down. Break the work into the smallest possible tasks. None of this is new. And human beings have always produced better results when these things are done well. The problem was never that the practices didn't work. It was that the feedback loop was too slow. A developer who receives well-written requirements delivers better code, but that plays out over weeks and across handoffs. The business never had a clean comparison because you can't rewind the clock and run the same project again without the good practices to prove the difference.

AI changed that. With AI, you can see the difference in minutes. Give it vague requirements, get mediocre output. Give it clear, well-structured input, get something genuinely useful. The cause and effect are immediate, and that makes the value of the groundwork undeniable to stakeholders who previously couldn't connect the dots. That's the real shift: not that these practices suddenly became valuable, but that the speed of the feedback loop finally made the value visible.

There's also a time-saving element. AI makes the groundwork itself easier to produce. Documentation, detailed ticket descriptions, technical write-ups — the overhead of doing the right thing has dropped. But the practices themselves aren't new. The enthusiasm is.

This is actually why I chose Kiro as my AI coding tool. When AWS launched it, the headline feature was "spec-driven development." In practice, that means: understand the requirements, produce a design, write up a task list, then start work. At the time, that was a unique approach. Most mainstream alternatives, Cursor included, leaned more towards just generating code. Kiro's insistence on doing the thinking first was exactly what good engineering teams have been trying to get developers to do for years. The fact that it works so well as an AI workflow is, to me, evidence that these were always the right practices. AI just proved it faster than we ever could with humans alone.

## The headline numbers don't hold up

People are reporting enormous productivity gains from AI. 40%, 80%, even higher. The research paints a different picture.

The METR study from mid-2025 found that experienced developers took 19% longer to complete tasks when using AI, despite believing they'd been sped up by 20%. That study used early-2025 models, and things have moved significantly since. METR themselves acknowledged this when attempting a follow-up in early 2026, but struggled to complete it. As one developer in the study put it: "my head's going to explode if I try to do too much the old fashioned way because it's like trying to get across the city walking when all of a sudden I was more used to taking an Uber."

More recent is Laura Tacho's research at DX, presented at the Pragmatic Summit in February 2026. DX measures productivity using a combination of direct metrics (time saved per developer per week) and indirect metrics (PR throughput, delivery rate, developer experience). Their survey covered 121,000 developers across 450+ companies. The headline: measured productivity gains from AI sit around 10%. A long way from what you see in LinkedIn posts.

The more striking finding came from a deeper analysis of 67,000 developers over the same period. The outcomes were sharply divided: some companies saw customer-facing incidents cut by 50%, while others saw them double. The difference wasn't the AI. It was the organisation around it. In well-structured teams, AI acted as a force multiplier. In struggling ones, it exposed existing problems. As Tacho put it, AI won't fix deeper organisational issues unless you tackle those problems first.

Anthropic's own research adds another layer. In a controlled trial with junior developers, the group using AI completed tasks faster but scored 17% lower on comprehension. They shipped code they didn't understand. The developers who retained understanding were the ones who used AI to ask questions and build comprehension, not just to generate output.

## This is good news, actually

I'm not arguing that AI provides no productivity gain. It clearly does. The speed of output is faster, the friction on routine tasks is lower, and the tooling keeps improving. AI is absolutely a variable in the productivity equation.

But it's not the only variable, and I think we're over-crediting it while under-crediting the groundwork. If your team started writing better requirements, documenting decisions, breaking work into smaller tasks, and structuring code more thoughtfully, you'd see productivity gains with or without AI in the picture.

The optimistic read is that AI has been the catalyst we needed. It gave us a reason to finally do what we always knew was right. The practices are sticking because the feedback loop is visible, the tooling makes them easier, and the results are immediate.

Just don't let anyone tell you that those productivity gains are all down to the AI.

---

## References

- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity" (July 2025) — [metr.org](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- METR, "We are Changing our Developer Productivity Experiment Design" (February 2026) — [metr.org](https://metr.org/blog/2026-02-24-uplift-update/)
- Laura Tacho / DX, "Measuring Developer Productivity & AI Impact" — presented at Pragmatic Summit, February 2026. Reported by [ShiftMag](https://shiftmag.dev/this-cto-says-93-of-developers-use-ai-but-productivity-is-still-10-8013/)
- Anthropic, "How AI assistance impacts the formation of coding skills" — [anthropic.com](https://www.anthropic.com/research/AI-assistance-coding-skills)