## 2024-05-24 - CSP 'unsafe-eval' crash via global resolution
**Vulnerability:** Global resolution wrappers using `eval('this')` or `new Function('return this')()` trigger strict CSP violations, leading to crashes in environments that enforce `unsafe-eval` prohibitions.
**Learning:** Legacy methods to fetch the global object (e.g. `eval('this')`) are inherently dangerous in CSP-restricted environments. These are common sources of security bypasses and crashes.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) in a strict fallback chain to safely retrieve the global scope without evaluating code strings dynamically.
