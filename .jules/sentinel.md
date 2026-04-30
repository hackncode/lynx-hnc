## 2024-05-24 - [Remove unsafe eval for global object resolution]
**Vulnerability:** The global object was resolved using `(new Function('return this;'))()` and `eval('this')`, which introduces CSP 'unsafe-eval' crashes and security risks.
**Learning:** Legacy polyfills and global resolution strategies often fallback to `eval`, creating unnecessary vulnerabilities when safer feature detection alternatives exist.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) for resolving the global object across environments instead of falling back to dynamic code execution.
