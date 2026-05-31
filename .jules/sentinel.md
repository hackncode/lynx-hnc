## 2025-02-17 - Fix weak PRNG in guid generation
**Vulnerability:** Weak PRNG using Math.random() found in guid() function.
**Learning:** Using Math.random() for UUID generation can lead to collisions and predictability, causing a cryptographic weakness (CWE-338).
**Prevention:** Prioritize using crypto.randomUUID() and crypto.getRandomValues() with fallback to Math.random() when crypto is unavailable.
