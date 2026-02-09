## 2024-05-23 - Eval Usage in Lynx Core
**Vulnerability:** Use of `eval()` in `js_libraries/lynx-core/src/app/app.ts` to execute loaded scripts.
**Learning:** This is a core architectural feature for loading dynamic components and modules in the Lynx runtime, mimicking a JS engine's behavior. It cannot be simply removed.
**Prevention:** Ensure `readScript` only loads from trusted sources. Future security reviews should focus on the source of the scripts rather than the `eval` itself.
