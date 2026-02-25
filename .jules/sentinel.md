## 2024-05-24 - Native Module Schema Validation
**Vulnerability:** Unvalidated user input passed directly to `NativeModules.ExplorerModule.openSchema`.
**Learning:** The application exposes a generic schema opener (`openSchema`) via native modules without built-in allowlisting, relying on frontend validation.
**Prevention:** Always implement strict allowlisting for URL schemes in frontend code before invoking native URL handlers to prevent execution of unintended schemes (e.g., `javascript:`, `vbscript:`, `data:`).
