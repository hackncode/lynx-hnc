## 2024-05-18 - Insecure Randomness in UUID generation
**Vulnerability:** Weak random number generator (`Math.random()`) used for UUID generation in `guid()` utility function.
**Learning:** `Math.random()` is not cryptographically secure and predictable, which could lead to collisions or predictability in generated UUIDs that might be used in security contexts.
**Prevention:** Use `crypto.randomUUID()` where possible, and fallback to `crypto.getRandomValues()` for secure pseudo-random number generation before falling back to `Math.random()` only when crypto API is unavailable.
