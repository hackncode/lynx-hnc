## 2024-09-10 - Fix CSP unsafe-eval in global resolution
**Vulnerability:** Use of `eval()` and `new Function()` without proper fallback blocks execution when Content Security Policy (CSP) restricts `unsafe-eval`.
**Learning:** Replacing dynamic evaluation with direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) provides a secure and reliable way to access the global object without triggering CSP errors.
**Prevention:** Avoid `eval` and `new Function` for global object resolution. Rely on direct references and wrap in a `try/catch` fallback block as a last resort.
