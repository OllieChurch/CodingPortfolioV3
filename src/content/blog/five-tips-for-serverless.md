---
title: "Five quick wins for building serverless on AWS"
date: 2026-05-25
description: "Five low-friction habits to put in place when you're starting an event-driven serverless build on AWS."
tags: ["serverless", "aws", "architecture", "eventdriven"]
image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0fybyn05avlvaz5hjcem.png"
published: true
---

A few Lambdas hooked up to an EventBridge bus will get you a long way before they ask anything of you. The trouble is, by the time you're feeling the rough edges, some of the patterns that would have helped most are expensive to retrofit.

So this is for you if you're starting an event-driven, serverless build on AWS. These are the habits I'd reach for first. None of them are clever. All of them compound.

## 1. Friction is the enemy

You are going to be creating a lot of Lambdas. Starting a new one should take minutes, not hours. You want three things in place: an Infrastructure as Code (IaC) module that deploys the boilerplate infrastructure, a code template so a new Lambda is a few clicks away, and an automated deployment pipeline. Think of it as the standardisation trio.

Our code template, as an example, scaffolds the boilerplate configuration and dependency injection, the basic idempotency pattern, Simple Queue Service (SQS) event input handling, a test project ready to go, and the GitHub Actions needed for deployment. A couple of clicks and a few inputs and you're straight into writing the new logic, rather than hunting around for an example to model on or trying to remember the right boilerplate by heart.

The reason this matters isn't elegance, it's behaviour. When starting a new Lambda is a chore, people shovel unrelated logic into existing ones to avoid the chore. The friction makes your services bloat in ways you'll regret.

Worth saying out loud: this trio is not a one-and-done. It will evolve as you learn what you actually need. If you treat it as static, your templates and modules slowly drift from fit-for-purpose, and at some point they become the source of friction rather than the cure for it. Plan for the iteration.

## 2. Lambdas aren't microservices

One repo per Lambda is a tax you'll pay forever. One giant monorepo for everything is its own mess at the other extreme. The shape I'd reach for sits in between: the macro service. A group of Lambdas that share a domain, sit in one repo, and share a class library for the things they repeat.

Take our flow that handles an incoming payroll confirmation file. One Lambda validates the file format and stores it in S3, a second transforms it into DynamoDB for processing, and a third compares it against the request file we sent and flags any discrepancies. Three Lambdas, one domain, one repo. The shared logic lives in a single class library they all pull from. You get cheap code reuse, sensible deploy boundaries, and a unit of ownership that isn't fragmented across multiple repositories.

A related thing while you're sizing functions: it's fine to start with slightly bigger Lambdas, especially while you're still figuring out the domain. Split them when the bundling actually hurts. Long deploys, big blast radius, painful merges, slow invocations where parts could be async or parallel. You don't need to start at maximum granularity.

## 3. Direct invocation is a code smell

Lambda-to-Lambda invocation looks convenient and then becomes the thing you wish you hadn't done. You get tight coupling, cascading failures when a downstream component is unhealthy, and you pay for one Lambda to sit idle while it waits for another. Unwinding it later can be messy and arduous. Use EventBridge for most cases, and SQS where you want a direct handoff into a subsequent step.

A concrete example. We have a webhook authenticator and a webhook validator. The authenticator checks the auth passes before anything enters the wider system, then drops the message straight into a queue and returns success to the sender. The validator picks it up, validates the payload, and converts it into an event the rest of the system can consume. The auth step doesn't need to know anything about validation, and if validation has a problem the message just waits in the queue until things recover. Two simple Lambdas, loosely coupled, each doing one thing well.

## 4. Your handler will run twice

AWS gives you at-least-once delivery. EventBridge, SQS, Simple Notification Service (SNS), any of them can hand you the same event twice. If your handler isn't idempotent, you've got a quietly broken system.

We didn't have idempotency from day one. The retrofit has been time consuming and annoying. You have to context switch out of whatever you actually wanted to be building, and in a growing estate it becomes a tracking problem too: which Lambdas have been corrected, which haven't, and which carry the most risk while you're working through them. None of that fits comfortably in one person's head.

A reasonable approach if you're rolling your own is a small library backed by a DynamoDB store that dedupes against an event identifier. If you're on Python or Node, AWS announced Durable Lambda Functions at re:Invent 2025 with idempotency as a first-class capability and a managed execution model. Worth a look.

## 5. The 2am incident is coming

This is everything you want to be true when something goes wrong in production. Dead Letter Queues (DLQs) on every async handler. Structured logs you can toggle in and out so they're useful when you need them and not noisy when you don't. An audit trail of the events your system is raising. CloudWatch alarms on the things that actually signal a problem.

A DLQ on its own isn't a strategy. You need a plan for what happens to the messages that land there, whether that's automated replay, manual intervention, or just routing them somewhere a human will actually see them.

Most of this should live inside your IaC module from point 1. An event-triggered Lambda ships with a feeder queue and a DLQ as standard. The alarms, the structured logging, the audit trail should ship every time regardless of how the Lambda is triggered, not as something a developer has to remember to add.

---

These are unglamorous habits that compound. Get them in early and your time goes into building features. Skip them and you'll spend that time servicing the technical debt instead.

## References

- For an overview of event-driven serverless architecture with AWS Lambda and EventBridge, see the [AWS documentation on event-driven architectures](https://docs.aws.amazon.com/lambda/latest/dg/concepts-event-driven-architectures.html). Covers the patterns, services, and trade-offs of building event-driven systems on AWS.
- The [Amazon EventBridge user guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html). EventBridge is the serverless event bus that routes events between sources and targets, and the default choice for most flows in this article.
- The [AWS Serverless landing page](https://aws.amazon.com/serverless/). A jumping-off point for the broader AWS serverless toolkit, covering Lambda, API Gateway, EventBridge, Step Functions, SQS, and more.
- AWS [announced Durable Lambda Functions at re:Invent 2025](https://aws.amazon.com/about-aws/whats-new/2025/12/lambda-durable-multi-step-applications-ai-workflows/), adding stateful multi-step workflows and first-class idempotency to Lambda for Python and Node.js. The [documentation](https://docs.aws.amazon.com/lambda/latest/dg/durable-invoking.html) covers invocation patterns and the execution name parameter that drives idempotent execution starts.