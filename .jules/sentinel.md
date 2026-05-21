## 2025-02-14 - Fix CSP unsafe-eval risk during global resolution
**Vulnerability:** The codebase relies on `eval('this')` or `new Function('return this')()` to dynamically resolve the global execution context.
**Learning:** These unsafe evaluations can trigger Content Security Policy (CSP) violations ('unsafe-eval'), crashing the application if a strict CSP is enforced. A fallback object `{}` must be used if everything fails, avoiding modifying the real global scope.
**Prevention:** Prefer direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) before falling back to `Function` wrapped in a `try/catch`.
