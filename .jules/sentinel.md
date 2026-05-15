## 2024-05-15 - Prevent CSP 'unsafe-eval' crashes during global object resolution
**Vulnerability:** CSP 'unsafe-eval' crashes during global object resolution via `eval()` or `new Function()`.
**Learning:** CSP policies can block execution of `eval` or `new Function()`, causing crashes when attempting to get the global object reference using these mechanisms.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). If all fail, fallback to `Function('return this')()` wrapped in a `try/catch` block (returning `{}` on error) instead of simply returning `{}`, as an empty object prevents modifying the real global scope.
