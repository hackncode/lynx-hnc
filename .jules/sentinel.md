## 2024-03-04 - [Init]
**Vulnerability:** None
**Learning:** Sentinel initialized
**Prevention:** N/A

## 2024-03-04 - [Unauthorized Schema Execution]
**Vulnerability:** The `HomePage` component passed unsanitized user input (`inputValue`) to `NativeModules.ExplorerModule.openSchema(inputValue)`, which allowed the potential execution of unauthorized schemas (e.g., `javascript:`, `tel:`, etc.).
**Learning:** We must ensure that URL inputs given to native components strictly adhere to expected schemes so as not to abuse intent handling or launch arbitrary commands on the native device.
**Prevention:** Always validate against an allowlist of permitted schemas (e.g., `http:`, `https:`, `file:`, `lynx:`, `assets:`, `lynx_assets:`) using `.startsWith()` before passing user-controlled input directly to the system intent handler or URL opener.
