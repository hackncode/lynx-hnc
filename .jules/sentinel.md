## 2024-05-24 - [Secure RNG for GUID Generation]
**Vulnerability:** Weak random number generation using Math.random() for security-relevant unique identifiers (GUIDs).
**Learning:** `Math.random()` is not cryptographically secure, which can lead to predictable IDs and potential collision or guessing attacks.
**Prevention:** Prioritize `crypto.randomUUID()` or `crypto.getRandomValues()` for generating unique identifiers, and only fallback to `Math.random()` as a last resort in legacy environments.
