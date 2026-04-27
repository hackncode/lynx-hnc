## 2026-04-27 - [Fix CSP Bypass via Unsafe Global Resolution]
**Vulnerability:** CSP 'unsafe-eval' crashes and bypasses caused by using `eval('this')` and `new Function('return this')()` to resolve the global object.
**Learning:** Legacy polyfills and libraries often default to `eval` or `new Function` for global resolution, which breaks environments with strict Content Security Policies (CSP) and poses code execution risks.
**Prevention:** Always prioritize direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) for global object resolution and avoid falling back to string evaluation mechanisms.
