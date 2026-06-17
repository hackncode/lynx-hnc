## 2024-05-24 - [Insecure Randomness in UUID generation]
**Vulnerability:** Weak random number generation using `Math.random()` in the `guid()` utility function within `lynx-runtime-shared/src/utils.ts`.
**Learning:** `Math.random()` is not cryptographically secure, which could lead to predictable IDs and potential collision or prediction vulnerabilities in an environment that relies on these UUIDs for uniqueness.
**Prevention:** Always use cryptographically secure pseudo-random number generators (CSPRNG) like `crypto.randomUUID()` or `crypto.getRandomValues()` for sensitive operations, and only fallback to `Math.random()` when absolutely necessary and in non-security contexts.
