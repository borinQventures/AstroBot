## 2024-05-18 - Prevent Command Injection in CLI Wrappers

**Vulnerability:** The application was using `exec` and `execAsync` to execute shell commands (e.g., `openshell sandbox status ${sandboxName}`). If `sandboxName` contains malicious shell metacharacters (like `;`, `|`, `&`, or `$()`), it could lead to arbitrary command execution on the host machine.
**Learning:** This command injection pattern is common when writing wrappers around external CLI tools. Using template literals or string concatenation to build commands for `exec` is inherently unsafe because the string is passed to a shell (like `/bin/sh`) which interprets metacharacters.
**Prevention:** Always use `execFile` or `spawn` instead of `exec`. These functions execute the target binary directly without invoking a shell. Pass arguments as an array of strings, ensuring they are treated strictly as arguments and not evaluated as shell commands.
