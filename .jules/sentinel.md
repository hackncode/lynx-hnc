## 2024-05-15 - [Fix CSP unsafe-eval in global resolution]
**Vulnerability:** Several files across `js_libraries` used `eval('this')` or `new Function('return this')()` to resolve the `global` object. This creates a significant CSP 'unsafe-eval' risk and could lead to XSS or code execution vulnerabilities if any input to these functions were manipulable, though here it was used defensively.
**Learning:** `eval` and `new Function` were being used as fallbacks for missing global object references in different environments (Node, Browser, Lynx runtime).
**Prevention:** Use direct feature detection instead (e.g., checking for `globalThis`, `self`, `window`, and `global`) to safely resolve the global object without violating CSP policies.
