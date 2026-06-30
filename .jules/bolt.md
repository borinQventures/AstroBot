## 2024-06-30 - Optimize directory walks with withFileTypes in Node.js
**Learning:** Found a specific anti-pattern in the CLI codebase where recursive directory walks used `readdirSync(path)` followed by `lstatSync(childPath)` for every single file. This scales poorly in Node.js on large file trees.
**Action:** Replace `readdirSync(path)` + `lstatSync(childPath)` loops with `readdirSync(path, { withFileTypes: true })`. This allows checking `.isDirectory()` or `.isSymbolicLink()` directly from the `Dirent` object without a secondary sys call per file, providing ~60% speedup.
