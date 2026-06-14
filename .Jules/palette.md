## 2024-03-24 - Accessibility Labels for Search Input
**Learning:** Found an accessibility issue pattern with search inputs and icon-only close buttons lacking screen-reader accessible labels (`aria-label`) and having visible but decorative icons that should be hidden from screen readers (`aria-hidden="true"`).
**Action:** When working on JavaScript-generated UI elements, actively search for inputs and buttons, especially icon-only buttons, to ensure they have appropriate `aria-label` attributes and that inner decorative icons use `aria-hidden="true"`.
