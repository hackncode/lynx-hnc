## 2024-11-20 - Weak Random Number Generation in `guid`
**Vulnerability:** The `guid` function used `Math.random()`, which is cryptographically weak and predictable, to generate UUIDs.
**Learning:** `Math.random()` should never be used for security-critical identifiers. Global object feature detection should be used safely to access `crypto`.
**Prevention:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` for secure random generation, falling back to `Math.random()` only when `crypto` is truly unavailable, and accessing `crypto` via `typeof` to prevent `ReferenceError`s.
