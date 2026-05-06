## 2024-05-24 - Fix CSP unsafe-eval vulnerability in global object resolution
**Vulnerability:** Use of `eval('this')` and `new Function('return this;')()` to resolve the global object bypasses Content Security Policy (CSP) and can introduce risks in strict environments that disable unsafe-eval.
**Learning:** Historical methods for obtaining the global object relied on loose execution contexts which are fundamentally incompatible with modern CSP `unsafe-eval` restrictions.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) rather than evaluating strings to obtain global context references.
