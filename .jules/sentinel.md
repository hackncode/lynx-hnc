## 2026-02-04 - [Native Module Input Validation]
**Vulnerability:** User input from `Explorer` homepage was passed directly to `NativeModules.ExplorerModule.openSchema` without validation.
**Learning:** React Native/Lynx modules often trust the JS layer to validate inputs before calling native methods. The native layer may not validate schemes, leading to potential abuse.
**Prevention:** Always validate user-provided URLs/inputs at the boundary (JS side) before passing them to native modules. Use a blocklist or allowlist for URL schemes.
