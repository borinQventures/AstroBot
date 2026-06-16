## 2024-03-22 - Tabular Formatting in CLI Prompts
**Learning:** For interactive CLI prompt selection, list items with varying label lengths can cause appended hints to look misaligned and messy.
**Action:** Always dynamically pad option labels (`padEnd(maxLength)`) and choice numbers (`padStart(maxDigits)`) when displaying CLI selection lists with hints to ensure a clean, tabular, and readable alignment.
