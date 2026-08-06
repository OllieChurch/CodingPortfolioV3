---
title: "Own the mess you didn't make"
date: 2026-08-04
description: "From a talk I gave to people working towards their first software engineering role: the things about live, inherited systems that no course prepares you for."
tags: ["career", "beginners", "process", "architecture"]
image: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/rz1gw4zc32fmrzuodw95.png"
published: true
devtoUrl: "https://dev.to/olliechurch/own-the-mess-you-didnt-make-1pbm"
---

There's no shortage of advice on landing your first software engineering role. Portfolios, interviews, which languages to learn. What I found far less of, when I was starting out, was anything on what to do once you're actually in the building. So when The Tech Academy asked me to [give a talk](https://youtu.be/mdgi9BGlIO8) at the end of July, mostly to students and people lining up their first role, that's what I talked about.

You're joining a system somebody else built, that's live, and that you now have to keep running. None of what follows comes up while you're learning to code. It only shows up once you're standing in front of the real thing.

## Give the last engineer the benefit of the doubt

You will join somewhere and find things that look wrong. You've just spent months learning how it's meant to be done, and the real thing won't match. When that happens it's tempting to say so, loudly, and to wonder aloud what the last person was thinking.

Try not to. Every system I've worked on was built by people making the best call they could with the information, the tools and the deadline they had at the time. I've not yet found a bad decision that was made carelessly, and I've made plenty of my own that looked fine on the day and worse a year later. There's a practical edge to it as well. The business doesn't watch individual engineers make individual decisions, it sees engineering as one thing, so when you run down the engineer before you, the credibility you spend is partly your own.

The attitude that serves you better is that you're going to inherit systems you didn't build, and owning their flaws is the job.

## Small failures beat big ones

The clearest foundational mistake I've seen up close was a process that had to succeed all at once. It did a large piece of work in a single pass, and any failure anywhere failed the whole thing. At small volumes nobody notices. As the numbers grow the odds of falling over climb with them, and a system that half-finished its work leaves a worse mess than one that didn't start.

The lesson I took is to break work into the smallest independent pieces I can. If I'm building something new, that shapes it from the start: each step stands alone, and I can ask of every step, what happens when this fails and I need to run it again.

You won't often be building new, though. Mostly you're looking at something that already works this way. It is extremely unlikely you will be granted time to rewrite it. "Give me three weeks and at the end it'll work exactly as it does now, only more reliably" is not an argument many businesses say yes to, and they're not wrong to refuse.

So I stopped trying to win that argument and started doing the smallest useful thing instead. Draw the process out on paper, find the seams. Add logging at the boundaries so that when it breaks you can see it got to step three and no further. None of that needs permission, and each small thing makes the next one easier to justify. Pick the easiest fix that improves your own life first, not the biggest. You're the one living with the system day to day, and anything you make better for yourself is better for whoever comes after you.

## You can't predict the change, only leave room for it

A system gets built around what's true today. A rule that had held since day one stops holding, and suddenly the code is full of special cases for the one thing it was never shaped to do.

You can't fix this by predicting harder. Try to build for every future you can imagine and you just widen the surface you'll get wrong, because the real requirement always turns up different to the one you guessed. What you can do is notice where change actually tends to come from. Reliably, it's two places:

- anywhere the requirements are still being argued over
- anywhere you depend on someone else's product or decision

Those are the edges. Keep them at arm's length from the core, so the thing the system fundamentally does doesn't know or care what's bolted to it this month.

Retrofitting that is, again, a matter of waiting for the moment. You won't get time to pull a tangled dependency out for its own sake. But the day the business wants to swap it for something else, that work is funded. So do it then, and leave a seam behind: pull the old thing into a connector, build the new one beside it, and next time they change their mind you're swapping a part rather than operating on the core. They usually do change their mind, and you'll often find you can run both at once, which nobody asked for and someone will be glad of.

## Assume it will go wrong

The last one is Murphy's Law: anything that can go wrong will go wrong. Not might, will. On a system of any size, something is failing right now that you don't know about yet. Once you accept that, the work stops being about preventing every failure and starts being about never being in the dark when one happens.

That starts earlier than you'd think, back when a feature is still being planned. The version everyone talks through is the one where things go to plan, and that's the sensible place to start. What almost nobody does, and what you can do from your first week, is ask about the rest: what happens when the customer doesn't do the expected thing, or when the service you depend on doesn't answer. A failure you named in a planning meeting is a cheap one. The same failure found in production by a customer is not.

Everything after that is making sure the running system can still tell you what it's doing. I once inherited a backlog where every failure looked identical, with no way to tell whether a problem had hit one customer or thousands. The first thing I did wasn't code. I opened a spreadsheet, listed the failures, and wrote a line next to each about what seemed to have caused it. The duplicates showed up fast. Duplicates became categories, categories became alerts that told me how often each thing happened, and once I could count them I had something to take to the business when I wanted time for the underlying fix. Quantified pain is the thing non-technical stakeholders can act on, and handing it to them is one of the most useful things any software engineer can do.

And it keeps showing up in different clothes: tests you can run without thinking, logs that tell a story instead of drowning you, alerts that reach the right person rather than everyone. Alert everyone about everything and they mute the channel, and then you have no alerting at all.

## The unwanted work is the way up

I moved from junior to mid-level quickly at my first company, and when I look back at why, it wasn't that I was the sharpest person there. I wasn't. It was that I took on the work nobody was volunteering for. The failing process, the spreadsheet nobody asked for, the playbook nobody had written. That work tends to be going spare precisely because it's unglamorous, and doing it is how you turn into the person who understands the system. That person is hard to replace, and everyone knows it.

You'll join places with problems already in them. That's not the bad news. That's the opportunity.

---

The full talk, including the bits I've skipped over here, is [on YouTube](https://youtu.be/mdgi9BGlIO8).

---

## References

- [The Tech Academy](https://thetech.academy/). The online coding bootcamp whose students this talk was given for.
- [Murphy's Law](https://en.wikipedia.org/wiki/Murphy%27s_law). "Anything that can go wrong will go wrong." The adage that anchors the final lesson, and a useful default posture for anyone running production systems.