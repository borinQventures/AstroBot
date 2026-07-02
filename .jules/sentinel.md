## 2024-07-02 - Prevent Command Injection with execFile
**Vulnerability:** Command Injection via string interpolation in child_process.exec.
**Learning:** Using `exec("command " + input)` allows malicious input to execute arbitrary shell commands if the input is not sanitized. Node's `execFile` or `spawn` takes arguments as an array instead, bypassing the shell and avoiding command injection.
**Prevention:** Always use `execFile` or `spawn` from `node:child_process` instead of `exec` when taking user or state-driven inputs as command arguments.
