## 2024-05-20 - Fix Weak Random Number Generation in UUID creation

**Vulnerability:** The `guid()` function in `js_libraries/lynx-runtime-shared/src/utils.ts` relied entirely on `Math.random()`, which is a pseudorandom number generator (PRNG) and not cryptographically secure, leading to predictable UUIDs.
**Learning:** For older JavaScript runtimes, or custom ones like Lynx where web APIs might differ, fallback logic often defaults to `Math.random()` when `crypto.randomUUID()` is missing. However, relying on this for generating unique identifiers (UUIDs) presents a risk of collision and predictability.
**Prevention:** Always check for cryptographically secure capabilities (`crypto.randomUUID`, `crypto.getRandomValues`) using direct feature detection (e.g., `typeof crypto !== 'undefined'`) and prioritize them over `Math.random()`. Use a pre-allocated single byte array with `crypto.getRandomValues()` to maintain performance while avoiding insecure random implementations.
