## 2026-03-06 - Unvalidated URL Scheme Execution
**Vulnerability:** User input from the `homepage` card URL input is passed directly to `NativeModules.ExplorerModule.openSchema(inputValue)` without validation. This allows attackers to execute arbitrary URL schemes on the native device (e.g. `tel:`, `sms:`, intents) which is a significant intent injection/arbitrary code execution risk.
**Learning:** React Native / Lynx applications that bridge native scheme execution need to implement allowlists. Even simple text inputs are attack vectors if bridged directly.
**Prevention:** Implement an allowlist in the JS layer (e.g., checking `startsWith` against `http:`, `https:`, `file:`, `lynx:`, etc.) before calling native module intent handlers.
