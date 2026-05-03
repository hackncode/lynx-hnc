## 2024-03-24 - Cryptographically Weak UUID Generation
**Vulnerability:** Weak random number generation using `Math.random()` to generate UUIDs in `js_libraries/lynx-runtime-shared/src/utils.ts`. Predictable UUIDs can lead to security issues if they are used as tokens, identifiers, or in security-sensitive contexts.
**Learning:** Legacy codebase patterns often use `Math.random()` for convenience, without considering the predictable nature of pseudorandom number generators.
**Prevention:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` for security-critical contexts, falling back to `Math.random()` only when cryptographically secure random number generation is not strictly required.
