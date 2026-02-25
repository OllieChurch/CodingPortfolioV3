---
title: "Every service I build will die"
date: 2026-03-01
description: "Small, disposable services and event-driven design mean we can kill and replace anything without the rest of the system noticing."
tags: ["serverless", "aws", "architecture", "eventdriven"]
published: false
---

And that's exactly the point.

I'm a senior software engineer at Ontime Payments, a fintech startup enabling direct-from-salary bill payments. We've deliberately built a modular, event-driven serverless architecture, and every service within it is expected to be replaced eventually. Some won't be. But we build as if they will, and that shapes everything.

## The basic idea

Serverless has well-known benefits: no servers to manage, no patches to apply, compute that scales automatically. But the thing that's changed how we work isn't just the managed infrastructure. It's what happens when you combine small, focused functions with event-driven communication and a philosophy that any component can be killed and replaced when required.

If you're unfamiliar with how serverless infrastructure works at its most basic: a user hits an API Gateway, which triggers a Lambda function. That function does its job (say, processing a payment), returns a response to the user, and raises an event to EventBridge.


![Event-driven architecture diagram: User to API Gateway to Lambda (Process Payment) to EventBridge, which fans out to two Lambdas (Notify Warehouse and Send Receipt). Response flows back from Lambda to API Gateway](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i13wk4wh0f5mzqvlk39a.png)

EventBridge sits in the middle, routing events based on rules you define. The payment function doesn't know anything about warehouse operations or email receipts. It just announces what it did, and other services listen and act accordingly. The producer has no idea how many consumers are listening, or who they are. Each function does one thing. That combination of small components and loose coupling is what makes everything else possible.

So that's the infrastructure. But the real benefit comes when you pair it with a mindset: build for today's requirements, expect to replace things tomorrow.

## Everything is smoother

We had a monitoring service that started simple but grew into a mess of conditional logic as the system expanded. Every new feature meant more edge cases, more setup requirements, more brittleness. So we built a v2 from scratch.

That goes against the usual advice (never rewrite, always iterate). But because the original service was small and focused, starting fresh was actually less work than continuing to patch. The scope was manageable.

Both versions ran side by side, similar to the strangler fig pattern you'd use when migrating away from a monolith.[^1] They consumed the same events from EventBridge. The services raising those events didn't need to change anything; they had no idea whether one consumer or two (or ten) were listening. We validated v2 was working, then switched off v1. The rest of the system didn't notice.

That's not a special story. We've merged modules, split them apart, replaced entire services. An early email-sending service got absorbed into a broader notifications module handling Slack, webhooks, and email together. The old service just switched off. This is the normal way we work, not some heroic migration effort. The benefit isn't a single moment that made it all worthwhile. It's that everything, all the time, is easier.

## Prediction isn't flexibility

A lot of developers try to achieve flexibility through prediction, building for every possible future requirement from day one. But that's not flexibility. That's just widening the scope of your rigidity.

The flexibility we've found doesn't come from planning ahead. It comes from the architecture itself. Lambda encourages small, focused components. Event-driven design keeps them isolated from each other. Each piece is small enough to understand, focused enough to replace, and isolated enough that replacing it doesn't ripple outward.

The keep-it-simple-stupid philosophy,[^2] but taken seriously at the architecture level. We build for today's requirements, not for every possible future. That frees up mental energy, increases deployment velocity, and means we're not overcomplicating things trying to cope with scenarios that may never arrive. We build for the foreseeable future. When a service no longer fits the requirements, we kill it and replace it with something that does. And because of how we've built, that replacement is easier than it would otherwise be.

Every service will die. That's what makes the system live.

---

*Human written, AI assisted.*

---

## References

- [^1]: Martin Fowler, [Strangler Fig Application](https://martinfowler.com/bliki/StranglerFigApplication.html). The pattern describes incrementally replacing a legacy system by building new functionality around it, rather than attempting a risky big-bang rewrite.
- [^2]: The [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) ("Keep it simple, stupid") was coined by Kelly Johnson at Lockheed Skunk Works in the 1960s. The idea: systems work best when kept simple, and unnecessary complexity introduces failure points.
- For more on event-driven serverless architecture with AWS Lambda and EventBridge, see the [AWS documentation on event-driven architectures](https://docs.aws.amazon.com/lambda/latest/dg/concepts-event-driven-architectures.html).
- [Ontime Payments](https://ontime.co)