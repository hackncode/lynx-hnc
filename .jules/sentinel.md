## 2024-03-07 - Add URL scheme allowlist to openSchema

**Vulnerability:** The `NativeModules.ExplorerModule.openSchema` method in `explorer/homepage/components/homepage/index.tsx` accepted arbitrary URL strings directly from user input without any validation. This could allow execution of malicious deep links or unauthorized schemes.

**Learning:** URL schemes in mobile applications and deep links must always be validated against a strict allowlist. Passing unfiltered user input to native navigation modules is a common source of scheme-based vulnerabilities.

**Prevention:** Always implement an allowlist of permitted URL schemes (e.g., `http:`, `https:`, `file:`, `lynx:`) before passing user-controlled URLs to native routing or schema-opening functions.
