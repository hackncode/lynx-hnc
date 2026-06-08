## 2024-05-24 - [Enhance UUID generation security]
**Vulnerability:** The `guid()` function in `js_libraries/lynx-runtime-shared/src/utils.ts` used `Math.random()`, which produces predictable values and is cryptographically insecure.
**Learning:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` as the primary random number source for security-related IDs or UUIDs. `Math.random()` can be kept as a last resort fallback for old environments.
**Prevention:** Ensure new implementations involving random identifiers utilize the Web Crypto API, specifically directly checking `typeof crypto !== 'undefined'` to avoid CSP eval risks.
