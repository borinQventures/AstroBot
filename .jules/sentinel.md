## 2024-05-18 - Command Injection Vulnerability via Sandbox Name
**Vulnerability:** Command injection in `exec` due to unsanitized `sandboxName` parameter from external state or configurations used in `openshell sandbox status` and `openshell sandbox get` commands within `status.ts` and `logs.ts`.
**Learning:** Using `exec` with dynamically generated string commands containing uncontrolled user or state input opens up command injection vulnerabilities. `promisify(exec)` behaves the same as `exec` under the hood.
**Prevention:** Always use `execFile` or `spawn` (and their promisified equivalents) from `node:child_process` when executing system binaries with variable arguments, passing arguments as an array instead of a concatenated string.
