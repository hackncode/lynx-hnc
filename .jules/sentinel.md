## 2024-05-24 - Unsafe Eval CSP Violations in Polyfills
**Vulnerability:** Use of `new Function('return this')()` to resolve the global object causes Content Security Policy (CSP) 'unsafe-eval' violations in environments where eval is restricted.
**Learning:** These polyfills (`lynx-promise`, `lynx-polyfill`) relied on eval as the primary global resolution method, which breaks in secure contexts and triggers CSP errors or crashes.
**Prevention:** Use direct feature detection (`globalThis`, `self`, `window`, `global`, `this`) first, and only fallback to `new Function('return this')()` inside a `try/catch` block (returning `{}` on error) to prevent runtime crashes without modifying the actual global scope when eval is blocked.
