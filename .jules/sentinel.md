## 2024-05-18 - Prevent CSP unsafe-eval crashes by removing new Function and eval

**Vulnerability:** Use of `eval()` and `new Function()` to retrieve the global object in a JS environment.
**Learning:** CSP policies can block `unsafe-eval` causing crashes. The `global` object resolution must use standard feature detection to avoid crashes instead of falling back to string execution.
**Prevention:** Always use direct feature detection like `typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this` to access global scope securely.
