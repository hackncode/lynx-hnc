## 2025-05-15 - [Unvalidated URL Scheme in ExplorerModule.openSchema]
**Vulnerability:** The `ExplorerModule.openSchema` function in `explorer/homepage` accepted user-provided URLs without validating the scheme, potentially allowing execution of unsafe protocols (e.g., `javascript:`) or unintended local file access.
**Learning:** Native bridge methods that handle URLs or deep links must validate inputs on both the JavaScript side and the native side to ensure security (defense in depth). relying solely on implicit behavior of native OS handlers is insufficient.
**Prevention:** Implement strict allowlists for URL schemes (e.g., `http`, `https`, `file`, `lynx`) before passing user input to native modules.
