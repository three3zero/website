+++
title = "Event sourcing order flow on Kafka"
date = 2026-10-12
draft = true
description = "How we structured topics, ordering guarantees, and replay for a latency-sensitive trading workload."
taxonomies = { kind = ["Case study"] }

[extra]
client = "[CLIENT OR SECTOR]"
role = "[ROLE]"
stack = "Rust, Kafka, Kubernetes"
duration = "[DURATION]"
+++

## Context

[Describe the problem and the constraints in two or three paragraphs. Lead with what the client needed, then what made it hard. Plain prose reads best at this width.]

[Name the decision this article is about. Readers who are evaluating your judgment want to see the question before the answer.]

## The approach

[Explain the design and why it beat the alternatives. Inline references to `code terms` get a quiet background so they stay part of the sentence.]

```rust
// Every state change is an event; state is a fold over the log.
pub enum OrderEvent {
    Placed { id: OrderId, qty: u64 },
    Filled { id: OrderId, qty: u64 },
    Cancelled { id: OrderId },
}

impl Order {
    pub fn apply(&mut self, event: &OrderEvent) {
        match event {
            OrderEvent::Filled { qty, .. } => self.filled += qty,
            OrderEvent::Cancelled { .. } => self.open = false,
            OrderEvent::Placed { .. } => {}
        }
    }
}
```

{{ <caption text="Listing 1. [Caption describing what the reader should notice.]" /> }}

> [A single sentence that captures the lesson. Use sparingly, once per article.]

## Results

[State outcomes you can stand behind, with real measurements and the conditions they were taken under. Then say what you would do differently.]

## What we would do again

[Close with two or three concrete takeaways and an invitation to discuss them.]
