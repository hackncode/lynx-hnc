## 2025-02-27 - Weak RNG in UUID Generation
**Vulnerability:** Weak random number generation (`Math.random()`) used for UUID generation in `guid()` utility.
**Learning:** `Math.random()` is not cryptographically secure and predictable, which can be an issue if UUIDs are used for sensitive contexts (like tokens or IDs).
**Prevention:** Prioritize `crypto.randomUUID()` or `crypto.getRandomValues()` over `Math.random()` whenever available.
