## 2024-07-05 - 🛡️ Sentinel: [HIGH] Fix unsafe-eval CSP violation in global object resolution

**Vulnerability:** The global object was resolved using `eval('this')` or `Function('return this')()`, which violates Content Security Policy (CSP) when `unsafe-eval` is blocked.
**Learning:** `eval` and `Function` constructors execute code dynamically, which is dangerous and blocked by modern security configurations (CSP). Using them for simple global variable resolution is unnecessary and insecure. The `android-polyfill.js` component explicitly relied on `(new Function('return this;'))()`, which would crash in strict environments.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) in strict order to resolve the global object. Only use `Function` constructor wrapped in a `try/catch` as a last resort fallback to prevent application crashes, returning an empty object if execution is blocked by CSP.
