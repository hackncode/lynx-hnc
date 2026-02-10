## 2024-05-22 - Lynx Runtime Environment Constraints
**Vulnerability:** Insecure Randomness (CWE-330) in `guid()` utility.
**Learning:** `js_libraries/lynx-runtime-shared` runs in environments (Lynx runtime) where standard web APIs like `crypto` might be missing or polyfilled differently than Node.js.
**Prevention:** Always feature-detect `crypto` and `crypto.getRandomValues` before using them, and provide a fallback if necessary to prevent runtime crashes.
