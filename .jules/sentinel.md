## 2024-06-30 - Fix CSP unsafe-eval in global object resolution
**Vulnerability:** Code used `eval('this')` and `new Function('return this')()` to resolve the global object, creating CSP unsafe-eval risks and potential security vulnerabilities in strict environments.
**Learning:** In environments with strict Content Security Policies, `eval` or `Function` constructors will crash the application or be blocked.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) and only fallback to `Function('return this')()` wrapped in a `try/catch` block that returns `{}`. Avoid naming the variable `globalThis` to prevent shadowing in the check.
