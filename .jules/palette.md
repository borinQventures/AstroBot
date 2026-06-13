## 2024-06-13 - CLI Prompt Re-Prompting
**Learning:** In CLI applications, silently defaulting to "No" when receiving invalid confirmation input (like typos) can lead to frustrating user experiences and accidental action cancellations. Reprompting explicitly ensures user intent is captured accurately.
**Action:** Next time working on CLI prompts, always implement validation loops for explicit yes/no prompts rather than relying on strict boolean fallbacks for all non-affirmative inputs.
