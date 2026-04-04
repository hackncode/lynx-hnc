## 2024-12-16 - [Safe Global Resolution without eval]
**Vulnerability:** Using `eval('this')` or `new Function('return this')()` to resolve the global object violates strict Content Security Policies (CSP) preventing `unsafe-eval`. It can cause the application to crash or fail to initialize in environments with strict CSPs and introduces dynamic execution risks.
**Learning:** `eval` and `new Function` were used as lazy fallbacks to get the global context because they bypass typical static analysis.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`) before resorting to `eval`.
