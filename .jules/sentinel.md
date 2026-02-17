## 2024-10-23 - Validate NativeModules Inputs
**Vulnerability:** `NativeModules.ExplorerModule.openSchema` accepted arbitrary user input as a URL scheme, potentially allowing execution of unintended actions or malicious deep links (e.g., `javascript:`, `intent:`).
**Learning:** `ExplorerModule` exposes powerful native capabilities directly to the JS runtime without inherent validation. The lack of validation was likely due to the assumption that this is a developer tool ("Explorer").
**Prevention:** Always validate user input passed to `NativeModules` methods against an allowlist of expected values or patterns (e.g., specific schemes: `http`, `https`, `file`, `lynx`, `assets`).
