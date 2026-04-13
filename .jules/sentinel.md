## 2024-05-24 - Fix CSP violations by removing eval and new Function for global object resolution
**Vulnerability:** The codebase uses `eval('this')` and `new Function('return this')()` to get the global object, which violates CSP policies that restrict `unsafe-eval` and `unsafe-new-function`.
**Learning:** Using `eval` or `new Function` for this purpose is unnecessary and creates security vulnerabilities.
**Prevention:** Use a safe pattern that explicitly checks for `globalThis`, `self`, `window`, and `global` instead of relying on dynamic code execution.
