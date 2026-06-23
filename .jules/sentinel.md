## 2025-03-09 - Exposed Sensitive Data in Logs

**Vulnerability:** The API key was being leaked in error messages logged via `logger.error` during the onboarding process (`src/commands/onboard.ts`), specifically when `execOpenShell` failed to create or update the provider, or when setting the inference route. The `stderr` or error message directly included the command arguments which contained the plaintext API key.

**Learning:** When executing shell commands that accept sensitive data (like credentials) as arguments, any error thrown by the child process (such as `execFileSync` or `execSync`) may include the full command string or output containing that sensitive data. Directly logging the `stderr` or stringified error object will expose this data in logs.

**Prevention:** Always sanitize or scrub error messages and stack traces derived from shell commands before passing them to the logging system. Implement a `sanitizeOutput` helper (or similar) that masks known sensitive strings (e.g., using `maskApiKey`) within the output before calling `logger.error`.
