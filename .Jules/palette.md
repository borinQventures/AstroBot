## 2024-03-24 - Accessibility Labels for Search Input
**Learning:** Found an accessibility issue pattern with search inputs and icon-only close buttons lacking screen-reader accessible labels (`aria-label`) and having visible but decorative icons that should be hidden from screen readers (`aria-hidden="true"`).
**Action:** When working on JavaScript-generated UI elements, actively search for inputs and buttons, especially icon-only buttons, to ensure they have appropriate `aria-label` attributes and that inner decorative icons use `aria-hidden="true"`.

## 2024-07-01 - Redundant ARIA Labels on Buttons with Visible Text
**Learning:** Adding `aria-label` to buttons that already have clear visible text (like "Clear all") causes screen readers to read the label redundantly or ignore the visible text completely.
**Action:** Only use `aria-label` for icon-only buttons or when the visible text lacks sufficient context. Always add `aria-hidden="true"` to decorative icons inside text buttons.
