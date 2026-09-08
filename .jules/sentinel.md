## 2024-05-14 - Replace CSP-unsafe eval with feature detection
**Vulnerability:** Several utility and polyfill files used `eval('this')` or `new Function('return this')()` to get the global object, which can trigger Content Security Policy (CSP) unsafe-eval violations in environments where eval is restricted, causing unexpected crashes.
**Learning:** Hardcoding `eval` to access the global scope is unnecessary and unsafe when standard ambient variables are available. Wrapping feature detection IIFEs avoids runtime exceptions.
**Prevention:** Always use safe feature detection (`typeof globalThis`, `typeof self`, `typeof window`, etc.) with a safe fallback before resorting to `Function('return this')()` wrapped in a try/catch.
