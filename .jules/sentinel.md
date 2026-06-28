## 2024-05-28 - Secure Command Execution
**Vulnerability:** Use of `exec` with string concatenation instead of `execFile`/`spawn` with an array of arguments, leading to command injection vulnerabilities.
**Learning:** Found multiple instances where `exec` (or `execSync` / `promisify(exec)`) was used with string concatenation. As documented in memory, we must use `execFile` or `spawn` (and their promisified equivalents) from `node:child_process` to prevent command injection.
**Prevention:** Always use `execFile` or `spawn` when dealing with external commands, especially when parts of the command are variable (like sandbox names or paths).
