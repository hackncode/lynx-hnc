## 2024-05-11 - Safe Global Resolution
**Vulnerability:** Using `eval('this')` or `new Function('return this')()` causes crashes in environments with strict Content Security Policies (CSP) that restrict `unsafe-eval`.
**Learning:** Hardcoded evaluations for global object access pose security and stability risks when scripts are injected into CSP-restricted contexts.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) and only use `new Function` inside a `try/catch` block as a final fallback, returning `{}` on failure.
