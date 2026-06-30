## 2024-03-24 - Accessibility Labels for Search Input
**Learning:** Found an accessibility issue pattern with search inputs and icon-only close buttons lacking screen-reader accessible labels (`aria-label`) and having visible but decorative icons that should be hidden from screen readers (`aria-hidden="true"`).
**Action:** When working on JavaScript-generated UI elements, actively search for inputs and buttons, especially icon-only buttons, to ensure they have appropriate `aria-label` attributes and that inner decorative icons use `aria-hidden="true"`.

## 2024-03-25 - Redundant ARIA Labels
**Learning:** Adding an `aria-label` to a button that already contains visible, descriptive text (e.g., `<button aria-label="Clear all">Clear all</button>`) causes screen readers to read the text redundantly or favors the aria-label unnecessarily.
**Action:** Remove redundant `aria-label` attributes on buttons that already have clear, visible text content, and only use `aria-label` for icon-only buttons or when the visible text lacks sufficient context.
