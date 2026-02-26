## 2024-05-22 - Secure Random Number Generation
**Vulnerability:** Weak random number generation using `Math.random()` for GUIDs.
**Learning:** `Math.random()` is not cryptographically secure and should not be used for identifiers that might have security implications.
**Prevention:** Use `crypto.getRandomValues()` (with fallback to `Math.random()` only if strictly necessary for compatibility) for generating random bytes.
