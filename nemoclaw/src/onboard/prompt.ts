// SPDX-FileCopyrightText: Copyright (c) 2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

export interface SelectOption {
  label: string;
  value: string;
  hint?: string;
}

export async function promptInput(question: string, defaultValue?: string): Promise<string> {
  const rl = createInterface({ input: stdin, output: stdout });
  const suffix = defaultValue ? ` [${defaultValue}]` : "";
  try {
    for (;;) {
      const answer = await rl.question(`${question}${suffix}: `);
      const trimmed = answer.trim();

      if (trimmed) return trimmed;
      if (defaultValue) return defaultValue;

      console.log("  A value is required. Please try again.");
    }
  } finally {
    rl.close();
  }
}

export async function promptConfirm(question: string, defaultYes = true): Promise<boolean> {
  const rl = createInterface({ input: stdin, output: stdout });
  const hint = defaultYes ? "(Y/n)" : "(y/N)";
  try {
    const answer = await rl.question(`${question} ${hint}: `);
    const trimmed = answer.trim().toLowerCase();
    if (!trimmed) return defaultYes;
    return trimmed === "y" || trimmed === "yes";
  } finally {
    rl.close();
  }
}

export async function promptSelect(
  question: string,
  options: SelectOption[],
  defaultIndex = 0,
): Promise<string> {
  const rl = createInterface({ input: stdin, output: stdout });
  try {
    console.log(`\n${question}\n`);

    const maxLabelLen = options.reduce((max, opt) => Math.max(max, opt.label.length), 0);
    const maxNumLen = String(options.length).length;

    for (let i = 0; i < options.length; i++) {
      const marker = i === defaultIndex ? "*" : " ";
      const numStr = String(i + 1).padStart(maxNumLen, " ");
      const optHint = options[i].hint;
      const paddedLabel = optHint ? options[i].label.padEnd(maxLabelLen) : options[i].label;
      const hint = optHint ? `  ${optHint}` : "";
      console.log(`  ${marker} ${numStr}. ${paddedLabel}${hint}`);
    }
    console.log("");

    for (;;) {
      const answer = await rl.question(
        `Select [1-${String(options.length)}] (default: ${String(defaultIndex + 1)}): `,
      );
      const trimmed = answer.trim();

      if (!trimmed) return options[defaultIndex].value;

      const num = parseInt(trimmed, 10);
      if (!isNaN(num) && num >= 1 && num <= options.length) {
        return options[num - 1].value;
      }

      console.log(`  Invalid choice. Enter a number between 1 and ${String(options.length)}.`);
    }
  } finally {
    rl.close();
  }
}
