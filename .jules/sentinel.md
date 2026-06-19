## 2024-05-23 - Weak random number generation in guid()
**Vulnerability:** Weak PRNG `Math.random()` used for generating UUIDs.
**Learning:** Using `Math.random()` to generate UUIDs can lead to collisions and predictable identifiers, which reduces security in contexts where uniqueness is critical.
**Prevention:** Use cryptographically secure pseudo-random number generators like `crypto.randomUUID()` or `crypto.getRandomValues()` as a primary source of randomness.
