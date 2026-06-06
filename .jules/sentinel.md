## 2024-06-06 - [Fix Weak Random Number Generation in UUID]
**Vulnerability:** Weak PRNG `Math.random()` used for generating security-sensitive `guid()` tokens in `@lynx-js/runtime-shared`.
**Learning:** `Math.random()` does not provide cryptographically secure random numbers, making UUIDs predictable. This could lead to token collisions or predictability attacks if used in a security-sensitive context.
**Prevention:** Always use `crypto.randomUUID()` or `crypto.getRandomValues()` as the primary entropy source when generating GUIDs/UUIDs, falling back to `Math.random()` only when cryptographically secure APIs are entirely unavailable.
