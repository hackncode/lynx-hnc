## 2024-03-12 - Insecure Randomness in `guid()` function
**Vulnerability:** The `guid()` utility function used `Math.random()` to generate UUIDs, which is not cryptographically secure and could lead to predictable identifiers.
**Learning:** `Math.random()` should never be used for generating sensitive identifiers or tokens as it uses deterministic pseudo-random number generators that can be predicted.
**Prevention:** Always prioritize cryptographically secure random number generators like `crypto.randomUUID()` or `crypto.getRandomValues()` when generating unique identifiers, and use `Math.random()` only as a last resort fallback when secure APIs are unavailable.
