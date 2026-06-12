## 2025-05-18 - Replace failure flags with interactive prompts
**Learning:** Found an anti-pattern in the CLI UX where missing an optional `--confirm` flag caused the program to print instructions and exit, forcing the user to retype the command. This creates friction, especially for destructive actions like `eject` where users want to see what will happen before confirming.
**Action:** Replaced the exit behavior with an interactive prompt. Always use interactive `promptConfirm` for destructive actions instead of just failing and telling the user to use a flag, so the flow remains continuous.
