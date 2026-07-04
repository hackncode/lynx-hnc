## 2024-05-24 - Fix unsafe-eval in global object resolution
**Vulnerability:** Use of `new Function('return this')()` causes Content Security Policy (CSP) unsafe-eval crashes.
**Learning:** Using `new Function` to resolve the global object violates strict CSPs. The feature detection chain must include `this` as well as standard global references to remain secure and functional.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) and wrap the `Function` constructor fallback in a `try/catch` block that securely returns an empty object on error.
