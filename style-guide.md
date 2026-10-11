# Front-end Style Guide

Neo-brutalist Pomodoro timer. Working title: **Hard Tomato** (rename freely).

## Overview

- The page is one solid color. The color is the state: red = focus, teal = short break, blue = long break.
- White text with flat black shadows. Controls are white or yellow with black borders and offset shadows.
- Cream panels are used only for modals and the task editor. Everything else sits directly on the page.

| In v1 | Not in v1 |
|---|---|
| Timer with 3 modes, start / pause / skip | Real sign-in (the Sign In button is a visual placeholder) |
| Tasks: add, edit, delete, complete, estimate, active | Premium, projects, templates, integrations |
| Finish-time summary | Yearly report, CSV export |
| Settings modal and Report modal (week / month) | Dark mode |
| Info sections and footer | Backend (use `localStorage`) |

## Layout

One centered column at every screen size. The whole page is a **solid color that changes with the timer mode**. No cards, no patterns, no gradients.

Top to bottom:

1. **Header**: logo left, Report / Setting / Sign In right (icons only on mobile)
2. **Timer**: mode tabs, digits, START button, status
3. **Tasks**: title + menu, task list, Add Task, finish-time summary
4. **Info**: plain text sections
5. **Footer**: black bar

Modals: **Settings** and **Report** (cream panels).

```
+------------------------------------------------------------------------+
| (v) HARD TOMATO                        [Report] [Setting] [Sign In]    |
|                                                                        |
|                [ POMODORO ]   Short Break   Long Break                 |
|                                                                        |
|                                 25:00                                  |
|                                                                        |
|                               [ START ]                                |
|                                                                        |
|                        [ #1 ]   Time to focus!                         |
|                                                                        |
|                                                                        |
| TASKS                                                          [:]     |
| ==================================================================     |
|                                                                        |
| [x]  Read chapter 4                                        3/3 [:]     |
| [ ]  Write lecture notes (active = yellow)                 1/4 [:]     |
|                                                                        |
| + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +      |
| |                      (+)  ADD TASK                            |      |
| + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +      |
| [ POMOS 4/9 . FINISH 16:40 (3.2H) ]                                    |
|                                                                        |
|          INFO: title, labelled text sections, numbered steps           |
|                                                                        |
+========================================================================+
|                             FOOTER (black)                             |
+========================================================================+
```

| What | Value |
|---|---|
| Header width | max 1152px, 16px side padding |
| Content width | max 896px, 16px side padding |
| Tabs → digits → START | 48px gaps |
| START → status | 40px |
| Timer → Tasks → Info | 96px |
| Between task rows | 16px |
| Between info sections | 48px |
| Breakpoints | 640px (nav labels, 3-column grids) · 768px (timer grows to 192px) |

## Colors

### Mode colors (page background)

| Mode | Name | Hex |
|---|---|---|
| Pomodoro | `neo-red` | `#CD4141` |
| Short break | `neo-teal` | `#0A8274` |
| Long break | `neo-blue` | `#2F52D6` |

### Accents

| Name | Hex | Use |
|---|---|---|
| `neo-yellow` | `#FFD166` | Primary action, active task, hover, highlights |
| `neo-green` | `#06D6A0` | Positive stat tile |
| `neo-pink` | `#D42A4C` | Destructive actions only |

### Neutral

| Name | Hex | Use |
|---|---|---|
| `black` | `#000000` | Borders, shadows, text on light surfaces, footer |
| `white` | `#FFFFFF` | Text on mode colors, buttons, inputs |
| `cream` | `#FDF6E3` | Modals, task editor, done tasks |
| `field-focus` | `#FFF1CC` | Input fill on focus |
| `gray` | `#9CA3AF` | Footer small print |

**Rules**
- White text on mode colors and pink. Black text on white, yellow, green and cream.
- White on red 4.74:1, teal 4.71:1, blue 6.37:1, pink 4.96:1. Black borders on red / teal / blue stay at 3.3:1 or higher.
- The only transparency is the modal backdrop (`black` at 70%).

## Typography

| Use | Font |
|---|---|
| Display: timer, titles, section labels, buttons | **Archivo Black** (400 only, never bold) |
| Body and UI | **Space Grotesk** 500 (body), 700 (bold) |

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

| Element | Font | Size | Line height |
|---|---|---|---|
| Timer digits | Archivo Black | `clamp(88px, 26vw, 112px)` → 192px at 768px+ | 1 |
| Info page title | Archivo Black | `clamp(36px, 6vw, 48px)` | 1.1 |
| Tasks title | Archivo Black | 36px | 1.1 |
| Section label | Archivo Black | 24px | 1.2 |
| Modal title | Archivo Black | 24px, tracking 0.05em | 1.2 |
| Modal section title | Archivo Black | 20px | 1.2 |
| START button | Archivo Black | 30px → 36px at 768px+ | 1 |
| Buttons | Archivo Black | 16px, uppercase | 1 |
| Status message | Space Grotesk 700 | 24px | 1.3 |
| Status chip (`#1`) | Space Grotesk 700 | 20px | 1 |
| Body text | Space Grotesk 500 | 20px, max width 48rem | 1.6 |
| Nav, tabs, labels | Space Grotesk 700 | 16px (labels uppercase) | 1.5 |
| Task title | Space Grotesk 700 | 18px | 1.3 |
| Counters, summary | Space Grotesk 700 | 14–16px, tabular numbers | 1.5 |

**Timer digits:** render each character in its own fixed-width cell (digit `0.66em`, colon `0.34em`, centered) so the timer never shifts as it ticks.

## Borders, Radius & Shadows

| Border | Use |
|---|---|
| 2px | Nav hover, tabs, status chip, highlight stickers |
| 3px | Menu dividers, small icon buttons, chart bars |
| **4px** | Default: buttons, rows, inputs, modals, dividers |

**Radius is 0 everywhere**, except two circles: the logo mark and the `+` badge on Add Task.

| Shadow | Value | Use |
|---|---|---|
| `neo-sm` | `2px 2px 0 #000` | Checkboxes, slider, small icon buttons |
| `neo` | `4px 4px 0 #000` | Buttons, rows, inputs, chips |
| `neo-lg` | `6px 6px 0 #000` | Hover of `neo`, menu |
| `neo-xl` | `8px 8px 0 #000` | START, modals, task editor |
| `neo-2xl` | `12px 12px 0 #000` | START hover |
| `neo-white` | `4px 4px 0 #fff` | On black or colored backgrounds: active tab, nav hover, section label, summary chip |

**Text shadows** (flat black, via `drop-shadow`): timer 6px, headings 4px, status message 2px, body paragraphs 1px. Never on cream or white surfaces.

## Spacing

Tailwind default scale. Most used: `p-2` (8px) icon buttons · `px-4 py-3` (16/12px) rows and tabs · `p-6` (24px) editor and modal body · `py-11` (44px) Add Task · `pt-16 pb-12` footer.

## Interaction

Every raised element follows one rule. `o` = its shadow offset, `d` = 2px (small controls) or 4px (START).

| State | Move | Shadow |
|---|---|---|
| Rest | none | `o` |
| Hover | up-left by `d` | `o + d` |
| Pressed | down-right by **`o`** | none |
| Input focus | up-left 2px | 6px |

Pressed always moves by the full shadow offset, so the element lands where its shadow was. Transition: 100ms ease-out. Disabled: cream fill, gray-700 text, no shadow.

## Components

| Component | Spec |
|---|---|
| **Logo mark** | 40px black circle, 2px white border, `neo-white` shadow, white check icon |
| **Nav button** | Transparent, 2px transparent border, bold white text. Hover: black fill, white border, `neo-white` |
| **Sign In** | White, 2px black border, `neo` shadow, hover yellow |
| **Mode tab** | 2px white border, bold white text, `px-4 py-3` (`px-6` at 640px+). Hover: white fill, black text. **Selected: black fill, `neo-white` shadow** |
| **START** | White, 4px border, `neo-xl` shadow, Archivo Black. Hover: yellow, lift 4px, `neo-2xl`. Running: label `PAUSE`, yellow, held pressed. Paused: `RESUME` |
| **Skip** | Same as START but square and icon-only. Shown only while running |
| **Status** | White chip (`#1`, 2px border, `neo`) above the message (white, 2px text shadow) |
| **Tasks header** | Title + menu button, 4px black rule underneath |
| **Menu button** | White, 4px border, `neo`, hover yellow |
| **Dropdown** | White, 4px border, `neo-lg`, 230px min width, items `px-4 py-3` with 3px dividers, hover yellow |
| **Task row** | White strip, 4px border, `neo`: checkbox · title · `done/est` counter · edit button |
| **Active task** | Yellow fill |
| **Done task** | Cream fill, no shadow, no hover lift, title struck through |
| **Checkbox** | 32px square, 4px border, `neo-sm`, black check |
| **Add Task** | Full width, 4px **dashed** white border, 24px bold white text, circle `+` badge. Hover: white fill, black text |
| **Summary chip** | Black fill, white text, `neo-white`, uppercase: `POMOS 4/9 · FINISH 16:40 (3.2H)` |
| **Task editor** | Cream panel, 4px border, `neo-xl`, `p-6`: name input, estimate stepper, `DELETE` / `CANCEL` / `SAVE` |
| **Button** | White, 4px border, `neo`, Archivo Black 16px. Variants: **yellow** (primary), **pink + white text** (destructive) |
| **Input** | White, 4px border, `neo`, bold. Focus: `field-focus` fill |
| **Select** | Input style + chevron icon on the right, no native arrow |
| **Slider** | White track 16px high with 4px border; 28px yellow square thumb with 4px border |
| **Modal** | Cream panel, 4px border, `neo-xl`, max 672px wide. Blue header bar with white title and a close button (hover pink). `black` 70% backdrop |
| **Section label** | Black fill, white Archivo Black 24px, `neo-white` |
| **Highlight** | Yellow, 2px border, tilted -1°, black bold text. First mention only |
| **Numbered step** | 36px black square badge with white number, `neo-white` shadow |
| **Footer** | Black bar, centered white text, gray small print |

### Settings modal

TIMER (MINUTES): Pomodoro 25 · Short break 5 · Long break 15 → Long break interval 4 → Auto-start breaks (off) → Auto-start pomodoros (off) → ALARM: sound select + volume slider + `TEST` → footer: `RESET DEFAULTS` (pink) and `DONE` (yellow).

### Report modal

`Week | Month` toggle → three stat tiles (Focus hours on yellow, Days active on green, Day streak on white) → bar chart: white panel, red bars with black borders, **today in yellow**, tooltip on hover.

## Do & Don't

| Do | Don't |
|---|---|
| Set `data-mode` on `<body>` and let one CSS variable change the color | Swap Tailwind color classes in JavaScript |
| Move a pressed element by its full shadow offset | Mix a 6px press with an 8px shadow |
| Keep the page background solid | Add dot grids, gradients or textures |
| Use cream panels for modals and the task editor only | Wrap the timer or sections in cards |
| White text on mode colors, black text on light fills | Black text on red, teal or blue |
| Use fixed-width cells for timer digits | Let the timer reflow every second |
| Use a dashed border only for "add here" | Use dashed borders for anything else |

## Tailwind v4 theme

```css
@import "tailwindcss";

@theme {
  --color-neo-red: #CD4141;
  --color-neo-teal: #0A8274;
  --color-neo-blue: #2F52D6;
  --color-neo-yellow: #FFD166;
  --color-neo-green: #06D6A0;
  --color-neo-pink: #D42A4C;
  --color-cream: #FDF6E3;
  --color-field-focus: #FFF1CC;

  --font-sans: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Archivo Black", ui-sans-serif, system-ui, sans-serif;

  --shadow-neo-sm: 2px 2px 0 0 #000;
  --shadow-neo: 4px 4px 0 0 #000;
  --shadow-neo-lg: 6px 6px 0 0 #000;
  --shadow-neo-xl: 8px 8px 0 0 #000;
  --shadow-neo-2xl: 12px 12px 0 0 #000;
  --shadow-neo-white: 4px 4px 0 0 #fff;

  --radius-*: initial; /* only rounded-full remains */
}

/* Set data-mode="focus | short | long" on <body> */
:root { --mode: var(--color-neo-red); }
[data-mode="short"] { --mode: var(--color-neo-teal); }
[data-mode="long"]  { --mode: var(--color-neo-blue); }
@theme inline { --color-mode: var(--mode); }

@layer base {
  body { @apply bg-mode font-sans font-medium text-white transition-colors duration-300; }
  :focus-visible { outline: 3px solid #000; outline-offset: 3px; }
  footer :focus-visible { outline-color: #fff; }
}

@utility text-hard    { filter: drop-shadow(4px 4px 0 #000); }
@utility text-hard-lg { filter: drop-shadow(6px 6px 0 #000); }
@utility text-hard-sm { filter: drop-shadow(2px 2px 0 #000); }
```

## Motion & Accessibility

- Timer finished: digits shake for 400ms (±8px). The page color fades over 300ms on mode change. Digits never animate while ticking.
- `prefers-reduced-motion`: remove the shake and all transitions.
- Visible focus outline everywhere (3px black, white in the footer).
- Tabs use `role="tab"` and `aria-selected`. The timer uses `role="timer"` with `aria-live="off"`.
- Icon-only buttons need an `aria-label`. Modals trap focus and close on Esc.

## Build Order

1. Fonts, Tailwind theme and base styles. Test every button, input and state on one page.
2. Header, mode switching with `data-mode`, and the tabs.
3. Timer digits, START / PAUSE / skip, and the status.
4. Tasks: row, editor, Add Task, menu and summary chip.
5. Info sections and footer.
6. Settings modal, then Report modal.
7. Motion and accessibility pass.
