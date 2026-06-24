## 2024-06-24 - Dynamic Search Results Accessibility
**Learning:** Screen reader users are often left in the dark when dynamic search UI updates automatically upon typing. Because the DOM updates via JavaScript without a full page load, there's no native announcement of the status or the number of results found.
**Action:** Always include a visually-hidden `aria-live="polite"` region in dynamic search interfaces, and update its text content to announce the number of results found or if no results match. This ensures equitable feedback without disrupting visual users.
