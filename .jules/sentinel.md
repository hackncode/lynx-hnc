## 2024-05-20 - Fix weak random number generation in UUID creation
**Vulnerability:** The `guid()` function in `js_libraries/lynx-runtime-shared/src/utils.ts` relies on `Math.random()` to generate UUIDs. This approach is not cryptographically secure, leading to predictable outputs and an elevated risk of ID collisions.
**Learning:** `Math.random()` is pseudo-random and inappropriate for security contexts where uniqueness and unpredictability are paramount. Standard feature detection can gracefully fallback across different environments.
**Prevention:** Use cryptographically secure random number generators (CSPRNG) like `crypto.randomUUID()` or `crypto.getRandomValues()` as the primary mechanism for generating identifiers, falling back to `Math.random()` only when securely unavailable.
