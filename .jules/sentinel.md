## 2024-05-18 - [Fix Arbitrary URL Scheme Opening in Native Module]
**Vulnerability:** The `openSchema` function passed unfiltered, user-provided inputs directly to the `NativeModules.ExplorerModule.openSchema` native method, which could lead to arbitrary URL scheme opening, potentially executing unauthorized logic on the host platform.
**Learning:** Functions exposing native module capabilities like scheme opening must rigorously validate their inputs before execution to ensure only authorized actions are performed.
**Prevention:** Always implement an allowlist of valid/trusted URL schemes (e.g., `http`, `https`, `lynx`) and rigorously validate user input against it (using tools like `startsWith` after standardizing casing) before calling sensitive native APIs.
