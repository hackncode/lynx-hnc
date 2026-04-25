## 2024-05-24 - Remove unsafe eval for global resolution
**Vulnerability:** Use of `(0, eval)('this')` in `nativeGlobal.ts` and `ttConsole.ts`.
**Learning:** This approach poses a CSP unsafe-eval risk and is generally discouraged.
**Prevention:** Always use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) instead of eval-based approaches.
