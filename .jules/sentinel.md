## 2024-05-15 - CSP Unsafe-Eval Risk
**Vulnerability:** Falling back to `eval('this')` or `new Function('return this')()` to get global context in strict Content Security Policy (CSP) environments.
**Learning:** Using `eval` and `new Function` violates CSP `unsafe-eval` restrictions, causing the application to crash or be blocked by security policies.
**Prevention:** Use direct feature detection (`typeof globalThis !== 'undefined'`, `self`, `window`, `global`, `this`) instead of evaluating strings.
