## 2024-05-31 - [High] Insecure CSP unsafe-eval in Global Resolution and Weak Random UUID Generation

**Vulnerability:** Use of `eval('this')` for global object resolution in multiple environments (`js_libraries/lynx-runtime-shared/src/nativeGlobal.ts`, `ttConsole.ts`) and `new Function('return this;')` in Android polyfills bypasses Content Security Policy (CSP) `unsafe-eval` restrictions, leading to crashes in CSP-restricted environments. Additionally, UUID generation in `js_libraries/lynx-runtime-shared/src/utils.ts` relied entirely on `Math.random()`, which is a weak pseudo-random number generator (PRNG) and unsuitable for security-sensitive UUIDs.

**Learning:** Global object resolution was likely copied from generic JavaScript environments where `eval` or `Function` is assumed to be safe. UUID generation likely aimed for simplicity or assumed an environment where Cryptographically Secure PRNGs (CSPRNG) are unavailable. Both practices introduce security risks in modern, restrictive web or mobile environments.

**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) for global object resolution before falling back to `Function` wrapped in a `try/catch` block. For UUID generation, prioritize `crypto.randomUUID()` or `crypto.getRandomValues()` before falling back to `Math.random()`.
