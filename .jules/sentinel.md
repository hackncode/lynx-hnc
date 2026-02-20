## 2024-05-22 - Unsanitized Native Module Calls in Lynx Explorer
**Vulnerability:** The `openSchema` function in `explorer/homepage` passed user input directly to `NativeModules.ExplorerModule.openSchema` without validation.
**Learning:** Lynx applications often bridge user input to native modules. Developers might assume native modules handle validation, or that the restricted environment prevents harm. However, passing unvalidated schemes (like `javascript:`) can lead to XSS or unintended behavior if the native handler is permissive.
**Prevention:** Always validate user input at the JS layer before passing it to native modules. Use an allowlist for URL schemes (`http`, `https`, `lynx`, `file`, `assets`) to prevent dangerous protocols.
