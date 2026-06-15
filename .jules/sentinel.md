## 2026-03-24 - API Key Leak in CLI Exec Errors
**Vulnerability:** API keys (like `NVIDIA_API_KEY`) passed in command-line arguments to `execOpenShell` were being leaked in the error logs and terminal output when the underlying openshell process failed.
**Learning:** `execFileSync` returns error messages that include the full failed command, exposing sensitive arguments (like API keys). Simply stringifying `err` or `err.stderr` will log these secrets.
**Prevention:** When passing credentials via CLI, always sanitize or mask potential credential leaks in the `catch` blocks before logging `String(err)` or `err.stderr`.
