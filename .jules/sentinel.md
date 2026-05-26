## 2024-05-18 - Fix CSP unsafe-eval in global resolution
**Vulnerability:** Codebase relies on `eval('this')` or `new Function('return this')()` to resolve the global object.
**Learning:** These methods are blocked in strict Content Security Policy (CSP) environments with `unsafe-eval` disallowed, causing crashes.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) first, and fallback to `Function('return this')()` wrapped in a `try/catch` block returning `{}` to handle CSP restrictions gracefully without crashing.
