## 2024-06-24 - Avoid Secret Leakage in Command Execution Errors
**Vulnerability:** API keys passed as command-line arguments to `execFileSync` were being leaked in the logs when commands failed. By default, Node's `Error.message` and `String(err)` include the full command string, exposing any secrets it contains.
**Learning:** Even if standard output and error are captured, any default exception stringification from `child_process` execution can silently capture and log full command invocations.
**Prevention:** Always sanitize exception messages or `stderr` containing executed commands before logging them, ideally by applying a masking function to any known secrets.
