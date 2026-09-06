## 2025-03-05 - [MEDIUM] Fix weak random number generation
**Vulnerability:** Weak random number generation using Math.random() in guid() utility.
**Learning:** Math.random() is predictable and can be exploited. We should use crypto for UUID generation when possible.
**Prevention:** Use crypto.randomUUID() or crypto.getRandomValues() as priority with a fallback to Math.random().
