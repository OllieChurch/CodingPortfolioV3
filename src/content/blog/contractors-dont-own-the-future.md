---
title: "Contractors don't own the future"
date: 2026-09-28
description: "Four work packages, one happy client, and a four-day overrun I should have seen coming. What my first contract taught me about building something I won't be there to maintain."
tags: ["career", "contracting", "ai", "discuss"]
image: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/g96acfugdenpkgna1t5b.png"
published: true
devtoUrl: "https://dev.to/olliechurch/contractors-dont-own-the-future-3i1i"
---

Most of my career has been spent in-house, on teams that stay with a system long after it ships. I've written a fair bit about ownership from that position in some of my other articles, such as [owning the mess you didn't make](https://olliechurch.co.uk/blog/own-the-mess/) and [owning the code AI writes for you](https://olliechurch.co.uk/blog/ai-took-me-somewhere-new/).

Earlier this year I took my first contract, a proof of concept that, at its core, used AI to turn messy, human-readable inputs into structured output. It went well. The client was happy with what they got, and their customers were giving good feedback before the full vision had been built. Getting there taught me that a contractor's job has a different shape. You're building something that has to stand on its own once the contract ends, and a lot of what I believe about ownership assumes you'll still be around.

## Every package should be the last one

The vision was big, and the client had no tech team to carry it forward. So it was broken into a set of initial work packages, each ending with a complete, working tool. If the client stopped after any of them, there'd be nothing half-built to tidy up or patch. The proposal became a menu. The client could choose based on the outcomes they wanted and the budget they had.

Within a package it was harder. When a quote came in higher than hoped, they'd suggest cutting something they expected would save several days. Often it was a small part of the build, and the saving was far less than they'd imagined. You only learn which parts of a system are expensive by building a few, and I could have done more to make that visible.

## Handover is the last thing you get to own

The system as delivered runs reliably and costs very little to keep going. It's built to be adaptable, so whoever picks it up next can extend it without starting again. What it won't do is get better on its own.

AI systems thrive on iteration. You learn from what they produce: monitor the output, tweak the prompts, adjust how the input is shaped. A new model arrives, the old prompts behave differently on it, and you trial it and start again. Over time you'd want to layer in the business's own knowledge and skills. An in-house team picks that work up naturally because they live with the system every day.

A contractor hands over a snapshot, frozen at the moment the contract ends. I knew that going in, and it still sat uncomfortably with me.

The statement of work asked for alerting and documentation without saying much about what either should look like. That gave me a way to reconcile the unease. If I couldn't be there for what came next, I wanted to leave the best tools I could for whoever was.

I built alerts that explained themselves in plain English: what had happened, what it meant, and what someone should do about it. It's close to what got me through [my first engineering job](https://olliechurch.co.uk/blog/start-fixing-it-anyway), where turning a wall of faults into something a person could act on was half the battle. I wrote docs for both the technical and non-technical people who'd run the system, and priced it all into my estimates.

Looking back, though, that vagueness was a gap in the statement of work. It left too much open to interpretation, and I filled it with my own standards after the fact. It worked out, but it should have been pinned down when the statement of work was written, so the client knew exactly what they were getting.

## With AI, a bug is a matter of opinion

Delivered packages usually waited a week or two before being tested, followed by a long tail of small fixes. That caught me off guard, and it shouldn't have. I could have agreed testing timelines with the client up front and written them into the delivery plan. As it was, I had to get much clearer by the end about what counted as a bug and what counted as new work.

Mostly that was easy. The system doesn't do that because nobody asked it to. The AI-heavy package was different. I'd designed it to use AI surgically to keep results predictable, which meant the output leaned heavily on how the input was shaped. When the client tried an edge case or a specific scenario that hadn't come up while the requirements were being discussed, the output could look like a bug to them. Often the system was doing exactly what I'd expect given what went in, and I found myself playing the developer in the oldest joke in software, insisting it's not a bug, it's a feature.

That joke has been around as long as software has, because requirements have always had gaps where edge cases hide. AI just drags them into the open faster, since the non-deterministic nature means its output can shift with every input, even if it has seen it before. Some edge case scenarios had never made it into the requirements, so I rightfully designated handling them as new work.

You can write down the input and the process, but not every output. So it came down to judgement calls, and I tried to be fair. Anything that looked like genuinely unexpected behaviour, I fixed. The rest I explained and treated as new work.

## Prototypes look finished from a distance

Three of the four packages the client chose landed within half a day of my estimates. The AI-heavy one ran four days over, and that was my mistake.

An earlier package had been built from a vibe coded prototype that, to a large extent, had already solved the hard parts of the problem. I was able to port its core engine almost directly into a professionalised MVP, and it held up well. When the next package came with a prototype of its own, that first experience gave me false confidence. I expected to do the same port again, so I didn't look closely enough or run the edge cases.

On the surface the prototype had solved the hard part, but when real inputs arrived and a higher degree of detailed focus was put on the outputs, it became clear it hadn't. Those four days went on testing and iterating until the output was predictable and passed the statement of work's desired standards.

## Put the boundaries in writing

Most of what tripped me up could have been agreed at the start.

- A statement of work detailed enough that nothing important is left to interpretation, including the things I care about most, like alerting and documentation.
- Testing timelines agreed with the client and written into the delivery plan, so feedback arrives when I'm expecting it.
- A warranty period, after which bug reports become new, separately charged work. I'm having to agree that retrospectively, which is a harder conversation than it needed to be.
- For anything built on AI, more time digging for edge cases and specific scenarios during requirements, with sample inputs and the outputs expected from them.
- Estimates broken down far enough that a client can see what each part costs, so when they trim, they trim something that matters.
- Any prototype I'm estimating from, tested against the ugliest inputs I can find, however well the last one went.
- The frozen-in-time problem named in the proposal. Monitoring, prompt tuning, trialling new models. I won't be there to do that work, but the client should know it's coming and decide how they want to handle it.

## Leaving well is its own kind of ownership

The part I was most uneasy about turned out fine. The client has a tool that works, that their customers like, and that runs without me.

For a contractor, owning the work means leaving well. The system has to stand up once you've stepped away, whoever picks it up next needs the tools to understand it, and the client needs a clear picture of what it will ask of them, even though you won't be the one answering. I'm still getting used to that. The future of this system belongs to whoever picks it up next. My part was making sure they could.

---

## References

- [Don't understand the system? Start fixing it anyway](https://olliechurch.co.uk/blog/start-fixing-it-anyway) was an article I wrote about my first job in software
- [AI took me somewhere new, and proved me wrong](https://olliechurch.co.uk/blog/ai-took-me-somewhere-new/) my article on a reassesment of my approach to AI coding
- [Own the mess you didn't make](https://olliechurch.co.uk/blog/own-the-mess/) my advice to junior developers starting out
- ['It's Not a Bug, It's a Feature.' Trite—or Just Right?](https://www.wired.com/story/its-not-a-bug-its-a-feature/) a short exploration of the classic software engineering phrase by Nicholas Carr