## 2025-02-18 - Input Validation for Lynx Schema URLs
**Vulnerability:** The "Card URL" input field in `explorer/homepage` accepted any string, relying solely on the native layer validation which silently failed or logged errors for unsupported schemes like `javascript:` or `ftp:`.
**Learning:** Even if the native layer handles invalid inputs safely (by rejecting them), the UI layer should validate input to provide immediate feedback to the user and prevent unnecessary calls to the native bridge. This improves UX and adds a layer of defense (defense in depth).
**Prevention:** Validate URL schemes on the JS side before invoking native modules. Provide clear error messages for unsupported schemes.
