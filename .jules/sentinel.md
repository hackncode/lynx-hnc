## 2024-05-24 - [Fix CSP Unsafe-Eval in Global Resolvers]
**Vulnerability:** Use of `eval('this')` and `(new Function('return this;'))()` for global scope resolution violates strict Content Security Policy (CSP) 'unsafe-eval' directives, leading to application crashes or security exceptions in restricted environments.
**Learning:** Legacy global object detection methods often rely on `eval`, which introduces unnecessary execution risk.
**Prevention:** Always prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) before falling back to isolated dynamic execution wrapped in a `try/catch` block. Ensure the fallback safely handles execution denial (e.g., returning `{}`).
