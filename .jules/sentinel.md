## 2024-05-24 - Weak random number generation for security purposes
**Vulnerability:** Weak random number generation (Math.random()) for UUID generation in js_libraries/lynx-runtime-shared/src/utils.ts.
**Learning:** The `guid()` function generated UUIDs primarily with `Math.random()`, which is predictable and unsuitable for identifiers where uniqueness/unpredictability is critical.
**Prevention:** Use a secure source of randomness like `crypto.randomUUID()` or `crypto.getRandomValues()` as the primary random source.
