## 2024-05-15 - [Secure GUID Generation]
**Vulnerability:** The `guid()` function in `@lynx-js/runtime-shared` was using `Math.random()` for generating UUID v4s. `Math.random()` is not cryptographically secure and predictable, which can lead to collisions or predictability in unique identifiers.
**Learning:** For a shared JS runtime, relying purely on `Math.random()` is an unsafe default for generating GUIDs. The runtime environment may vary (Node.js, browser, self, or globalThis), meaning crypto API availability can vary.
**Prevention:** Always attempt to use `crypto.randomUUID()` or `crypto.getRandomValues()` when generating UUIDs or random identifiers in JavaScript, and only fallback to `Math.random()` as a last resort if standard crypto libraries aren't available in the environment.
