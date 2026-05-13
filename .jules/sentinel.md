## 2024-05-14 - Remove unsafe-eval in global resolution
**Vulnerability:** The use of `eval('this')` and `new Function('return this')()` introduces `unsafe-eval` risks and can cause CSP crashes in strict environments.
**Learning:** Naive global object resolution via eval fails in modern web/app environments with strict Content Security Policies. Feature detection must be used to safely access global scopes without triggering CSP violations.
**Prevention:** Prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) before falling back to eval wrapped in a try/catch block.
