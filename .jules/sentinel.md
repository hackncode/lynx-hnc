## 2024-05-24 - Fix CSP unsafe-eval vulnerability in global resolution
**Vulnerability:** The application used `new Function('return this')()` to resolve the global object, which crashes in environments with strict Content Security Policies (CSP) that block 'unsafe-eval'.
**Learning:** Using `new Function` or `eval` for feature detection or global object resolution introduces risks in secure environments where `unsafe-eval` is restricted, breaking the application initialization.
**Prevention:** Always use safe feature detection (e.g., checking `globalThis`, `self`, `window`, `global`, `this` sequentially) and wrap any fallback `Function('return this')()` calls in a `try/catch` block that returns `{}` to prevent uncaught exceptions.
