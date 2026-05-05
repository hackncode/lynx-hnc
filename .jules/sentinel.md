## 2024-05-05 - [Remove unsafe-eval for global access]
**Vulnerability:** Codebase was using `new Function('return this')()` to access the global object. This pattern violates Content Security Policy (CSP) when `unsafe-eval` is not allowed, leading to application crashes or security vulnerabilities.
**Learning:** Global object resolution across the codebase must prioritize direct feature detection and avoid falling back to `eval('this')` or `new Function('return this')()`.
**Prevention:** Use safe feature detection such as `typeof globalThis !== 'undefined' ? globalThis : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this;` instead of eval-based approaches.
