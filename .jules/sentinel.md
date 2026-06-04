## 2024-06-04 - [CSP unsafe-eval global resolution]
**Vulnerability:** Global object resolution in `nativeGlobal.ts` uses `return this || (0, eval)('this')`, which violates CSP `unsafe-eval` policies.
**Learning:** `eval()` or `Function('return this')()` should not be used as the primary method to resolve the global context due to CSP strictness. Feature detection is preferred.
**Prevention:** Rely on standard feature detection for globals (`globalThis`, `self`, `window`, `global`, `this`). If fallback is necessary, use `try { return Function('return this')(); } catch (e) { return {}; }` to prevent crashes in strict CSP environments.
