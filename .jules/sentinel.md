## 2024-05-24 - [Weak PRNG for identifiers]
**Vulnerability:** Weak PRNG (`Math.random`) used for UUID generation in `guid()` function.
**Learning:** The UUID function relied purely on `Math.random`, which is not cryptographically secure and can lead to predictable identifiers.
**Prevention:** Always prioritize `crypto.randomUUID()` or `crypto.getRandomValues()` for generating random identifiers, falling back to `Math.random` only as a last resort in environments without Web Crypto API.
