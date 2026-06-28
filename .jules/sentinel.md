## 2024-06-28 - Fix weak PRNG in GUID generation
**Vulnerability:** The `guid()` function in `js_libraries/lynx-runtime-shared/src/utils.ts` used `Math.random()`, which is a predictable pseudorandom number generator (PRNG). Using this for identifiers poses security risks.
**Learning:** `Math.random()` was likely chosen for simplicity and cross-environment compatibility without considering cryptographic weakness.
**Prevention:** Always use Cryptographically Secure Pseudorandom Number Generators (CSPRNG) like `crypto.randomUUID()` or `crypto.getRandomValues()` when generating unique identifiers, and fall back to `Math.random()` only if absolutely necessary in legacy environments.
