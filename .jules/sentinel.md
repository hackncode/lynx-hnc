## 2024-10-31 - Weak RNG in UUID Generation
**Vulnerability:** Weak random number generation (`Math.random()`) used for UUIDs in `utils.ts`, creating predictability risks.
**Learning:** Even simple utility functions need secure random number generation. Direct feature detection for `crypto` is needed to avoid CSP eval risks. Pre-allocating a single byte array for `crypto.getRandomValues()` prevents memory allocation overhead during iteration loops.
**Prevention:** Always use cryptographically secure random number generators (CSPRNG) like `crypto.randomUUID()` or `crypto.getRandomValues()` for unique identifiers instead of `Math.random()`.
