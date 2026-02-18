## 2024-10-24 - Native Module Input Validation
**Vulnerability:** Unvalidated input passed to `NativeModules.ExplorerModule.openSchema`.
**Learning:** Native bridge methods trust JS inputs implicitly; validation must happen in JS layer before crossing the bridge.
**Prevention:** Always whitelist allowed schemes/arguments for native calls.
