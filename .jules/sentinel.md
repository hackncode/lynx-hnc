## YYYY-MM-DD - Weak random number generation in guid()
**Vulnerability:** Weak random number generation using `Math.random()` in `guid()` utility function located in `js_libraries/lynx-runtime-shared/src/utils.ts`.
**Learning:** Security-critical functions like GUID generation should use cryptographic random APIs instead of `Math.random()`, which is predictable.
**Prevention:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` for generating random identifiers, maintaining `Math.random()` only as a legacy fallback.
