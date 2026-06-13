## 2024-06-13 - [Secure UUID Generation]
**Vulnerability:** Weak random number generation in `guid()` using `Math.random()`.
**Learning:** Predictable UUIDs can lead to security vulnerabilities if used as session identifiers or security tokens.
**Prevention:** Always prioritize cryptographically secure random number generators (CSPRNG) like `crypto.randomUUID()` or `crypto.getRandomValues()` over `Math.random()` for generating UUIDs.
