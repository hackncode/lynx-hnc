## 2023-10-25 - CSP Unsafe-Eval Risk in Global Object Resolution
**Vulnerability:** `eval('this')` and `new Function('return this')()` were used to access the global object, which triggers Content Security Policy (CSP) errors and weakens security by requiring `unsafe-eval`.
**Learning:** These methods are often used for cross-environment compatibility, but they bypass safe feature detection (`globalThis`, `window`, `global`) and unnecessarily invoke the JS compiler, which is a security risk.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). If all fail, only then fallback to `Function('return this')()` wrapped in a `try/catch` block (returning `{}` on error) to prevent CSP crashes.
