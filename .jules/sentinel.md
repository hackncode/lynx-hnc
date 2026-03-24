## 2024-05-24 - Weak Random Number Generation in UUID

**Vulnerability:** The `guid()` function in `utils.ts` uses `Math.random()` to generate UUIDs. This is a weak pseudo-random number generator (PRNG) that is not cryptographically secure, leading to predictable UUIDs which can be a security vulnerability (e.g. session fixation, predictable tokens).

**Learning:** `Math.random()` should never be used to generate security-sensitive identifiers. When Polyfilling UUID v4 generation, always prioritize secure Web APIs like `crypto.randomUUID()` or `crypto.getRandomValues()`. Also, for performance optimization in loops (like `String.prototype.replace`), allocate a single byte array for `getRandomValues()` instead of allocating inside the loop.

**Prevention:** Always enforce the use of `crypto` module APIs (`crypto.randomUUID()` or `crypto.getRandomValues()`) for generating random IDs. Employ direct feature detection (`typeof crypto !== 'undefined'`) to prevent `ReferenceError`s and safely fallback.
