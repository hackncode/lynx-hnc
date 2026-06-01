
## 2024-06-01 - [Prevent CSP unsafe-eval crashes in global object resolution]
**Vulnerability:** Found `new Function('return this')()` usage for global object resolution. This causes application crashes in strict Content Security Policy (CSP) environments where 'unsafe-eval' is blocked, failing securely but breaking functionality.
**Learning:** Hardcoded eval-like constructs (`Function('return this')()`) are often used to reliably get the global object across environments (Node, Browser, WebWorkers). However, they violate CSP and should be avoided as primary resolution methods.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). Only fallback to `Function('return this')()` wrapped in a `try/catch` block (returning `{}` on error) if all feature detections fail.
