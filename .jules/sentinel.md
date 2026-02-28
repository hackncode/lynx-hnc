## 2024-05-18 - [Fix Schema Injection]
**Vulnerability:** The `NativeModules.ExplorerModule.openSchema` was directly accepting and executing user-provided strings as schemas/URLs without any validation. This represents a CRITICAL SSRF / Schema Injection vulnerability as an attacker could potentially execute arbitrary intents, deep links, or schemes.
**Learning:** React Native / Lynx applications that expose a method to open URLs or schemes natively must validate the schemes to prevent arbitrary execution, even in a "browser-like" interface.
**Prevention:** Always use an allowlist for supported schemas (`http://`, `https://`, `file://`, `lynx://`, etc.) and validate the input by lowercasing it and checking if it starts with an allowed prefix before passing it to the native module.
