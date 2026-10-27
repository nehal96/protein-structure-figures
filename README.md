# Solving the First Protein Structures: figures

The figures and interactives from Nehal Udyavar's essay *Solving the First
Protein Structures* (newtinteractive.com), as a small React app you can run,
read and change.

```bash
npm install
npm run dev        # http://localhost:5173: every figure, in essay order
npm run build      # type-check and production build
```

`src/App.tsx` is the gallery. It shows each figure with the essay's own title,
subtitle and caption, at the width it has in the essay.

## The figures

| # | Component | Essay section | What it does |
|---|---|---|---|
| 1 | `TwoWaves` | X-Rays | Static. Two waves in step, a quarter apart, half apart, and their sums. |
| 2 | `WhySpots` | X-Rays | Four panels. Panel 1 is interactive: drag a marker along the film, slide the spacing between two atoms. Panels 2–4 are static (`CrystalCancels`, `CellAndMolecule`). |
| 3 | `LinedUp` | The Big Idea | Interactive. Flip four waves to find the line-up that peaks on hidden atoms (`LineUpGame`), then contour maps lined up right and wrong. |
| 4 | `Camera` | The Phase Problem | Static. Perutz's camera, the sealed glass tube, and Bernal's 1938 photograph. |
| 5 | `SaltPair` | The Phase Problem | Static, narrow. Protein wave plus liquid wave, in step and opposed. |
| 6 | `FourBumps` | The Phase Problem | Static, narrow. The 1943 one-dimensional density from seven spots. |
| 7 | `PattersonRods` | The Phase Problem | Static. Perutz's 1949 map and drawings, with rings added. |
| 8 | `ReadingTheFilm group="mercury"` | Heavy Atoms | Static, narrow. Same spots, different darkness, with a heavy atom. |
| 9 | `TwoHeavyAtoms` | Heavy Atoms | Static, narrow. Why one heavy atom can't tell ahead from behind. |
| 10 | `SheetStack` | Heavy Atoms | Interactive. Kendrew's eight traced contour sheets: click one to zoom, stack them, drag to turn, mark the heme. |
| 11 | `PerutzModel` | Heavy Atoms | Interactive 3D (three.js). Perutz's sliced model rebuilt from PDB 2HHB: drag to turn, point to name a part. |

"Narrow" figures float beside the prose in the essay, at 20rem (16rem for #8).

## How they're built

- **Plain React and SVG.** No chart library. Each figure measures its own
  width (`useElementWidth`) and lays out in real pixels rather than scaling a
  viewBox, so text stays readable on a phone. Several branch their layout on
  width.
- **Computed, not placed.** The films, bands and spots come from the atoms
  drawn (`scatter.ts`, `spots.tsx`, `wave.ts`, `contour.ts`).
  `crystal-spots.json` is a precomputed spot list for the hemoglobin crystal.
  The comment above `SPOTS` in `CrystalCancels.tsx` says what it models.
- **One colour file.** `palette.ts`: blue for the wave being tracked, amber
  for the second wave, red for the one thing the figure is about, and greys
  for structure. `XR.card` must stay equal to the `card` colour in
  `tailwind.config.js`, or the halos behind labels show up as patches.
- **Frames.** `Figure.tsx` has the grey card (`Figure`), the borderless frame
  for figures reproduced from papers (`Plate`), and the panel heading
  (`Note`). Shared drawing pieces (beam arrow, ripples, film, labels) are in
  `scene.tsx`, and the sliders and checkboxes are in `controls.tsx`.

## Using a figure elsewhere

The components in `src/figures/` are the same files as on newtinteractive.com.
They reach for five pieces of the site, which this repo provides under the
site's import names (see `vite.config.ts`):

| Import | Here | What it is |
|---|---|---|
| `@hooks` | `src/site/hooks.ts` | `useElementWidth`, `useInViewport` |
| `@ui/controls` | `src/site/controls/` | `Button`, `Checkbox`, `Slider` (Radix) |
| `@lib/utils` | `src/site/utils.ts` | `cn()` (clsx + tailwind-merge) |
| `next/dynamic` | `src/site/next-dynamic.tsx` | Lazy loading for the 3D model. In a Next.js app, delete the alias and the real one is used. |
| Tailwind | `tailwind.config.js` | The `paper`, `card` and `ink` colours, the `ui` / `mono` / `title` fonts, `max-w-prose` |

To move a figure into another React app, copy `src/figures/` and `src/site/`,
add the same aliases, and either merge the Tailwind tokens into your config or
swap the class names for your own. The 3D model also needs `three`,
`@react-three/fiber` and `@react-three/drei`, plus
`public/structures/hemoglobin-slabs.json`.

## Images

`public/images/first-structures/` holds figures from the original papers:

- `bernal-1938-haemoglobin.jpg`: Bernal, Fankuchen and Perutz, *Nature* 141 (1938).
- `perutz-1949-fig21.png`, `perutz-1949-rods.png`, `perutz-1949-fig23b.png`:
  Perutz, *Proc. R. Soc. A* 195 (1949).
- `kendrew-sheet-*.svg`: traced from Bodo, Dintzis, Kendrew and Wyckoff,
  *Proc. R. Soc. A* 253 (1959), fig. 18.

`hemoglobin-slabs.json` is computed from PDB entry 2HHB.

## Where the originals live

These files were copied from `pages/essays/first-structures/figures/` in the
[newt-interactive](https://github.com/nehal96/newt-interactive) repo, on the
`essays/first-structures` branch. The scripts that generated
`hemoglobin-slabs.json` and the Kendrew heme rings are in that repo's
`scripts/` folder. Changes made here don't flow back there on their own, so
tell Nehal which files you changed.
