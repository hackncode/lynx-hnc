## 2024-05-22 - Input Validation in Explorer
**Vulnerability:** The `ExplorerModule.openSchema` method accepts arbitrary URL strings from the UI without validation, potentially allowing execution of dangerous schemes (e.g., `javascript:`, `vbscript:`) if the native implementation doesn't block them.
**Learning:** Native modules often rely on the JS layer for initial validation. Defense in depth requires validating inputs at the UI boundary before passing them to native code.
**Prevention:** Implement strict allowlists for URL schemes in the UI layer before calling native modules.
