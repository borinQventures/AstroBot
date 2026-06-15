## 2024-03-24 - Accessibility Labels for Search Input
**Learning:** Found an accessibility issue pattern with search inputs and icon-only close buttons lacking screen-reader accessible labels (`aria-label`) and having visible but decorative icons that should be hidden from screen readers (`aria-hidden="true"`).
**Action:** When working on JavaScript-generated UI elements, actively search for inputs and buttons, especially icon-only buttons, to ensure they have appropriate `aria-label` attributes and that inner decorative icons use `aria-hidden="true"`.

## 2024-06-15 - Visual Polish in CLI Options
**Learning:** Found an opportunity to improve the CLI radio-button selection by replacing basic asterisks (*) with explicit selected/unselected visual indicators (◉ and ◯). This improves the affordance of CLI form inputs.
**Action:** When designing CLI menus or multi-select components, use unicode shapes that mimic standard web UI controls (like radio buttons or checkboxes) rather than generic text characters.
