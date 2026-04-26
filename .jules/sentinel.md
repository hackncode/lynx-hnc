## 2024-04-26 - Prevent CSP 'unsafe-eval' Crashes
**Vulnerability:** Code used dynamic evaluation (`eval` or `new Function`) to resolve the global object. This triggers Content Security Policy (CSP) violations in environments that restrict `unsafe-eval`.
**Learning:** Using `eval('this')` or `new Function('return this')()` is an anti-pattern for retrieving the global execution context. It compromises security for compatibility.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) rather than executing strings to resolve global objects.
