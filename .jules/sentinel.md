## 2024-05-15 - Unsafe-eval in global resolution
**Vulnerability:** Global object resolution was using `eval('this')` and `new Function('return this;')()`, which violate strict Content Security Policy (CSP) rules prohibiting `unsafe-eval`.
**Learning:** Using `eval` or `new Function` just to resolve the global object is a common anti-pattern that leads to application crashes in environments with strict CSP. Direct feature detection is much safer.
**Prevention:** Always prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) when attempting to resolve the global context to ensure CSP compatibility.
