## 2024-05-20 - Ensure Cryptographically Secure PRNG for UUID Generation

**Vulnerability:** Weak PRNG (`Math.random()`) used for generating UUIDs in `guid()` utility within `js_libraries/lynx-runtime-shared/src/utils.ts`. Predictable values can be generated, compromising uniqueness and security.

**Learning:** When using `crypto.getRandomValues()` as a fallback for UUID generation or inside a `String.prototype.replace` loop, allocating a single byte array of the required entropy beforehand rather than allocating small arrays per iteration avoids significant performance bottlenecks. Direct feature detection (`typeof crypto !== 'undefined'`) should be used over relying on a global object for the `crypto` API.

**Prevention:** Prioritize `crypto.randomUUID()` using feature detection. If unavailable, use `crypto.getRandomValues()` with pre-allocated entropy before entering loops. Fallback to `Math.random()` only when the `crypto` API is completely missing.
