## 2024-05-18 - Fix command injection vulnerability in sandbox CLI queries
**Vulnerability:** The codebase was using `node:child_process` `exec` to query openshell sandbox status, interpolating the `sandboxName` directly into the shell string execution. An attacker could potentially achieve remote code execution by exploiting command injection via a malicious sandbox name (e.g. `sandbox_name; touch /tmp/pwned`).
**Learning:** Shell string interpolation via `exec` combined with unsanitized variable input presents a massive command injection risk when executing sub-processes.
**Prevention:** Always use `execFile` or `spawn` instead of `exec`, and pass variable arguments securely as an array, eliminating shell string interpolation.
