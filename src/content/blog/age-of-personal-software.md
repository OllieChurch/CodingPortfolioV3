---
title: "Welcome to the age of personal software"
date: 2026-11-27
description: "In a week, I built an Android app from my phone with Claude Code, in a language I've never written. It replaced seven apps, and it only has to work for me."
tags: ["android", "ai", "productivity", "discuss"]
image: "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/6b13kziyvrrggwlj6kdg.jpg"
published: true
devtoUrl: "https://dev.to/olliechurch/welcome-to-the-age-of-personal-software-1ofl"
---

Over the last week I've built an Android app, written in Kotlin, that now replaces seven other apps on my phone. I built it all through Claude Code, entirely from the phone itself, in the moments I'd otherwise have spent scrolling social media, and I've never written a line of Kotlin in my life. I'm the only person it was ever built for, so I've made no allowances for anyone else, and every part of it works the way I want it to.

Building it has convinced me that we're at the start of an age of personal software, where instead of settling for whichever app comes closest to what we need, we make our own.

## Nothing it does is groundbreaking

I'm not claiming to have built an incredible set of features. Each morning it gives me one view of my day, with the weather, my calendar and the tasks I need to get done. It also tracks my intermittent fasting, what I spend my time on at work, my gym sessions and my travel planning.

Rebuilding the fasting and time trackers with Claude took almost no time at all. There'd be no point if I'd just ended up with the same apps I already had, but with everything in one place, I could make it all work together in ways that only matter to me.

My favourite example is my alarm clock. It suggests a bedtime to hit my sleep target, then looks at my calendar and how long I need to get ready, and sets my alarm. On days I'm going into the office, it works out the walk to the station and which train I need to catch, and a couple of hours before the alarm goes off it starts checking for delays. If the trains start running late, it moves my alarm earlier so I can still make a train that gets me in for the start of the day. I find that really cool, and I don't expect anyone else to. It's so specific to me that I'd be unlikely to find it off the shelf.

## My February caution has softened

The foundations took about three days to build, on and off, and within a week I was comfortable it all worked. I've found maybe two bugs, and most of the rework was design choices I didn't like the look of. The real effort went into the conversations before each feature, working out exactly what I wanted and, just as often, what wasn't worth building at all.

In February I wrote that I [love vibe coding but don't trust it](https://olliechurch.co.uk/blog/i-love-vibe-coding). Nine months on, I trust it a lot more than I did then, because the progress in that time has been massive, though I don't trust it entirely. It helps that the stakes here are low. The app is just for me, and it doesn't email anyone, post anything, or make decisions that reach anyone else. The data in it is mine and I care about keeping it secure, but if something goes wrong, I'm the only one affected. I've had a look through the Kotlin, it reads sensibly, and it's well documented. Like the Python project from [AI took me somewhere new](https://olliechurch.co.uk/blog/ai-took-me-somewhere-new), it's code I couldn't rebuild myself, and I'm comfortable with that.

## Personal software isn't for everyone yet

For now, personal software belongs to people who are already comfortable in this world, who know what a GitHub repository is and what they're agreeing to when they let their phone install an app from outside the Play Store. Claude Code will talk anyone through the setup, but ask it for an easier route and it will happily give you one, like making everything public, without knowing whether you understand what that means. The skill that still matters is knowing what's possible, what to ask for, and what to refuse. The bar for that is curiosity and interest, though, not years spent learning to code, so it's open to far more people than writing software has ever been.

## Google is building the on-ramp

This year Google's AI Studio started building native Android apps from a prompt, and Google Play now lets people run apps they've vibe coded on their own phones, kept private and separate from the public store. At the same time, it's tightening up how apps from outside its ecosystem get installed, so it seems keen for people to build their own apps, as long as they come through Google's door. With Android on most of the world's phones, Google is better placed than anyone to make that feel normal.

None of that means the app store is finished. Convenience will always win for most people most of the time, and if downloading something someone else has made is easier than building it, people will download it. But the moment someone finds themselves wishing an app did one thing slightly differently, they can now have it, without much expertise at all.

I wonder whether this leads to a renaissance for open source, one where it finally reaches the mainstream. Right now, most people neither know nor care whether an app is open source. Say I put a to-do app out into the world, and someone likes it but wishes it did one thing differently, even something as small as the colour scheme. If the code is open, they can ask their own AI to fork it and make that change, without ever republishing it. The foundation is still my app, and I still get the credit, but their copy works the way they need it to. If that becomes normal, I think the average person will start to understand the difference between an open source app and a closed one, and choose the open one, because it's the one they can make their own.

## I'm handing over more of the code at work too

The app isn't the only thing that's moved my thinking. In February I called this the hobbyist phase of AI coding, and kept it to low-stakes side projects. Since around September, I've been correcting and handholding it far less at work too. Some of that is how I work with it, with focused instructions and a precise idea of what I want. Developers have always done better work when they know what they're building before they start, and it matters even more with AI.

Recently I was pairing with Claude on a Lambda function and wanted to see how it handled test-driven development, so once we'd worked through the spec, I asked it to write failing tests for me to make pass. To check its tests actually worked, it wrote a throwaway implementation of the whole thing, ran the tests against it, watched them go green, and then deleted it so I could write the real one. That took about 30 seconds. Its version was rough, because it was only ever meant to be thrown away, and the real implementation took me an hour or two. I suspect that with ten minutes, it could have written something just as rigorous as mine.

## Gatekeeping the code has limited days

AI doesn't write perfect code, but it writes good enough code, more reliably every month. If I'm honest with myself, a lot of the code I've written in my career has been no better than that. I think AI now writes code about as well as a typical engineer does, and I don't find that comfortable to write.

Writing the code was never the whole job, though. When almost anything can be built in ten minutes, what matters is deciding what's worth building. For individuals, personal software means far more people building things for themselves, and for most of them the stakes will be as low as mine. Businesses are different. The same tools will let people across a business build their own software too, and plenty of it will work without anyone knowing whether it's safe underneath, while it handles customer data, money, and decisions that reach other people. I don't know exactly what my job as a software engineer will look like in a few years, but I think a lot of it will be there, making sure the things people build at work are safe and built to last.

---

## References

- [I love vibe coding. I don't trust it.](https://olliechurch.co.uk/blog/i-love-vibe-coding), on why stakes change everything
- [AI took me somewhere new, and proved me wrong](https://olliechurch.co.uk/blog/ai-took-me-somewhere-new), on owning code in a language I don't write
- [Build native Android apps in Google AI Studio](https://android-developers.googleblog.com/2026/05/build-android-apps-google-ai-studio.html), Android Developers Blog, May 2026
- [New on Google Play: More ways to create, discover, and play](https://blog.google/products-and-platforms/platforms/google-play/google-play-updates-october-2026/), Google, October 2026
- [Android developer verification: rolling out to all developers](https://developer.android.com/blog/posts/android-developer-verification-rolling-out-to-all-developers-on-play-console-and-android-developer-console?hl=en), Android Developers Blog
