## 2024-05-15 - [Unsafe Global Resolution]
**Vulnerability:** Found `new Function('return this')()` in `js_libraries/lynx-promise/src/index.js` to resolve the global object.
**Learning:** This approach uses dynamic code execution which violates Content Security Policy (CSP) rules forbidding 'unsafe-eval', potentially causing crashes or security issues in strict environments.
**Prevention:** Always use safe feature detection (`globalThis`, `self`, `window`, `global`, `this`) when attempting to resolve the global scope, especially in libraries meant to be robust across different execution environments.
