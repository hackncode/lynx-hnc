## 2024-10-24 - CSP Bypass Risk via Dynamic Code Evaluation for Global Object
**Vulnerability:** Use of `eval('this')` and `new Function('return this')()` to determine the global context bypasses CSP rules.
**Learning:** These methods are treated as unsafe-eval and can crash the application or permit code injection in strict environments. They were used because developers lacked a universal method to get the global object.
**Prevention:** Always use direct feature detection (`typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this`) to resolve the global context safely without invoking the JS engine's parser.
