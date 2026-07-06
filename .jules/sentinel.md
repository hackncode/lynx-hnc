## 2024-11-20 - Fix unsafe-eval CSP Vulnerabilities in Global Object Resolution
**Vulnerability:** Codebase uses `Function('return this')()` and `eval('this')` for global object resolution, which violates strict Content Security Policy (CSP) rules and leads to 'unsafe-eval' crashes in secure environments.
**Learning:** Fallbacks for getting the global object must use safe feature detection (e.g., `typeof globalThis`) rather than relying purely on dynamic code evaluation.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). If all fail, fallback to `Function('return this')()` wrapped in a `try/catch` block that returns `{}` instead of directly evaluating code.
