## 2024-03-18 - Cryptographically Insecure UUID Generation and Loop Allocation

**Vulnerability:** Weak random number generation using `Math.random()` to generate UUIDs inside `js_libraries/lynx-runtime-shared/src/utils.ts`. `Math.random()` is not cryptographically secure and the outputs are predictable.

**Learning:** When using `crypto.getRandomValues()` as a fallback for UUID generation or inside a `String.prototype.replace` loop, we must allocate a single byte array of the required entropy beforehand (e.g., `new Uint8Array(31)`) rather than allocating small arrays per iteration. Allocating in the loop causes significant performance bottlenecks.

**Prevention:** Always use cryptographically secure RNGs (`crypto.randomUUID()` or `crypto.getRandomValues()`) for generating IDs or tokens, relying on `Math.random()` only as a last-resort fallback. When using `getRandomValues` inside loops/replaces, pre-allocate the required bytes in one go instead of fetching entropy character by character.
