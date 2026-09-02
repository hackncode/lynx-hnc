## 2024-06-25 - Fix unsafe-eval CSP Vulnerability
**Vulnerability:** Code utilized `(0, eval)('this')` for global object resolution, which triggers Content Security Policy (CSP) 'unsafe-eval' violations and crashes in restricted environments.
**Learning:** Using `eval` or `Function` without proper feature detection and error handling leads to CSP errors. Global object resolution should rely primarily on direct feature detection (`globalThis`, `self`, `window`, etc.) and provide safe fallbacks.
**Prevention:** Avoid `eval` entirely. Prioritize `globalThis` or other environment-specific globals, and encapsulate any necessary dynamic evaluation inside a `try/catch` block that returns a safe default.
