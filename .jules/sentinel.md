## 2024-05-24 - Redact API Keys from Unhandled CLI Error Outputs
**Vulnerability:** API keys injected via `--credential` into `execFileSync` were being logged in plaintext if the underlying OpenShell command failed because the whole string was logged, including the original bash command that executed it.
**Learning:** `execFileSync` incorporates the full command string inside `Error.message` and `String(err)`. If not manually redacted, logging errors from `execFileSync` will leak credentials to `stderr`.
**Prevention:** Scrub the string value of the error using regex targeting the `--credential` argument and `*_API_KEY` identifiers before logging or capturing `stderr`.
