## $(date +%Y-%m-%d) - CSP Unsafe-Eval Risk in Global Object Resolution
**Vulnerability:** Several files resolve the global object using `new Function('return this')()` or `eval('this')`.
**Learning:** This approach breaks when strict Content Security Policy (CSP) headers restricting `unsafe-eval` are present. This can lead to application crash or failure to resolve the global object safely.
**Prevention:** Always use safe feature detection (`typeof globalThis !== "undefined" ? globalThis : ...`) wrapped in a try/catch, only falling back to eval/Function if strictly necessary, avoiding empty object fallback `{}` which breaks global scope modifications.
