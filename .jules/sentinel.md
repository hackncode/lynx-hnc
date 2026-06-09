## 2024-05-24 - [Medium] Fix Weak Randomness in guid()
**Vulnerability:** Weak random number generation using Math.random() for GUIDs. Math.random is not cryptographically secure and predictable.
**Learning:** Security-critical APIs like crypto should be accessed using direct feature detection (e.g., typeof crypto !== 'undefined') to prevent CSP eval risks.
**Prevention:** Use crypto.randomUUID() or crypto.getRandomValues() with fallback.
