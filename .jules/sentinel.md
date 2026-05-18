## 2024-05-18 - Avoid eval for global object resolution
**Vulnerability:** Core libraries used `(0, eval)('this')` to resolve the global object.
**Learning:** This approach breaks in strict environments enforcing Content Security Policy (CSP) without `unsafe-eval`, causing application crashes and preventing the library from functioning securely.
**Prevention:** Always use safe feature detection (`globalThis`, `self`, `window`, `global`) first, falling back to `Function('return this')()` within a `try/catch` block.
