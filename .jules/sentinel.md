## 2024-05-18 - [CSP Compliance]
**Vulnerability:** Unsafe eval() and new Function() for global object resolution.
**Learning:** Using eval or Function to get the global object violates CSP 'unsafe-eval' policy and causes crashes or security risks.
**Prevention:** Use direct feature detection (globalThis, self, window, global, this) with a try/catch Function fallback instead.
