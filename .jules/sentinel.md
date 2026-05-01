## 2024-05-14 - Prevent CSP 'unsafe-eval' crash from dynamic global resolution
**Vulnerability:** The codebase was resolving the global scope by executing dynamically generated code (`new Function('return this')()`). This approach relies on JavaScript execution capabilities that are explicitly blocked by strict Content Security Policies (CSP) lacking `unsafe-eval`.
**Learning:** Using `new Function()` or `eval()` to acquire the global object is an anti-pattern that creates unnecessary risks of CSP crashes in secure web/JS environments.
**Prevention:** Always use direct feature detection (e.g., checking for `globalThis`, `self`, `window`, `global`, or `this`) to resolve the global object instead of executing arbitrary code.
