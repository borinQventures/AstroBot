## 2026-06-11 - [Command Injection]
**Vulnerability:** Found a command injection vulnerability in `bin/lib/credentials.js` where `execSync` was used with a string literal allowing for command injection via the `repo` parameter.
**Learning:** Usage of `execSync` with unsanitized user inputs or string interpolation leads to dangerous shell executions.
**Prevention:** Always use `execFileSync` (or `spawnSync`) passing the executable as the first argument, and providing user inputs through an array of arguments, preventing shell interpolation.
