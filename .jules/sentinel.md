
## 2024-05-24 - [Fix unsafe-eval CSP violation]
**Vulnerability:** Use of `new Function('return this')()` to resolve global context triggers Content Security Policy (CSP) `unsafe-eval` violations in secure environments.
**Learning:** In older or restrictive JS environments, fetching the global object via `new Function` is a common but dangerous pattern that breaks under strict CSPs.
**Prevention:** Use direct feature detection (`globalThis`, `window`, `self`, `global`) first, and only fallback to `Function('return this')()` wrapped in a `try/catch` block, ensuring no variables are shadowed (like `globalThis` check shadowing its own variable).
