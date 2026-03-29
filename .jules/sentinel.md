## 2025-02-14 - Use cryptographically secure UUID generation
**Vulnerability:** Weak PRNG (`Math.random()`) used for generating `guid()` values in `lynx-runtime-shared`, which can lead to predictability and UUID collisions.
**Learning:** Always prioritize Cryptographically Secure Pseudorandom Number Generators (CSPRNG) like `crypto.randomUUID` or `crypto.getRandomValues` over `Math.random()` when creating identifiers to reduce collision risk and predictability.
**Prevention:** Use built-in crypto module methods with feature detection as the default mechanism for generating UUIDs, only falling back to `Math.random()` in unsupported environments, and pre-allocate entropy arrays when using `crypto.getRandomValues()` for performance.
