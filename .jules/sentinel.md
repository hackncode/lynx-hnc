
## 2024-06-25 - Weak UUID Generation
**Vulnerability:** Weak random number generation in `guid()` using `Math.random()`.
**Learning:** Using `Math.random()` for UUIDs is cryptographically weak. Also, calling `crypto.getRandomValues` in a loop allocating a small array per iteration causes performance issues.
**Prevention:** Prioritize `crypto.randomUUID()`. Fallback to `crypto.getRandomValues()` using a pre-allocated byte array outside the loop to maintain high performance. Maintain `Math.random()` only as a final fallback.
