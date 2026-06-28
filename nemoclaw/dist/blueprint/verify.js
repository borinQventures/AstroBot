"use strict";
// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBlueprintDigest = verifyBlueprintDigest;
exports.checkCompatibility = checkCompatibility;
const node_crypto_1 = require("node:crypto");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
function verifyBlueprintDigest(blueprintPath, manifest) {
    const errors = [];
    const actualDigest = computeDirectoryDigest(blueprintPath);
    if (manifest.digest && manifest.digest !== actualDigest) {
        errors.push(`Digest mismatch: expected ${manifest.digest}, got ${actualDigest}`);
    }
    return {
        valid: errors.length === 0,
        expectedDigest: manifest.digest,
        actualDigest,
        errors,
    };
}
function checkCompatibility(manifest, openshellVersion, openclawVersion) {
    const errors = [];
    if (manifest.minOpenShellVersion &&
        !satisfiesMinVersion(openshellVersion, manifest.minOpenShellVersion)) {
        errors.push(`OpenShell version ${openshellVersion} < required ${manifest.minOpenShellVersion}`);
    }
    if (manifest.minOpenClawVersion &&
        !satisfiesMinVersion(openclawVersion, manifest.minOpenClawVersion)) {
        errors.push(`OpenClaw version ${openclawVersion} < required ${manifest.minOpenClawVersion}`);
    }
    return errors;
}
function satisfiesMinVersion(actual, minimum) {
    const aParts = actual.split(".").map(Number);
    const mParts = minimum.split(".").map(Number);
    for (let i = 0; i < Math.max(aParts.length, mParts.length); i++) {
        const a = aParts[i] ?? 0;
        const m = mParts[i] ?? 0;
        if (a > m)
            return true;
        if (a < m)
            return false;
    }
    return true; // equal
}
function computeDirectoryDigest(dirPath) {
    const hash = (0, node_crypto_1.createHash)("sha256");
    const files = collectFiles(dirPath).sort();
    for (const file of files) {
        hash.update(file); // include relative path
        hash.update((0, node_fs_1.readFileSync)((0, node_path_1.join)(dirPath, file)));
    }
    return hash.digest("hex");
}
function collectFiles(dirPath, prefix = "") {
    // Optimization: use withFileTypes to avoid statSync per file
    const entries = (0, node_fs_1.readdirSync)(dirPath, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = (0, node_path_1.join)(dirPath, entry.name);
        const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
        const typeKnown = entry.isFile() ||
            entry.isDirectory() ||
            entry.isSymbolicLink() ||
            entry.isBlockDevice() ||
            entry.isCharacterDevice() ||
            entry.isFIFO() ||
            entry.isSocket();
        let isDir = entry.isDirectory();
        if (entry.isSymbolicLink() || !typeKnown) {
            isDir = (0, node_fs_1.statSync)(fullPath).isDirectory();
        }
        if (isDir) {
            files.push(...collectFiles(fullPath, relativePath));
        }
        else {
            files.push(relativePath);
        }
    }
    return files;
}
//# sourceMappingURL=verify.js.map