## 2024-06-05 - [CSP Unsafe-Eval in Global Object Resolution]
**Vulnerability:** Use of `eval('this')` and `new Function('return this')()` causes crashes in strict Content Security Policy (CSP) environments preventing `unsafe-eval`.
**Learning:** Runtime global getters must prioritize standards-based direct feature detection (`globalThis`, `self`, `window`, etc.) and fall back to `Function('return this')()` only within a `try/catch` block.
**Prevention:** Always use safe feature detection arrays before resorting to code execution functions for scope retrieval.
