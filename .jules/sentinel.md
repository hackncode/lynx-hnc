## 2024-05-15 - [Remove Hardcoded Keystore Passwords]
**Vulnerability:** Hardcoded keystore and key passwords were found in `explorer/android/lynx_explorer/gradle.properties`.
**Learning:** Default placeholder values in boilerplate template files for Android builds can inadvertently leak sensitive signing secrets if committed directly to version control.
**Prevention:** Never commit `.properties` files containing real secrets, and initialize templates with empty values or instructions to provide them via local environment variables.
