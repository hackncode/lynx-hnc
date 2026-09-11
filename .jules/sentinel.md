
## 2024-05-24 - Unsafe eval used for global object resolution
**Vulnerability:** Several JS files were using `eval('this')` or `new Function('return this')()` to resolve the global object. This pattern is vulnerable to Content Security Policy (CSP) unsafe-eval restrictions and could crash execution in environments with strict CSPs.
**Learning:** When attempting to resolve the global environment, `eval` or `new Function` should be avoided as the primary method due to security configurations in many host environments.
**Prevention:** Use direct feature detection instead: check `typeof globalThis`, `self`, `window`, `global`, and `this` before falling back to `Function('return this')()` inside a try-catch block.
