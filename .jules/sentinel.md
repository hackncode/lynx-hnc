## 2024-10-24 - [CSP unsafe-eval mitigation for Global Resolution]
**Vulnerability:** CSP bypass risk via `eval('this')` and `new Function('return this')()` for global scope resolution.
**Learning:** The application uses `eval` as a fallback to resolve the global object. This triggers CSP 'unsafe-eval' violations, which can cause runtime crashes or expose the app to XSS if exploited.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`). Fallback to `new Function('return this')()` only inside a try-catch block, returning `{}` on failure. Use `_globalThis` to avoid variable shadowing during detection.
