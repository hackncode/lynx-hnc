## 2024-06-26 - Weak Cryptographic Algorithm in GUID generation
**Vulnerability:** Weak PRNG (`Math.random()`) used for generating UUIDs in `guid()` function inside `js_libraries/lynx-runtime-shared/src/utils.ts`.
**Learning:** This function is widely used and relying on `Math.random()` can lead to predictable IDs, which can cause security issues if these IDs are used for sensitive references or tokens. The function did not utilize available secure PRNGs.
**Prevention:** Always prefer cryptographically secure PRNGs like `crypto.randomUUID()` or `crypto.getRandomValues()` when generating sensitive IDs. Fallback to `Math.random()` only if absolutely necessary in legacy environments. Ensure proper feature detection when using ambient objects like `crypto`.
