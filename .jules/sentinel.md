## 2025-02-23 - Weak PRNG in UUID Generation
**Vulnerability:** The `guid()` function in `js_libraries/lynx-runtime-shared/src/utils.ts` relied solely on `Math.random()` to generate UUIDs, which is not cryptographically secure and can lead to predictable IDs and collisions.
**Learning:** Secure random number generation should prefer native secure APIs (`crypto.randomUUID` or `crypto.getRandomValues`) and only fallback to `Math.random()` if absolutely necessary. Direct reference to `crypto` in some TypeScript environments without node or DOM types may require `// @ts-ignore`.
**Prevention:** Ensure that ID/UUID generation functions implement feature detection for `crypto` methods instead of directly defaulting to `Math.random()`.
