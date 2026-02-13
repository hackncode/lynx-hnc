## 2026-02-13 - [Weak RNG in Shared Utilities]
**Vulnerability:** Weak random number generation in `guid()` utility using `Math.random()`.
**Learning:** Shared libraries in this project may run in environments where `crypto` API is partially available or missing.
**Prevention:** Always use `crypto.getRandomValues()` with a robust fallback to `Math.random()` and `try-catch` blocks for cross-platform compatibility.
