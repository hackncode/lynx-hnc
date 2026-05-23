
## 2026-05-23 - Insecure Random Number Generation for UUIDs
**Vulnerability:** Weak, non-cryptographically secure random number generation (`Math.random()`) was used for UUID creation in `js_libraries/lynx-runtime-shared/src/utils.ts`.
**Learning:** Relying on `Math.random()` for generating UUIDs creates predictable tokens. While generating v4 UUIDs, `crypto.randomUUID()` or `crypto.getRandomValues()` must be prioritized to ensure sufficient entropy and unpredictability, which is vital if these UUIDs are used for sensitive contexts (e.g. session IDs, CSRF tokens).
**Prevention:** Always prioritize the Web Crypto API (`crypto.randomUUID()` or `crypto.getRandomValues()`) for random value generation in security-sensitive contexts, maintaining `Math.random()` only as an absolute final fallback for unsupported legacy environments.
