## 2024-05-24 - [Fix unsafe-eval CSP violation in global resolution]
**Vulnerability:** Use of `eval('this')` and `new Function('return this')()` to resolve the global object in multiple places.
**Learning:** CSP environments block `eval` and `new Function` with string arguments (unsafe-eval), leading to application crashes. These are often used as lazy fallbacks to find the global object.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) in strict order when attempting to resolve the global context safely, avoiding any string evaluation APIs.
