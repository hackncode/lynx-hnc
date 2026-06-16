## 2024-05-24 - Cryptographically Secure Random Number Generation
**Vulnerability:** Weak random number generation in `guid()` using `Math.random()`. This can lead to collisions and predictability of unique identifiers.
**Learning:** In this environment, the global `crypto` object lacks TypeScript definitions and requires explicit `// @ts-ignore` comments. To avoid CSP eval risks, direct feature detection (`typeof crypto !== 'undefined'`) must be used.
**Prevention:** Always use cryptographically secure functions (`crypto.randomUUID` or `crypto.getRandomValues`) with proper fallback logic when generating unique identifiers or security tokens.
