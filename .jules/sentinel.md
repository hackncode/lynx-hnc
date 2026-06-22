## 2024-11-20 - [CSP eval Bypass]
**Vulnerability:** Direct use of `eval('this')` or `new Function('return this')()` to resolve the global object.
**Learning:** Using `eval` or `new Function` can crash the application in environments with strict Content Security Policies (CSP) that forbid `unsafe-eval`.
**Prevention:** Use direct feature detection (`typeof globalThis !== 'undefined'`, etc.) and fallback to `new Function` wrapped in a `try/catch` block.
