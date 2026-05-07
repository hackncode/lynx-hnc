## 2025-02-23 - Prevent CSP unsafe-eval in global object resolution
**Vulnerability:** Code used `eval` and `new Function` to resolve the global object, violating Content Security Policy (CSP) and causing crashes when `unsafe-eval` is blocked.
**Learning:** Directly executing strings via `eval` or `Function` is dangerous and blocked by modern security policies. An empty object fallback is insufficient as it prevents modifying the real global scope.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). If all fail, fallback to `Function('return this')()` wrapped in a `try/catch` block (returning `{}` on error).
