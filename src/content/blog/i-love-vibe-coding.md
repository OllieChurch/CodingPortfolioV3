---
title: "I love vibe coding. I don't trust it."
date: 2026-02-22
description: "I vibe code constantly. My side project got more features in a month than it had in years. But my job involves people's money, and stakes change everything."
tags: ["ai", "programming", "productivity", "discuss"]
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j2knkpbuz3dvwruls1sc.png"
published: true
---

Greg Brockman says engineers should reach for an agent before they reach for an editor. I've been testing that for months. The answer is: it depends - and knowing when is everything.

---

I vibe code constantly. My side project, TaskGlitch, got more features in the last month than it had in the previous two years. A Vue 2 to Vue 3 migration that I would have put off forever? Ten minutes. A confetti burst when you complete your schedule? Done before lunch. Features I would never have bothered to build myself are now just... there.

The appeal is real. When I started working with Claude Code on TaskGlitch, I had a list of ideas that had been gathering dust for years. Life gets in the way - new job, other priorities - and the fun side project stays frozen. But now I can set the AI running, do something else, come back, test it, give a couple of notes, and ship. The pace is intoxicating.

And there's something else: the rubber duck that responds. I'd been carrying this project around in my head for years, but nobody in my life particularly cares about a to-do app that does a very specific thing I want. Suddenly I had something to discuss it with. To get excited about features with. To turn a conversation into a roadmap, and then turn that roadmap into working code. That felt like magic.

So why don't I trust it?

---

Because stakes change everything.

TaskGlitch is used by me. If it breaks, it's annoying. If the scheduling algorithm does something weird, I'll notice, I'll fix it, life goes on. The risk is low, so the trade-off makes sense: I get features fast, I don't fully understand how they work, and that's fine.

But my day job involves people's money. Every role I've had in software has involved payments, banking, financial infrastructure. You can't shrug that off the same way. You might get the right outcome - £50 was meant to go to Kate, and Kate received £50 - but where did it come from? Did it go through the right processes? Did we just give away money from the wrong account? The stakes are completely different.

And it's not just money. Health systems. Military applications. Security infrastructure. The higher the stakes, the more you need to actually understand how the code reaches its outcome. Because AI will confidently tell you it's done it correctly. It will tell you it's secure. And then you look closer, and it isn't.

We saw this play out spectacularly with Moltbook. The founder proudly announced he "didn't write a single line of code" - just had a vision, and AI made it reality. Within days, security researchers found the entire database exposed. 1.5 million API keys, 35,000 email addresses, private messages - all accessible to anyone who looked. The platform that captured the internet's imagination became a cautionary tale almost overnight.

That's what happens when you focus entirely on outcomes without understanding the process. The AI got him to a working product. It just happened to be a security nightmare.

---

Here's the part that worries me most about the "all-in" narrative.

Every article, every interview, every thought leader pushing agentic coding will throw in a caveat: "of course, you should maintain good code review practices." As if that solves the problem.

But code review is already imperfect. Developers skim large PRs. They say "looks good to me" when they're busy. And AI generates *a lot* of code - often more than necessary, full of abstractions for futures that will never arrive. Thousands of lines that need reviewing by humans who, increasingly, didn't write any of it themselves.

If everyone is vibe coding, who actually understands the system?

The knowledge that comes from writing code yourself - from thinking through edge cases as you go, from debugging and discovering the weird interactions between components - that knowledge doesn't transfer when the AI does the work. You might read the code afterwards. But reading code you didn't write, for a system you don't intimately know, to find bugs the AI couldn't see? That's a much harder job.

And debugging is where you really learn a system. When something breaks and you have to trace through the logic, understand why it's failing, figure out the fix - that's when you build the mental model that lets you spot similar issues in future. Hand that to the AI, and you've robbed yourself of that understanding.

I've been there. We've all been there. The begging cycle, where you're four prompts deep into "please just make the tests pass" and the AI keeps telling you it's fixed it, and it hasn't, and you realise you don't actually know enough about what it built to fix it yourself. That's the trap.

---

There's a study that captures this perfectly. METR ran a randomised controlled trial with experienced open-source developers working on their own codebases. When they used AI tools, they took 19% longer to complete tasks. But here's the striking part: those same developers believed the AI had made them 20% *faster*.

The dopamine hit is real. Code appears on screen at superhuman speed. The blank page problem vanishes. It *feels* like progress. But the actual work - the reviewing, the debugging, the cleaning up - that all still happens. It just happens later, and we don't count it the same way.

---

I recently listened to Grady Booch on The Pragmatic Engineer podcast, talking about AI as part of the "third golden age of software." One thing he said stuck with me: we're in the hobbyist phase.

Think about home computers in the early days. They weren't mainstream business tools. They were things that people with an interest could get hold of, take apart, experiment with. And slowly, through that experimental play, those hobbyists found uses that made their way into productivity and business and everything else.

That's where I think we are with AI coding. The place where it works best for me - where I'm finding the most value - is exactly those hobby projects where I can experiment and play and see what happens. Where the consequences of getting it wrong are low, and the joy of seeing ideas come to life is high.

We've seen abstraction cycles before. Every time a new layer appears - higher-level languages, frameworks, cloud services - people worry that it will make the previous skills redundant, that it won't be "real coding" anymore. And every time, we've adapted. Software engineering hasn't disappeared; it's evolved.

I think there's still a place for the engineer in a future where AI handles more of the code. But I don't know exactly what that looks like yet. We're not there. And pretending we are - going all-in on production systems with the same approach I use for TaskGlitch - feels like a mistake we'll regret.

---

Keep playing with this stuff. It's groundbreaking, it's cool, and it's genuinely fun. But know when the stakes demand more. Know when you need to understand the code, not just the outcome. Know when "it works" isn't the same as "it's right."

At its highest stakes, there are lives at risk. We cannot gamble with that.

---

## References

- Greg Brockman's post on agentic software development at OpenAI: [x.com/gdb](https://x.com/gdb/status/2019566641491963946)
- Wiz security research on Moltbook: [wiz.io/blog](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)
- Grady Booch on The Pragmatic Engineer podcast: [newsletter.pragmaticengineer.com](https://newsletter.pragmaticengineer.com/p/the-third-golden-age-of-software)
- METR study on AI coding productivity: [metr.org/blog](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- TaskGlitch - Intelligent task scheduling that scores your backlog and builds and optimised work session automatically - Early Access [taskglitch](https://taskglitch.netlify.app)