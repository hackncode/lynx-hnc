## 2024-10-24 - [Insecure Random Number Generation in UUIDs]
**Vulnerability:** The guid() utility function used Math.random() which is a predictable PRNG, leading to weak UUIDs that could potentially be guessed or collide in high-throughput scenarios.
**Learning:** crypto.randomUUID and crypto.getRandomValues should be used for cryptographic randomness. Feature detection combined with graceful fallbacks handles environments lacking the crypto API. Using a pre-allocated Uint8Array(31) optimizes the fallback replacement.
**Prevention:** Always use the Web Crypto API for generating security-sensitive random values like UUIDs, IDs, or tokens, instead of Math.random().
