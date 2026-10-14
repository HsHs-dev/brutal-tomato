# Brutal Tomato

A neo-brutalist Pomodoro timer, built with React and Tailwind CSS.

**[Live demo](https://brutal-tomato.netlify.app)**

[A screenshot of brutal tomato main page](./Screenshot.png)

## About

Brutal Tomato is a redesign of the classic Pomodoro timer in a neo-brutalist art style: solid flat colors, thick black borders, hard offset shadows and heavy type. The whole page changes color with the timer mode: red for focus, teal for a short break, blue for a long break.

It started as a design exercise: take a familiar, plain tool and show it can look completely different with a strong visual direction, while staying readable and accessible.

## Status

**v1 is a static page**: the full design of the header, timer and info sections, built mobile-first and responsive. The timer and its controls are visual only for now.

## Design

|                   |                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------- |
| **Style**         | Neo-brutalism: no radius, 4px borders, hard black shadows, no gradients                       |
| **Mode colors**   | `#CD4141` red · `#0A8274` teal · `#2F52D6` blue                                               |
| **Accent**        | `#FFD166` yellow                                                                              |
| **Fonts**         | Archivo Black (display), Space Grotesk (body)                                                 |
| **Accessibility** | Contrast-checked color pairs, visible keyboard focus, semantic landmarks, tab and timer roles |

The full spec (tokens, components, spacing, states) is in [`style-guide.md`](./style-guide.md).

## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) icons
- Hosted on [Netlify](https://www.netlify.com)

## Getting Started

```bash
git clone https://github.com/HsHs-dev/brutal-tomato.git
cd brutal-tomato
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
```

## Roadmap

- [x] **v1:** static design (header, timer, info sections)
- [ ] **v2:** working timer with the three modes, skip and auto-start
- [ ] **v2:** task list with pomodoro estimates and a finish-time summary
- [ ] **v2:** settings modal (durations, auto-start, alarm sound)
- [ ] **v2:** report modal (weekly and monthly focus hours)
- [ ] **v2:** save data in `localStorage`

## Credits

The timer concept is based on the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) by Francesco Cirillo, and the app was inspired by [Pomofocus](https://pomofocus.io). The design, code and visual identity here are my own.

## Author

**Hassan** · [@HsHs-dev](https://github.com/HsHs-dev)
