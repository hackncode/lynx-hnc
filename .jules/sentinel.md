## 2024-05-30 - [MEDIUM] Secure random UUID generation
**Vulnerability:** Weak random number generation using Math.random for security-sensitive unique IDs.
**Learning:** Math.random lacks the necessary cryptographic strength to guarantee high uniqueness, making IDs susceptible to collision attacks or guessing.
**Prevention:** Rely on crypto.randomUUID() or crypto.getRandomValues() when available for robust entropy generation, keeping Math.random solely as a fallback mechanism for unsupported environments. Ensure fallback avoids generating many tiny arrays.
