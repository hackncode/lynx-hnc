## 2026-02-02 - [Input Validation in Developer Tools]
**Vulnerability:** Unvalidated user input was used to open URLs in the Explorer app, potentially allowing execution of unsafe schemes.
**Learning:** Even internal developer tools and "toy" apps can be vectors for attacks if they process untrusted input without validation.
**Prevention:** Always validate input schemes against an allowlist (e.g., http, https, file, lynx) before processing URLs, even in non-production apps.
