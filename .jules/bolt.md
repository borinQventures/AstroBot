## 2026-06-27 - Optimized `collectSymlinkPaths` using `withFileTypes: true`
**Learning:** `readdirSync` by default returns only filenames, which forces subsequent `lstatSync` calls inside a recursive walk.
**Action:** Always use `readdirSync(path, { withFileTypes: true })` and pass down `.isSymbolicLink()` and `.isDirectory()` to recursive calls to eliminate the overhead of repetitive file system stat operations during tree traversals.
