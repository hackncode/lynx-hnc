## 2024-05-24 - Unsafe Eval Pattern in Global Resolution
**Vulnerability:** Unsafe eval/Function usages (`(0, eval)('this')` and `new Function('return this')()`) to resolve the global object.
**Learning:** These practices violate Content Security Policy (CSP) when `unsafe-eval` is not permitted, causing runtime crashes.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) and fall back to `Function('return this')()` wrapped in a `try/catch` block.
