# Component and Behavior Inventory

## Foundations and layout

| Item | Priority | Initial form | Notes |
| --- | --- | --- | --- |
| App shell / workspace | P0 | CSS layout + semantic regions | Canvas, page width, responsive spacing, optional taskbar slot |
| Desktop/workspace | P1 | Composed layout | Use only where an app benefits from program-group metaphor |
| Window and title bar | P0 | CSS chrome + documented markup | Supports active/inactive/compact; title bar is presentation unless controls are added |
| Menu bar | P1 | CSS styling now; JS adapter later | Native links/buttons first; full menu keyboard behavior only in adapter |
| Toolbar/status bar | P1 | CSS composition | Dense action/status layouts |
| Panel/group box | P0 | CSS component | Raised, inset, and plain variants |
| Stack/cluster/grid | P0 | Layout primitives | Prevent repeated one-off flex/grid rules |

## Controls and data display

| Item | Priority | Initial form | Required states |
| --- | --- | --- | --- |
| Button / icon button | P0 | Native button styling | default, hover, focus-visible, active/pressed, disabled, busy |
| Text field / text area | P0 | Native control styling | default, focus, invalid, disabled, read-only |
| Select/dropdown | P0/P1 | Native select P0; custom listbox only P1 | selected, invalid, disabled; preserve native mobile behavior |
| Checkbox/radio | P0 | Native control styling | checked, indeterminate where supported, disabled, focus |
| Tabs | P1 | Semantic button/link pattern | selected/unselected; roving tab keyboard behavior in adapters |
| Table/data grid | P0 | Semantic table styling | compact/dense, sortable affordance, responsive overflow; virtual grid is later |
| Progress / loading | P0 | `<progress>` styling and status text | determinate/indeterminate, paused/error, reduced-motion safe |

## Feedback and overlays

| Item | Priority | Initial form | Notes |
| --- | --- | --- | --- |
| Dialog/modal | P1 | HTML `<dialog>` baseline + adapter helper | focus return, Escape, backdrop, destructive confirmation |
| Toast | P1 | small JS enhancer + semantic live region | queue, pause on hover/focus, close button, no essential-only notification |
| Tooltip | P2 | adapter/helper | never hide essential control labels or error text in a tooltip |
| Context menu | P2 | adapter/helper | keyboard invocation and focus management required |
| Empty/error states | P0 | composed panel patterns | clear cause, recovery action, status icon/text |

## Existing coverage and gaps

The current demo supplies window, titlebar, menu-like text, panel, button, progress, taskbar, status marker, desktop tile, and responsive/reduced-motion examples. It does not supply real menus, dialogs, toasts, select/checkbox/radio states, tables, or behavior APIs.

Disc Steward already has native buttons, text inputs, selects, textareas, checkboxes, fieldsets, details/summary expansion, tables, cards, status badges, progress steps, and native confirm for deletion. It has no dedicated reusable modal, toast, tooltip, context menu, tabs, client-side dropdown, or route-transition implementation. Its static reports are a separate print/report output and should not be coupled to the interactive app shell in the first migration.

Every component specification should include: semantic HTML recipe, required accessible name/description, states, keyboard behavior, responsive behavior, motion allowance, token dependencies, examples, and tests.
