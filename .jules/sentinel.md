# Sentinel's Journal

## 2024-04-12 - [Initial Entry]
**Vulnerability:** Weak random number generation in `guid()` utility.
**Learning:** `Math.random()` is not cryptographically secure and can lead to predictable IDs if the seed state is known.
**Prevention:** Use `crypto.getRandomValues()` when available for stronger randomness, falling back to `Math.random()` only when necessary.
