## 2024-05-20 - [Missing Schema Validation in NativeModules]
**Vulnerability:** `NativeModules.ExplorerModule.openSchema` accepts any string without validation, allowing execution of arbitrary schemes.
**Learning:** Native modules in this codebase (specifically `ExplorerModule`) rely on the JS layer to validate input before calling native methods.
**Prevention:** Always implement strict allowlist validation for schema/URL inputs before passing them to `NativeModules` methods.
