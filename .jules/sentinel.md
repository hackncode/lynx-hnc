## 2024-10-24 - [Medium] Weak random number generation in UUID creation
**Vulnerability:** The `guid` function in `js_libraries/lynx-runtime-shared/src/utils.ts` was using `Math.random()` to generate UUIDs, which is not cryptographically secure and can lead to predictable UUIDs.
**Learning:** For identifiers requiring security/unpredictability, standard `Math.random()` is insufficient.
**Prevention:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` for generating UUIDs or random tokens where supported, falling back to `Math.random()` only as a last resort in non-secure contexts.
